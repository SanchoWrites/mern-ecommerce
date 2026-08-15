import React, { createContext, useState, useEffect } from "react";
import all_product_default from "../Components/Assets/all_product"; 

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState(all_product_default);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // --- PC BUILDER STATE ---
    // Only load from localStorage if the user is logged in
    const [selectedParts, setSelectedParts] = useState(() => {
        if (localStorage.getItem('auth-token')) {
            const savedParts = localStorage.getItem('pc-builder-parts');
            return savedParts ? JSON.parse(savedParts) : {};
        }
        return {};
    });
    
    const [isAssembled, setIsAssembled] = useState(() => {
        if (localStorage.getItem('auth-token')) {
            const savedAssembly = localStorage.getItem('pc-builder-assembled');
            return savedAssembly ? JSON.parse(savedAssembly) : false;
        }
        return false;
    });

    // Save to localStorage ONLY if logged in. 
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            localStorage.setItem('pc-builder-parts', JSON.stringify(selectedParts));
        } else {
            // Just ensure we don't accidentally leave saved data in the browser for guests
            localStorage.removeItem('pc-builder-parts');
        }
    }, [selectedParts]);

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            localStorage.setItem('pc-builder-assembled', JSON.stringify(isAssembled));
        } else {
            localStorage.removeItem('pc-builder-assembled');
        }
    }, [isAssembled]);
    // -------------------------

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => {
            if(data && data.length > 0) {
                setAll_Product(data);
            }
        })
        .catch((error) => console.log("Backend not running, using local all_product.js instead."));

        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            }).then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((error) => console.log("Cart fetch failed."));
        }
    }, [])

    const addToCart = (itemId) => {
        // FIX: Added (prev[itemId] || 0) to prevent NaN errors when ID > 300 or missing
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        // FIX: Prevents cart from going into negative numbers
        setCartItems((prev) => ({...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0)}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                // FIX: Cast both sides to String so "1" === "1" instead of 1 === "1"
                let itemInfo = all_product.find((product) => String(product.id) === String(item))
                if(itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        all_product, 
        setAll_Product,
        cartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCartAmount, 
        getTotalCartItems,
        selectedParts,
        setSelectedParts,
        isAssembled,
        setIsAssembled
    };

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;