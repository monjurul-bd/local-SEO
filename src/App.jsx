import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, Lock, BookOpen, User, Star, Globe, Zap, Users, Trophy, CheckCircle, MessageCircle, Monitor, Bell, X } from 'lucide-react';

// --- DATA: Stats ---
const stats = [
  { id: 1, label: "Students Trained", value: "1,000+", icon: <Users className="text-orange-500" /> },
  { id: 2, label: "SEO Projects", value: "1,500+", icon: <Trophy className="text-orange-500" /> },
  { id: 3, label: "Success Rate", value: "98%", icon: <CheckCircle className="text-orange-500" /> },
  { id: 4, label: "Support", value: "24/7", icon: <MessageCircle className="text-orange-500" /> },
];

// --- DATA: Books ---
const books = [
  { id: 1, title: "Local SEO Master Guide", desc: "Foundation for ranking.", link: "https://local-seo-master-guide.netlify.app" },
  { id: 2, title: "Course Toolkit", desc: "Templates & Scripts.", link: "https://local-seo-master-course-toolkit.netlify.app" },
  { id: 3, title: "Master Course Video", desc: "Premium video content.", link: "https://local-seo-master-course.netlify.app" },
  { id: 4, title: "Mobile SEO Guide", desc: "Mobile-first index secrets.", link: "https://local-seo-guide-mobile.vercel.app" }
];

// --- DATA: Curriculum (RESTORED) ---
const curriculum = [
  { id: 1, title: "Introduction to Local SEO", time: "10 min" },
  { id: 2, title: "Google Business Profile Setup", time: "25 min" },
  { id: 3, title: "Keyword Research Strategy", time: "40 min" },
  { id: 4, title: "On-Page Optimization", time: "35 min" },
  { id: 5, title: "Citation Building Mastery", time: "30 min" },
  { id: 6, title: "Review Management & Psychology", time: "20 min" },
  { id: 7, title: "Website Architecture", time: "45 min" },
  { id: 8, title: "Link Building Tactics", time: "50 min" },
  { id: 9, title: "Tracking & Reporting (GA4)", time: "35 min" },
  { id: 10, title: "Client Acquisition & Sales", time: "15 min" }
];

// --- DATA: Reviews ---
const reviews = [
  { id: 1, name: "Rahim Uddin", role: "Freelancer", text: "এই কোর্সটি করে আমি ফাইভারে প্রথম কাজ পেয়েছি। অসাধারণ গাইডলাইন!" },
  { id: 2, name: "Sarah Khan", role: "Business Owner", text: "My local business sales increased by 300% after applying these tricks." },
  { id: 3, name: "Tanvir Hasan", role: "SEO Expert", text: "Monjurul sir explains complex topics very simply. Highly recommended." },
  { id: 4, name: "John Doe", role: "Agency Owner", text: "The toolkit provided is worth more than the course price itself." },
  { id: 5, name: "Ayesha Siddiqua", role: "Student", text: "Best resource for Local SEO in Bengali/English. Very detailed." },
  { id: 6, name: "Michael Smith", role: "Digital Marketer", text: "Advanced strategies like citation building were strictly explained." },
  { id: 7, name: "Karim Chowdhury", role: "Entrepreneur", text: "সরাসরি প্রজেক্টে কাজ করার সাহস পেয়েছি এই কোর্স থেকে।" },
  { id: 8, name: "Emily Rose", role: "Content Creator", text: "The video quality and audio are top-notch. Very professional." },
  { id: 9, name: "Rafiqul Islam", role: "Web Developer", text: "Helped me understand the technical side of SEO perfectly." },
  { id: 10, name: "Nusrat Jahan", role: "Newbie", text: "শুরু থেকে শেষ পর্যন্ত গাইডলাইন পেয়েছি। সাপোর্ট খুব ভালো।" }
];

// --- DATA: FAQ ---
const faqs = [
  { q: "What will I learn from this course?", a: "You will master Google Business Profile, Local Keyword Research, Citations, and On-Page SEO specifically for local businesses." },
  { q: "Is this course suitable for beginners?", a: "Yes! We start from the absolute basics and move to advanced strategies." },
  { q: "Do I need coding knowledge?", a: "No coding is required. We use tools and simple strategies." },
  { q: "Is the training fully online?", a: "Yes, 100% online. You can watch videos and access resources from anywhere, anytime." },
  { q: "Will I get a certificate?", a: "Yes, upon completion, you will receive a verifiable digital certificate." },
  { q: "How long is the course access?", a: "You get Lifetime Access to all videos and future updates." },
  { q: "Do you provide support?", a: "We have a dedicated private group for 24/7 student support." },
  { q: "Can I do this on mobile?", a: "Yes, most of the learning and strategy planning can be done on a smartphone." },
  { q: "How much can I earn?", a: "Local SEO experts charge anywhere from $300 to $1000 per client monthly." },
  { q: "Are the tools free or paid?", a: "We teach you using free tools first, then show paid alternatives for scaling." }
];

