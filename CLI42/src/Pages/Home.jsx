
// import React from 'react';
// import {
//     ArrowRight,
//     Plus,
//     Minus
// } from 'lucide-react';
// import Nav from '../Components/Nav'
// import b3 from '../assets/b3.webp'
// import Footer from '../Components/Footer'
// export default function Home() {
//     const [openFaq, setOpenFaq] = React.useState(null);

//     const toggleFaq = (index) => {
//         setOpenFaq(openFaq === index ? null : index);
//     };
//     return (
//         <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 selection:bg-teal-500 selection:text-white">

//             {/* 1. FLOATING NAV BAR */}
//             <Nav />

//             {/* 2. HERO SECTION */}
//             <section id="home" className="relative flex min-h-[90vh] items-center justify-center bg-gray-950 px-4 pt-24 pb-16 overflow-hidden">
               
//                 <div className="absolute inset-0 z-0 overflow-hidden">
//                     <img
//                         src={b3}
//                         alt="Hero Background"

//                         className="h-full w-full object-cover object-[center_30%] opacity-80 transform scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                 
//                     <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />

                   
//                     <div className="absolute inset-0 bg-radial-vignette opacity-60" />
//                 </div>

//                 {/* Hero Content */}
//                 <div className="relative z-10 max-w-4xl text-center text-white px-4">
//                     <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl uppercase">
//                         Carnatic music  <br />
//                         <span className="bg-linear-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
//                             lessons in Dublin
//                         </span>
//                     </h1>

//                     <p className="mx-auto mt-6 max-w-2xl text-lg  text-gray-300 sm:text-xl">
//                         Private lessons in piano, guitar, voice, drums, and violin for Kids, Teens, and Adults!
//                     </p>

//                     <p className="mt-8 text-sm font-bold  text-teal-400 uppercase sm:text-base">
//                         Call or Text 740-913-1718 Today to Schedule Your First Lesson
//                     </p>

//                     <div className="mt-10">
//                         <button className="rounded-full bg-teal-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-200 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/30 active:scale-95">
//                            View Instructor
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* 3. VALUE PROPOSITION SECTION */}
//             <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-poppins">
//                 <div className="mx-auto max-w-4xl text-center">
//                     <h2 className="text-3xl font-bold  leading text-gray-900 sm:text-4xl ">
//                         Experience the Lewis Center Music Academy Difference
//                     </h2>

//                     <p className="mt-6 text-base  text-gray-600 sm:text-lg">
//                         The Lewis Center Music Academy offers private music lessons in piano, voice, violin, guitar, drums, and more, as well as early childhood music classes. Our goal is to foster creativity, confidence, and grit in students of all ages through fun and engaging music instruction. With our amazing faculty, innovative student motivational program, and state-of-the-art facility, we help students to develop life-long skills and a love for music. Conveniently located in Lewis Center, Ohio we are easily accessible from Lewis Center, Delaware, and Polaris.
//                     </p>

//                     <div className="mt-12 border-t border-b border-gray-100 py-6">
//                         <p className="text-base font-bold tracking-wide text-gray-800 sm:text-lg uppercase">
//                             Call or Text 740-913-1718 Today to Schedule Your <span className="text-red-500">First Lesson</span>
//                         </p>
//                     </div>

//                     {/* Action CTAs */}
//                     <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <button className="w-full sm:w-auto rounded-md bg-red-500 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-md transition-colors hover:bg-red-600 uppercase">
//                             Book a Trial Lesson
//                         </button>
                        
//                     </div>
//                 </div>
//             </section>

//             {/* 4. SERVICE / CLASSES GALLERY */}
            
//             {/* NEW: INSTRUCTOR PROFILE SECTION */}
//             <section id="instructor" className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-100">
//                 <div className="mx-auto max-w-4xl">
//                     <div className="grid gap-12 md:grid-cols-3 items-center">

//                         {/* Left Column: Subtle circular placeholder or premium image frame */}
//                         <div className="md:col-span-1 flex justify-center">
//                             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-xl">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
//                                     alt="Vocal Instructor"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>

//                         {/* Right Column: Profile Text */}
//                         <div className="md:col-span-2 space-y-4 text-left">
//                             <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
//                                 Meet Your Instructor
//                             </h2>
//                             <p className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
//                                 Master's Degree in Classical Music & Former Shankar Mahadevan Academy Trainer
//                             </p>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 With over 10 years of training in Carnatic classical music, a Master's degree in Classical Music, and over three years of international teaching experience, I am passionate about helping students discover the beauty of Indian music. My experience includes teaching at the Shankar Mahadevan Academy, where I trained students in both Carnatic and Indian film music. I have also studied Western music under Mr. Augustine Paul, giving me a versatile approach to vocal training.
//                             </p>
//                             <p className="text-sm text-gray-600 leading-relaxed font-medium">
//                                 Now based in Dublin, Ireland, I offer vocal lessons in Carnatic classical music and Indian film songs for children, teenagers, and adults. Whether you're taking your first steps in music or looking to refine your singing, I provide a welcoming and structured learning environment where students of all ages and skill levels can learn, grow, and perform with confidence.
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             {/* NEW: DETAILED COURSE TRACKS */}
//             <section id="courses" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
//                 <div className="mx-auto max-w-4xl text-left">

//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
//                             Our Vocal Courses
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto text-center">
//                             Whether you're a beginner exploring music for the first time or an experienced singer looking to refine your skills, our courses are designed to help you learn with confidence in a supportive and enjoyable environment.
//                         </p>
//                     </div>

//                     <div className="grid gap-6 sm:grid-cols-2">

//                         {/* Track 1 */}
//                         <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
//                             <h3 className="text-lg font-bold tracking-wider text-gray-900 uppercase mb-3 border-b border-gray-100 pb-2">
//                                 Carnatic Classical Vocal
//                             </h3>
//                             <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">What you will learn:</p>
//                             <ul className="space-y-2.5 text-sm text-gray-600">
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Foundational Swaras & Raga structures
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Voice culture, breathing, and pitch perfection
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Traditional compositions & performance discipline
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Track 2 */}
//                         <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
//                             <h3 className="text-lg font-bold tracking-wider text-gray-900 uppercase mb-3 border-b border-gray-100 pb-2">
//                                 Film Music / Light Classical
//                             </h3>
//                             <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">What you will learn:</p>
//                             <ul className="space-y-2.5 text-sm text-gray-600">
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Vocal dynamics for studio and mic singing
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Song interpretation, expression, and modulation
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-teal-500 font-bold">•</span> Mastering classic and contemporary Indian film tracks
//                                 </li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             {/* 5. WHY CHOOSE US SECTION */}
//             <section className="bg-white py-14 px-4 sm:px-6 lg:px-4 font-sans">
//                 <div className="mx-auto max-w-4xl text-left">
//                     <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-8">
//                         Why Choose Us?
//                     </h2>

