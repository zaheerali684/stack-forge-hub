import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-xl text-slate-600 py-4 px-6 md:px-8 flex justify-between items-center sticky top-0 z-50 animate-fade-in shadow-sm relative">
      <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-extrabold text-2xl tracking-tight text-slate-900 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1">
        STACK<span className="text-indigo-600">FORGE</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 text-sm font-semibold">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-600 transition-colors">Home</Link>
        <a href="/#services" className="hover:text-indigo-600 transition-colors">Services</a>
        <a href="/#projects"  className="hover:text-indigo-600 transition-colors">Work</a>
        <a href="/#about" className="hover:text-indigo-600 transition-colors">About</a>
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 active:scale-95"
        >
          Start Project
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-slate-900 hover:text-indigo-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col p-6 space-y-4 md:hidden animate-fade-in">
             <Link 
                to="/" 
                onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
                className="text-lg font-medium text-slate-900 hover:text-indigo-600"
            >
                Home
            </Link>
            <a 
                href="/#services" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-indigo-600"
            >
                Services
            </a>
            <a 
                href="/#projects" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-indigo-600"
            >
                Work
            </a>
            <a 
                href="/#about" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-indigo-600"
            >
                About
            </a>
            <button 
              onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} 
              className="bg-indigo-600 text-white w-full py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20"
            >
              Start Project
            </button>
        </div>
      )}
    </nav>
  );
}