const App = () => {
  const [openSection, setOpenSection] = useState(null); // For Curriculum
  const [openFaq, setOpenFaq] = useState(null); // For FAQ
  const [notification, setNotification] = useState(true); // Notification State

  // Toggle Curriculum Accordion
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Auto-hide notification after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-orange-500 selection:text-white">
      
      {/* --- Background Elements --- */}
      <div className="cyber-grid-bg"></div>
      <div className="ambient-glow top-0 left-0"></div>
      <div className="ambient-glow bottom-0 right-0" style={{background: 'radial-gradient(circle, rgba(0,100,255,0.05) 0%, transparent 70%)'}}></div>

      {/* --- NOTIFICATION TOAST (Top Right) --- */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 glass-card p-4 rounded-lg border-l-4 border-orange-500 shadow-2xl animate-bounce flex items-start gap-3 max-w-sm">
          <div className="bg-orange-500/20 p-2 rounded-full">
            <Bell className="text-orange-500" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">New Offer Available!</h4>
            <p className="text-xs text-gray-300">Enroll today to get the "Client Hunting" bonus module for free.</p>
          </div>
          <button onClick={() => setNotification(false)} className="text-gray-500 hover:text-white">
            <X size={16} />
          </button>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 top-0 glass-card border-b-0 border-b-orange-500/20 px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 flex items-center gap-2">
          <Globe className="text-orange-500" /> SEO<span className="text-white">MASTER</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-bold text-green-400 border border-green-500/30 px-3 py-1 rounded-full bg-green-500/10">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> FULLY ONLINE
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-bold mb-8 animate-pulse">
          <Star size={16} fill="currentColor" /> Premium Local SEO Training
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          DOMINATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-500 neon-text">
            LOCAL SEARCH
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join <span className="text-white font-bold">1,000+ students</span> mastering the art of ranking on Google Maps. 
          Expert instruction by <span className="text-orange-400 font-bold">Monjurul Haque</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(255,102,0,0.4)] flex items-center justify-center gap-2">
            <Monitor size={20} /> Join Online Class
          </button>
          <button onClick={() => document.getElementById('curriculum').scrollIntoView({behavior: 'smooth'})} className="glass-card text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
            View Curriculum
          </button>
        </div>
      </header>

      {/* --- STATS COUNTER --- */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="glass-card p-6 rounded-2xl text-center hover:border-orange-500/50 transition duration-300">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3D RESOURCES --- */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Zap className="text-orange-500" /> EXCLUSIVE RESOURCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div 
                key={book.id} 
                className={`glass-card rounded-xl p-6 relative group cursor-pointer transition-all duration-500 ${index % 2 === 0 ? 'animate-float' : ''}`}
                style={{ animationDelay: `${index * 0.5}s` }}
                onClick={() => window.open(book.link, '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition">{book.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{book.desc}</p>
                <div className="absolute bottom-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 transition">➔</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRICULUM SECTION (RESTORED) --- */}
      <section id="curriculum" className="py-20 px-4 bg-black/20 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-gray-400">Everything you need to go from beginner to expert.</p>
          </div>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div 
                key={item.id} 
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${openSection === index ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 bg-white/5'}`}
              >
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${openSection === index ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                      {index + 1}
                    </div>
                    <span className={`font-semibold text-lg ${openSection === index ? 'text-white' : 'text-gray-400'}`}>
                      {item.title}
                    </span>
                  </div>
                  {openSection === index ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-600" />}
                </button>
                
                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 pl-16 text-gray-400 text-sm border-t border-white/5 flex flex-col gap-2">
                    <p>Unlock the hidden strategies of {item.title}. This module includes video lectures and downloadable PDFs.</p>
                    <div className="flex gap-4 mt-2">
                      <span className="flex items-center gap-1 text-orange-400"><PlayCircle size={14}/> Video Lesson</span>
                      <span className="flex items-center gap-1 text-blue-400"><Lock size={14}/> {item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (10 Reviews) --- */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-orange-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-gray-400">See what our 1000+ students are saying.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="glass-card p-6 rounded-xl border-l-4 border-l-orange-500 hover:bg-white/5 transition">
                <div className="flex items-center gap-1 mb-3 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm italic mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (10 Items) --- */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition"
                >
                  <span className={`font-semibold ${openFaq === index ? 'text-orange-400' : 'text-gray-200'}`}>{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-gray-400 text-sm border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-white/10 bg-black">
        <div className="mb-4">
          <p className="text-2xl font-black text-white">SEO<span className="text-orange-500">MASTER</span></p>
          <p className="text-xs text-gray-500 mt-1">Empowering Local Businesses Worldwide</p>
        </div>
        <p className="text-gray-600 text-xs">© 2026 Monjurul Haque. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;