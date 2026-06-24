import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, BookOpen, Wrench, Target, CheckCircle2, XCircle, BarChart3, Users, Zap, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleHero from '../components/ui/particle-effect-for-hero';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="w-full bg-background text-text font-sans">
      
      {/* 1. Hero Section - Particle Interactive */}
      <div className="relative pt-16"> {/* Added padding top for navbar */}
        <ParticleHero />
      </div>

      {/* 2. Dollar-for-Dollar Match Section */}
      <section className="py-20 relative bg-secondary">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-premium border border-gray-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px]" />
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Double the Impact of Every Donation</h2>
                  <p className="text-muted text-lg mb-6 leading-relaxed">
                    Every dollar donated to Spartan Warrior Foundation is matched dollar-for-dollar by <strong className="text-primary font-bold">The Score Machine</strong>. That means when you give, your donation goes twice as far.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-lg font-medium"><CheckCircle2 className="text-accent" /> A $25 donation becomes $50</li>
                    <li className="flex items-center gap-3 text-lg font-medium"><CheckCircle2 className="text-accent" /> A $100 donation becomes $200</li>
                    <li className="flex items-center gap-3 text-lg font-medium"><CheckCircle2 className="text-accent" /> A $500 donation becomes $1,000</li>
                  </ul>
                  <Link to="/donate" className="inline-block px-8 py-4 rounded-full bg-accent hover:bg-accentHover text-white font-bold transition-all shadow-gold">
                    Make a Donation
                  </Link>
                </div>
                <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  <Zap className="text-accent w-12 h-12 mb-6" />
                  <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed">
                    "The goal is simple: help more people gain access to financial literacy education, credit education resources, software tools, and classroom-style learning that they may not be able to afford on their own."
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-medium leading-tight mb-16 text-primary">
              Spartan Warrior Foundation exists to give people access to the financial education, credit education, tools, and structure they need to better understand their financial profile.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <FadeIn delay={0.2} direction="up" className="bg-white p-10 rounded-3xl shadow-premium border border-gray-100">
              <p className="text-primary font-medium text-lg mb-6">Many people are not struggling because they do not care. Many people are struggling because nobody ever taught them how the system works.</p>
              <ul className="space-y-4 text-muted">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> Never taught how to read a credit report.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> Never taught what lenders may look at.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> Never taught how utilization and habits affect opportunities.</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.4} direction="up" className="bg-primary p-10 rounded-3xl flex flex-col justify-center shadow-xl text-white">
              <p className="text-2xl mb-6 leading-relaxed">They were told to figure it out, but they were never given the tools.</p>
              <p className="text-2xl text-accent font-bold">We are here to change that.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. What We Do Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 relative">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary">What We Provide</h2>
            <p className="text-xl text-muted">
              Access to education, tools, and resources designed to help individuals become more informed and more prepared.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, title: "Financial Literacy", desc: "Comprehensive education on managing finances." },
              { icon: Shield, title: "Credit Education", desc: "Resources and awareness on credit reports." },
              { icon: Users, title: "Classroom Training", desc: "Structured community-based learning." },
              { icon: Wrench, title: "Software Tools", desc: "Access to learning systems and budgeting resources." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-premium border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <item.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-premium border border-gray-100">
            <p className="text-xl font-medium text-primary leading-relaxed">
              Our goal is <span className="text-red-600 font-bold">not to create dependency</span>.<br/>
              Our goal is to equip people with education and tools so they can <strong className="text-accent font-bold">take ownership of their own financial journey</strong>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. What We Do Not Do Section */}
      <section className="py-24 bg-red-50/50 border-b border-red-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">We Are Not a Credit Repair Company</h2>
            <p className="text-xl text-red-900/70">Spartan Warrior Foundation does not provide credit repair services.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {[
              "We do not dispute accounts for participants.",
              "We do not remove items from credit reports.",
              "We do not promise deletions.",
              "We do not guarantee credit score increases.",
              "We do not guarantee approvals, loans, funding, or outcomes.",
              "We do not provide legal, tax, investment, or financial advice."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="right" className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-red-50">
                <XCircle className="text-red-500 shrink-0 mt-0.5" size={24} />
                <span className="text-primary font-medium">{text}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center bg-primary p-10 rounded-3xl shadow-xl mx-auto w-full text-white">
            <h3 className="text-2xl font-bold mb-8 text-accent">We are an education-focused nonprofit.</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-medium mb-8">
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="text-accent"/> We provide the tools.</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="text-accent"/> We provide the classroom.</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="text-accent"/> We provide the structure.</span>
            </div>
            <div className="h-px w-full max-w-md mx-auto bg-white/20 mb-8"></div>
            <p className="text-2xl font-bold tracking-wide">
              The participant must show up, learn, and take action.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Philosophy Section */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12 text-primary">
              We Are Not Here to Carry People.<br/>
              <span className="text-accent">We Are Here to Equip Them.</span>
            </h2>
            <div className="space-y-8 text-xl text-muted text-left md:text-center bg-secondary p-10 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <p className="text-2xl font-medium text-primary">Spartan Warrior Foundation is built on <strong>accountability, education, and action</strong>.</p>
              <p>We believe people deserve access to the tools and education that can help them better understand their financial situation. But access is only the beginning.</p>
              <div className="py-8 font-bold text-primary text-3xl space-y-4">
                <p>The person must still show up.</p>
                <p>The person must still learn.</p>
                <p>The person must still participate.</p>
                <p className="text-accent text-4xl mt-6">The person must still do the work.</p>
              </div>
              <p>This foundation is not about shortcuts. It is about giving people a starting point, a classroom, a toolset, and the opportunity to build a better financial understanding for themselves.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Who We Help Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold mb-6 text-primary">Who This Foundation Is For</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Spartan Warrior Foundation is designed to help individuals who want to learn but may not have access to premium financial literacy tools, credit education, or structured learning resources on their own.
              </p>
              <div className="p-6 bg-white border-l-4 border-accent rounded-r-xl shadow-sm">
                <p className="text-xl font-medium text-primary">
                  This foundation is for people who are ready to take responsibility, learn the system, and move with purpose.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-white p-10 rounded-3xl shadow-premium border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-primary">We support people who:</h3>
              <ul className="space-y-6">
                {[
                  "Want to better understand their financial profile",
                  "Need access to financial literacy education",
                  "Want to learn how credit reports work",
                  "Feel overwhelmed by the financial system",
                  "Are ready to show up and do the work",
                  "Need tools, structure, and education to get started"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Target className="text-accent" size={18} />
                    </div>
                    <span className="text-primary font-medium mt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Section */}
      <section className="py-32 relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Help Someone Stop Guessing and Start Learning</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Financial education should not only be available to people who can afford premium tools and resources. Your donation helps create access for someone who is ready to show up, learn, and take ownership of their financial future.
              <br/><br/>
              <span className="text-accent font-bold text-2xl">And with The Score Machine matching every dollar donated, your support goes twice as far.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/donate" className="px-10 py-5 rounded-full bg-accent hover:bg-accentHover text-white font-bold text-xl transition-all shadow-gold">
                Donate Now
              </Link>
              <Link to="/sponsor-match" className="px-10 py-5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xl transition-all border border-white/20">
                Become a Sponsor
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. Final Disclaimer */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <p className="text-sm text-gray-500 leading-relaxed">
            <strong>Important Disclaimer:</strong> Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, tools, and classroom-style learning opportunities. We do not provide credit repair services. We do not guarantee credit score increases, approvals, funding, deletions, or specific financial outcomes. All education and tools are provided for informational purposes only. Participants are responsible for their own actions, decisions, and results. Success requires participation, consistency, and personal responsibility.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;