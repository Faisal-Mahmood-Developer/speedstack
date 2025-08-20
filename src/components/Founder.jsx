// components/ui/Founder.jsx
import React from 'react';
import faisalImg from '../assets/faisal21.jpg';


const Founder = () => {
    return (
        <div className="glass-card hover-lift hover-glow p-6 rounded-3xl shadow-xl transition-all duration-300 max-w-sm mx-auto flex flex-col items-center justify-center mt-16">

            {/* Founder Image */}
            <img
                src={faisalImg}
                alt="Faisal Mahmood"
                className="w-32 h-32 rounded-full border-4 border-neon-cyan object-cover mb-4"
            />

            {/* Founder Name */}
            <h3 className="text-xl font-heading font-bold text-white mb-2 text-center">Faisal Mahmood</h3>

            {/* Short Bio */}
            <p className="font-body text-gray-300 text-center mb-4">
                Founder & Web Developer with 5+ years of teaching experience. Passionate about mentoring students and creating clean, responsive, and modern web learning experiences.
            </p>


            {/* Optional Contact Button */}
            <a
                href="https://wa.me/923083470930"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-white  font-semibold hover:bg-cyan-400 text-black transition-colors"
            >
                Contact Me
            </a>
        </div>
    );
};

export default Founder;
