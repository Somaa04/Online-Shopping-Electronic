import { useState } from "react";
import SumsungW from '../assets/SamsungGalaxyWatch.jpeg';
import AppleWatch from '../assets/AppleWatch.jpeg';
import AppleAirPods  from '../assets/AppleAirPods .jpeg';
import Sony from '../assets/Sony.jpeg';
import SamsungGalaxyy from '../assets/SamsungGalaxyy.jpeg';
import AppleiPhone15 from '../assets/AppleiPhone15.jpeg';
import macbook from '../assets/macbook.jpeg';
import Dell from '../assets/Dell.jpeg';
import { motion } from "framer-motion";

export default function Seemore() {
  const [selected, setSelected] = useState(null);

  const categories = [
    {
      id: 1,
      category: "Laptops",
      products: [
        { id: 101,imgSrc:macbook, name: "Dell XPS 13", info: ["16GB RAM", "512GB SSD", "Intel i7"] },
        { id: 102,imgSrc:Dell, name: "MacBook Air", info: ["M2 Chip", "8GB RAM", "256GB SSD"] },
        { id: 103,imgSrc:macbook, name: "Dell XPS 13", info: ["16GB RAM", "512GB SSD", "Intel i7"] },
        { id: 104,imgSrc:Dell, name: "MacBook Air", info: ["M2 Chip", "8GB RAM", "256GB SSD"] },
        { id: 105,imgSrc:macbook, name: "Dell XPS 13", info: ["16GB RAM", "512GB SSD", "Intel i7"] },
        { id: 106,imgSrc:Dell, name: "MacBook Air", info: ["M2 Chip", "8GB RAM", "256GB SSD"] },
      ],
    },
    {
      id: 2,
      category: "Smartphones",
      products: [
        { id: 201,imgSrc:AppleiPhone15, name: "iPhone 15", info: ["128GB Storage", "5G", "Dual Camera"] },
        { id: 202,imgSrc:SamsungGalaxyy, name: "Samsung Galaxy S24", info: ["256GB Storage", "5G", "120Hz Display"] },
        { id: 203,imgSrc:AppleiPhone15, name: "iPhone 15", info: ["128GB Storage", "5G", "Dual Camera"] },
        { id: 204,imgSrc:SamsungGalaxyy, name: "Samsung Galaxy S24", info: ["256GB Storage", "5G", "120Hz Display"] },
        { id: 205,imgSrc:AppleiPhone15, name: "iPhone 15", info: ["128GB Storage", "5G", "Dual Camera"] },
        { id: 206,imgSrc:SamsungGalaxyy, name: "Samsung Galaxy S24", info: ["256GB Storage", "5G", "120Hz Display"] },
      ],
    },
    {
      id: 3,
      category: "Headphones",
      products: [
        { id: 301,imgSrc:AppleAirPods, name: "Sony WH-1000XM5", info: ["Noise Cancelling", "Wireless", "30hr Battery"] },
        { id: 302,imgSrc:Sony, name: "AirPods Pro 2", info: ["Active Noise Cancellation", "Wireless", "Sweat Resistant"] },
        { id: 303,imgSrc:AppleAirPods, name: "Sony WH-1000XM5", info: ["Noise Cancelling", "Wireless", "30hr Battery"] },
        { id: 304,imgSrc:Sony, name: "AirPods Pro 2", info: ["Active Noise Cancellation", "Wireless", "Sweat Resistant"] },
        { id: 305,imgSrc:AppleAirPods, name: "Sony WH-1000XM5", info: ["Noise Cancelling", "Wireless", "30hr Battery"] },
        { id: 306,imgSrc:Sony, name: "AirPods Pro 2", info: ["Active Noise Cancellation", "Wireless", "Sweat Resistant"] },
      ],
    },
    {
      id: 4,
      category: "Smartwatches",
      products: [
        { id: 401,imgSrc:SumsungW, name: "Apple Watch Series 9", info: ["GPS", "Water Resistant", "Heart Monitor"] },
        { id: 402,imgSrc:AppleWatch, name: "Samsung Galaxy Watch 6", info: ["Bluetooth", "Sleep Tracking", "Fitness Monitor"] },
        { id: 403,imgSrc:SumsungW, name: "Apple Watch Series 9", info: ["GPS", "Water Resistant", "Heart Monitor"] },
        { id: 404,imgSrc:AppleWatch, name: "Samsung Galaxy Watch 6", info: ["Bluetooth", "Sleep Tracking", "Fitness Monitor"] },
        { id: 405,imgSrc:SumsungW, name: "Apple Watch Series 9", info: ["GPS", "Water Resistant", "Heart Monitor"] },
        { id: 406,imgSrc:AppleWatch, name: "Samsung Galaxy Watch 6", info: ["Bluetooth", "Sleep Tracking", "Fitness Monitor"] },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-around mt-5">
        {categories.map((Element) => (
          <h1
            key={Element.id}
            onClick={() => setSelected(Element.id)}
            className="font-semibold md:text-xl cursor-pointer hover:scale-[1.05] duration-300"
          >
            {Element.category}
          </h1>
        ))}
      </div>


      {selected && (
        <motion.div 
          key={selected}   
          className="flex flex-wrap gap-5 mt-10 justify-center md:justify-start ml-5 mb-4" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
        >
          {categories
            .find((cat) => cat.id === selected)
            .products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200/50 flex flex-col justify-center items-start p-10 space-y-3 shadow-xl"
              >
                <img src={product.imgSrc} alt="pic" className="w-[350px] md:w-[200px] h-[150px] rounded"/>
                <h1 className="font-semibold text-gray-900/90">{product.name}</h1>
                <div className="grid grid-cols-1 justify-items-start items-center ">
                  {product.info.map((Element, i) => (
                    <div key={i}>
                      <h1>-{Element}</h1>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </motion.div>
      )}
    </div>
  );
}
