
import React from 'react';
import {
    ArrowRight,
    Plus,
    Minus
} from 'lucide-react';
import Nav from '../Components/Nav'
import b3 from '../assets/b3.webp'
export default function Home() {
    const [openFaq, setOpenFaq] = React.useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 selection:bg-teal-500 selection:text-white">

            {/* 1. FLOATING NAV BAR */}
            <Nav />

            {/* 2. HERO SECTION */}
            <section id="home" className="relative flex min-h-[90vh] items-center justify-center bg-gray-950 px-4 pt-24 pb-16 overflow-hidden">
                {/* Background Image with Dark Vignette Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
   <img
    src={b3}
    alt="Hero Background"
   
    className="h-full w-full object-cover object-[center_30%] opacity-80 transform scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
/>
    {/* Combined & improved gradient overlays */}
    {/* 1. Linear gradient to fade out the bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
    
    {/* 2. Horizontal gradient for desktop to fade out the sides into the dark background */}
    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
    
    {/* 3. Your custom radial vignette */}
    <div className="absolute inset-0 bg-radial-vignette opacity-60" />
</div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl text-center text-white px-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl uppercase">
                        Carnatic music  <br />
                        <span className="bg-linear-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
                            lessons in Dublin
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg  text-gray-300 sm:text-xl">
                        Private lessons in piano, guitar, voice, drums, and violin for Kids, Teens, and Adults!
                    </p>

                    <p className="mt-8 text-sm font-bold  text-teal-400 uppercase sm:text-base">
                        Call or Text 740-913-1718 Today to Schedule Your First Lesson
                    </p>

                    <div className="mt-10">
                        <button className="rounded-full bg-teal-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-200 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/30 active:scale-95">
                            REQUEST INFO
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. VALUE PROPOSITION SECTION */}
            <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-poppins">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold  leading text-gray-900 sm:text-4xl ">
                        Experience the Lewis Center Music Academy Difference
                    </h2>

                    <p className="mt-6 text-base  text-gray-600 sm:text-lg">
                        The Lewis Center Music Academy offers private music lessons in piano, voice, violin, guitar, drums, and more, as well as early childhood music classes. Our goal is to foster creativity, confidence, and grit in students of all ages through fun and engaging music instruction. With our amazing faculty, innovative student motivational program, and state-of-the-art facility, we help students to develop life-long skills and a love for music. Conveniently located in Lewis Center, Ohio we are easily accessible from Lewis Center, Delaware, and Polaris.
                    </p>

                    <div className="mt-12 border-t border-b border-gray-100 py-6">
                        <p className="text-base font-bold tracking-wide text-gray-800 sm:text-lg uppercase">
                            Call or Text 740-913-1718 Today to Schedule Your <span className="text-red-500">First Lesson</span>
                        </p>
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto rounded-md bg-red-500 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-md transition-colors hover:bg-red-600 uppercase">
                            Book a Trial Lesson
                        </button>
                        <button className="w-full sm:w-auto rounded-md bg-red-500 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-md transition-colors hover:bg-red-600 uppercase">
                            Contact Info
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. SERVICE / CLASSES GALLERY */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 sm:grid-cols-2">

                        {/* Card 1: Piano */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="aspect-16/10 overflow-hidden bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80"
                                    alt="Piano Lessons"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold tracking-widest text-teal-600 uppercase">
                                    Piano Lessons
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 italic">
                                    Find out more about our piano lessons
                                </p>
                                <a href="#piano" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Guitar */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="aspect-16/10 overflow-hidden bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80"
                                    alt="Guitar Lessons"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold tracking-widest text-teal-600 uppercase">
                                    Guitar Lessons
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 ">
                                    Find out more about our guitar lessons
                                </p>
                                <a href="#guitar" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Card 3: Voice */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="aspect-16/10 overflow-hidden bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=800&q=80"
                                    alt="Voice Lessons"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold tracking-widest text-teal-600 uppercase">
                                    Voice Lessons
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 ">
                                    Find out more about our voice lessons
                                </p>
                                <a href="#voice" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Card 4: Violin */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="aspect-16/10 overflow-hidden bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
                                    alt="Violin Lessons"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold tracking-widest text-teal-600 uppercase">
                                    Violin Lessons
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 ">
                                    Find out more about our violin lessons
                                </p>
                                <a href="#violin" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
         {/* NEW: INSTRUCTOR PROFILE SECTION */}
      <section id="instructor" className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-100">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-3 items-center">
            
            {/* Left Column: Subtle circular placeholder or premium image frame */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" 
                  alt="Vocal Instructor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Profile Text */}
            <div className="md:col-span-2 space-y-4 text-left">
              <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
                Meet Your Instructor
              </h2>
              <p className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
                Master's Degree in Classical Music & Former Shankar Mahadevan Academy Trainer
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                With over 10 years of training in Carnatic classical music, a Master's degree in Classical Music, and over three years of international teaching experience, I am passionate about helping students discover the beauty of Indian music. My experience includes teaching at the Shankar Mahadevan Academy, where I trained students in both Carnatic and Indian film music. I have also studied Western music under Mr. Augustine Paul, giving me a versatile approach to vocal training.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Now based in Dublin, Ireland, I offer vocal lessons in Carnatic classical music and Indian film songs for children, teenagers, and adults. Whether you're taking your first steps in music or looking to refine your singing, I provide a welcoming and structured learning environment where students of all ages and skill levels can learn, grow, and perform with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* NEW: DETAILED COURSE TRACKS */}
      <section id="courses" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="mx-auto max-w-4xl text-left">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
              Our Vocal Courses
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto text-center">
              Whether you're a beginner exploring music for the first time or an experienced singer looking to refine your skills, our courses are designed to help you learn with confidence in a supportive and enjoyable environment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Track 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold tracking-wider text-gray-900 uppercase mb-3 border-b border-gray-100 pb-2">
                Carnatic Classical Vocal
              </h3>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">What you will learn:</p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Foundational Swaras & Raga structures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Voice culture, breathing, and pitch perfection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Traditional compositions & performance discipline
                </li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold tracking-wider text-gray-900 uppercase mb-3 border-b border-gray-100 pb-2">
                Film Music / Light Classical
              </h3>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">What you will learn:</p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Vocal dynamics for studio and mic singing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Song interpretation, expression, and modulation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span> Mastering classic and contemporary Indian film tracks
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
            {/* 5. WHY CHOOSE US SECTION */}
            <section className="bg-white py-14 px-4 sm:px-6 lg:px-4 font-sans">
                <div className="mx-auto max-w-4xl text-left">
                    <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-8">
                        Why Choose Us?
                    </h2>

                    <div className="space-y-8 text-gray-600">
                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                Piano, Voice, Guitar, Violin, Drums, Cello, Flute, Clarinet, Saxophone and Trumpet Lessons, and More All In One Location
                            </h3>
                            <p className="text-sm leading-relaxed">
                                We are the only school in Lewis Center, Ohio that offers all these popular instruments. This saves our students time and money, as one family can take music lessons on multiple instruments on the same day.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                The Largest Most Qualified Teaching Faculty in Columbus, Ohio
                            </h3>
                            <p className="text-sm leading-relaxed">
                                We have many university trained teachers on staff and all of our instructors are background-checked, and have professional performance experience. Our teachers are patient, friendly, and dedicated to helping you achieve your musical goals.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                Flexible Scheduling and Unlimited Make Up Lessons
                            </h3>
                            <p className="text-sm leading-relaxed">
                                We offer music lessons and classes 5 days a week, from early in the afternoon until late in the evening. If you need to miss a class or reschedule, don't worry! We offer unlimited make up lessons.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                A Proven Track Record
                            </h3>
                            <p className="text-sm leading-relaxed">
                                With locations in Lewis Center, <span className="text-teal-600 underline cursor-pointer">Powell</span>, <span className="text-teal-600 underline cursor-pointer">Dublin</span> and <span className="text-teal-600 underline cursor-pointer">Hilliard</span>, we are Columbus, Ohio's largest private music school, teaching over 1,100 lessons each week. But don't just take our word for it, check out any of our 50+ five star reviews on Facebook and Google!
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                Our Commitment to Our Faculty
                            </h3>
                            <p className="text-sm leading-relaxed">
                                We believe that a company is only as good as the people who work there. This is why we have made a financial commitment to our faculty, with our average instructor earning nearly double what they could at some of our nationally franchised competitors.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                Convenient Location
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Located in the Kroger shopping plaza at the corner of Route 23 and Lewis Center Road, we are as convenient as it gets. Our school is walkable from Olentangy High School and right next door to Starbucks, Kroger, Sportsclips, and Silk Road Asian Cuisine.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                                Professional Office Staff 5 Days a Week
                            </h3>
                            <p className="text-sm leading-relaxed">
                                We take pride in offering unparalleled customer service to students five days a week. Many music studios are staffed by a teacher or more commonly, an answering machine. We have multiple dedicated office staff available to answer your calls and emails quickly and professionally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 5.5 FAQ SECTION */}
            <section id="faq" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-100">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Everything you need to know about our music academy programs
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What instruments do you teach, and can multiple family members take lessons on the same day?",
                                a: "We offer private lessons for piano, voice, guitar, violin, drums, cello, flute, clarinet, saxophone, trumpet, and more—all in one convenient location. Our scheduling structure makes it easy to book lessons for multiple family members on the same day, saving you extra trips."
                            },
                            {
                                q: "What are the qualifications of your music instructors?",
                                a: "We have the largest, most qualified university-trained teaching faculty in Columbus, Ohio. Every instructor is comprehensive background-checked, possesses professional performance experience, and is trained to be exceptionally patient and friendly with students of all skill levels."
                            },
                            {
                                q: "How does the flexible scheduling and make-up lesson policy work?",
                                a: "Lessons are available 5 days a week from early afternoon until late evening to fit busy schedules. If you ever need to miss a scheduled session, don't worry—we offer unlimited make-up lessons to ensure you get the value you pay for."
                            },
                            {
                                q: "Where is the academy located and is parking accessible?",
                                a: "We are located right in the Kroger shopping plaza at the corner of Route 23 and Lewis Center Road. It is an easily walkable distance from Olentangy High School, right next door to Starbucks, Kroger, Sportsclips, and Silk Road Asian Cuisine, offering massive parking availability."
                            },
                            {
                                q: "How do I get started or book my first trial lesson?",
                                a: "Getting started is simple! You can click the 'REQUEST INFO' button anywhere on our site, or directly Call or Text us at 740-913-1718 to set up your first lesson placeholder."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="text-sm font-bold tracking-wide text-gray-900 uppercase pr-4">
                                        {faq.q}
                                    </span>
                                    <span className="text-teal-600 shrink-0 bg-teal-50 p-1.5 rounded-full">
                                        {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 border-t border-gray-50' : 'max-h-0'
                                        }`}
                                >
                                    <p className="p-6 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MODERN DARK FOOTER (Craft.do style) */}
            <footer className="mx-4 mb-6 rounded-3xl bg-gray-950 text-gray-400 font-sans p-8 md:p-12 lg:p-16">
                <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-900 pb-12">

                    {/* Column 1 */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">Product Releases</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Write</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Plan</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Organize</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Customize</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Imagine With Craft</a></li>
                            <li className="pt-2"><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li className="pl-3 text-gray-500">— <a href="#" className="hover:text-white transition-colors ml-1">Education Plan</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Community</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">Slack</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Reddit Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
                            <li className="pt-2"><a href="#" className="hover:text-white transition-colors">Learn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Getting Started Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Template Gallery</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
                            <li className="pt-2 text-xs font-bold text-white uppercase tracking-wider">Legal</li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>


                        </ul>
                    </div>

                </div>


                {/* Footer Bottom Bar */}
                <div className="mx-auto max-w-6xl pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs gap-6 text-gray-400">

                    {/* Left Side: Copyright & Address */}
                    <div className="flex flex-col gap-1.5">
                        <div className="font-semibold text-white">
                            © 2026 Craft Docs Limited, Inc. All rights reserved.
                        </div>

                    </div>

                    {/* Right Side: Language & Socials */}
                    <div className="flex items-center gap-6 self-end md:self-center">
                        <span className="hover:text-white cursor-pointer transition-colors">English</span>

                        <div className="flex items-center gap-4">
                            {/* Instagram SVG */}
                            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* Youtube SVG */}
                            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>

                            {/* X / Twitter SVG */}
                            <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* Linkedin SVG */}
                            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}