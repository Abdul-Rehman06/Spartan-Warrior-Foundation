import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, BookOpen, Handshake, Heart, Shield, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/95 z-0"></div>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Built to Equip People, <span className="text-accent">Not Carry Them</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Spartan Warrior Foundation was created to give people access to financial literacy education, credit education resources, classroom-style learning, and tools so they can better understand their financial profile and take ownership of their next step.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-white font-medium text-lg text-left md:text-center">
              <p className="text-red-400 font-bold mb-2">We are not a credit repair company. We are not here to do the work for people.</p>
              <p className="mb-2">We are here to provide the classroom, the tools, the education, and the structure.</p>
              <p className="text-accent font-bold">The participant must show up and take action.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Foundation */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6 text-lg text-primary/80 leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">About Spartan Warrior Foundation</h2>
            
            <p>Spartan Warrior Foundation is an education-focused nonprofit organization built to help individuals who want to learn but may not have access to the right tools, education, or structure on their own.</p>
            
            <p>Too many people are told to fix their finances without ever being taught how the financial system works.</p>
            
            <ul className="space-y-4 my-8 pl-4 border-l-4 border-accent bg-gray-50 p-6 rounded-r-xl">
                <li className="flex items-start"><AlertCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5"/> They are told to fix their credit without being taught how to understand a credit report.</li>
                <li className="flex items-start"><AlertCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5"/> They are told to apply, build, grow, and make better decisions without being shown how to review the information that may affect those decisions.</li>
            </ul>

            <p>Spartan Warrior Foundation was created to help bridge that gap.</p>
            
            <p>Our mission is to provide access to financial literacy education, credit education resources, classroom-style learning, and tools so people can become more educated, more aware, and more prepared to take action for themselves.</p>
            
            <div className="text-center font-bold text-xl text-primary mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <p className="mb-2 text-primary/80">We do not believe in creating dependency.</p>
                <p className="text-accent text-2xl">We believe in creating access.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5 order-2 md:order-1">
                <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-premium">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
                    <h3 className="text-2xl font-bold mb-6 text-accent">The Starting Point</h3>
                    <ul className="space-y-4 font-medium text-lg">
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-accent"/> A classroom.</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-accent"/> A toolset.</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-accent"/> A structure.</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-accent"/> A place to learn.</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-accent"/> An opportunity to take ownership.</li>
                    </ul>
                </div>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2 space-y-6 text-lg text-primary/80 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About the Founder</h2>
              <p>Spartan Warrior Foundation was founded by Ali Badi, a builder, educator, software founder, and entrepreneur who understands what it means to come from limited resources and have to figure the system out the hard way.</p>
              <p>Ali did not come from a place where everything was handed to him. His journey was built through pressure, work, mistakes, learning, rebuilding, and refusing to quit.</p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 my-6">
                  <p className="font-bold text-primary mb-4">Over time, Ali learned something important: many people are not struggling because they are lazy, careless, or unwilling to change. Many people are struggling because they were never taught.</p>
                  <ul className="space-y-2 text-primary/70">
                      <li>• They were never taught how money works.</li>
                      <li>• They were never taught how credit works.</li>
                      <li>• They were never taught how lenders think.</li>
                      <li>• They were never taught how to read what is being reported about them.</li>
                      <li>• They were never taught how their financial profile can affect their opportunities.</li>
                  </ul>
              </div>

              <p>Ali built his career around education, software, systems, and helping people understand what is in front of them. Through that work, he saw that the people who often need financial education and credit education the most are usually the people who cannot afford access to the tools, classrooms, and resources that could help them.</p>
              <p>That is why Spartan Warrior Foundation was created. This foundation was built to give people a starting point.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Started & Philosophy */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6 text-lg text-primary/80"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Why This Foundation Exists</h2>
            <p className="font-medium text-primary">Spartan Warrior Foundation exists because financial confusion keeps too many people stuck.</p>
            <ul className="space-y-3">
                <li>• People are applying blindly.</li>
                <li>• People are getting denied without understanding why.</li>
                <li>• People are looking at credit reports without understanding what the information means.</li>
                <li>• People are making financial decisions without being taught how those decisions may affect them later.</li>
                <li>• People are trying to move forward, but they do not know where to start.</li>
            </ul>
            <p className="font-bold text-xl text-primary mt-6">We believe people deserve the chance to understand the system before they are judged by it.</p>
            <p>The foundation was created to help individuals gain access to the type of education, tools, and structure that can make financial information easier to understand.</p>
            
            <div className="mt-8 bg-red-50 text-red-800 p-6 rounded-2xl border border-red-100">
                <p className="font-bold mb-2">We are not promising shortcuts.</p>
                <p className="font-bold mb-2">We are not promising guarantees.</p>
                <p className="font-bold mb-2">We are not promising overnight success.</p>
                <p className="font-bold mt-4 text-primary">We are creating access for people who are ready to show up, learn, and do the work.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-premium"
          >
            <h2 className="text-3xl font-bold text-accent mb-6">We Are Not Here to Carry People.<br/>We Are Here to Equip Them.</h2>
            <p className="mb-6 text-white/80">Spartan Warrior Foundation is built on a simple belief: People need tools, education, structure, and access. But they also need accountability.</p>
            
            <div className="space-y-4 mb-8">
                <p className="text-accent font-medium">This foundation is not designed to do the work for people.</p>
                <p className="text-white/80">We do not hold someone's hand and do everything for them. We do not tell people that success will happen just because they received access.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-xl">We provide the classroom.</div>
                <div className="bg-white/10 p-4 rounded-xl">We provide the tools.</div>
                <div className="bg-white/10 p-4 rounded-xl">We provide the education.</div>
                <div className="bg-white/10 p-4 rounded-xl">We provide the structure.</div>
            </div>

            <div className="space-y-2 font-bold text-lg">
                <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-accent"/> The participant must show up.</p>
                <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-accent"/> The participant must learn.</p>
                <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-accent"/> The participant must take action.</p>
                <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-accent"/> The participant must stay consistent.</p>
            </div>

            <p className="mt-8 text-2xl font-bold text-accent text-center bg-white/5 py-4 rounded-2xl">Access creates opportunity. Action creates progress.</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
                >
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">What We Provide</h2>
                    <p className="text-primary/70 mb-8">Spartan Warrior Foundation provides access to educational resources and tools that help individuals better understand their financial profile and financial decision-making.</p>
                    
                    <ul className="space-y-4 text-primary/80 font-medium">
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Financial literacy education</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Credit education resources</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Classroom-style learning</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Software access when available through sponsorship</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Credit report awareness education</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Budgeting and financial organization resources</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Educational workshops</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Community-based learning opportunities</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Structured learning materials</li>
                        <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" /> Supportive education for people who want to learn how to do the work themselves</li>
                    </ul>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-red-100"
                >
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">What We Do Not Do</h2>
                    <h3 className="text-lg font-bold text-red-600 mb-6">We Are Not a Credit Repair Company</h3>
                    
                    <ul className="space-y-4 text-primary/80 font-medium">
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> Spartan Warrior Foundation does not provide credit repair services.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not fix credit.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not remove items from credit reports.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not dispute accounts on behalf of participants.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not promise deletions.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not guarantee credit score increases.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not guarantee approvals, loans, funding, or financial outcomes.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" /> We do not provide legal, tax, investment, or financial advice.</li>
                    </ul>

                    <div className="mt-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <p className="font-bold text-primary">We are an education-focused nonprofit organization.</p>
                        <p className="text-primary/70 mt-2">Our purpose is to provide education, tools, access, and structure so people can learn how to better understand their own financial profile.</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-accent mb-4">Our Core Values</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">The principles that guide everything we build, teach, and provide.</p>
            </div>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {/* Value 1 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <BookOpen className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Education First</h3>
                    <p className="text-white/70">We believe people deserve to understand the system before they are judged by it. Education gives people the ability to see what is happening, ask better questions, and make more informed decisions.</p>
                </motion.div>
                
                {/* Value 2 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Handshake className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Access Matters</h3>
                    <p className="text-white/70">Financial literacy and credit education should not only be available to people who can afford premium tools or private education. Access can change the starting point for someone who is ready to learn.</p>
                </motion.div>

                {/* Value 3 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Users className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Accountability Creates Progress</h3>
                    <p className="text-white/70">We provide tools, education, and structure, but participants must show up and do the work. Progress requires action, consistency, and personal responsibility.</p>
                </motion.div>

                {/* Value 4 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Heart className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Dignity Over Shame</h3>
                    <p className="text-white/70">Many people feel embarrassed by their financial situation. We believe education should empower people, not shame them.</p>
                </motion.div>

                {/* Value 5 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Search className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Transparency Builds Trust</h3>
                    <p className="text-white/70">Donors, sponsors, and participants deserve clarity. We are committed to showing how support is used and how programs create access.</p>
                </motion.div>

                {/* Value 6 */}
                <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Shield className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold mb-4">Tools Create Opportunity</h3>
                    <p className="text-white/70">The right tools can help people understand where they stand. When paired with education and action, tools can help people make better decisions.</p>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Score Machine & Who We Serve */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Score Machine Partnership */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-8 md:p-16 text-center"
            >
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                    Sponsor Partnership
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Sponsor Partnership With The Score Machine</h2>
                <p className="text-lg text-primary/80 max-w-4xl mx-auto mb-10">
                    Through a sponsor partnership with The Score Machine, Spartan Warrior Foundation is able to increase the amount of support available to participants. For every dollar donated, The Score Machine will match one dollar to help provide additional financial literacy education, credit education resources, software access, classroom-style learning, and structured tools.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-primary/60 font-medium mb-2">You Give</p>
                        <p className="text-3xl font-bold text-primary">$500</p>
                        <ArrowRight className="w-6 h-6 text-accent mx-auto my-4 rotate-90 md:rotate-0" />
                        <p className="text-primary/60 font-medium mb-2">Becomes</p>
                        <p className="text-3xl font-bold text-accent">$1,000 <span className="text-lg text-primary/50">in support</span></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-primary/60 font-medium mb-2">You Give</p>
                        <p className="text-3xl font-bold text-primary">$1,000</p>
                        <ArrowRight className="w-6 h-6 text-accent mx-auto my-4 rotate-90 md:rotate-0" />
                        <p className="text-primary/60 font-medium mb-2">Becomes</p>
                        <p className="text-3xl font-bold text-accent">$2,000 <span className="text-lg text-primary/50">in support</span></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-primary/60 font-medium mb-2">You Give</p>
                        <p className="text-3xl font-bold text-primary">$5,000</p>
                        <ArrowRight className="w-6 h-6 text-accent mx-auto my-4 rotate-90 md:rotate-0" />
                        <p className="text-primary/60 font-medium mb-2">Becomes</p>
                        <p className="text-3xl font-bold text-accent">$10,000 <span className="text-lg text-primary/50">in support</span></p>
                    </div>
                </div>
            </motion.div>

            {/* Who We Serve & Commitment */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold text-primary mb-6">Who We Are Here to Help</h2>
                    <p className="text-lg text-primary/80 mb-8">Spartan Warrior Foundation is designed for individuals who want to learn but may not have access to the right educational resources, software tools, or structured guidance.</p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Want to better understand their financial profile</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Want to learn how credit reports work</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Need access to financial literacy education</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Feel overwhelmed by the financial system</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Are trying to become more organized before making financial decisions</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Cannot afford premium tools or education on their own</li>
                        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Are willing to show up, learn, and take responsibility</li>
                    </ul>

                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <p className="font-bold text-primary">This foundation is for people who are ready to participate.</p>
                        <p className="text-primary mt-2">It is for people who understand that access is not the finish line. Access is the starting point.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-primary text-white p-10 rounded-3xl shadow-premium"
                >
                    <h2 className="text-3xl font-bold text-accent mb-6">Our Commitment</h2>
                    <p className="text-lg text-white/90 mb-8">Spartan Warrior Foundation is committed to helping individuals gain access to education, tools, and structure that can help them better understand their financial life.</p>
                    
                    <ul className="space-y-6 text-lg font-medium">
                        <li className="flex items-center"><ArrowRight className="w-5 h-5 text-accent mr-3" /> We are committed to operating with transparency.</li>
                        <li className="flex items-center"><ArrowRight className="w-5 h-5 text-accent mr-3" /> We are committed to protecting the mission.</li>
                        <li className="flex items-center"><ArrowRight className="w-5 h-5 text-accent mr-3" /> We are committed to being clear about what we do and what we do not do.</li>
                        <li className="flex items-center"><ArrowRight className="w-5 h-5 text-accent mr-3" /> We are committed to helping people learn how to do the work for themselves.</li>
                    </ul>

                    <div className="mt-10 pt-8 border-t border-white/20">
                        <p className="text-xl font-bold text-accent">We believe that when people are given access, education, and structure, they have a better opportunity to move forward with confidence.</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Help Us Create <span className="text-accent">Access</span></h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Spartan Warrior Foundation was built for people who are ready to learn, show up, and take ownership. Your support helps provide access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who may not be able to afford them on their own.
            </p>
            <p className="text-lg font-bold text-primary">
              And with The Score Machine matching every dollar donated, your contribution can create twice the impact.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Donate Now</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </Link>
                <Link to="/programs" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold tracking-wide hover:bg-gray-50 transition-all hover:shadow-premium">
                    <span className="text-lg">View Our Programs</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
