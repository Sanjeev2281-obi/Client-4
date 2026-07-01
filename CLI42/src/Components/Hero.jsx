import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import b3 from '../assets/b3.webp';

export default function Hero() {
    // Mouse Parallax coordinates state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate relative offset from center of screen (-1 to 1)
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative flex min-h-[95vh] items-center justify-center bg-gray-950 px-4 pt-28 pb-20 overflow-hidden">
            
            {/* FEATURE 9 & 6: Animated Gradient Overlay + Mouse Parallax on Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Dynamic background canvas gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(130deg,#0f172a,#000,#134e4a)] bg-[length:200%_200%] animate-[gradientMove_12s_ease_infinite] opacity-40" />
                
                {/* Parallax Background Frame */}
                <div 
                    className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.12)`
                    }}
                >
                    {/* FEATURE 1: Cinematic background zoom + slow pan */}
                    <img
                        src={b3}
                        alt="Hero Background"
                        className="w-full h-full object-cover object-[center_30%] opacity-50 animate-[hero-pan_22s_ease-in-out_infinite_alternate]"
                    />
                </div>

                {/* Layered Vignette Protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030712_85%)] opacity-70" />
            </div>

            {/* FEATURE 2: Floating Light Overlays */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-400/10 blur-[120px] animate-[floatLight_12s_ease-in-out_infinite]" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-300/10 blur-[130px] animate-[floatLight2_15s_ease-in-out_infinite]" />
            </div>

            {/* [FLOATING DOTS BLOCK REMOVED FROM HERE] */}

            {/* Hero Content with Staggered Entrance Arrays */}
            <div className="relative z-20 max-w-4xl text-center text-white px-4 font-poppins">
                
                {/* FEATURE 3: Text reveal animation wrapper */}
                <h1 className="overflow-hidden text-[36px] sm:text-[48px] lg:text-[64px] font-black tracking-tight uppercase leading-[1.1] mb-6">
                    <span className="inline-block animate-[slideReveal_1s_cubic-bezier(.19,1,.22,1)_forwards]">
                        Carnatic music
                    </span>
                    <br />
                    {/* FEATURE 4: Shimmer luxury shine on title */}
                    <span className="inline-block opacity-0 animate-[slideReveal_1.2s_cubic-bezier(.19,1,.22,1)_0.2s_forwards] bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-[length:250%] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
                        lessons in dublin
                    </span>
                </h1>

                {/* FEATURE 10: Sequential Cascading Fade-ins */}
                <p className="mx-auto max-w-2xl text-[16px] sm:text-[18px] text-gray-300 font-light leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.4s_forwards]">
                    Traditional Carnatic Vocal and Light Classical Training explicitly designed for Kids, Teens, and Adults in Ireland.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 border border-teal-500/30 text-[12px] font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md opacity-0 animate-[fadeUp_0.8s_0.6s_forwards]">
                    <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                    In-Person & Premium Online Hybrid Sessions
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]">
                    
                    {/* FEATURE 5: Glass button hover effect with light sweep line */}
                    <a href="#curriculum" className="group relative overflow-hidden w-full sm:w-auto rounded-xl bg-teal-600 px-8 py-4 text-[15px] font-bold uppercase tracking-wider text-white shadow-lg shadow-teal-500/20 transition-all duration-300 ease-out hover:bg-teal-500 hover:shadow-xl hover:shadow-teal-400/30 hover:-translate-y-0.5 active:scale-95">
                        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                        <span className="relative z-10">Explore Curriculum</span>
                    </a>

                    <a href="#instructor" className="group relative overflow-hidden w-full sm:w-auto rounded-xl bg-transparent px-8 py-4 text-[15px] font-bold uppercase tracking-wider text-white border border-gray-700 transition-all duration-300 ease-out hover:bg-white/5 hover:border-white hover:-translate-y-0.5 active:scale-95">
                        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                        <span className="relative z-10">Meet Your Guru</span>
                    </a>
                </div>
            </div>

            {/* FEATURE 8: Smooth Scroll Mouse Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-gray-500">
                <div className="w-5 h-9 rounded-full border-2 border-gray-500 flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[scrollMouse_1.8s_ease-in-out_infinite]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mt-1">Scroll</span>
            </div>
        </section>
    );
}