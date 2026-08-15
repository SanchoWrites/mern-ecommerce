import React, { useContext } from 'react';
import './PurchaseBox.css';
import { ShopContext } from '../../Context/ShopContext';
import custom_pc_img from '../Assets/CustomPC.png'; 

export const PurchaseBox = ({ selectedParts, isAssembled, setIsAssembled }) => {
  const { addToCart, all_product, setAll_Product } = useContext(ShopContext);

  const calculateTotal = () => {
    let total = 0;
    Object.values(selectedParts).forEach(part => {
      if (part) total += part.new_price;
    });
    
    if (isAssembled) {
      total += 49.99;
    }
    return total;
  };

  const handleAddToCart = async () => {
    const total = calculateTotal();

    if (total === 0 || (total === 49.99 && isAssembled)) {
        alert("Please select some parts before adding to cart.");
        return;
    }

    const customPC = {
        name: "Custom PC Build " + (isAssembled ? "(Assembled)" : "(Parts Only)"),
        image: custom_pc_img,
        category: "custom-build",
        new_price: total,
        old_price: total + (total * 0.15)
    };

    try {
        await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customPC)
        });

        const res = await fetch('http://localhost:4000/allproducts');
        const updatedProducts = await res.json();
        
        setAll_Product(updatedProducts);

        const createdProduct = updatedProducts[updatedProducts.length - 1];

        addToCart(createdProduct.id);
        alert("Custom PC added to cart");

    } catch (error) {
        console.error("Error adding custom PC to cart:", error);
        alert("Something went wrong.");
    }
  };

  return (
    <div className="purchase-box-container">
      <div className="purchase-header">
        <h2>Total</h2>
        <span className="taxes-included">(Taxes included)</span>
      </div>
      
      <div className="total-price">
        ${calculateTotal().toFixed(2)}
      </div>

      <div className="additional-services">
        <h3>Additional services</h3>
        <label className="assembly-checkbox">
          <input 
            type="checkbox" 
            checked={isAssembled} 
            onChange={(e) => setIsAssembled(e.target.checked)} 
          />
          Receive my PC assembled (+$49.99)
        </label>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
};