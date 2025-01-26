import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Target, 
  Award,
  ChevronRight,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { CareerQuiz } from './components/CareerQuiz/CareerQuiz';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      role: "Tech Lead at Google",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      expertise: "Computer Science"
    },
    {
      name: "Prof. James Wilson",
      role: "Research Scientist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      expertise: "Biotechnology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900"><a href=''>ElevateHer</a></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#resources" className="text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#mentors" className="text-gray-700 hover:text-blue-600">Mentors</a>
              <a href="#assessment" className="text-gray-700 hover:text-blue-600">Assessment</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Her Journey to Success Starts Here
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Personalized career guidance and mentorship for students at every stage of their academic journey.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
            <DotLottieReact
              src="https://lottie.host/76507193-8311-4966-87ef-ab73f1b7a38c/glZnMG7SeW.lottie"
              loop
              autoplay
            /> 
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Customized roadmaps based on your interests and goals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">Connect with industry professionals and academics.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Assessment</h3>
              <p className="text-gray-600">Discover your strengths and ideal career paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Quiz Section */}
      <section id="assessment" className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Discover Your Path</h2>
          <CareerQuiz />
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Mentors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                  <p className="text-blue-600 mt-1">Expert in {mentor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">ElevateHer</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering students to make informed career decisions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Resources</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ElevateHer All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;