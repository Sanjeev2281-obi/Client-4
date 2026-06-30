import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <header 
      className={`fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'rounded-[28px] bg-black/40 p-5' 
          : 'rounded-[28px] bg-white/5 px-6 py-3'
      }`}
    >
      {/* HEADER TOP BAR */}
      <div className="flex items-center justify-between font-poppins">
        {/* Brand Logo */}
        <div className="flex items-center gap-1.5 cursor-pointer">
          <span className="text-xl font-black tracking-tighter text-gray-300 font-sans ">
            CRAFT
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-400">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#imagine" className="hover:text-white transition-colors">Imagine</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#learn" className="hover:text-white transition-colors">Learn</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </nav>

        {/* Action Buttons Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black transition-all hover:bg-neutral-200">
            Try Craft Free
          </button>
          
          {/* Mobile Menu Icon Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="block md:hidden text-white focus:outline-none p-1"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* EXPANDED MOBILE DRAWER */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-[450px] opacity-100 mt-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col text-[14px] font-medium text-neutral-300">
          
          {/* Menu Rows Matching Craft Item Layout */}
          <a href="#product" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-white/10 text-neutral-300 hover:text-white">
            <span>Product</span>
            <ChevronDown className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          <a href="#imagine" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-white/10 text-neutral-300 hover:text-white">
            <span>Imagine</span>
            <ChevronRight className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          <a href="#pricing" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-white/10 text-neutral-300 hover:text-white">
            <span>Pricing</span>
            <ChevronRight className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          <a href="#learn" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-white/10 text-neutral-300 hover:text-white">
            <span>Learn</span>
            <ChevronRight className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          <a href="#download" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-white/10 text-neutral-300 hover:text-white">
            <span>Download</span>
            <ChevronRight className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          <a href="#community" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 text-neutral-300 hover:text-white">
            <span>Community</span>
            <ChevronDown className="h-4 w-4 text-neutral-500 stroke-[1.5]" />
          </a>

          {/* Stacked Interactive Buttons Footer */}
          <div className="mt-4 flex flex-col gap-2.5">
            <button className="w-full rounded-xl bg-white py-3 text-[14px] font-semibold text-black transition-colors hover:bg-neutral-200">
              Download
            </button>
            <button className="w-full text-center py-2 text-[13px] font-medium text-neutral-400 hover:text-white transition-colors">
              Log in
            </button>
          </div>

        </div>
      </div>
    </header>
  );
  
}