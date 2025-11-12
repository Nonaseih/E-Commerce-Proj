/**
    * @description      : Products data with 24 items
    * @author           : fortu
    * @group            : 
    * @created          : 22/10/2025 - 11:27:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.1
    * - Date            : 22/10/2025
    * - Author          : fortu
    * - Modification    : Added 24 unique products
**/
import Aj1 from   "/images/jrd.jpg"
import Aj2 from  "/images/Jd2.jpg"
import Aj3 from  "/images/jd3.webp"
import Aj4 from  "/images/jd4.jpg"
import Aj5 from  "/images/jd5.jpg"
import Aj6 from  "/images/jd6.avif"
import Aj7 from  "/images/jd7.jpg"
import Aj8 from  "/images/jd8.jpg"
import Aj9 from  "/images/jrd9.webp"
import Aj10 from  "/images/jd10.jpg"
import Aj11 from  "/images/jd11.jpg"
import Aj12 from  "/images/jd12.avif"
import Aj13 from  "/images/jd13.avif"
import Aj14 from  "/images/jd14.avif"
import Aj15 from  "/images/jd15.webp"
import Aj16 from  "/images/jd16.jpg"
import Aj17 from  "/images/jd17.jpg"
import Aj18 from  "/images/jd18.jpg"
import Aj19 from  "/images/jd19.jpg"
import Aj20 from  "/images/jd20.avif"
import Aj21 from  "/images/jd21.webp"
import Aj22 from  "/images/jd22.jpg"
import Aj23 from  "/images/jd23.jpg"
import Aj24 from  "/images/j24.jpg"
import A1 from "/images/A1.webp"
import A2 from "/images/A2.webp"
import A3 from "/images/A3.webp"

const Products = [
  { id: 1, title: "Air Jordan 1 Retro High OG", price: "59.99", rating: "4.5", img: Aj1 , img1: A1, img2: A2, img3: A3, tags: ["popular"], desc: "Comfortable everyday sneakers" },

  { id: 2, title: "Air Jordan 3 “White Cement”", price: "89.99", rating: "4.8", img: Aj2, img1: Aj2, img2: Aj2, img3: Aj2, tags: ["new"], desc: "Comfortable everyday sneakers" },

  { id: 3, title: "Air Jordan 4 “Bred”", price: "129.99", rating: "4.7", img: Aj3, img1: Aj3, img2: Aj3, img3: Aj3, tags: ["popular"], desc: "Comfortable everyday sneakers" },

  { id: 4, title: "Air Jordan 5 “Fire Red”", price: "199.99", rating: "4.6", img: Aj4, img1: Aj4, img2: Aj4, img3: Aj4, tags: ["new"], desc: "Comfortable everyday sneakers" },

  { id: 5, title: "Air Jordan 6 “Infrared”", price: "24.99", rating: "4.3", img: Aj5, img1: Aj5, img2: Aj5, img3: Aj5, tags: ["sale"], desc: "100% cotton comfort" },

  { id: 6, title: "Air Jordan 7 “Bordeaux”", price: "79.99", rating: "4.4", img: Aj6, img1: Aj6, img2: Aj6, img3: Aj6, tags: ["popular"], desc: "Classic style" },

  { id: 7, title: "Air Jordan 11 “Concord”", price: "29.99", rating: "4.2", img: Aj7, img1: Aj7, img2: Aj7, img3: Aj7, tags: ["new"], desc: "Extra thick comfort" },

  { id: 8, title: "Air Jordan 12 “Flu Game”", price: "39.99", rating: "4.1", img: Aj8, img1: Aj8, img2: Aj8, img3: Aj8, tags: ["sale"], desc: "Adjustable LED lighting" },

  { id: 9, title: "Air Jordan 13 “He Got Game”", price: "19.99", rating: "4.0", img: Aj9, img1: Aj9, img2: Aj9, img3: Aj9, tags: ["popular"], desc: "Iconic design" },

  { id: 10, title: "Air Jordan 14 “Last Shot”", price: "34.99", rating: "4.5", img: Aj10, img1: Aj10, img2: Aj10, img3: Aj10, tags: ["new"], desc: "Ergonomic design" },

  { id: 11, title: "Air Jordan 23 “Titan”", price: "14.99", rating: "4.3", img: Aj11, img1: Aj11, img2: Aj11, img3: Aj11, tags: ["sale"], desc: "Modern ceramic design" },

  { id: 12, title: "Air Jordan XXXVII (37)", price: "44.99", rating: "4.6", img: Aj12, img1: Aj12, img2: Aj12, img3: Aj12, tags: ["popular"], desc: "Minimalist style" },

  { id: 13, title: "Nike LeBron 21", price: "69.99", rating: "4.7", img: Aj13, img1: Aj13, img2: Aj13, img3: Aj13, tags: ["new"], desc: "High-performance sneakers" },

  { id: 14, title: "Nike KD 17", price: "24.99", rating: "4.2", img: Aj14, img1: Aj14, img2: Aj14, img3: Aj14, tags: ["sale"], desc: "Lightweight design" },

  { id: 15, title: "Nike Kobe 6 Protro “Grinch”", price: "29.99", rating: "4.4", img: Aj15, img1: Aj15, img2: Aj15, img3: Aj15, tags: ["popular"], desc: "Precision" },

  { id: 16, title: "Nike Zoom Freak 5 (Giannis)", price: "9.99", rating: "4.3", img: Aj16, img1: Aj16, img2: Aj16, img3: Aj16, tags: ["new"], desc: "Versatile performance" },

  { id: 17, title: "Nike Kyrie 7", price: "19.99", rating: "4.1", img: Aj17, img1: Aj17, img2: Aj17, img3: Aj17, tags: ["sale"], desc: "Protective design" },

  { id: 18, title: "Nike GT Jump 2", price: "12.99", rating: "4.5", img: Aj18, img1: Aj18, img2: Aj18, img3: Aj18, tags: ["popular"], desc: "Cushioned comfort" },

  { id: 19, title: "Nike Air Foamposite One", price: "15.99", rating: "4.2", img: Aj19, img1: Aj19, img2: Aj19, img3: Aj19, tags: ["new"], desc: "Futuristic style" },

  { id: 20, title: "Nike Zoom GT Cut 3", price: "49.99", rating: "4.6", img: Aj20, img1: Aj20, img2: Aj20, img3: Aj20, tags: ["sale"], desc: "Responsive cushioning" },

  { id: 21, title: "Nike Air Max 1", price: "4.99", rating: "4.0", img: Aj21, img1: Aj21, img2: Aj21, img3: Aj21, tags: ["popular"], desc: "Iconic design" },

  { id: 22, title: "Nike Air Max 97", price: "22.99", rating: "4.4", img: Aj22, img1: Aj22, img2: Aj22, img3: Aj22, tags: ["new"], desc: "Sleek style" },

  { id: 23, title: "Nike Dunk Low “Panda”", price: "7.99", rating: "4.3", img: Aj23, img1: Aj23, img2: Aj23, img3: Aj23, tags: ["sale"], desc: "Classic look" },

  { id: 24, title: "Nike Air Force 1 ’07", price: "29.99", rating: "4.5", img: Aj24, img1: Aj24, img2: Aj24, img3: Aj24, tags: ["popular"], desc: "Timeless design" }
];


export default Products;