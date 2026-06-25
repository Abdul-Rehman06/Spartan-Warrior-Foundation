import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShieldCheck, CheckCircle2, AlertCircle, Building2, Landmark, CalendarHeart, Gift } from 'lucide-react';
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

const donationTiers = [
    { amount: 25, impact: "This can help provide basic educational resources, learning materials, and financial literacy access." },
    { amount: 50, impact: "This can help provide deeper access to education, credit education resources, and participant learning support." },
    { amount: 100, impact: "This can help support access to classroom-style learning, educational tools, and structured resources." },
    { amount: 250, impact: "This can help sponsor more advanced access to education, tools, and participant resources." },
    { amount: 500, impact: "This can help provide access for multiple participants or support larger educational program needs." },
    { amount: 1000, impact: "This can help expand program access, sponsor participants, support workshops, and strengthen the foundation’s educational reach." }
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);

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
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-accent font-medium mb-8">
                <Heart className="w-4 h-4" />
                Every Dollar is Matched
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Give Someone Access to the Tools and Education They Need to <span className="text-accent">Take Ownership</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Your donation helps Spartan Warrior Foundation provide financial literacy education, credit education resources, classroom-style learning, and access to tools for individuals who may not be able to afford them on their own.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-2xl mx-auto mb-10">
                <p className="text-lg font-bold text-white">Every dollar donated is matched dollar-for-dollar by The Score Machine.</p>
                <p className="text-accent font-medium mt-1">That means your support can go twice as far.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Donate Now</span>
                    <Heart className="w-5 h-5 relative z-10" />
                </button>
                <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all">
                    <span className="text-lg">Become a Sponsor</span>
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Message & Why Give */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            {/* Main Message */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="space-y-6 text-lg text-primary/80"
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Help Someone Stop Guessing and Start Learning</h2>
                <p className="font-medium text-primary text-xl mb-6">Too many people are trying to make financial decisions without understanding the system in front of them.</p>
                
                <ul className="space-y-3 mb-8">
                    <li>• They may not know how to read their credit report.</li>
                    <li>• They may not understand utilization.</li>
                    <li>• They may not understand payment history.</li>
                    <li>• They may not understand inquiries, accounts, balances, or bureau differences.</li>
                    <li>• They may not know what lenders may review before making a decision.</li>
                </ul>

                <p className="font-bold text-primary">Spartan Warrior Foundation exists to give people access to education, tools, and classroom-style learning so they can better understand their financial profile and take ownership of their next step.</p>
                
                <div className="mt-8 bg-red-50 p-6 rounded-2xl border border-red-100">
                    <p className="font-bold text-red-800 mb-2">We do not do the work for them.</p>
                    <p className="text-red-700">We give them the tools and the classroom. They must show up, learn, and take action.</p>
                </div>
            </motion.div>

            {/* Why Give */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-primary text-white rounded-[2.5rem] p-10 md:p-12 shadow-premium relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-accent mb-6">Why Your Support Matters</h2>
                    <p className="text-lg text-white/90 mb-8">Financial education should not only be available to people who can afford premium tools, coaching, software, or private education.</p>
                    
                    <p className="font-bold text-xl mb-6">Many people are stuck because they were never taught how the system works.</p>
                    
                    <ul className="space-y-4 mb-8 text-white/80">
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0"/> They were never taught how to review their financial profile.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0"/> They were never taught how to understand what is being reported about them.</li>
                        <li className="flex items-start"><AlertCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0"/> They were never taught what steps to take before making financial decisions.</li>
                    </ul>

                    <p className="text-lg font-bold mb-4">Your donation helps give someone a starting point.</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="bg-white/10 px-4 py-2 rounded-lg font-medium text-sm">A classroom.</span>
                        <span className="bg-white/10 px-4 py-2 rounded-lg font-medium text-sm">A toolset.</span>
                        <span className="bg-white/10 px-4 py-2 rounded-lg font-medium text-sm">A structure.</span>
                        <span className="bg-white/10 px-4 py-2 rounded-lg font-medium text-sm">A chance to learn.</span>
                    </div>

                    <div className="bg-accent/20 border border-accent/30 p-4 rounded-xl text-center">
                        <p className="font-bold text-accent">And with The Score Machine matching every dollar donated, your gift creates twice the support.</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Interactive Donation Tiers Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-6">Choose Your Donation Amount</h2>
                <p className="text-xl text-primary/80">
                    Through our sponsor partnership with The Score Machine, every dollar donated to Spartan Warrior Foundation is matched dollar-for-dollar.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Tiers Selection */}
                <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                    {donationTiers.map((tier) => (
                        <button 
                            key={tier.amount}
                            onClick={() => setSelectedAmount(tier.amount)}
                            className={`p-6 rounded-2xl border-2 transition-all text-center ${
                                selectedAmount === tier.amount 
                                ? 'border-primary bg-primary text-white shadow-premium scale-105' 
                                : 'border-gray-200 bg-white text-primary hover:border-accent hover:shadow-sm'
                            }`}
                        >
                            <span className="text-2xl font-bold">${tier.amount}</span>
                        </button>
                    ))}
                    <button 
                        onClick={() => setSelectedAmount('custom')}
                        className={`p-6 rounded-2xl border-2 transition-all text-center col-span-2 sm:col-span-3 lg:col-span-2 ${
                            selectedAmount === 'custom' 
                            ? 'border-primary bg-primary text-white shadow-premium scale-105' 
                            : 'border-gray-200 bg-white text-primary hover:border-accent hover:shadow-sm'
                        }`}
                    >
                        <span className="text-xl font-bold">Custom Amount</span>
                    </button>
                </div>

                {/* Match Visualization */}
                <div className="lg:col-span-7">
                    <motion.div 
                        key={selectedAmount}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col justify-center"
                    >
                        {selectedAmount === 'custom' ? (
                            <div className="text-center">
                                <Gift className="w-16 h-16 text-accent mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-primary mb-4">Choose Your Impact</h3>
                                <p className="text-lg text-primary/80 mb-8">Choose your own donation amount and help Spartan Warrior Foundation create more access for individuals who are ready to learn and do the work.</p>
                                <button className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-bold tracking-wide hover:bg-accent/90 transition-colors shadow-lg text-lg">
                                    Donate Custom Amount
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center justify-between mb-10">
                                    <div className="text-center">
                                        <p className="text-primary/60 font-medium mb-2 uppercase tracking-wider text-sm">You Give</p>
                                        <p className="text-4xl md:text-5xl font-bold text-primary">${selectedAmount}</p>
                                    </div>
                                    <div className="flex-1 px-8 relative">
                                        <div className="h-px bg-gray-200 w-full absolute top-1/2 -translate-y-1/2"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-accent font-bold">
                                            MATCHED 100%
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-primary/60 font-medium mb-2 uppercase tracking-wider text-sm">Total Impact</p>
                                        <p className="text-4xl md:text-5xl font-bold text-accent">${selectedAmount * 2}</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                                    <p className="text-lg text-primary/80 leading-relaxed">
                                        With the sponsor match, your <span className="font-bold">${selectedAmount}</span> donation becomes <span className="font-bold text-accent">${selectedAmount * 2}</span> in support.
                                    </p>
                                    <p className="text-lg text-primary/80 leading-relaxed mt-2 font-medium">
                                        {donationTiers.find(t => t.amount === selectedAmount)?.impact}
                                    </p>
                                </div>

                                <button className="w-full px-10 py-5 bg-primary text-white rounded-xl font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-lg text-lg flex items-center justify-center">
                                    Donate ${selectedAmount} Now <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="text-center max-w-2xl mx-auto pt-8">
                <p className="font-bold text-primary text-xl">Every dollar matters. Every match matters. Every person given access matters.</p>
            </div>
        </div>
      </section>

      {/* What Your Donation Supports & Corporate Sponsorship */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            
            {/* Where Support Goes */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Where Your Support Goes</h2>
                <p className="text-lg text-primary/80 mb-8">Donations to Spartan Warrior Foundation may help provide:</p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Financial literacy education</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Credit education resources</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Sponsored software access</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Classroom-style learning</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Educational workshops</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Participant learning materials</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Community education</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Program onboarding</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Technology and platform support</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Impact tracking and reporting</li>
                    <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" /> Outreach to individuals and communities in need</li>
                </ul>

                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <p className="font-bold text-primary">Your donation helps create access for people who may not have the ability to pay for these resources on their own.</p>
                </div>
            </motion.div>

            {/* Partnerships Column */}
            <div className="space-y-12">
                {/* Corporate Sponsorship */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-primary text-white p-10 rounded-[2.5rem] shadow-premium"
                >
                    <Building2 className="w-10 h-10 text-accent mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Become a Corporate Sponsor</h2>
                    <p className="text-white/80 mb-6">Spartan Warrior Foundation welcomes support from businesses, organizations, and community partners that believe in financial literacy, education, and access.</p>
                    
                    <p className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">Corporate sponsorship may support:</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Sponsored participant access</div>
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Financial literacy workshops</div>
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Credit education programs</div>
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Classroom resources</div>
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Community education events</div>
                        <div className="bg-white/10 p-3 rounded-lg text-sm">Technology & software access</div>
                    </div>

                    <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Become a Sponsor
                    </button>
                </motion.div>

                {/* Grant Funders */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 border border-gray-200 p-10 rounded-[2.5rem]"
                >
                    <Landmark className="w-10 h-10 text-primary mb-6" />
                    <h2 className="text-2xl font-bold text-primary mb-4">Partner With Us to Expand Access</h2>
                    <p className="text-primary/80 mb-6">We welcome conversations with private donors, grant funders, foundations, and organizations interested in supporting financial literacy access and education-based programming.</p>
                    
                    <p className="text-sm font-bold text-primary mb-4">We can provide information on:</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">Program goals</span>
                        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">Participant access</span>
                        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">Donation use</span>
                        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">Impact tracking</span>
                        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">Reporting plans</span>
                    </div>

                    <Link to="/contact" className="inline-flex px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
                        Contact Our Team
                    </Link>
                </motion.div>
            </div>

        </div>
      </section>

      {/* Monthly Giving & Accountability */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            
            {/* Monthly Giving */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <CalendarHeart className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl font-bold text-primary mb-6">Become a Monthly Supporter</h2>
                <p className="text-lg text-primary/80 mb-6">Monthly donations help Spartan Warrior Foundation create steady access to education, tools, and resources.</p>
                <p className="text-lg text-primary/80 mb-8">A monthly gift allows the foundation to plan, sponsor participants, support classroom access, and continue building programs for individuals who are ready to show up and learn.</p>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 space-y-4">
                    <p className="font-bold text-primary border-b border-gray-100 pb-3 flex justify-between"><span>$25 monthly</span> <span className="text-accent">Becomes $50</span></p>
                    <p className="font-bold text-primary border-b border-gray-100 pb-3 flex justify-between"><span>$50 monthly</span> <span className="text-accent">Becomes $100</span></p>
                    <p className="font-bold text-primary flex justify-between"><span>$100 monthly</span> <span className="text-accent">Becomes $200</span></p>
                </div>

                <p className="font-bold text-xl text-primary mb-8">Monthly giving helps create consistent impact.</p>

                <button className="px-10 py-4 bg-accent text-white rounded-full font-bold tracking-wide hover:bg-accent/90 transition-colors shadow-lg">
                    Give Monthly
                </button>
            </motion.div>

            {/* Accountability */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white border border-gray-200 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-center"
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Your Donation Creates Access. The Participant Must Take Action.</h2>
                <p className="text-lg text-primary/80 mb-8">Spartan Warrior Foundation believes in education, access, and accountability.</p>
                
                <div className="space-y-4 mb-8 bg-gray-50 p-6 rounded-xl">
                    <p className="flex items-center font-medium text-primary"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0"/> Your donation helps provide the tools.</p>
                    <p className="flex items-center font-medium text-primary"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0"/> Your donation helps provide the classroom.</p>
                    <p className="flex items-center font-medium text-primary"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0"/> Your donation helps provide the resources.</p>
                </div>

                <div className="space-y-3 font-bold text-lg text-primary/90 mb-8">
                    <p>But the participant must show up.</p>
                    <p>The participant must learn.</p>
                    <p>The participant must take action.</p>
                    <p>The participant must stay consistent.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
                    <p className="font-bold text-red-800 mb-1">We are not here to carry people.</p>
                    <p className="font-bold text-red-800">We are here to equip them.</p>
                </div>
            </motion.div>

        </div>
      </section>

      {/* Donor Trust & Receipts */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6">Our Commitment to Donors</h2>
                <p className="text-xl text-white/80 mb-12">When you support Spartan Warrior Foundation, you are supporting an education-focused mission built on transparency, access, and responsibility.</p>
                
                <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-16">
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Clear communication</div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Honest language</div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> No false promises</div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Transparency around use</div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Impact reporting</div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center font-medium"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Sponsor match updates</div>
                </div>

                <p className="text-2xl font-bold text-accent mb-16">We want every donor to understand how their support helps create opportunity for someone who is ready to learn.</p>

                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-left max-w-3xl mx-auto">
                    <h3 className="font-bold text-xl mb-4">Donation Receipts</h3>
                    <p className="text-white/70 mb-4">After donating, donors may receive a confirmation or receipt through the foundation’s donation processing system.</p>
                    <p className="text-white/70 text-sm">Tax-deductibility may depend on the foundation’s nonprofit status and applicable law. Donors should consult their own tax advisor regarding their donation.</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Help Us Give Someone a <span className="text-accent">Starting Point</span></h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Your donation can help provide access to financial literacy education, credit education resources, classroom-style learning, and tools for someone who is ready to take ownership.
            </p>
            <p className="text-lg font-bold text-primary">
              And with The Score Machine matching every dollar donated, your support can go twice as far.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-6">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Donate Now</span>
                    <Heart className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </button>
                <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold tracking-wide hover:bg-gray-50 transition-all hover:shadow-premium">
                    <span className="text-lg">Become a Sponsor</span>
                </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Donate;
