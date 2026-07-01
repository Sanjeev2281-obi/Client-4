import React from 'react';
import { X } from 'lucide-react';

export default function BookLessonModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]">
            
            {/* Modal Card Box */}
            <div className="relative w-full max-w-2xl bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl font-poppins max-h-[90vh] overflow-y-auto transform scale-100 animate-[subtle-zoom_0.3s_ease-out]">
                
                {/* Close Button top corner */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50 focus:outline-none"
                    aria-label="Close Modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Begin Your Musical Journey</span>
                    <h2 className="text-2xl font-black tracking-tight text-gray-900 uppercase mt-1 sm:text-3xl">
                        Request a Trial Lesson
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                        Fill out your details below. Guru HemaDevi Sudhakar will get in touch to confirm your placement session.
                    </p>
                </div>

                {/* Form Logic */}
                <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Student Name</label>
                            <input 
                                type="text" 
                                required
                                placeholder="e.g. Aditi Nair" 
                                className="w-full bg-gray-50/50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-all focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Age Input */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Age</label>
                            <input 
                                type="number" 
                                required
                                min="1"
                                placeholder="e.g. 8 or 28" 
                                className="w-full bg-gray-50/50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-all focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {/* Class Type Selection */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Preferred Class Type</label>
                            <select 
                                required
                                className="w-full bg-gray-50/50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-all focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Format</option>
                                <option value="in-person">In-Person (Dublin Studio)</option>
                                <option value="online">Online Interactive</option>
                            </select>
                        </div>

                        {/* Course Track Selection */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Select Course Path</label>
                            <select 
                                required
                                className="w-full bg-gray-50/50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-all focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Preference</option>
                                <option value="carnatic">Carnatic Classical Vocal</option>
                                <option value="film">Indian Film Music / Light Classical</option>
                                <option value="both">Interested in Both Tracks</option>
                            </select>
                        </div>
                    </div>

                    {/* Query Input */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Your Query / Music Background</label>
                        <textarea 
                            rows="3"
                            placeholder="Tell us about any prior training or preferred timing schedules..."
                            className="w-full bg-gray-50/50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-all focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 placeholder:text-gray-400 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/10 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                        >
                            Submit Details
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}