//                     <div className="space-y-8 text-gray-600">
//                         <div>
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
//                                 Piano, Voice, Guitar, Violin, Drums, Cello, Flute, Clarinet, Saxophone and Trumpet Lessons, and More All In One Location
//                             </h3>
//                             <p className="text-sm leading-relaxed">
//                                 We are the only school in Lewis Center, Ohio that offers all these popular instruments. This saves our students time and money, as one family can take music lessons on multiple instruments on the same day.
//                             </p>
//                         </div>

//                         <div>
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
//                                 The Largest Most Qualified Teaching Faculty in Columbus, Ohio
//                             </h3>
//                             <p className="text-sm leading-relaxed">
//                                 We have many university trained teachers on staff and all of our instructors are background-checked, and have professional performance experience. Our teachers are patient, friendly, and dedicated to helping you achieve your musical goals.
//                             </p>
//                         </div>

//                         <div>
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
//                                 Flexible Scheduling and Unlimited Make Up Lessons
//                             </h3>
//                             <p className="text-sm leading-relaxed">
//                                 We offer music lessons and classes 5 days a week, from early in the afternoon until late in the evening. If you need to miss a class or reschedule, don't worry! We offer unlimited make up lessons.
//                             </p>
//                         </div>

//                         <div>
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
//                                 A Proven Track Record
//                             </h3>
//                             <p className="text-sm leading-relaxed">
//                                 With locations in Lewis Center, <span className="text-teal-600 underline cursor-pointer">Powell</span>, <span className="text-teal-600 underline cursor-pointer">Dublin</span> and <span className="text-teal-600 underline cursor-pointer">Hilliard</span>, we are Columbus, Ohio's largest private music school, teaching over 1,100 lessons each week. But don't just take our word for it, check out any of our 50+ five star reviews on Facebook and Google!
//                             </p>
//                         </div>
                                 
