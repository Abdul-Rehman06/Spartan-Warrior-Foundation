import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, GraduationCap, HeartHandshake, FileText, Send, ShieldAlert, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    forWhom: '',
    supportType: '',
    canAfford: '',
    reason: '',
    whatToLearn: '',
    willAttend: '',
    understandNotRepair: '',
    understandNoGuarantees: '',
    agreeResponsibility: '',
    additionalMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight">
                Apply for Access If You Are Ready to Show Up and Learn
            </h1>
            <p className="text-lg md:text-xl text-primary/70 leading-relaxed max-w-3xl mx-auto mb-8">
                Spartan Warrior Foundation provides access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who are ready to take ownership of their own financial education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 bg-red-50/50 p-6 rounded-2xl border border-red-100 max-w-2xl mx-auto mb-10 text-red-800 font-bold">
                <span className="flex items-center justify-center"><XCircle className="w-5 h-5 mr-2" /> This is not credit repair.</span>
                <span className="flex items-center justify-center"><XCircle className="w-5 h-5 mr-2" /> This is not someone doing the work for you.</span>
            </div>
            <p className="text-xl font-bold text-primary mb-10">This is access to education, tools, classroom resources, and structure.<br/><span className="text-accent">If approved, you must show up, learn, participate, and take action.</span></p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <a href="#application-form" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Apply for Access</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                <Link to="/programs" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold tracking-wide hover:bg-gray-50 transition-all hover:shadow-premium">
                    <span className="text-lg">View Programs</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white px-4 border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What Program Access Means</h2>
                  <div className="space-y-4 text-lg text-primary/70 text-left md:text-center">
                      <p>Applying for program access means you are requesting the opportunity to receive educational support through Spartan Warrior Foundation.</p>
                      <p>This may include access to financial literacy education, credit education resources, classroom-style learning, educational tools, or sponsored software access when available.</p>
                      <p>Program access is designed for individuals who want to learn but may not be able to afford premium tools, education, or structured resources on their own.</p>
                  </div>
                  <div className="mt-8 inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-xl shadow-premium">
                      This is not a credit repair service. This is an education and access program.
                  </div>
                  <p className="mt-8 text-primary/80 font-medium max-w-2xl mx-auto">The goal is to help you better understand your financial profile so you can become more informed, more organized, and more prepared to make decisions for yourself.</p>
              </motion.div>
          </div>
      </section>

      {/* Who is it for vs Not for */}
      <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                  {/* Who This Is For */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-green-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10"></div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center">
                          <CheckCircle2 className="w-8 h-8 text-green-500 mr-4 shrink-0" />
                          This Program May Be Right for You If You:
                      </h2>
                      <ul className="space-y-4 list-none pl-0">
                          {[
                              "Want to better understand your financial profile",
                              "Want to learn how credit reports work",
                              "Need access to financial literacy education",
                              "Feel overwhelmed by credit, debt, or financial information",
                              "Do not know where to start",
                              "Cannot afford premium tools or education on your own",
                              "Are willing to attend classes or review educational resources",
                              "Are ready to take responsibility for your own learning",
                              "Understand that results require action and consistency"
                          ].map((item, idx) => (
                              <li key={idx} className="flex items-start text-primary/80 font-medium">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 shrink-0"></span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-gray-100 font-bold text-primary space-y-2">
                          <p>This program is for people who are serious about learning.</p>
                          <p>It is for people who are ready to show up.</p>
                          <p>It is for people who understand that access is only the beginning.</p>
                      </div>
                  </motion.div>

                  {/* Who This Is NOT For */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-red-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center">
                          <XCircle className="w-8 h-8 text-red-500 mr-4 shrink-0" />
                          This Program Is Not for You If You:
                      </h2>
                      <ul className="space-y-4 list-none pl-0">
                          {[
                              "Are looking for someone to fix your credit for you",
                              "Want someone to dispute accounts on your behalf",
                              "Expect guaranteed deletions",
                              "Expect guaranteed score increases",
                              "Expect guaranteed approvals, loans, or funding",
                              "Do not want to learn",
                              "Do not want to participate",
                              "Do not want to take action",
                              "Expect tools to create results without effort"
                          ].map((item, idx) => (
                              <li key={idx} className="flex items-start text-primary/80 font-medium">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 shrink-0"></span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-gray-100 font-bold text-red-800 space-y-2">
                          <p>Spartan Warrior Foundation is not here to carry people.</p>
                          <p>We are here to equip people.</p>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* What You Receive & Sponsor Match */}
      <section className="py-20 bg-primary px-4 text-white">
          <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-8">If Approved, You May Receive Access To:</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                          {[
                              "Financial literacy education",
                              "Credit education resources",
                              "Classroom-style learning",
                              "Educational workshops",
                              "Learning materials",
                              "Software tools (when sponsored)",
                              "Credit report awareness education",
                              "Budgeting & organization resources",
                              "Community education",
                              "Structured resources"
                          ].map((item, idx) => (
                              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center">
                                  <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" />
                                  <span className="text-sm font-medium">{item}</span>
                              </div>
                          ))}
                      </div>
                      <p className="mt-6 text-white/60 text-sm italic">Program access may vary based on availability, eligibility, sponsor funding, and foundation guidelines.</p>
                  </motion.div>

                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white text-primary rounded-[2rem] p-8 md:p-12 shadow-premium">
                      <HeartHandshake className="w-12 h-12 text-accent mb-6" />
                      <h2 className="text-2xl font-bold mb-4">How Donations Help Create Access</h2>
                      <p className="text-primary/70 mb-6">Spartan Warrior Foundation is supported through donations and a dollar-for-dollar sponsor match from The Score Machine. This helps the foundation provide access to individuals who may not be able to afford these resources on their own.</p>
                      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                          <p className="font-bold text-accent mb-4">Example Sponsor Match Impact:</p>
                          <ul className="space-y-2 text-sm font-medium text-primary/80">
                              <li>• A $500 donation can become $1,000 in support.</li>
                              <li>• A $1,000 donation can become $2,000 in support.</li>
                              <li>• A $5,000 donation can become $10,000 in support.</li>
                          </ul>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">How the Application Process Works</h2>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                  {/* Decorative line connecting steps */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
                  
                  {[
                      { step: 1, title: "Submit Request", desc: "Complete the form honestly." },
                      { step: 2, title: "Review", desc: "Our team reviews eligibility." },
                      { step: 3, title: "Decision", desc: "Receive access if approved." },
                      { step: 4, title: "Show Up", desc: "Use resources and attend classes." },
                      { step: 5, title: "Take Ownership", desc: "Become responsible for decisions." }
                  ].map((item, idx) => (
                      <motion.div key={idx} variants={fadeIn} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative group hover:border-accent transition-colors">
                          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 group-hover:bg-accent transition-colors">{item.step}</div>
                          <h3 className="font-bold text-primary mb-2 text-sm">{item.title}</h3>
                          <p className="text-xs text-primary/60">{item.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-premium">
            
            <div className="text-center mb-10">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Program Access Application</h2>
                <p className="text-primary/60">Please complete the form below. Submitting this form does not guarantee approval or access.</p>
            </div>

            <iframe  
               src="https://program-access-appli.vibepreview.com"  
               width="100%"  
               height="1000"  
               style={{ border: 'none', minHeight: '100vh', borderRadius: '8px' }}  
               allow="fullscreen" 
               title="Program Access Application Form" 
             ></iframe>

          </motion.div>
        </div>
      </section>

      {/* Accountability & Success */}
      <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                      <Target className="w-16 h-16 text-accent mb-6" />
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Access Creates Opportunity. Your Action Creates Progress.</h2>
                      <div className="space-y-4 text-primary/80 font-medium">
                          <p>If you are approved for program access, the foundation may provide education, tools, classroom resources, and structure.</p>
                          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-2">
                              <p className="font-bold text-primary mb-4">But you must use them:</p>
                              <p>• You must show up.</p>
                              <p>• You must learn.</p>
                              <p>• You must participate.</p>
                              <p>• You must take action.</p>
                              <p>• You must stay consistent.</p>
                          </div>
                          <p className="font-bold text-primary pt-4">Spartan Warrior Foundation does not believe in giving people false promises. We believe in giving people a real starting point.</p>
                      </div>
                  </motion.div>

                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-primary text-white p-8 md:p-12 rounded-[2rem] shadow-premium">
                      <h3 className="text-2xl font-bold mb-6 text-accent">Success Is Education, Awareness, and Action</h3>
                      <p className="mb-6 text-white/80">Success in this program does not mean a guaranteed credit score increase, approvals, funding, or deletions. Success means you become more educated, more aware, more organized, and better prepared to make informed decisions.</p>
                      <p className="font-bold mb-4">Our goal is to help you:</p>
                      <ul className="space-y-3 list-none pl-0 mb-8 text-sm text-white/80">
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Understand your financial profile</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Learn how credit reports work</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Become more organized</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Stop applying blindly</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Understand what may affect financial decisions</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Use tools to review your own information</li>
                          <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" /> Take responsibility for your next step</li>
                      </ul>
                      <div className="pt-6 border-t border-white/10 font-bold text-accent">
                          The foundation provides access. You create progress through action.
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              If you are ready to learn, show up, and take ownership of your financial education, you may submit a program access request below.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#application-form" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-premium">
                    <span className="relative z-10 text-lg">Apply for Access</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                <Link to="/donate" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all">
                    <span className="text-lg">Donate to Support Others</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-12 bg-white px-4 border-t border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center items-center mb-4">
                  <ShieldAlert className="w-6 h-6 text-primary mr-2" />
                  <span className="font-bold text-primary">Final Disclaimer</span>
              </div>
              <p className="text-xs md:text-sm text-primary/50 leading-relaxed">
                  Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only. Spartan Warrior Foundation does not provide credit repair services. We do not dispute accounts on behalf of participants. We do not remove items from credit reports. We do not guarantee credit score increases, deletions, approvals, loans, funding, or specific financial outcomes. We do not provide legal, tax, investment, or financial advice. Submitting an application does not guarantee approval, sponsorship, access, or participation. Participants are responsible for their own actions, decisions, participation, and results.
              </p>
              <p className="mt-4 text-sm font-bold text-primary">The foundation provides access. The participant must take action.</p>
          </div>
      </section>

    </div>
  );
};

export default Apply;