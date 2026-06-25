import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PrivacyPolicy = () => {
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
                <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Privacy Policy</h1>
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
                Spartan Warrior Foundation respects your privacy and is committed to protecting the information you share with us.
            </p>

            <p>
                This Privacy Policy explains how Spartan Warrior Foundation may collect, use, store, and protect information submitted through our website, donation forms, contact forms, program access forms, sponsor forms, or other communication channels.
            </p>
            <p className="font-bold">
                By using this website, submitting information, contacting us, applying for program access, or making a donation, you agree to the terms of this Privacy Policy.
            </p>

            <hr className="my-12 border-gray-100" />

            <h2>Information We May Collect</h2>
            <p>Spartan Warrior Foundation may collect personal information that you voluntarily provide through our website or related forms. This may include:</p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> First name and Last name</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Email address</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Phone number</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Mailing address</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Donation information</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Sponsor inquiry information</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Program access request information</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Organization or company name</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Message details submitted through contact forms</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Information provided through applications, surveys, or intake forms</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span> Communication preferences</li>
            </ul>
            <p className="mt-6 text-sm">We may also collect basic technical information related to website usage, such as browser type, device type, pages visited, and general website activity.</p>

            <hr className="my-12 border-gray-100" />

            <h2>How We Use Your Information</h2>
            <p>Spartan Warrior Foundation may use information collected through the website to:</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0 my-0">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Respond to questions or messages</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Process donations</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Send donation confirmations or receipts</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Review program access requests</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Communicate with donors, sponsors, applicants, and partners</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Provide information about our mission, programs, and impact</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Manage sponsor or partnership inquiries</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Improve our website, forms, and communication</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Share updates about Spartan Warrior Foundation</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Track program interest and outreach</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Support internal reporting and operations</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" /> Comply with legal, regulatory, or administrative requirements</li>
                </ul>
            </div>
            <p className="font-bold text-center">We use the information provided to support the mission and operations of Spartan Warrior Foundation.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Donation Information</h2>
            <p>When you make a donation through our website, your donation may be processed through a secure third-party payment processor.</p>
            <p><strong>Spartan Warrior Foundation does not directly store full credit card numbers, banking information, or complete payment credentials on its website.</strong></p>
            <p>Donation processors may collect and process information necessary to complete your donation, issue receipts, and comply with payment processing rules. Please review the privacy policy of the payment processor used at the time of donation for more information about how payment information is handled.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Program Access Information</h2>
            <p>If you submit a program access request, Spartan Warrior Foundation may review the information you provide to determine eligibility, program availability, resource allocation, and next steps.</p>
            <p><strong>Submitting a program access request does not guarantee approval, acceptance, access, sponsorship, or participation.</strong></p>
            <p>Information submitted for program access may be used to:</p>
            <ul className="list-disc pl-6">
                <li>Review your request</li>
                <li>Contact you about your submission</li>
                <li>Determine program fit</li>
                <li>Understand participant needs</li>
                <li>Provide educational access if approved</li>
                <li>Track program interest and impact</li>
                <li>Improve future programs</li>
            </ul>
            <p className="text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100 text-red-800">
                Spartan Warrior Foundation does not use program information to provide legal, tax, investment, financial, or credit repair services.
            </p>

            <hr className="my-12 border-gray-100" />

            <h2>Email and Communication</h2>
            <p>If you provide your email address or phone number, Spartan Warrior Foundation may contact you regarding your donation, program request, sponsor inquiry, partnership inquiry, foundation updates, impact updates, event or program information, educational opportunities, and administrative matters.</p>
            <p>You may unsubscribe from general marketing or update emails at any time by following the unsubscribe instructions included in those communications or by contacting us directly.</p>
            <p>Some transactional or administrative messages may still be sent when necessary, such as donation receipts, program communications, or responses to direct inquiries.</p>

            <hr className="my-12 border-gray-100" />

            <h2>How We Share Information</h2>
            <p className="font-bold text-xl text-primary">Spartan Warrior Foundation does not sell personal information.</p>
            <p>We may share limited information only when necessary to operate the foundation, process donations, manage programs, communicate with users, or comply with legal obligations. Information may be shared with:</p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Donation processing providers</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Website hosting providers</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Email or communication platforms</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Form or CRM systems</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Program administration tools</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Professional advisors</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Legal or compliance support</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Service providers who help operate the website or foundation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Government or regulatory authorities if required by law</li>
            </ul>
            <p>We only share information as needed to support the mission, operations, and legal responsibilities of Spartan Warrior Foundation.</p>

            <hr className="my-12 border-gray-100" />

            <h2>The Score Machine Sponsor Match</h2>
            <p>Spartan Warrior Foundation may reference donation totals, sponsor match amounts, and program support created through the dollar-for-dollar sponsor match from The Score Machine. Personal donor information will not be sold.</p>
            <p>If reporting sponsor match impact, Spartan Warrior Foundation may use general donation and impact data, such as: total donations raised, total sponsor match contributed, total program support created, number of participants sponsored, number of educational access opportunities provided, and number of tools or resources distributed.</p>
            <p>Public impact reporting will generally use summary-level information unless a donor, sponsor, or participant gives permission to share their name, story, or testimonial.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Testimonials and Participant Stories</h2>
            <p>Spartan Warrior Foundation may share testimonials, participant stories, donor comments, or sponsor recognition only when appropriate permission has been provided. We will not intentionally publish personal stories, names, photos, financial information, or identifying participant details without permission.</p>
            <p>Participant stories should focus on education, access, awareness, and personal responsibility. They should not be used to imply guaranteed credit repair, approvals, deletions, funding, score increases, or financial outcomes.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Cookies and Website Tracking</h2>
            <p>Our website may use cookies or similar technologies to improve website performance, understand visitor activity, and support website functionality. Cookies may help us understand pages visited, website traffic, device type, browser type, and general user behavior on the website.</p>
            <p>Users may be able to disable cookies through their browser settings. Disabling cookies may affect certain website features or functionality.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Data Security & Retention</h2>
            <p>Spartan Warrior Foundation takes reasonable steps to protect information submitted through the website. However, no website, online platform, email system, or digital storage method can be guaranteed to be completely secure. By using this website and submitting information, you understand that information transmitted online carries some level of risk.</p>
            <p>Spartan Warrior Foundation may retain information for as long as necessary to operate the foundation, process donations, manage programs, communicate with users, maintain records, comply with legal obligations, and support internal reporting. We may retain donation records, program requests, contact form submissions, sponsor inquiries, and communication history as needed for administrative, legal, operational, or reporting purposes.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Children’s Privacy & Third-Party Links</h2>
            <p>Spartan Warrior Foundation’s website is not intended to collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under 13 without proper consent, we will take reasonable steps to delete that information. Parents or guardians who believe a child has submitted information may contact us directly.</p>
            <p>This website may contain links to third-party websites, platforms, donation processors, educational tools, or partner resources. Spartan Warrior Foundation is not responsible for the privacy practices, content, security, or policies of third-party websites. Users should review the privacy policies of any third-party websites they visit.</p>

            <hr className="my-12 border-gray-100" />

            <h2>Your Choices & Contact Information</h2>
            <p>You may contact Spartan Warrior Foundation to ask questions about this Privacy Policy, request correction of certain information, unsubscribe from general communications, ask about information you submitted, or request that we remove certain information, where appropriate and legally possible.</p>
            
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8">
                <h3 className="mt-0">Contact Us</h3>
                <p>If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
                <p><strong>Email:</strong> info@spartanwarriorfoundation.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Mailing Address:</strong> 123 Foundation Way, Suite 400, City, State 12345</p>
            </div>

            <hr className="my-12 border-gray-100" />

            <h2>Updates to This Privacy Policy</h2>
            <p>Spartan Warrior Foundation may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date. Continued use of the website after changes are posted means you accept the updated Privacy Policy.</p>

            <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                    <ShieldAlert className="w-6 h-6 text-primary mr-3" />
                    <h3 className="m-0 text-primary">Final Note</h3>
                </div>
                <p className="text-sm">Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only.</p>
                <p className="text-sm">Spartan Warrior Foundation does not provide credit repair services, legal advice, tax advice, investment advice, or financial advice.</p>
                <p className="text-sm font-bold">Participants are responsible for their own actions, decisions, participation, and results.</p>
            </div>

        </div>
      </motion.div>

    </div>
  );
};

export default PrivacyPolicy;