//                     </div>
//                 </div>
//             </section>
//             {/* 5.5 FAQ SECTION */}
//             <section id="faq" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-100">
//                 <div className="mx-auto max-w-4xl">
//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
//                             Frequently Asked Questions
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-500">
//                             Everything you need to know about our music academy programs
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         {[
//                             {
//                                 q: "What instruments do you teach, and can multiple family members take lessons on the same day?",
//                                 a: "We offer private lessons for piano, voice, guitar, violin, drums, cello, flute, clarinet, saxophone, trumpet, and more—all in one convenient location. Our scheduling structure makes it easy to book lessons for multiple family members on the same day, saving you extra trips."
//                             },
//                             {
//                                 q: "What are the qualifications of your music instructors?",
//                                 a: "We have the largest, most qualified university-trained teaching faculty in Columbus, Ohio. Every instructor is comprehensive background-checked, possesses professional performance experience, and is trained to be exceptionally patient and friendly with students of all skill levels."
//                             },
//                             {
//                                 q: "How does the flexible scheduling and make-up lesson policy work?",
//                                 a: "Lessons are available 5 days a week from early afternoon until late evening to fit busy schedules. If you ever need to miss a scheduled session, don't worry—we offer unlimited make-up lessons to ensure you get the value you pay for."
//                             },
//                             {
//                                 q: "Where is the academy located and is parking accessible?",
//                                 a: "We are located right in the Kroger shopping plaza at the corner of Route 23 and Lewis Center Road. It is an easily walkable distance from Olentangy High School, right next door to Starbucks, Kroger, Sportsclips, and Silk Road Asian Cuisine, offering massive parking availability."
//                             },
//                             {
//                                 q: "How do I get started or book my first trial lesson?",
//                                 a: "Getting started is simple! You can click the 'REQUEST INFO' button anywhere on our site, or directly Call or Text us at 740-913-1718 to set up your first lesson placeholder."
//                             }
//                         ].map((faq, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-200"
//                             >
//                                 <button
//                                     onClick={() => toggleFaq(index)}
//                                     className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
//                                 >
//                                     <span className="text-sm font-bold tracking-wide text-gray-900 uppercase pr-4">
//                                         {faq.q}
//                                     </span>
//                                     <span className="text-teal-600 shrink-0 bg-teal-50 p-1.5 rounded-full">
//                                         {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
//                                     </span>
//                                 </button>

//                                 <div
//                                     className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 border-t border-gray-50' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <p className="p-6 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
//                                         {faq.a}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* 6. MODERN DARK FOOTER (Craft.do style) */}
//             <Footer/>
//         </div>
//     );
// }









// import React from 'react';
// import {
//     ArrowRight,
//     Plus,
//     Minus,
//     Music,
//     GraduationCap,
//     Users,
//     CheckCircle,
//     Calendar,
//     Award
// } from 'lucide-react';
// import Nav from '../Components/Nav';
// import b3 from '../assets/b3.webp';
// import Footer from '../Components/Footer';

// export default function Home() {
//     const [openFaq, setOpenFaq] = React.useState(null);
//     const [activeCard, setActiveCard] = React.useState(null);

//     const toggleFaq = (index) => {
//         setOpenFaq(openFaq === index ? null : index);
//     };

//     const handleCardToggle = (index) => {
//         setActiveCard(activeCard === index ? null : index);
//     };

//     return (
//         <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 selection:bg-teal-500 selection:text-white scroll-smooth antialiased">

//             {/* 1. FLOATING NAV BAR */}
//             <Nav />

//             {/* 2. HERO SECTION */}
//             <section id="home" className="relative flex min-h-[95vh] items-center justify-center bg-gray-950 px-4 pt-28 pb-20 overflow-hidden">
//                 {/* Immersive Parallax & Animated Vignette Background */}
//                 {/* <div className="absolute inset-0 z-0 overflow-hidden">
//                     <img
//                         src={b3}
//                         alt="Hero Background"
//                         className="h-full w-full object-cover object-[center_30%] opacity-40 transform scale-100 animate-[subtle-zoom_25s_infinite_alternate] transition-transform duration-1000 ease-out"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
//                     <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030712_85%)] opacity-80" />
//                 </div> */}
// <div className="absolute inset-0 z-0 overflow-hidden">
//                     <img
//                          src={b3}
//                         alt="Hero Background"

//                         className="h-full w-full object-cover object-[center_30%] opacity-80 transform scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
//                      />

//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                 
//                     <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />

                   
//                     <div className="absolute inset-0 bg-radial-vignette opacity-60" />
//                 </div>
//                 {/* Hero Content with Entrance Animations */}
//                 <div className="relative z-10 max-w-4xl text-center text-white px-4 font-poppins transform translate-y-0 animate-[fade-in-up_1s_ease-out]">
//                     <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase leading-[1.1]">
//                         Carnatic music  <br />
//                         <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
//                             lessons in Dublin
//                         </span>
//                     </h1>

//                     <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-xl font-light leading-relaxed">
//                         Traditional Carnatic Vocal and Light Classical Training explicitly designed for Kids, Teens, and Adults in Ireland.
//                     </p>

//                     <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 border border-teal-500/30 text-xs font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
//                         <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
//                         In-Person & Premium Online Hybrid Sessions
//                     </div>

//                     <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <a href="#curriculum" className="w-full sm:w-auto rounded-full bg-teal-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/30 hover:-translate-y-0.5 active:scale-95">
//                            Explore Curriculum
//                         </a>
//                         <a href="#instructor" className="w-full sm:w-auto rounded-full bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white border border-gray-700 transition-all duration-300 hover:bg-white/5 hover:border-white hover:-translate-y-0.5 active:scale-95">
//                            Meet Your Guru
//                         </a>
//                     </div>
//                 </div>

//                 {/* Smooth Scroll Indicator */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-gray-500 animate-bounce">
//                     <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
//                     <ArrowRight className="w-4 h-4 rotate-90" />
//                 </div>
//             </section>

//             {/* 3. VALUE PROPOSITION SECTION */}
//             <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-poppins relative">
//                 <div className="mx-auto max-w-4xl text-center transition-all duration-1000 transform translate-y-0">
//                     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
//                         Experience Premium Classical Music <br className="hidden md:block"/> Training in Dublin
//                     </h2>

//                     <p className="mt-6 text-base text-gray-600 sm:text-lg leading-relaxed max-w-3xl mx-auto">
//                         Our academy offers authentic South Indian classical vocal lessons alongside Indian light/film music options. Our goal is to foster creativity, structural discipline, and structural understanding of Raga and Tala structures for students of all ages. With professional training resources and tailored, welcoming lesson pathways, we help Dublin students build robust live performance confidence.
//                     </p>

//                     {/* Subtle Stat/Feature grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto text-left">
//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition-colors duration-300">
//                             <Award className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
//                             <div>
//                                 <h4 className="text-sm font-bold text-gray-900 uppercase">Expert Mastery</h4>
//                                 <p className="text-xs text-gray-500 mt-1">Systematic modules matching individual vocal limitations.</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition-colors duration-300">
//                             <Calendar className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
//                             <div>
//                                 <h4 className="text-sm font-bold text-gray-900 uppercase">Flexible Bookings</h4>
//                                 <p className="text-xs text-gray-500 mt-1">Simple rescheduling patterns for busy families.</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition-colors duration-300">
//                             <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
//                             <div>
//                                 <h4 className="text-sm font-bold text-gray-900 uppercase">Live Stages</h4>
//                                 <p className="text-xs text-gray-500 mt-1">Annual concerts right within the Dublin arts communities.</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-16 border-t border-b border-gray-100 py-6">
//                         <p className="text-sm font-bold tracking-widest text-gray-800 sm:text-base uppercase">
//                             Connect Today to Secure Your <span className="text-teal-600 border-b-2 border-teal-400 pb-0.5">First Trial Session</span>
//                         </p>
//                     </div>

//                     <div className="mt-10">
//                         <button className="w-full sm:w-auto rounded-full bg-teal-600 px-10 py-4 text-sm font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-teal-700 hover:shadow-lg active:scale-95 uppercase">
//                             Book a Trial Lesson
//                         </button>
//                     </div>
//                 </div>
//             </section>
            
//             {/* 4. INSTRUCTOR PROFILE SECTION */}
//             {/* 4. INSTRUCTOR PROFILE SECTION */}
// <section id="instructor" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
//     <div className="mx-auto max-w-5xl">
//         <div className="grid gap-12 md:grid-cols-12 items-center">

//             {/* Premium Image Frame with Shadows */}
//             <div className="md:col-span-5 flex justify-center relative">
//                 <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000" />
//                 <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-3">
//                     <img
//                         src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
//                         alt="HemaDevi Sudhakar - Vocal Instructor"
//                         className="w-full h-full object-cover rounded-xl grayscale-[15%] hover:grayscale-0 transition-all duration-500"
//                     />
//                 </div>
//             </div>

//             {/* Profile Copywriting */}
//             <div className="md:col-span-7 space-y-5 text-left">
//                 <div className="space-y-2">
//                     <span className="text-xs font-bold tracking-widest text-teal-600 uppercase block">Guru Profile</span>
//                     {/* Added Her Name Here */}
//                     <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase sm:text-4xl">
//                         HemaDevi Sudhakar
//                     </h2>
//                 </div>
//                 <p className="text-sm font-semibold tracking-wide text-gray-800 uppercase bg-teal-50/70 border-l-4 border-teal-500 p-3 rounded-r-xl">
//                     Master's Degree in Classical Music & Former Shankar Mahadevan Academy Trainer
//                 </p>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                     With over 10 years of intensive classical immersion, a Master's degree in Classical Music, and over three years of international instruction delivery, I am deeply passionate about enabling vocal independence. My experience includes structural teaching tenure at the prominent **Shankar Mahadevan Academy**, training talent across both classical frameworks and modern Indian context vocals. 
//                 </p>
//                 <p className="text-sm text-gray-600 leading-relaxed font-medium">
//                     Now based permanently in Dublin, Ireland, I offer structured modules for kids, teens, and adults alike. Whether looking to establish foundations or hone complex ragas, you will find a highly accessible, performance-driven environment tailored to push creative growth.
//                 </p>
//             </div>

//         </div>
//     </div>
// </section>

//             {/* 5. DETAILED COURSE TRACKS */}
//             <section id="courses" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-poppins">
//                 <div className="mx-auto max-w-4xl text-left">
//                     <div className="text-center mb-16">
//                         <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Learning Paths</span>
//                         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mt-1">
//                             Our Vocal Courses
//                         </h2>
//                         <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto text-center leading-relaxed">
//                             Whether you're a beginner exploring music for the first time or an experienced singer looking to refine your skills, our courses are designed to help you learn with confidence.
//                         </p>
//                     </div>

//                     <div className="grid gap-8 sm:grid-cols-2">
//                         {/* Track 1 */}
//                         <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white hover:border-teal-100 group">
//                             <h3 className="text-xl font-bold tracking-wide text-gray-900 uppercase mb-3 border-b border-gray-200 pb-3 group-hover:text-teal-600 transition-colors">
//                                 Carnatic Classical Vocal
//                             </h3>
//                             <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-4">Core Competencies:</p>
//                             <ul className="space-y-3 text-sm text-gray-600">
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Foundational Swaras & Raga structures
//                                 </li>
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Voice culture, breathing, and pitch perfection
//                                 </li>
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Traditional compositions & performance discipline
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Track 2 */}
//                         <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white hover:border-teal-100 group">
//                             <h3 className="text-xl font-bold tracking-wide text-gray-900 uppercase mb-3 border-b border-gray-200 pb-3 group-hover:text-teal-600 transition-colors">
//                                 Film Music / Light Classical
//                             </h3>
//                             <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-4">Core Competencies:</p>
//                             <ul className="space-y-3 text-sm text-gray-600">
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Vocal dynamics for studio and mic singing
//                                 </li>
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Song interpretation, expression, and modulation
//                                 </li>
//                                 <li className="flex items-start gap-2.5">
//                                     <span className="text-teal-500 font-bold mt-0.5">•</span> Mastering classic and contemporary Indian film tracks
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* 6. WHY CHOOSE US SECTION */}
//             <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
//                 <div className="mx-auto max-w-4xl text-left">
//                     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mb-12 text-center">
//                         Why Choose Our Academy?
//                     </h2>

