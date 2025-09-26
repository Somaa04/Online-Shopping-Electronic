import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Seemore from "./components/Seemore";
import Contact from "./components/Contact";

export default function App() {
  return (
   <div className="">
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quizapp" element={<About/>}/>
        <Route path="/todo" element={<Seemore/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
   </div>
  );
}

function Navbar() {
  const links = [
    { id: 1, title: "Home", link_: "/" },
    { id: 2, title: "About", link_: "/quizapp" },
    { id: 4, title: "Contact", link_: "/contact" },
    { id: 3, title: "See more", link_: "/todo" },
    
  ];

  return (
   <div className="container text-white">
     <div className="grid grid-cols-1 md:grid-cols-2 p-3 bg-[#8E1616] items-center justify-items-center ">
      <h1 className="font-bold mr-6 text-2xl md:text-4xl">Alex Shopping Electronic</h1>
     <div className="flex gap-4">
       {links.map((part) => (
        <Link key={part.id} to={part.link_} className="md:text-xl mt-2 md:mt-0  hover:text-[#1D1616] ">
          {part.title}
        </Link>
      ))}
     </div>
    </div>
   </div>
  );
}
