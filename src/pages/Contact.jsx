import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Globe, MessageSquare, HandHeart, Briefcase, GraduationCap, Users, Megaphone, HelpCircle, Send, AlertCircle, Clock, Landmark, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: 'General Question',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Form submitted! (This is a frontend demo)');
  };

  const contactReasons = [
    { value: "General Question", icon: <HelpCircle className="w-4 h-4" /> },
    { value: "Donation Question", icon: <HandHeart className="w-4 h-4" /> },
    { value: "Sponsor Inquiry", icon: <Briefcase className="w-4 h-4" /> },
    { value: "Grant / Funding Inquiry", icon: <Landmark className="w-4 h-4" /> },
    { value: "Program Access Request", icon: <GraduationCap className="w-4 h-4" /> },
    { value: "Partnership Opportunity", icon: <Users className="w-4 h-4" /> },
    { value: "Media / Speaking Request", icon: <Megaphone className="w-4 h-4" /> },
    { value: "Other", icon: <MessageSquare className="w-4 h-4" /> }
  ];

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
                <MessageSquare className="w-4 h-4 text-accent" />
                We are here to help
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Contact Spartan Warrior <span className="text-accent">Foundation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you are interested in donating, becoming a sponsor, applying for program access, or learning more about our mission, our team is here to help direct you to the right place.
            </p>
            <div className="inline-block bg-accent/10 border border-accent/20 px-8 py-4 rounded-2xl text-accent font-bold text-lg max-w-2xl mx-auto shadow-premium">
              Spartan Warrior Foundation is built to provide access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who are ready to show up and do the work.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section (Form & Info) */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Form Column */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
                <h2 className="text-3xl font-bold text-primary mb-2">How Can We Help?</h2>
                <p className="text-primary/70 mb-8">Please use the contact form below to reach out to our team. To help us respond properly, please select the reason for your message.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">First Name</label>
                            <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-primary">Reason for Contact</label>
                        <select 
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white appearance-none"
                        >
                            {contactReasons.map((reason) => (
                                <option key={reason.value} value={reason.value}>{reason.value}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-primary">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-premium">
                        Submit Message <Send className="w-5 h-5" />
                    </button>
                </form>
            </motion.div>

            {/* Contact Info & Response Time Column */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="lg:col-span-5 space-y-8"
            >
                {/* Contact Information */}
                <div className="bg-primary text-white p-10 rounded-[2.5rem] shadow-premium">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-accent mr-4 mt-1 shrink-0" />
                            <div>
                                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:info@spartanwarriorfoundation.com" className="text-lg hover:text-accent transition-colors">info@spartanwarriorfoundation.com</a>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <Phone className="w-6 h-6 text-accent mr-4 mt-1 shrink-0" />
                            <div>
                                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:+11234567890" className="text-lg hover:text-accent transition-colors">(123) 456-7890</a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-accent mr-4 mt-1 shrink-0" />
                            <div>
                                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Mailing Address</p>
                                <p className="text-lg">123 Foundation Way<br/>Suite 400<br/>City, State 12345</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Globe className="w-6 h-6 text-accent mr-4 mt-1 shrink-0" />
                            <div>
                                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Website</p>
                                <a href="https://spartanwarriorfoundation.com" className="text-lg hover:text-accent transition-colors">spartanwarriorfoundation.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Response Time */}
                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
                    <div className="flex items-center mb-4">
                        <Clock className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-xl font-bold text-primary">Response Time</h3>
                    </div>
                    <p className="text-primary/70 mb-4 font-medium">Our team reviews messages as they are received.</p>
                    <p className="text-primary/60 text-sm leading-relaxed">
                        Please allow reasonable time for a response, especially for program access requests, sponsorship inquiries, grant discussions, or partnership opportunities that may require additional review.
                    </p>
                </div>
            </motion.div>

        </div>
      </section>

      {/* Inquiry Sections Grid */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* General Questions */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                >
                    <HelpCircle className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">General Questions</h3>
                    <p className="text-primary/70 mb-4 text-sm">If you have a question about Spartan Warrior Foundation, our mission, our programs, or how the foundation works, please contact us using the form on this page.</p>
                    <p className="font-bold text-primary text-sm">Our team will review your message and respond as soon as possible.</p>
                </motion.div>

                {/* Program Access */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-primary p-8 rounded-3xl shadow-premium text-white lg:col-span-2"
                >
                    <GraduationCap className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Interested in Program Access?</h3>
                    <p className="text-white/80 mb-6">Spartan Warrior Foundation provides access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who may not be able to afford these resources on their own.</p>
                    <p className="text-white/90 font-medium mb-6">If you are interested in receiving program access, please select <span className="text-accent font-bold">“Program Access Request”</span> in the contact form and explain your situation.</p>
                    
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                        <p className="font-bold text-accent mb-2 flex items-center"><AlertCircle className="w-4 h-4 mr-2"/> Important Note</p>
                        <p className="text-sm text-white/80 mb-2">Submitting a request does not guarantee approval or access. Program access may depend on eligibility, available resources, sponsor funding, and foundation guidelines.</p>
                        <p className="text-sm text-white/80 font-medium">Spartan Warrior Foundation does not provide credit repair services. We provide education, tools, classroom access, and structure. Participants must show up, learn, and do the work for themselves.</p>
                    </div>
                </motion.div>

                {/* Donations */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                >
                    <HandHeart className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">Questions About Donating?</h3>
                    <p className="text-primary/70 mb-4 text-sm">If you have questions about donating, donation receipts, monthly giving, or how your donation may be used, please select “Donation Question” in the contact form.</p>
                    <p className="font-bold text-primary text-sm bg-white p-3 rounded-xl border border-gray-200">Every dollar donated is matched dollar-for-dollar by The Score Machine.</p>
                </motion.div>

                {/* Sponsors */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                >
                    <Briefcase className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">Become a Sponsor</h3>
                    <p className="text-primary/70 mb-4 text-sm">We welcome businesses, organizations, and community partners who want to support financial literacy education and access.</p>
                    <p className="text-primary/70 mb-4 text-sm font-medium">Sponsors may help support: Participant access, workshops, technology, and program expansion.</p>
                    <p className="font-bold text-primary text-sm">Select “Sponsor Inquiry” in the contact form.</p>
                </motion.div>

                {/* Grants */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                >
                    <Landmark className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">Grant and Funding Partners</h3>
                    <p className="text-primary/70 mb-4 text-sm">We welcome conversations with private donors, foundations, and grant-making organizations.</p>
                    <p className="text-primary/70 mb-4 text-sm font-medium">Our team can provide info on: Program structure, donation use, sponsor match details, and impact tracking.</p>
                    <p className="font-bold text-primary text-sm">Select “Grant / Funding Inquiry” in the form.</p>
                </motion.div>

                {/* Partnerships */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 md:col-span-2 lg:col-span-1"
                >
                    <Users className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">Partnership Opportunities</h3>
                    <p className="text-primary/70 mb-4 text-sm">We are open to mission-aligned partnerships with organizations, educators, businesses, and community leaders who want to help expand access to education.</p>
                    <p className="font-bold text-primary text-sm">Select “Partnership Opportunity” in the form.</p>
                </motion.div>

                {/* Media */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 md:col-span-2 lg:col-span-2"
                >
                    <Megaphone className="w-8 h-8 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-4">Media and Speaking Requests</h3>
                    <p className="text-primary/70 mb-4">For podcast interviews, media inquiries, speaking opportunities, educational events, or community presentations, please contact our team using the form on this page and select <span className="font-bold text-primary">“Media / Speaking Request.”</span></p>
                </motion.div>

            </div>
        </div>
      </section>

      {/* Clear Expectations Disclaimer */}
      <section className="py-16 px-4 md:px-8 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-red-900 mb-6">Important Disclaimer</h2>
            <p className="text-red-800 mb-6">Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only.</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-left inline-block max-w-2xl">
                <ul className="space-y-3 text-primary/80 font-medium text-sm">
                    <li>• We do not provide credit repair services.</li>
                    <li>• We do not dispute accounts on behalf of participants.</li>
                    <li>• We do not remove items from credit reports.</li>
                    <li>• We do not guarantee credit score increases, deletions, approvals, loans, funding, or specific financial outcomes.</li>
                    <li>• We do not provide legal, tax, investment, or financial advice.</li>
                </ul>
            </div>
            
            <p className="font-bold text-red-900 mt-6">Participants are responsible for their own actions, decisions, participation, and results.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Ready to Support the <span className="text-accent">Mission?</span></h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Your support can help provide access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who are ready to learn and take ownership.
            </p>
            <p className="text-lg font-bold text-primary">
              Every dollar donated is matched dollar-for-dollar by The Score Machine.
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

export default Contact;
