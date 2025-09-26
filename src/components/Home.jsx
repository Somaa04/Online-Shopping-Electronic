import { useState, useEffect, useRef } from "react"; 
import img1 from '../assets/img6.jpeg';
import img2 from '../assets/img5.jpeg';
import img3 from '../assets/img4.jpeg';
import img4 from '../assets/img3.jpeg';
import img5 from '../assets/img2.jpeg';
import img6 from '../assets/img1.jpeg';
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import pic4 from '../assets/pic4.jpeg';
import pic5 from '../assets/pic5.jpeg';
import pic6 from '../assets/pic6.jpeg';
import { motion } from "framer-motion";
import bazzar from '../assets/bazzar.jpeg';

export default function Home() {
  const electronicChores = [
    { imgSrc: img1, title: "Clean Computer Fans", about: "Remove dust from PC or laptop fans to keep airflow strong and prevent overheating." },
    { imgSrc: img2, title: "Wipe Phone Screens", about: "Use a microfiber cloth and a bit of screen-safe cleaner to remove fingerprints and smudges." },
    { imgSrc: img3, title: "Organize Charging Cables", about: "Untangle and label cords, or use cable ties so you can easily find the right charger." },
    { imgSrc: img4, title: "Update Device Software", about: "Check for operating system and firmware updates to keep electronics secure and running smoothly." },
    { imgSrc: img5, title: "Replace Remote Batteries", about: "Swap out weak or expired batteries in TV and game controllers to avoid sudden power loss." },
    { imgSrc: img6, title: "Disinfect Keyboards", about: "Lightly clean keys and crevices with isopropyl alcohol to remove germs and crumbs." }
  ];

  const electronicTools = [
  {
    id: 1,
    imgSrc:pic6,
    name: "Cordless Drill",
    brand: "DeWalt",
    price: 120.99,
    power: "18V",
    type: "Drill"
  },
  {
    id: 2,
    imgSrc:pic5,
    name: "Soldering Station",
    brand: "Hakko",
    price: 75.50,
    power: "60W",
    type: "Soldering"
  },
  {
    id: 3,
    imgSrc:pic4,
    name: "Digital Multimeter",
    brand: "Fluke",
    price: 89.99,
    range: "600V",
    type: "Measurement"
  },
  {
    id: 4,
    imgSrc:pic3,
    name: "Oscilloscope",
    brand: "Rigol",
    price: 450.00,
    bandwidth: "100MHz",
    type: "Testing"
  },
  {
    id: 5,
    imgSrc:pic2,
    name: "Heat Gun",
    brand: "Bosch",
    price: 65.25,
    power: "2000W",
    type: "Heating"
  },
  {
    id: 6,
    imgSrc:pic1,
    name: "Electric Screwdriver",
    brand: "Makita",
    price: 40.00,
    power: "3.6V",
    type: "Screwdriving"
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); 
  const [carouselWidth, setCarouselWidth] = useState(0); 

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    
    window.addEventListener("resize", updateWidth);
    updateWidth(); 

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % electronicChores.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  
  const animationDuration = `${(20 * carouselWidth) / 1000}s`; 

  return (
    <div className="flex flex-col justify-center items-center mt-10 ">
      <h1 className="text-xl md:text-4xl font-bold mb-4">Routine Device Care and Maintenance</h1>
      <div
        ref={carouselRef} 
        className="relative p-10 max-w-[400px] md:max-w-6xl bg-[#1D1616] rounded-lg shadow-xl overflow-hidden mx-5 "
      >
        
        <div
          className="carousel-container flex transition-transform duration-500 ease-in-out mx-100"
          style={{
            transform: `translateX(-${currentIndex * carouselWidth}px)`, 
            animationDuration: animationDuration, 
          }}
        >
          
          {electronicChores.concat(electronicChores).map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] px-3">
              <div className="bg-[#D84040] text-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h1 className="font-bold text-lg mb-1">{item.title}</h1>
                  <p className="text-sm text-gray-300">{item.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   <h1 className=" mt-20 mb-10 md:mt-40 border-t-4 border-b-4 border-gray-900  rounded font-bold text-xl md:text-4xl">Available Electronic Tools</h1>
  <div className="flex flex-col  md:flex-row md:flex-wrap justify-center items-center" >
  {electronicTools.map((tool) => (
    <motion.div key={tool.id} className="flex-shrink-0 w-full md:w-[400px] px-3" initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:0.8}}>
      <div className="bg-[#D84040] text-white rounded-xl w-[400px] md:w-[340px] shadow-lg overflow-hidden p-3 mt-4 mb-4">
        <img src={tool.imgSrc} alt="pic" className="h-48 w-full rounded-xl transition-transform duration-400 ease-in-out hover:scale-[1.01]" />
        <h1 className="text-gray-900 font-semibold">{tool.name}</h1>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <h1>Brand: {tool.brand}</h1>
          <h1>Price: {tool.price}</h1>
          <h1>Power: {tool.power}</h1>
          <h1>Total: {tool.type}</h1>
        </div>
      </div>
    </motion.div>
  ))}
</div>


 
<div className="relative mt-20 md:mt-40">
  <img src={bazzar} alt="pic" className="w-screen" />

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* White bar at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-20 md:h-60 bg-white  ">
    <div className="flex items-center justify-around">
      <div className="p-2">
      <h1 className="text-[50px] md:text-[100px]">15+</h1>
      <h1 className="md:text-xl">Years Of Experience</h1>
    </div>

    <div className="p-2">
      <h1 className="text-[50px] md:text-[100px]">98%</h1>
      <h1 className="md:text-xl">Success rate in quality</h1>
    </div>

    <div className="p-2">
      <h1 className="text-[50px] md:text-[100px]">40+</h1>
      <h1 className="md:text-xl">Tools of Brand</h1>
    </div>
    </div>
    <div>
      
    </div>
  </div>
</div>
 
 <div>
  <footer className="border-t mt-16 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-muted-foreground">
            © 2025 Alex Shopping. All rights reserved.
          </p>
          <div className="flex space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
 </div>

 
  
    </div>
  );
}
