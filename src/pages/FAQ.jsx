import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ShieldAlert } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-accent/30 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
      >
        <span className="font-bold text-primary pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-primary/70 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = ({ title, items }) => (
    <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <span className="w-2 h-6 bg-accent rounded-full mr-3"></span>
            {title}
        </h2>
        <div className="space-y-4">
            {items.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
        </div>
    </div>
);

const FAQ = () => {

  const faqData = [
    {
      title: "General Questions",
      items: [
        {
          q: "What is Spartan Warrior Foundation?",
          a: <p>Spartan Warrior Foundation is an education-focused nonprofit organization created to help individuals gain access to financial literacy education, credit education resources, classroom-style learning, and tools that can help them better understand their financial profile. Our goal is to provide access, education, and structure for people who may not be able to afford premium tools or educational resources on their own.</p>
        },
        {
          q: "What does Spartan Warrior Foundation do?",
          a: <div>
              <p className="mb-2">Spartan Warrior Foundation provides access to:</p>
              <ul className="list-disc pl-5 space-y-1">
                  <li>Financial literacy education</li>
                  <li>Credit education resources</li>
                  <li>Classroom-style learning</li>
                  <li>Educational tools</li>
                  <li>Credit report awareness education</li>
                  <li>Budgeting and financial organization resources</li>
                  <li>Workshops and learning materials</li>
                  <li>Sponsored access opportunities when available</li>
              </ul>
              <p className="mt-2">We help people learn how to better understand their own financial information.</p>
          </div>
        },
        {
          q: "Is Spartan Warrior Foundation a credit repair company?",
          a: <div>
              <p className="font-bold text-red-600 mb-2">No. Spartan Warrior Foundation is not a credit repair company.</p>
              <ul className="list-disc pl-5 space-y-1">
                  <li>We do not fix credit.</li>
                  <li>We do not repair credit.</li>
                  <li>We do not remove items from credit reports.</li>
                  <li>We do not dispute accounts on behalf of participants.</li>
                  <li>We do not communicate with credit bureaus, creditors, collectors, lenders, or financial institutions for participants.</li>
              </ul>
              <p className="mt-2">We provide education, tools, classroom access, and structure so people can learn how to better understand their own financial profile.</p>
          </div>
        },
        {
          q: "Do you fix credit for people?",
          a: <div>
              <p className="font-bold text-red-600 mb-2">No. We do not fix credit for people.</p>
              <p>Spartan Warrior Foundation provides education and tools so participants can learn how to understand their financial profile and make more informed decisions for themselves. The foundation does not do the work for participants. The participant must show up, learn, and take action.</p>
          </div>
        },
        {
          q: "Do you guarantee credit score increases?",
          a: <p><strong className="text-red-600">No.</strong> Spartan Warrior Foundation does not guarantee credit score increases, deletions, approvals, loans, funding, or financial outcomes. Results depend on each individual’s situation, participation, consistency, decisions, and actions. Our role is to provide education, access, tools, and structure.</p>
        },
        {
          q: "Do you guarantee approvals or funding?",
          a: <p><strong className="text-red-600">No.</strong> Spartan Warrior Foundation does not guarantee approvals, funding, loans, credit cards, business credit, personal credit, or any financial outcome. We provide education and tools that may help participants better understand their financial profile and become more informed before making decisions.</p>
        }
      ]
    },
    {
      title: "Program Access Questions",
      items: [
        {
          q: "Who can apply for program access?",
          a: <p>Program access may be available to individuals who need financial literacy education, credit education resources, tools, or classroom-style learning but may not be able to afford those resources on their own. This program is for people who are willing to show up, learn, participate, and take responsibility for their own progress.</p>
        },
        {
          q: "Does applying guarantee access?",
          a: <p><strong className="text-red-600">No.</strong> Submitting an application does not guarantee approval, sponsorship, software access, classroom access, or program participation. Program access may depend on eligibility, available funding, sponsor support, program capacity, foundation guidelines, and available resources.</p>
        },
        {
          q: "What happens after I apply?",
          a: <p>After you submit a program access request, Spartan Warrior Foundation may review your application based on eligibility, need, program availability, and foundation guidelines. If approved, you may receive access to educational resources, classroom-style learning, tools, or sponsored support when available.</p>
        },
        {
          q: "What kind of support can participants receive?",
          a: <div>
              <p className="mb-2">Approved participants may receive access to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Financial literacy education</li>
                  <li>Credit education resources</li>
                  <li>Classroom-style learning</li>
                  <li>Educational workshops</li>
                  <li>Learning materials</li>
                  <li>Credit report awareness education</li>
                  <li>Budgeting and financial organization resources</li>
                  <li>Software tools when available through sponsorship</li>
                  <li>Community education opportunities</li>
              </ul>
              <p>Program access may vary based on availability and foundation guidelines.</p>
          </div>
        },
        {
          q: "What is expected from participants?",
          a: <div>
              <p className="mb-2 font-bold">Participants are expected to show up, learn, participate, and take action.</p>
              <p>Spartan Warrior Foundation provides the classroom. We provide the tools. We provide the education. We provide the structure. But participants must use the resources, attend when needed, review the material, and take responsibility for their own decisions and results.</p>
          </div>
        },
        {
          q: "Can someone else apply on behalf of another person?",
          a: <p>In some cases, a person may contact the foundation on behalf of someone else. However, the person receiving access must be willing to participate, learn, and take responsibility for their own progress. The foundation is not designed for people who do not want to learn or take action.</p>
        }
      ]
    },
    {
      title: "Donation Questions",
      items: [
        {
          q: "How do donations help?",
          a: <p>Donations help Spartan Warrior Foundation provide access to financial literacy education, credit education resources, classroom-style learning, tools, workshops, learning materials, and program support. Donations may help individuals who cannot afford these resources on their own receive access through the foundation.</p>
        },
        {
          q: "Where does donation money go?",
          a: <div>
              <p className="mb-2">Donations may support:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Financial literacy education</li>
                  <li>Credit education resources</li>
                  <li>Sponsored software access</li>
                  <li>Classroom-style learning</li>
                  <li>Educational workshops</li>
                  <li>Participant learning materials</li>
                  <li>Community outreach</li>
                  <li>Program onboarding</li>
                  <li>Technology and platform support</li>
                  <li>Impact tracking and reporting</li>
                  <li>Foundation operations</li>
              </ul>
              <p>The foundation uses donations to support its mission, programs, and access-based educational work.</p>
          </div>
        },
        {
          q: "Is my donation tax-deductible?",
          a: <p>Tax-deductibility may depend on the foundation’s nonprofit status and applicable law. Donors should consult their own tax advisor regarding tax treatment. If donation receipts are available through the donation processing system, donors may receive a confirmation or receipt after donating.</p>
        },
        {
          q: "Can I make a monthly donation?",
          a: <p>Yes, if monthly giving is available through the donation platform. Monthly donations help Spartan Warrior Foundation create consistent support for education, tools, classroom access, and participant resources.</p>
        },
        {
          q: "Can I choose who my donation helps?",
          a: <p>Unless otherwise stated in writing, donations generally support the foundation’s mission, programs, and operations rather than one specific individual. This allows Spartan Warrior Foundation to allocate resources based on need, eligibility, program capacity, and available funding.</p>
        }
      ]
    },
    {
      title: "The Score Machine Sponsor Match Questions",
      items: [
        {
          q: "How does The Score Machine dollar-for-dollar match work?",
          a: <div>
              <p className="mb-2">For every dollar donated to Spartan Warrior Foundation, The Score Machine matches one dollar to help increase the total support available for education, tools, classroom access, and program resources.</p>
              <p className="mb-2 font-bold">Example:</p>
              <ul className="list-none space-y-1 mb-2">
                  <li>• A $50 donation creates $100 in total support.</li>
                  <li>• A $100 donation creates $200 in total support.</li>
                  <li>• A $500 donation creates $1,000 in total support.</li>
              </ul>
              <p>This match allows donor support to go further.</p>
          </div>
        },
        {
          q: "What does The Score Machine provide?",
          a: <p>The Score Machine helps support access to educational tools and resources designed to help participants better understand their financial profile. These tools may help participants learn about credit report data, accounts, utilization, inquiries, payment history, negative items, bureau differences, and financial readiness. The tools are educational resources. They do not guarantee results.</p>
        },
        {
          q: "Does the sponsor match mean every applicant gets approved?",
          a: <p><strong className="text-red-600">No.</strong> The sponsor match helps increase available support, but it does not guarantee that every applicant will receive program access. Access may depend on eligibility, program capacity, available resources, sponsor match availability, foundation guidelines, and participant need.</p>
        },
        {
          q: "Does The Score Machine fix credit for participants?",
          a: <p><strong className="text-red-600">No.</strong> The Score Machine does not fix credit for participants through Spartan Warrior Foundation. The foundation and sponsor partnership are focused on education, access, and tools. Participants are responsible for learning, reviewing their own information, making their own decisions, and taking their own actions.</p>
        }
      ]
    },
    {
      title: "Sponsor and Partner Questions",
      items: [
        {
          q: "Can a business sponsor Spartan Warrior Foundation?",
          a: <p><strong className="text-primary">Yes.</strong> Businesses, organizations, and community partners may support Spartan Warrior Foundation through sponsorships, donations, program support, workshops, participant access, or educational initiatives. Sponsors can help expand access to financial literacy education and credit education resources.</p>
        },
        {
          q: "What can sponsors support?",
          a: <div>
              <p className="mb-2">Sponsors may support:</p>
              <ul className="list-disc pl-5 space-y-1">
                  <li>Participant access</li>
                  <li>Financial literacy education</li>
                  <li>Credit education programs</li>
                  <li>Classroom resources</li>
                  <li>Community workshops</li>
                  <li>Software and tool access</li>
                  <li>Technology support</li>
                  <li>Foundation outreach</li>
                  <li>Program expansion</li>
              </ul>
          </div>
        },
        {
          q: "How can a business become a sponsor?",
          a: <p>Businesses interested in sponsorship can contact Spartan Warrior Foundation through the contact form and select “Sponsor Inquiry.” The foundation can provide additional information about sponsorship opportunities, program support, impact tracking, and recognition options.</p>
        },
        {
          q: "Can foundations or grant funders support the mission?",
          a: <p><strong className="text-primary">Yes.</strong> Spartan Warrior Foundation welcomes conversations with private donors, grant-making organizations, foundations, and funding partners who want to support financial literacy access and education-based programs. Grant and funding partners can contact the foundation through the contact form and select “Grant / Funding Inquiry.”</p>
        }
      ]
    },
    {
      title: "Education and Tools Questions",
      items: [
        {
          q: "What does credit education mean?",
          a: <p>Credit education means helping people better understand the information inside their credit profile. This may include education about accounts, balances, utilization, payment history, inquiries, negative items, personal information, bureau differences, and financial readiness. Credit education is not the same as credit repair.</p>
        },
        {
          q: "What does financial literacy education mean?",
          a: <p>Financial literacy education helps people better understand basic money concepts, budgeting, financial organization, debt awareness, decision-making, and personal responsibility. The goal is to help participants become more informed and more prepared.</p>
        },
        {
          q: "Are the tools enough by themselves?",
          a: <p><strong className="text-red-600">No.</strong> Tools are only useful when someone uses them, learns from them, and takes action. Spartan Warrior Foundation provides tools and education, but participants must still show up, learn, and do the work. Access creates opportunity. Action creates progress.</p>
        },
        {
          q: "Do you provide legal, tax, investment, or financial advice?",
          a: <p><strong className="text-red-600">No.</strong> Spartan Warrior Foundation does not provide legal, tax, investment, lending, banking, financial planning, or professional financial advice. All information and resources are provided for educational and informational purposes only. Participants should consult qualified professionals when they need advice specific to their situation.</p>
        }
      ]
    },
    {
      title: "Results and Accountability Questions",
      items: [
        {
          q: "What does success look like in the program?",
          a: <p>Success does not mean a guaranteed score increase, approval, deletion, or funding result. Success means a participant becomes more educated, more aware, more organized, and better prepared to make informed decisions. Our goal is to help participants stop guessing and start learning.</p>
        },
        {
          q: "What if someone does not show up or use the tools?",
          a: <p>If someone does not show up, does not learn, does not participate, and does not take action, they should not expect progress. Spartan Warrior Foundation provides access. The participant must use that access. The foundation is not here to carry people. The foundation is here to equip people.</p>
        },
        {
          q: "Why is accountability important?",
          a: <p>Accountability matters because tools alone do not create change. Education alone does not create change. Access alone does not create change. People create progress when they show up, learn, apply the education, and take responsibility for their own decisions. That is why accountability is part of the foundation’s mission.</p>
        }
      ]
    },
    {
      title: "Contact Questions",
      items: [
        {
          q: "How can I contact Spartan Warrior Foundation?",
          a: <p>You can contact Spartan Warrior Foundation through the contact form on the website. Please select the reason for your message so your inquiry can be directed properly. Common reasons include: General Question, Donation Question, Sponsor Inquiry, Grant / Funding Inquiry, Program Access Request, Partnership Opportunity, Media / Speaking Request, or Other.</p>
        },
        {
          q: "How long does it take to receive a response?",
          a: <p>Response times may vary based on the type of inquiry, program capacity, and foundation operations. Program access requests, sponsorship inquiries, and grant discussions may require additional review.</p>
        }
      ]
    }
  ];

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
                <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">Questions About Spartan Warrior Foundation</h1>
            <p className="text-lg md:text-xl text-primary/70 leading-relaxed max-w-3xl mx-auto">
                Spartan Warrior Foundation is built to provide financial literacy education, credit education resources, classroom-style learning, and access to tools for individuals who are ready to show up, learn, and take ownership.
            </p>
            <p className="text-primary/70 mt-4">Below are answers to common questions about what we do, what we do not do, how donations work, and how program access is provided.</p>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-4xl mx-auto px-4 md:px-8"
      >
        {faqData.map((section, index) => (
            <FAQSection key={index} title={section.title} items={section.items} />
        ))}

        {/* Final Disclaimer */}
        <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
            <div className="flex justify-center items-center mb-4">
                <ShieldAlert className="w-6 h-6 text-primary mr-3" />
                <h3 className="m-0 text-primary text-xl font-bold">Final Disclaimer</h3>
            </div>
            <p className="text-sm text-primary/70 mb-4 leading-relaxed max-w-3xl mx-auto">
                Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only. Spartan Warrior Foundation does not provide credit repair services. We do not dispute accounts on behalf of participants. We do not remove items from credit reports. We do not guarantee credit score increases, deletions, approvals, loans, funding, or specific financial outcomes. We do not provide legal, tax, investment, or financial advice. Participants are responsible for their own actions, decisions, participation, and results.
            </p>
            <p className="text-lg font-bold text-accent">The foundation provides access. The participant must take action.</p>
        </div>
      </motion.div>

    </div>
  );
};

export default FAQ;