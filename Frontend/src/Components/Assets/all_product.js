import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";

let all_product = [
  {
    id: 1,
    name: "AMD Ryzen 7 5800X / 32GB / 2TB M.2 SSD / RTX 5070 / Windows 11 Home",
    category: "pc",
    image: p1_img,
    new_price: 1749.0,
    old_price: 2599.0,
  },
  {
    id: 2,
    name: "Intel Core i7-14700KF / 32GB / 2TB SSD / RTX 5060 V4",
    category: "pc",
    image: p2_img,
    new_price: 1559.0,
    old_price: 2019.01,
  },
  {
    id: 3,
    name: "AMD Ryzen 7 5700X / 32GB / 1TB SSD / RTX 5070",
    category: "pc",
    image: p3_img,
    new_price: 1549.0,
    old_price: 1999.0,
  },
  {
    id: 4,
    name: "AMD Ryzen 7 5700X / 32GB / 1TB SSD / RTX 5070 / Windows 11 Home ",
    category: "pc",
    image: p4_img,
    new_price: 1589.0,
    old_price: 2119.0,
  },
  {
    id: 5,
    name: "HP OmniDesk M02-0005ns AMD Ryzen 7 8700G 16 GB DDR5 1TB SSD WiFi 6 FreeDOS",
    category: "pc",
    image: p5_img,
    new_price: 729.0,
    old_price: 969.0,
  },
  {
    id: 6,
    name: "Intel Core i7-14700KF / 32GB / 2TB SSD / RTX 5060 V2 White",
    category: "pc",
    image: p6_img,
    new_price: 1469.0,
    old_price: 1699.0,
  },
  {
    id: 7,
    name: "AMD Ryzen 7 5800X / 32GB / 1TB SSD / RTX 5060 V2 / Windows 11 Home ",
    category: "pc",
    image: p7_img,
    new_price: 1399.0,
    old_price: 1789.0,
  },
  {
    id: 8,
    name: "AMD Ryzen 7 9800X3D / 32GB / 2TB SSD / RTX 5070 V3 / Windows 11 Home ",
    category: "pc",
    image: p8_img,
    new_price: 2469.0,
    old_price: 3939.0,
  },
  {
    id: 9,
    name: "Intel Core i5-12400 / 32GB / 2TB SSD / Windows 11 Home",
    category: "pc",
    image: p9_img,
    new_price: 749.0,
    old_price: 869.0,
  },
  {
    id: 10,
    name: "Intel Core i7-14700KF / 32GB / 2TB SSD / RTX 5060 Ti 16GB V2 / Windows 11 Home ",
    category: "pc",
    image: p10_img,
    new_price: 1769.0,
    old_price: 2099.0,
  },
  {
    id: 11,
    name: "Intel Core i7-14700KF / 32GB / 2TB SSD / RTX 5060 V4 / Windows 11 Home ",
    category: "pc",
    image: p11_img,
    new_price: 1609.0,
    old_price: 2079.0,
  },
  {
    id: 12,
    name: "Intel Core i5-12400F / 32GB / 1TB SSD / RTX 5060 V3 / Windows 11 Home ",
    category: "pc",
    image: p12_img,
    new_price: 1199.0,
    old_price: 1629.0,
  },
  {
    id: 13,
    name: `Alurin Flex Advance AMD Ryzen 5 7430 15.6" / 16 GB / 512GB / Windows 11 Home`,
    category: "laptop",
    image: p13_img,
    new_price: 469.99,
    old_price: 589.99,
  },
  {
    id: 14,
    name: `PcCom Revolt 5070 Intel Core i7-14650HX 16"/QHD /32GB/1TB`,
    category: "laptop",
    image: p14_img,
    new_price: 1379.0,
    old_price: 1700.0,
  },
  {
    id: 15,
    name: `Acer Gaming Nitro V 16 AI ANV16-42 16" AMD Ryzen 7 260 32GB 1TB SSD RTX 5060`,
    category: "laptop",
    image: p15_img,
    new_price: 1099.0,
    old_price: 1549.5,
  },
  {
    id: 16,
    name: `MSI Cyborg 15 B2RWFKG-201XES Intel Core 7 240H 32GB DDR5 1TB SSD RTX 5060 15.6" FHD RGB`,
    category: "laptop",
    image: p16_img,
    new_price: 1199.0,
    old_price: 1999.0,
  },
  {
    id: 17,
    name: `Acer Aspire Go 15 AG15-42P-R26T 15.6″ AMD Ryzen 7 5825U 16GB 512GB SSD FHD Wi-Fi 6 Plata`,
    category: "laptop",
    image: p17_img,
    new_price: 497.0,
    old_price: 549.0,
  },
  {
    id: 18,
    name: `Lenovo IdeaPad Slim 3 15IRH10 15,3" Intel Core i5-13420H 16GB 1TB SSD Windows 11 Home`,
    category: "laptop",
    image: p18_img,
    new_price: 679.0,
    old_price: 799.0,
  },
  {
    id: 19,
    name: `HP HyperX OMEN 15-gb0005ns 15.3" AMD Ryzen 7 260 24GB 1TB SSD RTX 5060 FreeDOS`,
    category: "laptop",
    image: p19_img,
    new_price: 1099.0,
    old_price: 1499.0,
  },
  {
    id: 20,
    name: `MSI Katana 15 HX B14WGK-086XES 15,6" Intel Core i7-14650HX 32GB 1TB SSD RTX 5070`,
    category: "laptop",
    image: p20_img,
    new_price: 1399.0,
    old_price: 2349.0,
  },
  {
    id: 21,
    name: `HP OMEN 16-ap0007ns AMD Ryzen AI 7 350 32GB 1TB SSD RTX 5070 8GB 16"`,
    category: "laptop",
    image: p21_img,
    new_price: 1429.0,
    old_price: 1799.0,
  },
  {
    id: 22,
    name: `ASUS V16 V3607VM-RP010 Intel Core 7 240H/32GB/1TB SSD/RTX 5060/16"`,
    category: "laptop",
    image: p22_img,
    new_price: 1129.0,
    old_price: 1399.0,
  },
  {
    id: 23,
    name: `Lenovo IdeaPad Slim 3 15IRH10 15,3" Intel Core i5-13420H 16GB 1TB SSD Intel UHD Graphics`,
    category: "laptop",
    image: p23_img,
    new_price: 579.0,
    old_price: 799.0,
  },
  {
    id: 24,
    name: `ASUS TUF Gaming FX608JMR-RV003 Intel Core i7-14650HX/32GB/1TB SSD/RTX 5060/16"`,
    category: "laptop",
    image: p24_img,
    new_price: 1249.99,
    old_price: 1599.0,
  },
];

export default all_product;
