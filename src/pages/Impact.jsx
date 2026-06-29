import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BarChart3, Users, Target, Activity, HeartHandshake, Eye, MessageSquare, Briefcase, CalendarDays, CheckCircle2, AlertCircle } from 'lucide-react';
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

const MetricCard = ({ title, value, label }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <h4 className="text-primary/60 font-medium text-sm mb-2">{title}</h4>
        <div className="text-3xl font-bold text-primary my-2">{value}</div>
        {label && <p className="text-accent font-medium text-sm">{label}</p>}
    </div>
);

const Impact = () => {
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8">
                <ShieldCheck className="w-4 h-4 text-accent" />
                100% Transparent Reporting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Transparency Builds <span className="text-accent">Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Spartan Warrior Foundation is committed to showing donors, sponsors, partners, and the community how support is used to create access to financial literacy education, credit education resources, classroom-style learning, and tools.
            </p>
            <div className="inline-block bg-accent/10 border border-accent/20 px-8 py-4 rounded-2xl text-accent font-bold text-xl shadow-premium">
              When someone gives, they deserve to understand the impact.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment & Why it Matters */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Commitment */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6 text-lg text-primary/80"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 border border-primary/10">
                <HeartHandshake className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
            <p className="font-medium text-primary text-xl">Spartan Warrior Foundation believes trust is built through clarity.</p>
            
            <ul className="space-y-4 my-8">
                <li className="flex items-start"><Eye className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-bold text-primary mr-1">Donors</span> should know where their support is going.</li>
                <li className="flex items-start"><Eye className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-bold text-primary mr-1">Sponsors</span> should understand how their contributions are being used.</li>
                <li className="flex items-start"><Eye className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-bold text-primary mr-1">Participants</span> should understand what the foundation provides and what they are responsible for.</li>
                <li className="flex items-start"><Eye className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-bold text-primary mr-1">The community</span> should see that this mission is focused on education, access, accountability, and impact.</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p>We are committed to operating with transparency as we grow, including reporting how donations, sponsor matches, educational access, and program support are used.</p>
            </div>
          </motion.div>

          {/* Why Transparency Matters */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-primary text-white rounded-[2.5rem] p-10 md:p-12 shadow-premium relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-accent mb-6">Why This Page Exists</h2>
                <p className="text-lg text-white/90 mb-8">Too many organizations ask for support without clearly explaining what happens after someone donates. We believe donors deserve better.</p>
                
                <p className="text-xl font-bold mb-8">Spartan Warrior Foundation is building a system where impact can be tracked, reported, and understood.</p>
                
                <div className="space-y-6 mb-8">
                    <p className="text-accent font-medium uppercase tracking-wider text-sm">Our Mission is to Turn Support into Access:</p>
                    <div className="grid grid-cols-2 gap-4 font-medium">
                        <div className="bg-white/10 p-4 rounded-xl flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-accent"/> Access to education</div>
                        <div className="bg-white/10 p-4 rounded-xl flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-accent"/> Access to tools</div>
                        <div className="bg-white/10 p-4 rounded-xl flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-accent"/> Access to classroom learning</div>
                    </div>
                </div>

                <p className="text-lg font-bold bg-white/5 py-4 px-6 rounded-xl border border-white/10 text-center">
                    Access to resources that help people better understand their financial profile.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Donations Are Used & Sponsor Match */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Impact Starts With Access */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-16 text-center shadow-sm"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Impact Starts With Access</h2>
                <p className="text-lg text-primary/80 mb-6">At Spartan Warrior Foundation, impact is not only measured by money raised.</p>
                <p className="text-xl font-bold text-accent mb-8">Impact is measured by access created.</p>
                
                <ul className="space-y-4 text-left max-w-3xl mx-auto mb-10">
                    <li className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-medium text-primary">It is measured by people receiving education they may not have been able to afford.</span></li>
                    <li className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-medium text-primary">It is measured by people learning how to better understand their financial profile.</span></li>
                    <li className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <span className="font-medium text-primary">It is measured by participants becoming more aware, more organized, and more prepared to make informed decisions.</span></li>
                </ul>
                
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 inline-block">
                    <p className="font-bold text-primary mb-2">We do not measure success by guaranteed outcomes.</p>
                    <p className="font-bold text-accent">We measure success by education, access, participation, and action.</p>
                </div>
            </motion.div>

            {/* How Donations Are Used */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How Your Donation Helps</h2>
                <p className="text-lg text-primary/80 mb-12">Donations to Spartan Warrior Foundation may be used to support programs, education, tools, and resources that help individuals gain access to financial literacy and credit education.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Financial literacy education</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Credit education resources</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Sponsored software access</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Classroom-style learning</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Educational workshops</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Learning materials</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Participant onboarding</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Community outreach</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Program administration</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Technology & platform</div>
                    <div className="bg-white p-4 rounded-xl font-medium text-primary shadow-sm border border-gray-100 flex items-center col-span-2"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Impact tracking and reporting</div>
                </div>

                <div className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10">
                    <p className="text-xl font-bold text-primary">The goal is to use donor support in a way that creates real access for individuals who may not be able to afford these resources on their own.</p>
                </div>
            </motion.div>

            {/* Sponsor Match */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-16 text-center shadow-sm"
            >
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                    Dollar-for-Dollar Match
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Score Machine Sponsor Match</h2>
                <p className="text-lg text-primary/80 max-w-4xl mx-auto mb-10">
                    Spartan Warrior Foundation is supported through a dollar-for-dollar sponsor match from The Score Machine. For every dollar donated, The Score Machine matches one dollar to increase the total support available for education, tools, and program access.
                </p>
                
                <p className="text-2xl font-bold text-primary mb-10">This means every donation has the ability to go twice as far.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-[30px] -mr-12 -mt-12"></div>
                        <p className="text-sm text-primary/60 font-medium mb-1">Give $250</p>
                        <p className="text-2xl font-bold text-accent">$500 <span className="text-xs text-primary/50 block">in support</span></p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-[30px] -mr-12 -mt-12"></div>
                        <p className="text-sm text-primary/60 font-medium mb-1">Give $500</p>
                        <p className="text-2xl font-bold text-accent">$1,000 <span className="text-xs text-primary/50 block">in support</span></p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-[30px] -mr-12 -mt-12"></div>
                        <p className="text-sm text-primary/60 font-medium mb-1">Give $1,000</p>
                        <p className="text-2xl font-bold text-accent">$2,000 <span className="text-xs text-primary/50 block">in support</span></p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-[30px] -mr-12 -mt-12"></div>
                        <p className="text-sm text-primary/60 font-medium mb-1">Give $5,000</p>
                        <p className="text-2xl font-bold text-accent">$10,000 <span className="text-xs text-primary/50 block">in support</span></p>
                    </div>
                </div>

                <p className="text-lg font-medium text-primary/80 max-w-3xl mx-auto">This match helps the foundation provide more access, more education, and more resources to people who are ready to show up and do the work.</p>
            </motion.div>

        </div>
      </section>

      {/* Impact Tracker Dashboard */}
      <section className="py-24 px-4 md:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                    <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Impact Tracker</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    As Spartan Warrior Foundation grows, we will track and report the impact created through donations, sponsor matching, and program participation.
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                    <Activity className="w-4 h-4 mr-2" /> Live reporting metrics coming soon
                </div>
            </div>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* Financial Metrics */}
                <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-premium">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-green-600 font-bold text-xl">$</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-6">Funding & Support</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Total Donations Raised</p>
                            <p className="text-3xl font-bold text-primary">TBD</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">The Score Machine Match</p>
                            <p className="text-3xl font-bold text-primary">TBD</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Total Program Support Created</p>
                            <p className="text-3xl font-bold text-accent">TBD</p>
                        </div>
                    </div>
                </motion.div>

                {/* Access Metrics */}
                <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-premium">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-6">Participant Access</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Participants Sponsored</p>
                            <p className="text-3xl font-bold text-primary">--</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Education Opportunities Provided</p>
                            <p className="text-3xl font-bold text-primary">--</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Software Scholarships Provided</p>
                            <p className="text-3xl font-bold text-accent">--</p>
                        </div>
                    </div>
                </motion.div>

                {/* Community Metrics */}
                <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-premium">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                        <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-6">Community & Learning</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Classroom Sessions / Workshops</p>
                            <p className="text-3xl font-bold text-primary">--</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Learning Resources Distributed</p>
                            <p className="text-3xl font-bold text-primary">--</p>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div>
                            <p className="text-sm text-primary/60 font-medium mb-1">Community Outreach Efforts</p>
                            <p className="text-3xl font-bold text-accent">--</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <p className="text-center text-white/60 mt-12 text-sm max-w-2xl mx-auto">
                This section will be updated monthly or quarterly as the foundation begins collecting donations and serving participants.
            </p>
        </div>
      </section>

      {/* What Impact Means & What We Track */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            {/* What Impact Means */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Impact Is More Than a Number</h2>
                <p className="text-lg text-primary/80 mb-8">For Spartan Warrior Foundation, impact is not only measured by dollars raised. Impact is measured by access created.</p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <p className="font-medium text-primary">It is measured by people who finally learn how to read what is in front of them.</p></div>
                    <div className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <p className="font-medium text-primary">It is measured by people who stop applying blindly.</p></div>
                    <div className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <p className="font-medium text-primary">It is measured by people who begin to understand their financial profile.</p></div>
                    <div className="flex items-start"><ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 shrink-0"/> <p className="font-medium text-primary">It is measured by people who become more organized, more informed, and more prepared to make decisions.</p></div>
                </div>

                <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                    <p className="font-bold text-primary mb-2">We do not measure success by guarantees.</p>
                    <p className="font-bold text-accent">We measure success by education, participation, awareness, and action.</p>
                </div>
            </motion.div>

            {/* What We Track */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-50 border border-gray-200 p-10 rounded-[2.5rem]"
            >
                <h2 className="text-3xl font-bold text-primary mb-6">What We Aim to Track</h2>
                <p className="text-lg text-primary/80 mb-8">Spartan Warrior Foundation aims to track the work in a clear and responsible way.</p>
                
                <h3 className="font-bold text-primary mb-4">We aim to report:</h3>
                <ul className="space-y-3 text-primary/80 mb-8">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How much money was donated</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How much was matched by The Score Machine</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How much total program support was created</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How many individuals received sponsored access</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How many people received education or resources</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How many classes/workshops were supported</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How many tools/software access were provided</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> How donations helped expand the mission</li>
                </ul>

                <p className="font-bold text-primary">This helps donors see that their support is connected to real access and real program activity.</p>
            </motion.div>

        </div>
      </section>

      {/* Participant Responsibility & Clear Expectations */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            
            {/* Responsibility */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-accent mb-6">Access Creates Opportunity. Action Creates Progress.</h2>
                <p className="text-lg text-white/90">Spartan Warrior Foundation provides education, tools, classroom access, and structure.</p>
                
                <div className="space-y-2 font-bold text-lg text-white/90 my-8">
                    <p>But the participant must show up.</p>
                    <p>The participant must learn.</p>
                    <p>The participant must participate.</p>
                    <p>The participant must take action.</p>
                </div>

                <p className="text-red-300 font-bold mb-2">We do not do the work for people.</p>
                <p className="text-red-300 font-bold mb-8">We do not promise results just because someone receives access.</p>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <p className="font-bold text-xl mb-2">The foundation creates the opportunity.</p>
                    <p className="text-accent font-medium">The participant creates progress through effort, consistency, and responsibility.</p>
                </div>
            </motion.div>

            {/* Clear Expectations */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Clear Expectations</h2>
                <p className="text-lg font-bold text-accent mb-8">Spartan Warrior Foundation is an education-focused nonprofit organization.</p>
                
                <ul className="space-y-4 text-white/80 font-medium mb-8">
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not provide credit repair services.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not fix credit.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not remove items from credit reports.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not dispute accounts on behalf of participants.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not guarantee credit score increases.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not guarantee approvals, loans, funding, or financial outcomes.</li>
                    <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 shrink-0" /> We do not provide legal, tax, investment, or financial advice.</li>
                </ul>

                <p className="text-xl font-bold text-white text-center py-4 border-t border-white/20">
                    Our role is to provide education, access, tools, and structure.
                </p>
            </motion.div>

        </div>
      </section>

      {/* Donor Trust & Stories & Schedule & Funders */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Donor Trust */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center max-w-4xl mx-auto"
            >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">What Donors Can Expect</h2>
                <p className="text-xl text-primary/80 mb-12">When you support Spartan Warrior Foundation, you can expect the foundation to stay focused on the mission.</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-left mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Clear communication about the mission</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Transparent explanation of how donations may be used</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Sponsor match information from The Score Machine</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Updates as programs grow</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Impact tracking as participants are served</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">Honest language with no false promises</span></div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center md:col-span-2"><CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0" /> <span className="font-medium text-primary">A commitment to education, access, and accountability</span></div>
                </div>

                <p className="text-xl font-bold text-primary bg-white px-8 py-6 rounded-2xl shadow-premium inline-block">
                    We want donors to feel confident that their support is helping create access for people who are ready to learn.
                </p>
            </motion.div>

            {/* Stories & Reporting Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Stories Placeholder */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
                >
                    <MessageSquare className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Participant Stories</h3>
                    <p className="text-primary/70 mb-8">As Spartan Warrior Foundation begins serving participants, this section will share stories from individuals who received access to education, tools, classroom learning, or sponsored resources.</p>
                    
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-accent relative">
                        <span className="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif">"</span>
                        <p className="italic text-primary/80 mb-6 relative z-10">
                            I did not understand what was holding me back financially. I was looking at my score, but I did not understand the full picture. Having access to education and tools helped me see where I stood and what I needed to learn next.
                        </p>
                        <p className="font-bold text-primary">— Program Participant</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-sm font-medium text-primary/60 mb-2">Story Guidelines:</p>
                        <ul className="text-sm text-primary/70 space-y-2">
                            <li>• Focus on education, access, awareness, confidence, and responsibility.</li>
                            <li>• No promises or implications of guaranteed credit repair, approvals, deletions, funding, or outcomes.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Reporting Schedule */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
                >
                    <CalendarDays className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Reporting Our Progress</h3>
                    <p className="text-primary/70 mb-8">Spartan Warrior Foundation intends to provide periodic updates as donations are received, sponsor matches are applied, and program access is granted.</p>
                    
                    <h4 className="font-bold text-primary mb-4">Updates may include:</h4>
                    <div className="grid grid-cols-2 gap-3 mb-auto">
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Monthly impact snapshots</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Quarterly donor updates</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Program access reports</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Sponsor match summaries</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Participant access numbers</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary">Community education updates</div>
                        <div className="bg-primary/5 p-3 rounded-lg text-sm font-medium text-primary col-span-2">Foundation milestones</div>
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <p className="text-sm font-bold text-primary text-center">This reporting allows donors, sponsors, and partners to see how support is helping the mission move forward.</p>
                    </div>
                </motion.div>
            </div>

            {/* Funders & Grant Partners */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary text-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-premium"
            >
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Information for Funders and Grant Partners</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
                    Spartan Warrior Foundation welcomes conversations with donors, sponsors, foundations, and grant-making organizations that want to support financial literacy access and education-based programming.
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                    For larger donors, sponsors, or grant partners, we can provide additional program information, impact goals, sponsorship details, and reporting structure upon request.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold tracking-wide hover:bg-accent/90 transition-colors shadow-lg">
                    Contact Our Team
                </Link>
            </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Help Us Create <span className="text-accent">More Access</span></h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Every donation helps Spartan Warrior Foundation provide access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who are ready to show up and do the work.
            </p>
            <p className="text-lg font-bold text-primary">
              And with The Score Machine matching every dollar donated, your support can create twice the impact.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Donate Now</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </Link>
                <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold tracking-wide hover:bg-gray-50 transition-all hover:shadow-premium">
                    <span className="text-lg">Become a Sponsor</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Impact;
