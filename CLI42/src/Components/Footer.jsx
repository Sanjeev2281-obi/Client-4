// import React from 'react';

// export default function Footer() {
//     return (
//         <div>
//             <footer className="mx-4 mb-6 rounded-3xl bg-gray-950 text-gray-400 font-sans p-8 md:p-12 lg:p-16">
//                 <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-900 pb-12">

//                     {/* Column 1: Classes & Programs */}
//                     <div>
//                         <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Classes</h4>
//                         <ul className="space-y-2.5 text-xs">
//                             <li><a href="#" className="hover:text-white transition-colors">Vocal Lessons</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Instrumental</a></li>
//                             <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Veena</a></li>
//                             <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Flute</a></li>
//                             <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Mridangam</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Kids Batches</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Advanced Cutcheri Training</a></li>
//                         </ul>
//                     </div>

//                     {/* Column 2: Resources & Learning */}
//                     <div>
//                         <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Learning Hub</h4>
//                         <ul className="space-y-2.5 text-xs">
//                             <li><a href="#" className="hover:text-white transition-colors">Raga Library</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Tala Reference Guides</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Audio Practice Tracks</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Student Student Portal</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Upcoming Workshops</a></li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Community & Events */}
//                     <div>
//                         <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Community</h4>
//                         <ul className="space-y-2.5 text-xs">
//                             <li><a href="#" className="hover:text-white transition-colors">Annual Student Concerts</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Dublin Navaratri Festival</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Community Notice Board</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Contact Academy</a></li>
//                         </ul>
//                     </div>

//                     {/* Column 4: Academy Info & Legal */}
//                     <div>
//                         <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Academy</h4>
//                         <ul className="space-y-2.5 text-xs">
//                             <li><a href="#" className="hover:text-white transition-colors">About Our Gurus</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                            
//                             <li className="pt-4 text-xs font-bold text-white uppercase tracking-wider">Legal</li>
//                             <li><a href="#" className="hover:text-white transition-colors">Terms of Enrollment</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//                         </ul>
//                     </div>

//                 </div>

//                 {/* Footer Bottom Bar */}
//                 <div className="mx-auto max-w-6xl pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs gap-6 text-gray-400">

//                     {/* Left Side: Copyright & Dublin Address */}
//                     <div className="flex flex-col gap-2">
//                         <div className="font-semibold text-white">
//                             © 2026 Dublin Carnatic Music Academy. All rights reserved.
//                         </div>
//                         <div className="leading-relaxed text-gray-500">
//                             Studio 4, The Creative Arts Hub, Lower Rathmines Road,<br />
//                             Rathmines, Dublin 6, D06 YX23, Ireland
//                         </div>
//                     </div>

//                     {/* Right Side: Social Media Channels */}
//                     <div className="flex items-center gap-4 self-start md:self-center pt-2 md:pt-0">
//                         {/* Instagram SVG */}
//                         <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
//                             <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
//                                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                             </svg>
//                         </a>

//                         {/* Youtube SVG */}
//                         <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
//                             <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                                 <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                             </svg>
//                         </a>

//                         {/* X / Twitter SVG */}
//                         <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
//                             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                             </svg>
//                         </a>

//                         {/* Facebook SVG (Replaced LinkedIn for better local community reach) */}
//                         <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
//                             <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                             </svg>
//                         </a>
//                     </div>

//                 </div>
//             </footer>
//         </div>
//     );
// }


import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="mx-4 mb-6 rounded-[28px] bg-gray-950 text-gray-400 font-poppins p-8 md:p-14 lg:p-16">
                <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-b border-gray-900 pb-14">

                    {/* Column 1: Classes & Programs */}
                    <div>
                        <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Classes</h4>
                        <ul className="space-y-3 text-[14px]">
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Vocal Lessons</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Instrumental</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="ml-1 transition-all duration-300 hover:text-white hover:translate-x-0.5">Veena</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="ml-1 transition-all duration-300 hover:text-white hover:translate-x-0.5">Flute</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="ml-1 transition-all duration-300 hover:text-white hover:translate-x-0.5">Mridangam</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Kids Batches</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Advanced Cutcheri Training</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Resources & Learning */}
                    <div>
                        <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Learning Hub</h4>
                        <ul className="space-y-3 text-[14px]">
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Raga Library</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Tala Reference Guides</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Audio Practice Tracks</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Student Portal</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Upcoming Workshops</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Community & Events */}
                    <div>
                        <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Community</h4>
                        <ul className="space-y-3 text-[14px]">
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Annual Student Concerts</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Dublin Navaratri Festival</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Community Notice Board</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Contact Academy</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Academy Info & Legal */}
                    <div>
                        <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-5">Academy</h4>
                        <ul className="space-y-3 text-[14px]">
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">About Our Gurus</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Testimonials</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Gallery</a></li>

                            <li className="pt-5 text-[13px] font-semibold text-white uppercase tracking-wider">Legal</li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Terms of Enrollment</a></li>
                            <li><a href="#" className="inline-block transition-all duration-300 hover:text-white hover:translate-x-0.5">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom Bar */}
                <div className="mx-auto max-w-6xl pt-10 flex flex-col md:flex-row items-start md:items-center justify-between text-[13px] gap-6 text-gray-400">

                    {/* Left Side: Copyright & Dublin Address */}
                    <div className="flex flex-col gap-2.5">
                        <div className="font-semibold text-white text-[14px]">
                            © 2026 Dublin Carnatic Music Academy. All rights reserved.
                        </div>
                        <div className="leading-relaxed text-gray-500">
                            Studio 4, The Creative Arts Hub, Lower Rathmines Road,<br />
                            Rathmines, Dublin 6, D06 YX23, Ireland
                        </div>
                    </div>

                    {/* Right Side: Social Media Channels */}
                    <div className="flex items-center gap-3 self-start md:self-center pt-2 md:pt-0">
                        {/* Instagram SVG */}
                        <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white hover:bg-white/5" aria-label="Instagram">
                            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Youtube SVG */}
                        <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white hover:bg-white/5" aria-label="YouTube">
                            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>

                        {/* X / Twitter SVG */}
                        <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white hover:bg-white/5" aria-label="X (Twitter)">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Facebook SVG */}
                        <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white hover:bg-white/5" aria-label="Facebook">
                            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    );
}