//                     <div className="grid gap-8 md:grid-cols-3">
//                         <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-xs">
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-3 border-l-2 border-teal-500 pl-2">
//                                 Structured Local Edge
//                             </h3>
//                             <p className="text-xs text-gray-600 leading-relaxed">
//                                 No extreme time-zone friction with online classes from Asia. We provide systematic, face-to-face and local online hybrid options customized strictly for lifestyles in Ireland.
//                             </p>
//                         </div>

//                         <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-xs">
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-3 border-l-2 border-teal-500 pl-2">
//                                 Elite Training Pedigree
//                             </h3>
//                             <p className="text-xs text-gray-600 leading-relaxed">
//                                 Avoid amateur guidelines. Get trained under an instructor holding an accredited Master's degree in Music and true background experience delivering courses via global institutions.
//                             </p>
//                         </div>

//                         <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-xs">
//                             <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-3 border-l-2 border-teal-500 pl-2">
//                                 Focused Batch Sizing
//                             </h3>
//                             <p className="text-xs text-gray-600 leading-relaxed">
//                                 We protect learning quality with tightly regulated individual trackers or highly restricted group frames so every student receives real vocal alignment support.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* 7. AGE-BASED CURRICULUM SECTION (Enhanced Animation with Zero Layout Jitter) */}
//             <section id="curriculum" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-poppins">
//                 <div className="mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Target Modules</span>
//                         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mt-1">
//                             Age-Based Curriculum
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-600">
//                             Hover over a box on desktop or click on mobile to expand structural data modules.
//                         </p>
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-3 items-start">
                        
//                         {/* Kids Box */}
//                         <div 
//                             onClick={() => handleCardToggle(0)}
//                             className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:border-teal-400 overflow-hidden ${
//                                 activeCard === 0 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
//                             }`}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                     <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
//                                         activeCard === 0 ? 'bg-teal-500 text-white' : ''
//                                     }`}>
//                                         <Music className="w-5 h-5" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Kids Program</h3>
//                                         <p className="text-[11px] text-gray-400 font-medium">Ages 5 — 12</p>
//                                     </div>
//                                 </div>
//                                 <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 0 ? 'rotate-45' : ''}`} />
//                             </div>
                            
//                             <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
//                                 activeCard === 0 
//                                     ? 'max-h-60 opacity-100 pt-4 visible' 
//                                     : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
//                             }`}>
//                                 <p className="text-[11px] font-bold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
//                                 <ul className="space-y-2 text-xs text-gray-600">
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Sarali & Janta Varisais</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Rhythm & Tala clapping games</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Fun, simple Bhajans & Shlokas</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Vocal pitch alignment</li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Teens Box */}
//                         <div 
//                             onClick={() => handleCardToggle(1)}
//                             className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:border-teal-400 overflow-hidden ${
//                                 activeCard === 1 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
//                             }`}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                     <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
//                                         activeCard === 1 ? 'bg-teal-500 text-white' : ''
//                                     }`}>
//                                         <GraduationCap className="w-5 h-5" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Teens Tracks</h3>
//                                         <p className="text-[11px] text-gray-400 font-medium">Ages 13 — 19</p>
//                                     </div>
//                                 </div>
//                                 <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 1 ? 'rotate-45' : ''}`} />
//                             </div>
                            
//                             <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
//                                 activeCard === 1 
//                                     ? 'max-h-60 opacity-100 pt-4 visible' 
//                                     : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
//                             }`}>
//                                 <p className="text-[11px] font-bold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
//                                 <ul className="space-y-2 text-xs text-gray-600">
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Alankaras & Geethams</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Introduction to Raga Lakshanas</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Intermediate light classical tracks</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Voice modulation & control</li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Adults Box */}
//                         <div 
//                             onClick={() => handleCardToggle(2)}
//                             className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:border-teal-400 overflow-hidden ${
//                                 activeCard === 2 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
//                             }`}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                     <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
//                                         activeCard === 2 ? 'bg-teal-500 text-white' : ''
//                                     }`}>
//                                         <Users className="w-5 h-5" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Adult Program</h3>
//                                         <p className="text-[11px] text-gray-400 font-medium">Ages 20+</p>
//                                     </div>
//                                 </div>
//                                 <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 2 ? 'rotate-45' : ''}`} />
//                             </div>
                            
//                             <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
//                                 activeCard === 2 
//                                     ? 'max-h-60 opacity-100 pt-4 visible' 
//                                     : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
//                             }`}>
//                                 <p className="text-[11px] font-bold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
//                                 <ul className="space-y-2 text-xs text-gray-600">
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Varnams & Advanced Krithis</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Manodharma (Improvisation)</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Mic technique & stage performance</li>
//                                     <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Flexible foundational pathways</li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//              {/* 7.5 STUDENT PERFORMANCE & TESTIMONIALS SECTION */}
//             <section id="testimonials" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
//                 <div className="mx-auto max-w-5xl">
                    
//                     {/* Header */}
//                     <div className="text-center mb-16">
//                         <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Academy Highlights</span>
//                         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mt-1">
//                             Student Performances & Reviews
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
//                             See our Dublin-based students showcase their classical training and read feedback from our academy families.
//                         </p>
//                     </div>

//                     {/* Sub-grid 1: Student Performance Video Placeholders */}
//                     <div className="mb-16">
//                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
//                             Recent Showcases & Recitals
//                         </h3>
//                         <div className="grid gap-6 sm:grid-cols-2">
                            
//                             {/* Performance 1 */}
//                             <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
//                                 <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
//                                     {/* Temporary dark overlay/backdrop pattern simulating video */}
//                                     <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-950 opacity-80 group-hover:scale-105 transition-transform duration-500" />
//                                     <div className="relative z-10 flex flex-col items-center gap-2 text-white">
//                                         <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
//                                             <Music className="w-5 h-5 text-white fill-current" />
//                                         </div>
//                                         <span className="text-[11px] uppercase font-bold tracking-widest text-gray-300 mt-2">Click to Watch Recital</span>
//                                     </div>
//                                 </div>
//                                 <div className="p-5 text-left">
//                                     <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Annual Navaratri Student Recital</h4>
//                                     <p className="text-xs text-gray-500 mt-1">Kids Batch — Group Performance of Sarali Varisais & Simple Geetham in Raga Mohanam.</p>
//                                 </div>
//                             </div>

