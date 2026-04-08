"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Store, Stethoscope, Smartphone, MapPin, 
  MessageSquare, FileText, QrCode, ShieldCheck, 
  Clock, ArrowRight, Activity, Users, FileSignature,
  Code, Database, Zap, Layers, Server
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Reusable Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2">
            <div className="relative w-8 h-8">
              <Image src="/nearbuydukan-Logo/Logo.svg" alt="nearbuydukan" fill sizes="40px" priority />
            </div>
            <span className="font-bold text-lg uppercase tracking-wide text-slate-800">NearBuyDukan</span>
          </Link>
          <div className="flex items-center gap-x-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Log in</Link>
            <Link href="/" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-600/20">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-400/20 blur-[120px]" />
          <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-blue-200">
              The Hyperlocal Revolution
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              One Network.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Limitless Local Possibilities.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              NearbuyDukan is an all-in-one digital ecosystem bridging the gap between consumers and local businesses. 
              Experience seamless billing, live virtual queues, and real-time interactions—all at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-black transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
                Join the Network <ArrowRight size={20} />
              </Link>
              <Link href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center">
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Sides of the Ecosystem */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">A Dual Ecosystem</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built precisely for two unique audiences to interact in perfect harmony.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Users */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110">
                <Users size={200} />
              </div>
              <div className="relative z-10 text-left w-full">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-8">
                   <Smartphone className="text-white" size={32} />
                 </div>
                 <h3 className="text-3xl font-bold text-slate-900 mb-4">For Consumers & Patients</h3>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                   Say goodbye to waiting times and paper receipts. Discover nearby stores, book virtual tokens, chat directly with vendors, and manage your family&apos;s medical records digitally.
                 </p>
                 <ul className="space-y-4">
                   {[
                     "Live Token Queue Tracking",
                     "Location-Based Discovery",
                     "Secure Medical Reports Storage",
                     "Direct Vendor Chat & Support"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-700"><CheckIcon /></div>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.div>

             {/* For Institutions */}
             <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110">
                <Store size={200} />
              </div>
              <div className="relative z-10 text-left w-full">
                 <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-600/30 mb-8">
                   <Activity className="text-white" size={32} />
                 </div>
                 <h3 className="text-3xl font-bold text-slate-900 mb-4">For Shops & Healthcare</h3>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                   Digitize your daily operations. Create professional bills in seconds, manage customer queues efficiently, list your services, and build incredible customer loyalty.
                 </p>
                 <ul className="space-y-4">
                   {[
                     "Digital Invoice Generation",
                     "Automated Patient/Customer Records",
                     "Token Creation & Management",
                     "Unique QR Code Identities"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center text-teal-700"><CheckIcon /></div>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Powerful Core Features</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to connect your local neighborhood digitally.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={<Clock size={28} className="text-orange-500" />}
              title="Virtual Token Queues"
              color="bg-orange-100"
              desc="Reserve a spot from home. Track live status updates and arrive exactly when it&apos;s your turn, eliminating crowded waiting rooms."
            />
            <FeatureCard 
              icon={<FileSignature size={28} className="text-blue-500" />}
              title="Smart Digital Billing"
              color="bg-blue-100"
              desc="Generate beautiful, tax-compliant invoices and 'Short Bills'. Automatically send records to users digitally."
            />
            <FeatureCard 
              icon={<Stethoscope size={28} className="text-emerald-500" />}
              title="Medical History Vault"
              color="bg-emerald-100"
              desc="A specialized secure section for patients to upload and retain important health records bound directly to their profiles."
            />
            <FeatureCard 
              icon={<MessageSquare size={28} className="text-purple-500" />}
              title="Real-time Chat"
              color="bg-purple-100"
              desc="Instantly message shop owners or doctors directly through our secure platform to clear doubts or finalize details."
            />
            <FeatureCard 
              icon={<MapPin size={28} className="text-rose-500" />}
              title="Map-based Discovery"
              color="bg-rose-100"
              desc="Locate nearby registered shops and healthcare centers using precise location mapping and categorization."
            />
            <FeatureCard 
              icon={<QrCode size={28} className="text-slate-700" />}
              title="QR Connectivity"
              color="bg-slate-200"
              desc="Scan an institution's unique QR code to instantly pull up their profile, request tokens, or make payments."
            />
          </motion.div>
        </div>
      </section>

      {/* Developer Perspective / Tech Stack */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-700 text-sm font-bold tracking-wider uppercase mb-3 shadow-sm">
              Developer&apos;s Perspective
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Under the Hood</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              NearbuyDukan is built on a scalable, modern technology stack designed for real-time responsiveness and secure data handling.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <TechCard 
              icon={<Layers size={24} className="text-indigo-600" />}
              title="Next.js App Router"
              desc="Provides robust server-side rendering and static generation for optimal SEO and performance."
            />
            <TechCard 
              icon={<Database size={24} className="text-emerald-600" />}
              title="MongoDB + Prisma"
              desc="Flexible NoSQL database schema mapped seamlessly with Prisma ORM for type-safe database queries."
            />
            <TechCard 
              icon={<Zap size={24} className="text-yellow-500" />}
              title="Socket.io Real-time"
              desc="Powers the live token queue tracking and instant bidirectional chat between consumers and vendors."
            />
            <TechCard 
              icon={<ShieldCheck size={24} className="text-blue-500" />}
              title="NextAuth.js"
              desc="Handles secure, role-based authentication separating Users, Shops, and Healthcare Institutions."
            />
          </motion.div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
         {/* Abstract background shapes */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
         
         <div className="max-w-4xl mx-auto px-6 relative z-10">
           <ShieldCheck size={64} className="mx-auto mb-8 text-blue-400" />
           <h2 className="text-4xl md:text-6xl font-bold mb-6">Engineered for Reliability</h2>
           <p className="text-xl text-slate-300 mb-12">
             From reviewing institutions to reporting abuses, our ecosystem thrives on authentic local trust. 
             All your data is highly secure. Stop relying on outdated systems and join the new era of community commerce.
           </p>
           <Link href="/login" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-white/10">
              Transform Your Neighborhood Today
           </Link>
         </div>
      </section>

      {/* Basic Footer */}
      <footer className="bg-slate-50 py-12 text-center text-sm text-slate-500 border-t border-gray-200">
        <p className="mb-2">© {new Date().getFullYear()} NearbuyDukan. All rights reserved.</p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/terms&condition" className="hover:text-slate-800 transition">Terms</Link>
          <Link href="/aboutus" className="hover:text-slate-800 transition">About Us</Link>
        </div>

        {/* Digital Signature */}
        <div className="inline-flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity mt-4">
          <div className="text-xs font-medium text-slate-400 mb-1 tracking-widest uppercase">Architected & Engineered By</div>
          <div className="text-2xl text-slate-800 mt-1" style={{ fontStyle: "italic", fontFamily: "cursive", fontWeight: "bold" }}>Saurabh Singh</div>
          <div className="w-8 h-[2px] bg-blue-400 mt-3 rounded-full"></div>
        </div>
      </footer>
    </main>
  );
}

// Simple internal check icon svg
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

// Card Component
function FeatureCard({ icon, title, desc, color }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300"
    >
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// Tech Card Component
function TechCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm"
    >
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
