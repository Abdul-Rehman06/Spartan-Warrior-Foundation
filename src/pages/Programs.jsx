import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, BookOpen, ShieldCheck, Laptop, GraduationCap, Wrench, Search, ChevronRight } from 'lucide-react';
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

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/95 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Programs Built to Educate, Equip, and <span className="text-accent">Create Access</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Spartan Warrior Foundation provides financial literacy education, credit education resources, classroom-style learning, and access to tools for individuals who are ready to show up, learn, and do the work for themselves.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white font-medium text-lg text-left">
                <div className="flex items-center"><AlertCircle className="w-5 h-5 text-red-400 mr-3 shrink-0" /> We do not fix credit.</div>
                <div className="flex items-center"><AlertCircle className="w-5 h-5 text-red-400 mr-3 shrink-0" /> We do not do the work for people.</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> The participant must take action.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6 text-lg text-primary/80 leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">What Our Programs Are Designed to Do</h2>
            
            <p className="text-xl font-medium text-primary text-center mb-10">Spartan Warrior Foundation was created to help individuals gain access to financial education and tools they may not be able to afford on their own.</p>
            
            <p>Our programs are designed to help people better understand their financial profile, credit reports, financial habits, and decision-making process.</p>
            
            <p className="font-bold text-primary">Many people are trying to move forward financially, but they do not know where to start.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 mr-2 shrink-0" />
                    <span>They may not understand what is on their credit report.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 mr-2 shrink-0" />
                    <span>They may not understand how utilization works.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 mr-2 shrink-0" />
                    <span>They may not understand how inquiries, payment history, accounts, balances, or reporting differences can affect them.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 mr-2 shrink-0" />
                    <span>They may not understand what lenders may review before making a decision.</span>
                </div>
            </div>

            <p className="text-xl font-bold text-primary mt-12 mb-6">Our programs give people a place to start.</p>
            <div className="flex flex-wrap gap-4">
                <span className="bg-primary/5 text-primary px-6 py-3 rounded-full font-bold">A classroom.</span>
                <span className="bg-primary/5 text-primary px-6 py-3 rounded-full font-bold">A toolset.</span>
                <span className="bg-primary/5 text-primary px-6 py-3 rounded-full font-bold">A structure.</span>
                <span className="bg-primary/5 text-primary px-6 py-3 rounded-full font-bold">A learning path.</span>
            </div>
            <p className="mt-6 font-medium">And access to resources that can help them become more informed.</p>
          </motion.div>
        </div>
      </section>

      {/* The Programs (Detailed) */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Program 1 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
            >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Financial Literacy Education Program</h2>
                        <p className="text-primary/70 mb-6">Designed to help individuals build a stronger foundation in basic financial understanding.</p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-primary mb-3">Who This Is For</h3>
                            <p className="text-sm text-primary/80">Individuals who want to become more educated about their financial life but may not have access to paid education, coaching, or structured learning resources. Ready to learn and take responsibility.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-primary/80 mb-8">This program focuses on helping participants understand money habits, budgeting, financial organization, decision-making, and the importance of knowing where they stand before making major financial moves.</p>
                        <h3 className="text-xl font-bold text-primary mb-6">What Participants May Learn:</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Budgeting basics</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Financial organization</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Understanding income and expenses</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Understanding debt</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Building better financial habits</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Preparing before applying for credit</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Avoiding blind financial decisions</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Consistency and accountability</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Program 2 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-premium relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                            <Search className="w-8 h-8 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Credit Education & Report Awareness Program</h2>
                        <p className="text-white/70 mb-6">Helps individuals learn how to better understand their credit reports and the information being reported about them.</p>
                        
                        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                            <h3 className="font-bold text-red-300 mb-3 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> Educational Only</h3>
                            <ul className="text-sm text-white/80 space-y-2">
                                <li>• We do not repair credit.</li>
                                <li>• We do not dispute accounts.</li>
                                <li>• We do not remove items.</li>
                                <li>• We do not guarantee scores/loans.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-white/90 mb-6">Many people look at a credit score but never learn how to review the full picture behind that score. This program teaches participants how to look beyond the surface and better understand the data inside their credit profile.</p>
                        <h3 className="text-xl font-bold text-accent mb-6">What Participants May Learn:</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How credit reports are structured</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How to review accounts</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How utilization affects profiles</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How inquiries are reviewed</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Why payment history matters</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How negative items affect reports</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> How bureau differences happen</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Organizing before decisions</div>
                        </div>
                        <p className="font-bold text-accent bg-white/5 p-4 rounded-xl inline-block">The goal is to educate participants so they can better understand their own information and make more informed decisions.</p>
                    </div>
                </div>
            </motion.div>

            {/* Program 3 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
            >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Sponsored Access Program</h2>
                        <p className="text-primary/70 mb-6">Helps eligible participants receive access to educational tools, software resources, and classroom-style learning that they may not be able to afford on their own.</p>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-primary/80 mb-8">Through donor support and the dollar-for-dollar match from The Score Machine, Spartan Warrior Foundation can help provide access to resources that support financial literacy and credit education.</p>
                        
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-xl font-bold text-primary mb-6">How Sponsored Access Works</h3>
                            <div className="space-y-4">
                                <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                                    <p className="font-medium text-primary/80">Donors contribute to Spartan Warrior Foundation.</p>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                                    <p className="font-medium text-primary/80">The Score Machine matches donations dollar-for-dollar.</p>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                                    <p className="font-medium text-primary/80">The combined support helps provide access to educational tools, classroom resources, and learning materials.</p>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                                    <p className="font-medium text-primary/80">Eligible participants receive access based on program availability and foundation guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Program 4 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
            >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Classroom Access & Learning Support</h2>
                        <p className="text-primary/70 mb-6">Spartan Warrior Foundation believes access is only valuable when people actually use it. That is why classroom-style learning is an important part of the foundation's mission.</p>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-primary/80 mb-8">Participants may receive access to educational classes, trainings, workshops, or learning resources designed to help them better understand financial literacy, credit education, and financial readiness.</p>
                        
                        <h3 className="text-xl font-bold text-primary mb-6">What Classroom Access May Include:</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Live or recorded educational classes</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Step-by-step learning resources</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Credit education training</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Financial literacy workshops</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Software walkthroughs</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Participant learning materials</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Community education opportunities</div>
                        </div>

                        <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                            <h3 className="font-bold text-primary mb-4 text-lg">Participant Responsibility</h3>
                            <p className="mb-4 text-primary/80">The classroom is provided. The tools are provided. The education is provided.</p>
                            <div className="flex flex-wrap gap-4 mb-4">
                                <span className="bg-white px-4 py-2 rounded-lg font-bold text-primary shadow-sm border border-gray-100">The participant must show up.</span>
                                <span className="bg-white px-4 py-2 rounded-lg font-bold text-primary shadow-sm border border-gray-100">The participant must learn.</span>
                                <span className="bg-white px-4 py-2 rounded-lg font-bold text-primary shadow-sm border border-gray-100">The participant must take action.</span>
                                <span className="bg-white px-4 py-2 rounded-lg font-bold text-primary shadow-sm border border-gray-100">The participant must stay consistent.</span>
                            </div>
                            <p className="font-bold text-accent">We are not here to carry people. We are here to equip them.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Program 5 */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
            >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Laptop className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Tools for Self-Education</h2>
                        <p className="text-primary/70 mb-6">Access to tools that help individuals better understand their own financial profile.</p>
                        
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h3 className="font-bold text-red-800 mb-2">Important Note</h3>
                            <p className="text-sm text-red-700">Tools do not create success by themselves. A tool is only useful when the person uses it, learns from it, and takes action. The foundation provides access. The participant creates progress through action.</p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-primary/80 mb-8">The purpose of these tools is not to do the work for someone. The purpose is to help people see, learn, and understand the information in front of them.</p>
                        
                        <h3 className="text-xl font-bold text-primary mb-6">Tools May Help Participants Understand:</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Credit report data</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Account information</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Utilization</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Inquiries</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Payment history</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Negative items</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Bureau differences</div>
                            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Financial readiness</div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </section>

      {/* Eligibility & Process */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            
            {/* Eligibility */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Who Can Apply for Program Access</h2>
                <p className="text-lg text-primary/80 mb-8">Spartan Warrior Foundation is designed to support individuals who need access to financial literacy education, credit education, tools, or classroom resources but may not be able to afford them on their own.</p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center"><CheckCircle2 className="w-6 h-6 mr-2" /> Program access may be appropriate for individuals who:</h3>
                    <ul className="space-y-3 bg-green-50 p-6 rounded-2xl border border-green-100 text-green-900 font-medium">
                        <li>• Want to better understand their financial profile</li>
                        <li>• Need access to financial literacy education</li>
                        <li>• Want to learn how credit reports work</li>
                        <li>• Feel overwhelmed by the financial system</li>
                        <li>• Cannot afford premium tools or education</li>
                        <li>• Are willing to show up and participate</li>
                        <li>• Are ready to take responsibility for their learning</li>
                        <li>• Need a structured place to start</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center"><AlertCircle className="w-6 h-6 mr-2" /> Program access is NOT for individuals who:</h3>
                    <ul className="space-y-3 bg-red-50 p-6 rounded-2xl border border-red-100 text-red-900 font-medium">
                        <li>• Want someone else to do the work for them</li>
                        <li>• Expect guaranteed results</li>
                        <li>• Are looking for credit repair services</li>
                        <li>• Want promises of approvals, funding, or deletions</li>
                        <li>• Are not willing to participate or learn</li>
                        <li>• Expect tools to create results without action</li>
                    </ul>
                </div>
            </motion.div>

            {/* Process */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary text-white p-10 rounded-[2.5rem] shadow-premium"
            >
                <h2 className="text-3xl font-bold text-accent mb-8">How the Process Works</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-accent text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl">
                            <h3 className="font-bold text-accent mb-1">Apply or Request Access</h3>
                            <p className="text-sm text-white/80">Individuals can complete a program interest form or request access through the foundation.</p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-white text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl">
                            <h3 className="font-bold text-white mb-1">Review</h3>
                            <p className="text-sm text-white/80">The foundation reviews the request based on program availability, need, and eligibility guidelines.</p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-white text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl">
                            <h3 className="font-bold text-white mb-1">Sponsored Access</h3>
                            <p className="text-sm text-white/80">If approved and resources are available, the participant may receive access to education, tools, classroom resources, or learning materials.</p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-white text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">4</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl">
                            <h3 className="font-bold text-white mb-1">Show Up and Learn</h3>
                            <p className="text-sm text-white/80">Participants are expected to use the resources, attend available training, and take responsibility for their own learning.</p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-accent text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">5</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl border-accent/50">
                            <h3 className="font-bold text-accent mb-1">Take Action</h3>
                            <p className="text-sm text-white/80">The goal is for participants to apply what they learn and become more informed about their financial profile and decision-making.</p>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
      </section>

      {/* What Success Means */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-4xl font-bold text-primary mb-8">Success Starts With <span className="text-accent">Showing Up</span></h2>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <span className="bg-red-50 text-red-800 px-6 py-3 rounded-xl border border-red-100 font-medium">Not guaranteed score increase</span>
                    <span className="bg-red-50 text-red-800 px-6 py-3 rounded-xl border border-red-100 font-medium">Not guaranteed approvals</span>
                    <span className="bg-red-50 text-red-800 px-6 py-3 rounded-xl border border-red-100 font-medium">Not guaranteed funding</span>
                </div>

                <p className="text-2xl font-bold text-primary mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    Success means the participant becomes more educated, more aware, more organized, and better prepared to make informed decisions.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-8">Our goal is to help participants:</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Understand their financial profile</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Learn how credit reports work</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Stop applying blindly</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Become more organized</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Ask better questions</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Make more informed decisions</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Take responsibility for education</div>
                    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Build stronger financial awareness</div>
                </div>

                <div className="bg-primary text-white p-8 rounded-2xl inline-block text-xl font-bold shadow-premium">
                    <p className="mb-2">The foundation creates access.</p>
                    <p className="text-accent">The participant must create momentum.</p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Sponsor Match & Call to Action */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Sponsor Match Info */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 text-center border border-primary/10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Donation Helps Fund Program Access</h2>
                <p className="text-lg text-primary/80 max-w-3xl mx-auto mb-8">
                    Every donation helps Spartan Warrior Foundation create access for individuals who may not be able to afford education, tools, or classroom resources on their own. And because The Score Machine matches every dollar donated, your support can go twice as far.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Financial literacy education</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Credit education resources</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Sponsored software access</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Classroom-style training</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Learning materials</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Workshops</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Community education</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm">Participant support resources</div>
                </div>

                <p className="text-xl font-bold text-accent">Your support helps someone receive the tools and education needed to stop guessing and start learning.</p>
            </motion.div>

            {/* CTA */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Help Someone Get Access to the Tools and Education They Need</h2>
                <p className="text-xl text-primary/80 mb-10">
                    Spartan Warrior Foundation exists to create access for people who are ready to show up, learn, and take ownership of their financial future. Your donation can help provide financial literacy education, credit education resources, classroom-style learning, and tools to someone who may not be able to afford them alone.
                </p>
                
                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                        <span className="relative z-10 text-lg">Donate Now</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                    </Link>
                    <Link to="/contact" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold tracking-wide hover:bg-gray-50 transition-all hover:shadow-premium">
                        <span className="text-lg">Apply for Program Access</span>
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