//                             {/* Performance 2 */}
//                             <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
//                                 <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
//                                     <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-950 opacity-80 group-hover:scale-105 transition-transform duration-500" />
//                                     <div className="relative z-10 flex flex-col items-center gap-2 text-white">
//                                         <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
//                                             <Music className="w-5 h-5 text-white fill-current" />
//                                         </div>
//                                         <span className="text-[11px] uppercase font-bold tracking-widest text-gray-300 mt-2">Click to Watch Recital</span>
//                                     </div>
//                                 </div>
//                                 <div className="p-5 text-left">
//                                     <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Advanced Manodharma Improvisation</h4>
//                                     <p className="text-xs text-gray-500 mt-1">Adult Batch — Solo presentation highlighting Kalpanaswaras in Raga Kalyani.</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {/* Sub-grid 2: Parent & Student Testimonials */}
//                     <div>
//                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
//                             What Our Students Say
//                         </h3>
//                         <div className="grid gap-6 md:grid-cols-3 text-left">
                            
//                             {/* Testimonial 1 */}
//                             <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-xs flex flex-col justify-between">
//                                 <div className="space-y-3">
//                                     {/* Star Rating Layout */}
//                                     <div className="flex gap-1 text-amber-400">
//                                         {"★★★★★".split("").map((char, i) => (
//                                             <span key={i} className="text-sm">★</span>
//                                         ))}
//                                     </div>
//                                     <p className="text-xs text-gray-600 leading-relaxed italic">
//                                         "HemaDevi teacher handles my 7-year-old daughter with immense patience. The way she breaks down the basic rhythms and pitch culture makes classical singing thoroughly exciting for kids!"
//                                     </p>
//                                 </div>
//                                 <div className="mt-4 pt-3 border-t border-gray-100">
//                                     <h5 className="text-xs font-bold text-gray-900 uppercase">Priya Balakrishnan</h5>
//                                     <p className="text-[10px] text-gray-400 font-medium">Parent (Dublin 15)</p>
//                                 </div>
//                             </div>

//                             {/* Testimonial 2 */}
//                             <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-xs flex flex-col justify-between">
//                                 <div className="space-y-3">
//                                     <div className="flex gap-1 text-amber-400">
//                                         {"★★★★★".split("").map((char, i) => (
//                                             <span key={i} className="text-sm">★</span>
//                                         ))}
//                                     </div>
//                                     <p className="text-xs text-gray-600 leading-relaxed italic">
//                                         "Having stopped my Carnatic training years ago, I was anxious about reviving my lessons here in Dublin. Her deep expertise and focus on voice modulation built my confidence back rapidly."
//                                     </p>
//                                 </div>
//                                 <div className="mt-4 pt-3 border-t border-gray-100">
//                                     <h5 className="text-xs font-bold text-gray-900 uppercase">Srinivas Raghavan</h5>
//                                     <p className="text-[10px] text-gray-400 font-medium">Adult Student (Rathmines)</p>
//                                 </div>
//                             </div>

//                             {/* Testimonial 3 */}
//                             <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-xs flex flex-col justify-between">
//                                 <div className="space-y-3">
//                                     <div className="flex gap-1 text-amber-400">
//                                         {"★★★★★".split("").map((char, i) => (
//                                             <span key={i} className="text-sm">★</span>
//                                         ))}
//                                     </div>
//                                     <p className="text-xs text-gray-600 leading-relaxed italic">
//                                         "The hybrid setup fits my college timeline perfectly. The pitch tracking tools and structured raga reference frameworks make home practice easy between sessions."
//                                     </p>
//                                 </div>
//                                 <div className="mt-4 pt-3 border-t border-gray-100">
//                                     <h5 className="text-xs font-bold text-gray-900 uppercase">Ananya Nair</h5>
//                                     <p className="text-[10px] text-gray-400 font-medium">Teen Batch (Dublin 6)</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </section>
//             {/* 8. FAQ SECTION */}
//             <section id="faq" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 font-poppins border-t border-gray-100">
//                 <div className="mx-auto max-w-4xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
//                             Frequently Asked Questions
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-500">
//                             Everything you need to know about our music academy programs
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         {[
//                             {
//                                 q: "Do you offer offline physical classes in Dublin or online classes?",
//                                 a: "We offer both! We arrange structured in-person sessions in Dublin alongside specialized interactive online setups with premium audio feeds so you can learn comfortably based on your preference."
//                             },
//                             {
//                                 q: "Can absolute beginners without any Indian classical music background join?",
//                                 a: "Absolutely! Our courses explicitly welcome beginners. We start from basic Swara pitches, breathing habits, and rhythm claps, building your structural foundations entirely from scratch."
//                             },
//                             {
//                                 q: "How flexible is your scheduling if a class is missed?",
//                                 a: "We understand that family life and professional schedules change. We provide structured coordinates to balance out or catch up on missing components so your training continuity remains unaffected."
//                             },
//                             {
//                                 q: "How can I book a trial lesson placeholder?",
//                                 a: "Simply click 'Book a Trial Lesson' above or contact us directly using the information listed on the academy portal to confirm your calendar booking slot."
//                             }
//                         ].map((faq, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs transition-all duration-350"
//                             >
//                                 <button
//                                     onClick={() => toggleFaq(index)}
//                                     className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
//                                 >
//                                     <span className="text-sm font-bold tracking-wide text-gray-900 uppercase pr-4 group-hover:text-teal-600 transition-colors">
//                                         {faq.q}
//                                     </span>
//                                     <span className="text-teal-600 shrink-0 bg-teal-50 p-2 rounded-full transition-transform duration-300">
//                                         {openFaq === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
//                                     </span>
//                                 </button>

//                                 <div
//                                     className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                                         openFaq === index ? 'max-h-40 border-t border-gray-100' : 'max-h-0'
//                                     }`}
//                                 >
//                                     <p className="p-6 text-sm text-gray-600 leading-relaxed bg-gray-50/40">
//                                         {faq.a}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* 9. MODERN DARK FOOTER */}
//             <Footer />
//         </div>
//     );
// }








import React, { useEffect, useRef, useState } from 'react';
import {
    ArrowRight,
    Plus,
    Minus,
    Music,
    GraduationCap,
    Users,
    CheckCircle,
    Calendar,
    Award
} from 'lucide-react';
import Nav from '../Components/Nav';
import b3 from '../assets/b3.webp';
import Footer from '../Components/Footer';
import BookLessonModal from '../Components/BookLessonModal';

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </div>
    );
}

