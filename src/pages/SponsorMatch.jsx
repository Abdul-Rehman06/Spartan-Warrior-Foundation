import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightCircle, Target, Users, ShieldCheck, HeartHandshake, CheckCircle2, TrendingUp, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const SponsorMatch = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm mb-4">
                <HeartHandshake className="w-4 h-4" />
                The Score Machine Partnership
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-tight">
                Every Dollar Donated Creates <span className="text-accent">Double the Support</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 leading-relaxed max-w-3xl mx-auto">
                Through a sponsor partnership with The Score Machine, every dollar donated to Spartan Warrior Foundation is matched dollar-for-dollar to help expand access to financial literacy education, credit education resources, classroom-style learning, and tools.
            </p>
            <p className="text-xl font-bold text-primary pt-2">When you give, your donation can go twice as far.</p>
          </motion.div>
        </div>
      </section>

      {/* How it Works Grid */}
      <section className="py-16 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">How the Sponsor Match Works</h2>
                <p className="text-lg text-primary/70">The Score Machine has committed to matching donations made to Spartan Warrior Foundation dollar-for-dollar.</p>
                <p className="text-lg text-primary/70">This means that for every dollar donated, The Score Machine contributes an additional dollar in program support to help provide educational access, tools, and resources for eligible participants.</p>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mt-8">
                    <p className="font-bold text-primary mb-4">This matching structure allows donor support to stretch further and helps the foundation serve more individuals who are ready to show up, learn, and take action.</p>
                </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
                <div className="bg-primary text-white rounded-[2rem] p-8 md:p-12 shadow-premium">
                    <h3 className="text-2xl font-bold text-accent mb-8 text-center">Example Impact</h3>
                    <div className="space-y-4">
                        {[
                            { donate: "25", impact: "50" },
                            { donate: "50", impact: "100" },
                            { donate: "100", impact: "200" },
                            { donate: "500", impact: "1,000" },
                            { donate: "1,000", impact: "2,000" },
                        ].map((tier, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-white/80 font-medium">A <span className="text-white font-bold">${tier.donate}</span> donation creates</div>
                                <div className="flex items-center text-accent font-bold text-xl">
                                    <ArrowRightCircle className="w-5 h-5 mr-2 opacity-50" />
                                    ${tier.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why & What Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Why Section */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                    <Target className="w-12 h-12 text-accent mb-6" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Expanding Access to Education and Tools</h2>
                    <div className="space-y-4 text-primary/70">
                        <p>The Score Machine was built to help people better understand their credit profile, financial readiness, and the data behind their financial situation.</p>
                        <p>Through this partnership, The Score Machine is helping Spartan Warrior Foundation expand access to people who may not be able to afford financial literacy education, credit education resources, or software tools on their own.</p>
                        <p className="text-red-600 font-bold pt-4">The goal is not to do the work for people.</p>
                        <p className="font-bold text-primary">The goal is to give people access to the classroom, the tools, and the structure so they can learn how to better understand their own financial profile.</p>
                    </div>
                </motion.div>

                {/* What it Supports Section */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                    <TrendingUp className="w-12 h-12 text-accent mb-6" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">What the Match Supports</h2>
                    <p className="text-primary/70 mb-6">The sponsor match from The Score Machine may help support:</p>
                    <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0">
                        {[
                            "Financial literacy education",
                            "Credit education resources",
                            "Sponsored software access",
                            "Classroom-style learning",
                            "Educational workshops",
                            "Learning materials",
                            "Participant onboarding",
                            "Community education",
                            "Technology and platform support",
                            "Program access for eligible participants",
                            "Impact tracking and reporting"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-primary/80 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </div>
      </section>

      {/* Participants Responsibility */}
      <section className="py-20 bg-primary px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <Users className="w-16 h-16 text-accent mx-auto mb-8" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">What This Means for Participants</h2>
                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                    The sponsor match helps Spartan Warrior Foundation provide more access to individuals who are ready to participate in their own financial education.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-left md:text-center">
                    <p className="text-accent font-bold text-xl mb-6">Receiving access does not mean the work is done for them.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 font-medium text-lg">
                        <span className="flex items-center"><ArrowRight className="w-4 h-4 text-accent mr-2" /> The participant must show up.</span>
                        <span className="flex items-center"><ArrowRight className="w-4 h-4 text-accent mr-2" /> The participant must learn.</span>
                        <span className="flex items-center"><ArrowRight className="w-4 h-4 text-accent mr-2" /> The participant must take action.</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Tracker & Reporting */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sponsor Match Tracker</h2>
                <p className="text-primary/60 text-lg">This section should be updated monthly or quarterly as donations, sponsor match contributions, and program access are tracked.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                {[
                    { label: "Total Donations Raised", value: "$___" },
                    { label: "Score Machine Match", value: "$___" },
                    { label: "Total Support Created", value: "$___" },
                    { label: "Participants Sponsored", value: "___" },
                    { label: "Educational Access", value: "___" },
                    { label: "Software Access", value: "___" },
                    { label: "Workshops Supported", value: "___" },
                    { label: "Resources Distributed", value: "___" },
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={fadeIn} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                        <div className="text-sm font-medium text-primary/70">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Important Match Information</h3>
                <p className="text-primary/70 mb-6">The Score Machine sponsor match is designed to increase the total support available for Spartan Warrior Foundation’s educational mission.</p>
                <div className="text-sm text-primary/60 font-medium space-y-2">
                    <p>The sponsor match does not guarantee that every applicant will be approved for program access.</p>
                    <p>The sponsor match does not guarantee any credit, financial, lending, funding, or personal outcome for participants.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Double Your Impact Today</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Your donation helps Spartan Warrior Foundation provide access to financial literacy education, credit education resources, classroom-style learning, and tools. And because The Score Machine matches every dollar donated, your support can create twice the impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Donate Now</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </Link>
                <Link to="/programs" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all">
                    <span className="text-lg">View Our Programs</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-12 bg-white px-4 border-t border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
              <p className="text-xs md:text-sm text-primary/50 leading-relaxed">
                  Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only. Spartan Warrior Foundation does not provide credit repair services. We do not dispute accounts on behalf of participants. We do not remove items from credit reports. We do not guarantee credit score increases, deletions, approvals, loans, funding, or specific financial outcomes. The Score Machine sponsor match is designed to increase the total support available for educational access and program resources. Sponsor match details may be subject to campaign rules, foundation guidelines, program capacity, participant eligibility, available resources, and reporting timelines. Participants are responsible for their own actions, decisions, participation, and results.
              </p>
              <p className="mt-4 text-sm font-bold text-primary">The foundation provides access. The participant must take action.</p>
          </div>
      </section>

    </div>
  );
};

export default SponsorMatch;