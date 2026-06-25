import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, XCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Terms = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Terms & Disclaimer</h1>
            <p className="text-primary/60 font-medium">Effective Date: June 25, 2026</p>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-4xl mx-auto px-4 md:px-8"
      >
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100 prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-primary/80 prose-li:text-primary/80 prose-strong:text-primary">
            
            <p className="lead font-medium text-xl text-primary mb-8">
                Welcome to the website of Spartan Warrior Foundation.
            </p>

            <p className="font-bold">
                By using this website, submitting information, donating, applying for program access, contacting us, or participating in any educational program, you agree to the terms and disclaimers listed on this page.
            </p>
            <p>Please read this information carefully.</p>

            <hr className="my-12 border-gray-100" />

            <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-accent mr-4" />
                <h2 className="m-0 text-primary">Educational Purpose Only</h2>
            </div>
            <p>Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational and educational purposes only.</p>
            <p>The information provided by Spartan Warrior Foundation is designed to help individuals better understand financial literacy, credit education, financial organization, and their own financial profile.</p>
            <p className="font-bold text-red-800 bg-red-50 p-4 rounded-xl border border-red-100">
                Spartan Warrior Foundation does not provide legal, tax, investment, credit repair, financial planning, lending, or banking advice.
            </p>
            <p>Any information provided through this website, program, class, tool, resource, or communication should not be considered professional advice. Participants and website users are responsible for their own decisions, actions, and results.</p>

            <hr className="my-12 border-gray-100" />

            <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-500 mr-4" />
                <h2 className="m-0 text-primary">We Are Not a Credit Repair Company</h2>
            </div>
            <p className="font-bold text-xl text-primary">Spartan Warrior Foundation is not a credit repair company.</p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not fix credit.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not repair credit.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not remove items from credit reports.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not dispute accounts on behalf of participants.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not communicate with bureaus or lenders.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not promise deletions.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not promise credit score increases.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not promise approvals.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not promise funding.</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span> We do not promise any specific financial outcome.</li>
            </ul>
            <p className="mt-6 font-medium text-primary">Spartan Warrior Foundation provides education, tools, classroom access, and structure so individuals can learn how to better understand their own financial information.</p>

            <hr className="my-12 border-gray-100" />

            <h2>No Guarantees</h2>
            <p>Spartan Warrior Foundation does not guarantee any specific result. We do not guarantee:</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 list-none pl-0 my-0">
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Credit score increases</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Credit approvals</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Loan approvals</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Business funding</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Personal funding</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Account deletions</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Debt removal</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Lender approvals</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Financial improvement</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Program acceptance</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Sponsorship approval</li>
                    <li className="flex items-start"><span className="text-gray-400 mr-2 mt-0.5">•</span> Software access approval</li>
                </ul>
            </div>
            <p>Results vary based on each person’s individual situation, participation, consistency, financial profile, actions, and decisions. Access to education or tools does not guarantee success.</p>
            <p className="font-bold text-accent text-xl">The participant must show up, learn, participate, and take action.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Participant Responsibility</h2>
            <p>Spartan Warrior Foundation believes in education, access, and accountability. We may provide the classroom, tools, educational resources, and structured learning. But the participant is responsible for using those resources.</p>
            <p className="font-bold">Participants are responsible for:</p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Showing up</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Learning the material</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Reviewing their own information</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Making their own decisions</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Taking their own actions</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Staying consistent</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Seeking professional advice when needed</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Understanding tools don't create results</li>
            </ul>
            <p className="text-sm font-medium">Spartan Warrior Foundation is not responsible for decisions made by participants based on educational materials, software tools, classes, workshops, resources, or website content.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Tools and Software Disclaimer</h2>
            <p>Spartan Warrior Foundation may provide access to software tools, educational platforms, credit education resources, or third-party systems through donor support, sponsor support, or partnership programs.</p>
            <p>These tools are provided for educational and informational purposes only. Software tools may help participants review, organize, or better understand financial or credit-related information, but they do not guarantee any result.</p>
            <p className="font-bold text-primary">Tools do not create success by themselves. A tool is only useful when the participant uses it properly, learns from it, and takes appropriate action based on their own judgment.</p>
            <p>Spartan Warrior Foundation is not responsible for errors, omissions, technical issues, third-party platform changes, user mistakes, or decisions made based on tool outputs.</p>

            <hr className="my-12 border-gray-100" />

            <h2>The Score Machine Sponsor Match Disclaimer</h2>
            <p>The Score Machine has committed to matching donations dollar-for-dollar to help increase the total support available for education, tools, classroom access, and program resources through Spartan Warrior Foundation.</p>
            <p>The sponsor match is intended to expand access to financial literacy education, credit education resources, software access, and related educational support.</p>
            <p>Sponsor match reporting may include: total donations raised, total sponsor match contributed, total program support created, number of participants sponsored, number of educational resources provided, and number of access opportunities created.</p>
            <p>Sponsor match details may be subject to campaign rules, program availability, reporting timelines, operational capacity, and foundation guidelines. The sponsor match does not guarantee that every applicant will receive access or approval.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Donation Disclaimer</h2>
            <p>Donations to Spartan Warrior Foundation support the mission, programs, education, tools, resources, outreach, administration, and operations of the foundation.</p>
            <p>Spartan Warrior Foundation will make reasonable efforts to use donations in support of its mission and programs. Unless otherwise stated in writing, donations are generally not restricted to a specific participant or individual.</p>
            <p className="text-sm">Tax-deductibility may depend on the foundation’s nonprofit status and applicable law. Donors should consult their own tax advisor regarding tax treatment.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Program Access Disclaimer</h2>
            <p><strong>Submitting a program access request does not guarantee approval, sponsorship, participation, software access, classroom access, or any specific benefit.</strong></p>
            <p>Program access may depend on eligibility, available funding, sponsor match availability, program capacity, foundation guidelines, participant need, completed intake information, and available resources.</p>
            <p>Spartan Warrior Foundation reserves the right to approve, deny, pause, modify, or discontinue program access at its discretion. Participants may be required to follow program rules, attendance expectations, platform guidelines, and educational participation requirements.</p>

            <hr className="my-12 border-gray-100" />

            <h2>No Professional Advice</h2>
            <p>Nothing on this website or inside any Spartan Warrior Foundation program should be considered legal, tax, investment, lending, banking, credit repair, or professional financial advice.</p>
            <p>Participants should consult qualified professionals when they need advice specific to their legal, tax, investment, credit, lending, or financial situation. Spartan Warrior Foundation does not replace professional advisors.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Website Content & Third-Party Links</h2>
            <p>The information on this website is provided for general informational purposes. We make reasonable efforts to keep information accurate and updated, but we do not guarantee that all website content is complete, current, accurate, or free from errors. Spartan Warrior Foundation may update, change, remove, or revise website content at any time. Use of this website is at your own risk.</p>
            <p>This website may include links to third-party websites, platforms, donation processors, software tools, educational resources, or partner websites. Spartan Warrior Foundation is not responsible for the content, privacy practices, security, policies, accuracy, or availability of third-party websites or platforms. Visiting third-party websites is the responsibility of the user.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Testimonials and Stories Disclaimer</h2>
            <p>Spartan Warrior Foundation may share testimonials, participant stories, donor comments, sponsor recognition, or impact examples.</p>
            <p>Testimonials and stories are individual experiences and should not be interpreted as guarantees. Participant stories should not be viewed as promises of credit score increases, credit approvals, funding, deletions, financial success, or any specific result. Results vary by individual.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Limitation of Liability & Changes to Programs</h2>
            <p>To the fullest extent permitted by law, Spartan Warrior Foundation is not responsible for any losses, damages, claims, decisions, outcomes, or consequences related to use of this website, educational resources, participation in programs, use of software tools, reliance on website content, third-party platform issues, donation processing issues, participant decisions, or financial outcomes.</p>
            <p>Spartan Warrior Foundation may modify, pause, expand, limit, or discontinue programs, resources, classes, tools, sponsorships, or website features at any time. Program availability may change based on funding, sponsor support, staffing, technology, capacity, and foundation priorities. No website content guarantees continued availability of any specific program or resource.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Acceptance of Terms</h2>
            <p className="font-bold text-primary">By using this website, submitting information, donating, applying for program access, or participating in any foundation resource or program, you acknowledge that you have read, understood, and agree to these Terms & Disclaimer.</p>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8">
                <h3 className="mt-0">Contact Information</h3>
                <p>For questions about these Terms & Disclaimer, please contact:</p>
                <p><strong>Email:</strong> info@spartanwarriorfoundation.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Mailing Address:</strong> 123 Foundation Way, Suite 400, City, State 12345</p>
            </div>

            <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
                <div className="flex justify-center items-center mb-4">
                    <ShieldAlert className="w-8 h-8 text-primary mr-3" />
                    <h3 className="m-0 text-primary text-2xl">Final Statement</h3>
                </div>
                <p className="text-lg font-bold text-primary mb-4">Spartan Warrior Foundation exists to educate, equip, and create access.</p>
                <div className="inline-block text-left text-primary/80 font-medium space-y-2 mb-6">
                    <p>We do not carry people.</p>
                    <p>We do not do the work for people.</p>
                    <p>We provide the tools, the classroom, and the structure.</p>
                </div>
                <p className="text-xl font-bold text-accent">The participant must show up, learn, and take action.</p>
            </div>

        </div>
      </motion.div>

    </div>
  );
};

export default Terms;