export default function Home() {
    const [openFaq, setOpenFaq] = React.useState(null);
    const [activeCard, setActiveCard] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleCardToggle = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-poppins text-gray-900 selection:bg-teal-500 selection:text-white scroll-smooth antialiased">

            {/* 1. FLOATING NAV BAR */}
            <Nav />

            {/* 2. HERO SECTION */}
            <section id="home" className="relative flex min-h-[95vh] items-center justify-center bg-gray-950 px-4 pt-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={b3}
                        alt="Hero Background"
                        className="h-full w-full object-cover object-[center_30%] opacity-80 transform scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
                    <div className="absolute inset-0 bg-radial-vignette opacity-60" />
                </div>

                {/* Hero Content with Entrance Animations */}
                <div className="relative z-10 max-w-4xl text-center text-white px-4 font-poppins transform translate-y-0 animate-[fade-in-up_1s_ease-out]">
                    <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold tracking-tight uppercase leading-[1.12]">
                        Carnatic music <br />
                        <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
                            lessons in Dublin
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-[16px] sm:text-[18px] text-gray-300 font-normal leading-relaxed">
                        Traditional Carnatic Vocal and Light Classical Training explicitly designed for Kids, Teens, and Adults in Ireland.
                    </p>

                    <div className="mt-9 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 border border-teal-500/30 text-[12px] font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        In-Person & Premium Online Hybrid Sessions
                    </div>

                    <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#curriculum" className="w-full sm:w-auto rounded-xl bg-teal-500 px-8 py-4 text-[15px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/20 transition-all duration-300 ease-out hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/30 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95">
                            Explore Curriculum
                        </a>
                        <a href="#instructor" className="w-full sm:w-auto rounded-xl bg-transparent px-8 py-4 text-[15px] font-semibold uppercase tracking-wider text-white border border-gray-700 transition-all duration-300 ease-out hover:bg-white/5 hover:border-white hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95">
                            Meet Your Guru
                        </a>
                    </div>
                </div>

                {/* Smooth Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-gray-500 animate-bounce">
                    <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
                    <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
            </section>

            {/* 3. VALUE PROPOSITION SECTION */}
            <section id="about" className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins relative">
                <Reveal className="mx-auto max-w-4xl text-center">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-gray-900 leading-tight">
                        Experience Premium Classical Music <br className="hidden md:block" /> Training in Dublin
                    </h2>

                    <p className="mt-6 text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our academy offers authentic South Indian classical vocal lessons alongside Indian light/film music options. Our goal is to foster creativity, structural discipline, and structural understanding of Raga and Tala structures for students of all ages. With professional training resources and tailored, welcoming lesson pathways, we help Dublin students build robust live performance confidence.
                    </p>

                    {/* Subtle Stat/Feature grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto text-left">
                        {[
                            { icon: Award, title: 'Expert Mastery', text: 'Systematic modules matching individual vocal limitations.' },
                            { icon: Calendar, title: 'Flexible Bookings', text: 'Simple rescheduling patterns for busy families.' },
                            { icon: CheckCircle, title: 'Live Stages', text: 'Annual concerts right within the Dublin arts communities.' },
                        ].map(({ icon: Icon, title, text }, i) => (
                            <Reveal delay={i * 100} key={title}>
                                <div className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-200">
                                    <Icon className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-[15px] font-semibold text-gray-900 uppercase">{title}</h4>
                                        <p className="text-[14px] text-gray-500 mt-1 leading-relaxed">{text}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-16 border-t border-b border-gray-100 py-6">
                        <p className="text-[15px] sm:text-[16px] font-semibold tracking-wide text-gray-800 uppercase">
                            Connect Today to Secure Your <span className="text-teal-600 border-b-2 border-teal-400 pb-0.5">First Trial Session</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="mt-10">
                <button 
                    onClick={() => setIsModalOpen(true)} // Opens the modal
                    className="w-full sm:w-auto rounded-xl bg-teal-600 px-10 py-4 text-[15px] font-semibold tracking-wider text-white shadow-md transition-all duration-300 ease-out hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 uppercase"
                >
                    Book a Trial Lesson
                </button>
            </div>
            <BookLessonModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} // Closes the modal
            />
                    </div>
                </Reveal>
            </section>

            {/* 4. INSTRUCTOR PROFILE SECTION */}
            <section id="instructor" className="bg-gray-50 py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 md:grid-cols-12 items-center">

                        {/* Premium Image Frame with Shadows */}
                        <Reveal className="md:col-span-5 flex justify-center relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000" />
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-3">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                                    alt="HemaDevi Sudhakar - Vocal Instructor"
                                    className="w-full h-full object-cover rounded-xl grayscale-[15%] transition-all duration-500 hover:scale-105 hover:grayscale-0"
                                />
                            </div>
                        </Reveal>

                        {/* Profile Copywriting */}
                        <Reveal delay={120} className="md:col-span-7 space-y-5 text-left">
                            <div className="space-y-2">
                                <span className="text-[13px] font-semibold tracking-widest text-teal-600 uppercase block">Guru Profile</span>
                                <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold tracking-tight text-gray-900 uppercase">
                                    HemaDevi Sudhakar
                                </h2>
                            </div>
                            <p className="text-[15px] font-semibold tracking-wide text-gray-800 uppercase bg-teal-50/70 border-l-4 border-teal-500 p-3 rounded-r-xl">
                                Master's Degree in Classical Music & Former Shankar Mahadevan Academy Trainer
                            </p>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                With over 10 years of intensive classical immersion, a Master's degree in Classical Music, and over three years of international instruction delivery, I am deeply passionate about enabling vocal independence. My experience includes structural teaching tenure at the prominent <strong className="font-semibold text-gray-800">Shankar Mahadevan Academy</strong>, training talent across both classical frameworks and modern Indian context vocals.
                            </p>
                            <p className="text-[16px] text-gray-600 leading-relaxed font-medium">
                                Now based permanently in Dublin, Ireland, I offer structured modules for kids, teens, and adults alike. Whether looking to establish foundations or hone complex ragas, you will find a highly accessible, performance-driven environment tailored to push creative growth.
                            </p>
                        </Reveal>

                    </div>
                </div>
            </section>

            {/* 5. DETAILED COURSE TRACKS */}
            <section id="courses" className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins">
                <div className="mx-auto max-w-4xl text-left">
                    <Reveal className="text-center mb-16">
                        <span className="text-[13px] font-semibold tracking-widest text-teal-600 uppercase">Learning Paths</span>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold tracking-tight text-gray-900 uppercase mt-2">
                            Our Vocal Courses
                        </h2>
                        <p className="mt-3 text-[15px] sm:text-[16px] text-gray-600 max-w-xl mx-auto text-center leading-relaxed">
                            Whether you're a beginner exploring music for the first time or an experienced singer looking to refine your skills, our courses are designed to help you learn with confidence.
                        </p>
                    </Reveal>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {/* Track 1 */}
                        <Reveal>
                            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-teal-100 group">
                                <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-wide text-gray-900 uppercase mb-3 border-b border-gray-200 pb-3 group-hover:text-teal-600 transition-colors duration-300">
                                    Carnatic Classical Vocal
                                </h3>
                                <p className="text-[12px] font-semibold text-teal-600 uppercase tracking-widest mb-4">Core Competencies:</p>
                                <ul className="space-y-3 text-[15px] text-gray-600">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Foundational Swaras & Raga structures
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Voice culture, breathing, and pitch perfection
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Traditional compositions & performance discipline
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Track 2 */}
                        <Reveal delay={100}>
                            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-teal-100 group">
                                <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-wide text-gray-900 uppercase mb-3 border-b border-gray-200 pb-3 group-hover:text-teal-600 transition-colors duration-300">
                                    Film Music / Light Classical
                                </h3>
                                <p className="text-[12px] font-semibold text-teal-600 uppercase tracking-widest mb-4">Core Competencies:</p>
                                <ul className="space-y-3 text-[15px] text-gray-600">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Vocal dynamics for studio and mic singing
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Song interpretation, expression, and modulation
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-teal-500 font-bold mt-0.5">•</span> Mastering classic and contemporary Indian film tracks
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US SECTION */}
            <section className="bg-gray-50 py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
                <div className="mx-auto max-w-4xl text-left">
                    <Reveal>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold tracking-tight text-gray-900 uppercase mb-14 text-center">
                            Why Choose Our Academy?
                        </h2>
                    </Reveal>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: 'Structured Local Edge', text: 'No extreme time-zone friction with online classes from Asia. We provide systematic, face-to-face and local online hybrid options customized strictly for lifestyles in Ireland.' },
                            { title: 'Elite Training Pedigree', text: "Avoid amateur guidelines. Get trained under an instructor holding an accredited Master's degree in Music and true background experience delivering courses via global institutions." },
                            { title: 'Focused Batch Sizing', text: 'We protect learning quality with tightly regulated individual trackers or highly restricted group frames so every student receives real vocal alignment support.' },
                        ].map(({ title, text }, i) => (
                            <Reveal delay={i * 100} key={title}>
                                <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
                                    <h3 className="text-[14px] font-semibold tracking-wider text-gray-900 uppercase mb-3 border-l-2 border-teal-500 pl-2">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] text-gray-600 leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. AGE-BASED CURRICULUM SECTION (Enhanced Animation with Zero Layout Jitter) */}
            <section id="curriculum" className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins">
                <div className="mx-auto max-w-4xl">
                    <Reveal className="text-center mb-16">
                        <span className="text-[13px] font-semibold tracking-widest text-teal-600 uppercase">Target Modules</span>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold tracking-tight text-gray-900 uppercase mt-2">
                            Age-Based Curriculum
                        </h2>
                        <p className="mt-2 text-[15px] text-gray-600">
                            Hover over a box on desktop or click on mobile to expand structural data modules.
                        </p>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-3 items-start">

                        {/* Kids Box */}
                        <Reveal>
                        <div
                            onClick={() => handleCardToggle(0)}
                            className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:-translate-y-1 md:hover:border-teal-400 overflow-hidden ${
                                activeCard === 0 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
                                        activeCard === 0 ? 'bg-teal-500 text-white' : ''
                                    }`}>
                                        <Music className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-gray-900 uppercase tracking-wide">Kids Program</h3>
                                        <p className="text-[12px] text-gray-400 font-medium">Ages 5 — 12</p>
                                    </div>
                                </div>
                                <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 0 ? 'rotate-45' : ''}`} />
                            </div>

                            <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
                                activeCard === 0
                                    ? 'max-h-60 opacity-100 pt-4 visible'
                                    : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
                            }`}>
                                <p className="text-[11px] font-semibold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
                                <ul className="space-y-2 text-[13px] text-gray-600">
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Sarali & Janta Varisais</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Rhythm & Tala clapping games</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Fun, simple Bhajans & Shlokas</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Vocal pitch alignment</li>
                                </ul>
                            </div>
                        </div>
                        </Reveal>

                        {/* Teens Box */}
                        <Reveal delay={100}>
                        <div
                            onClick={() => handleCardToggle(1)}
                            className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:-translate-y-1 md:hover:border-teal-400 overflow-hidden ${
                                activeCard === 1 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
                                        activeCard === 1 ? 'bg-teal-500 text-white' : ''
                                    }`}>
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-gray-900 uppercase tracking-wide">Teens Tracks</h3>
                                        <p className="text-[12px] text-gray-400 font-medium">Ages 13 — 19</p>
                                    </div>
                                </div>
                                <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 1 ? 'rotate-45' : ''}`} />
                            </div>

                            <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
                                activeCard === 1
                                    ? 'max-h-60 opacity-100 pt-4 visible'
                                    : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
                            }`}>
                                <p className="text-[11px] font-semibold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
                                <ul className="space-y-2 text-[13px] text-gray-600">
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Alankaras & Geethams</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Introduction to Raga Lakshanas</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Intermediate light classical tracks</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Voice modulation & control</li>
                                </ul>
                            </div>
                        </div>
                        </Reveal>

                        {/* Adults Box */}
                        <Reveal delay={200}>
                        <div
                            onClick={() => handleCardToggle(2)}
                            className={`group bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm md:hover:shadow-xl md:hover:-translate-y-1 md:hover:border-teal-400 overflow-hidden ${
                                activeCard === 2 ? 'shadow-xl border-teal-400 ring-2 ring-teal-400/10' : 'border-gray-200'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2.5 bg-teal-50 text-teal-600 rounded-xl transition-colors duration-300 md:group-hover:bg-teal-500 md:group-hover:text-white ${
                                        activeCard === 2 ? 'bg-teal-500 text-white' : ''
                                    }`}>
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-gray-900 uppercase tracking-wide">Adult Program</h3>
                                        <p className="text-[12px] text-gray-400 font-medium">Ages 20+</p>
                                    </div>
                                </div>
                                <Plus className={`w-4 h-4 text-teal-500 transition-transform duration-300 ${activeCard === 2 ? 'rotate-45' : ''}`} />
                            </div>

                            <div className={`transition-all duration-500 ease-in-out space-y-3 border-t border-gray-100 mt-4 overflow-hidden ${
                                activeCard === 2
                                    ? 'max-h-60 opacity-100 pt-4 visible'
                                    : 'max-h-0 opacity-0 invisible md:group-hover:max-h-60 md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:visible'
                            }`}>
                                <p className="text-[11px] font-semibold text-teal-600 uppercase tracking-wider">Focus Areas:</p>
                                <ul className="space-y-2 text-[13px] text-gray-600">
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Varnams & Advanced Krithis</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Manodharma (Improvisation)</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Mic technique & stage performance</li>
                                    <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">•</span> Flexible foundational pathways</li>
                                </ul>
                            </div>
                        </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            {/* 7.5 STUDENT PERFORMANCE & TESTIMONIALS SECTION */}
            <section id="testimonials" className="bg-gray-50 py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins border-t border-b border-gray-100">
                <div className="mx-auto max-w-5xl">

                    {/* Header */}
                    <Reveal className="text-center mb-16">
                        <span className="text-[13px] font-semibold tracking-widest text-teal-600 uppercase">Academy Highlights</span>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold tracking-tight text-gray-900 uppercase mt-2">
                            Student Performances & Reviews
                        </h2>
                        <p className="mt-2 text-[15px] text-gray-600 max-w-xl mx-auto leading-relaxed">
                            See our Dublin-based students showcase their classical training and read feedback from our academy families.
                        </p>
                    </Reveal>

                    {/* Sub-grid 1: Student Performance Video Placeholders */}
                    <div className="mb-16">
                        <Reveal>
                            <h3 className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
                                Recent Showcases & Recitals
                            </h3>
                        </Reveal>
                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* Performance 1 */}
                            <Reveal>
                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-950 opacity-80 transition-transform duration-500 group-hover:scale-105" />
                                        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
                                            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
                                                <Music className="w-5 h-5 text-white fill-current" />
                                            </div>
                                            <span className="text-[11px] uppercase font-semibold tracking-widest text-gray-300 mt-2">Click to Watch Recital</span>
                                        </div>
                                    </div>
                                    <div className="p-5 text-left">
                                        <h4 className="text-[15px] font-semibold text-gray-900 uppercase tracking-wide">Annual Navaratri Student Recital</h4>
                                        <p className="text-[13px] text-gray-500 mt-1">Kids Batch — Group Performance of Sarali Varisais & Simple Geetham in Raga Mohanam.</p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Performance 2 */}
                            <Reveal delay={100}>
                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-950 opacity-80 transition-transform duration-500 group-hover:scale-105" />
                                        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
                                            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
                                                <Music className="w-5 h-5 text-white fill-current" />
                                            </div>
                                            <span className="text-[11px] uppercase font-semibold tracking-widest text-gray-300 mt-2">Click to Watch Recital</span>
                                        </div>
                                    </div>
                                    <div className="p-5 text-left">
                                        <h4 className="text-[15px] font-semibold text-gray-900 uppercase tracking-wide">Advanced Manodharma Improvisation</h4>
                                        <p className="text-[13px] text-gray-500 mt-1">Adult Batch — Solo presentation highlighting Kalpanaswaras in Raga Kalyani.</p>
                                    </div>
                                </div>
                            </Reveal>

                        </div>
                    </div>

                    {/* Sub-grid 2: Parent & Student Testimonials */}
                    <div>
                        <Reveal>
                            <h3 className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
                                What Our Students Say
                            </h3>
                        </Reveal>
                        <div className="grid gap-6 md:grid-cols-3 text-left">
                            {[
                                {
                                    quote: '"HemaDevi teacher handles my 7-year-old daughter with immense patience. The way she breaks down the basic rhythms and pitch culture makes classical singing thoroughly exciting for kids!"',
                                    name: 'Priya Balakrishnan',
                                    role: 'Parent (Dublin 15)',
                                },
                                {
                                    quote: '"Having stopped my Carnatic training years ago, I was anxious about reviving my lessons here in Dublin. Her deep expertise and focus on voice modulation built my confidence back rapidly."',
                                    name: 'Srinivas Raghavan',
                                    role: 'Adult Student (Rathmines)',
                                },
                                {
                                    quote: '"The hybrid setup fits my college timeline perfectly. The pitch tracking tools and structured raga reference frameworks make home practice easy between sessions."',
                                    name: 'Ananya Nair',
                                    role: 'Teen Batch (Dublin 6)',
                                },
                            ].map(({ quote, name, role }, i) => (
                                <Reveal delay={i * 100} key={name}>
                                    <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between h-full">
                                        <div className="space-y-3">
                                            <div className="flex gap-1 text-amber-400">
                                                {"★★★★★".split("").map((char, j) => (
                                                    <span key={j} className="text-[14px]">★</span>
                                                ))}
                                            </div>
                                            <p className="text-[14px] text-gray-600 leading-relaxed italic">
                                                {quote}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <h5 className="text-[13px] font-semibold text-gray-900 uppercase">{name}</h5>
                                            <p className="text-[12px] text-gray-400 font-medium">{role}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 8. FAQ SECTION */}
            <section id="faq" className="bg-gray-50 py-24 sm:py-28 px-4 sm:px-6 lg:px-8 font-poppins border-t border-gray-100">
                <div className="mx-auto max-w-4xl">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-[24px] sm:text-[28px] font-bold tracking-widest text-gray-900 uppercase">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-2 text-[15px] text-gray-500">
                            Everything you need to know about our music academy programs
                        </p>
                    </Reveal>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Do you offer offline physical classes in Dublin or online classes?",
                                a: "We offer both! We arrange structured in-person sessions in Dublin alongside specialized interactive online setups with premium audio feeds so you can learn comfortably based on your preference."
                            },
                            {
                                q: "Can absolute beginners without any Indian classical music background join?",
                                a: "Absolutely! Our courses explicitly welcome beginners. We start from basic Swara pitches, breathing habits, and rhythm claps, building your structural foundations entirely from scratch."
                            },
                            {
                                q: "How flexible is your scheduling if a class is missed?",
                                a: "We understand that family life and professional schedules change. We provide structured coordinates to balance out or catch up on missing components so your training continuity remains unaffected."
                            },
                            {
                                q: "How can I book a trial lesson placeholder?",
                                a: "Simply click 'Book a Trial Lesson' above or contact us directly using the information listed on the academy portal to confirm your calendar booking slot."
                            }
                        ].map((faq, index) => (
                            <Reveal delay={index * 60} key={index}>
                                <div
                                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 group"
                                    >
                                        <span className="text-[15px] font-semibold tracking-wide text-gray-900 uppercase pr-4 group-hover:text-teal-600 transition-colors duration-300">
                                            {faq.q}
                                        </span>
                                        <span className={`text-teal-600 shrink-0 bg-teal-50 p-2 rounded-full transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                            {openFaq === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            openFaq === index ? 'max-h-40 border-t border-gray-100' : 'max-h-0'
                                        }`}
                                    >
                                        <p className="p-6 text-[14px] text-gray-600 leading-relaxed bg-gray-50/40">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. MODERN DARK FOOTER */}
            <Footer />
        </div>
    );
}