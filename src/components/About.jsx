import logo from '../assets/logo.png';
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container flex flex-col justify-center items-center py-10">
      
      <img src={logo} alt="pic" className="w-[300px] md:w-[600px] mb-10 md:mb-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-stretch gap-10">

        <motion.div
          className="w-full max-w-[350px] h-full flex flex-col space-y-3 p-4 bg-white rounded-2xl shadow overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="pic" className="w-[70px] bg-[#8E1616] rounded-2xl" />
          <h1 className="text-gray-900/90 border-t border-gray-400 pt-2">
            For Electronic repair tools that help our customers to do best jobs with our good quality products.
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[350px] h-full flex flex-col space-y-3 p-4 bg-white rounded-2xl shadow overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="pic" className="w-[70px] bg-[#8E1616] rounded-2xl" />
          <h1 className="text-gray-900/90 border-t border-gray-400 pt-2">
            Our company, based in Sulaymaniah, is the first of its kind in the industry. We have earned the trust and reliability of our customers, importing high-quality tools from China and the United States. We are capable of delivering across all of Iraq within the required timeframe.
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[350px] h-full flex flex-col space-y-3 p-4 bg-white rounded-2xl shadow overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="pic" className="w-[70px] bg-[#8E1616] rounded-2xl" />
          <h1 className="text-gray-900/90 border-t border-gray-400 pt-2">
            We specialize in providing high-quality electronic tools and electrical equipment, sourced from trusted international suppliers.
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[350px] h-full flex flex-col space-y-3 p-4 bg-white rounded-2xl shadow overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="pic" className="w-[70px] bg-[#8E1616] rounded-2xl" />
          <h1 className="text-gray-900/90 border-t border-gray-400 pt-2">
            Our mission is to deliver reliable, innovative, and durable electrical solutions to customers across Iraq.
          </h1>
        </motion.div>

      </div>
    </div>
  );
}
