import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, BookOpen, Wrench, Target, CheckCircle2, XCircle, BarChart3, Users, Zap, PlayCircle, Eye, HandHeart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleHero from '../components/ui/particle-effect-for-hero';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="w-full bg-background text-text font-sans">
      
      {/* 1. Hero Section - Particle Interactive */}
      <div className="relative pt-16"> {/* Added padding top for navbar */}
        <ParticleHero />
      </div>

      {/* 2. Why We Exist Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Why We Exist</h2>
            <p className="text-4xl md:text-5xl font-bold leading-tight mb-16 text-primary">
              Most People Were Never Taught the System
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <FadeIn delay={0.2} direction="right" className="space-y-6 text-lg text-primary/80">
              <p>Too many people are told to fix their finances, fix their credit, make better decisions, or get their life together without ever being taught how the financial system actually works.</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div> They are expected to understand reports they were never taught how to read.</li>
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div> They are expected to apply for credit, loans, housing, funding, or opportunities without understanding what may be reviewed.</li>
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div> They are expected to make better decisions without the education, tools, or structure needed to understand where they stand.</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="bg-primary p-10 rounded-3xl shadow-xl text-white">
              <Eye className="w-12 h-12 text-accent mb-6" />
              <p className="text-2xl font-medium mb-6">Many people are not struggling because they do not care.</p>
              <p className="text-2xl font-bold text-accent mb-8">Many people are struggling because they were never taught.</p>
              <p className="text-lg text-white/80 border-t border-white/20 pt-6">Spartan Warrior Foundation was created to help change that.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="py-24 relative bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Mission</h2>
            <p className="text-4xl font-bold leading-tight mb-8 text-primary">
              Our Mission
            </p>
            <p className="text-xl text-primary/80 mb-12">
                Our mission is to provide access to financial literacy education, credit education resources, classroom-style learning, and tools for individuals who are ready to learn, participate, and take ownership.
            </p>
          </FadeIn>
          <div className="bg-white p-10 rounded-3xl shadow-premium border border-gray-100 text-left">
              <p className="text-lg text-primary/80 mb-8">We believe financial education should not only be available to people who can afford premium tools, coaching, or private education.</p>
              <p className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-6">We believe people deserve the chance to understand the system before they are judged by it.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"><CheckCircle2 className="text-accent shrink-0" /> We provide access.</div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"><CheckCircle2 className="text-accent shrink-0" /> We provide education.</div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"><CheckCircle2 className="text-accent shrink-0" /> We provide structure.</div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"><CheckCircle2 className="text-accent shrink-0" /> We provide tools.</div>
              </div>
              <div className="text-center bg-primary text-white p-4 rounded-xl font-bold text-xl">
                  But the participant must do the work.
              </div>
          </div>
        </div>
      </section>

      {/* 4. Founder Preview Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
                <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Founder Preview</h2>
                <h3 className="text-4xl font-bold text-primary mb-6">Why This Foundation Was Started</h3>
                <div className="space-y-4 text-lg text-primary/80 mb-8">
                    <p>Spartan Warrior Foundation was founded by Ali Badi, a builder, educator, software founder, and entrepreneur who understands what it means to come from limited resources and have to figure things out the hard way.</p>
                    <p>Ali built his career around education, software, systems, and helping people understand what is in front of them.</p>
                    <p className="font-bold text-primary">Through that work, he saw a major problem.</p>
                    <p>The people who often need financial literacy education, credit education, and structured tools the most are usually the people who cannot afford access to them.</p>
                </div>
            </FadeIn>
            <FadeIn direction="left" className="bg-secondary p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10"></div>
                <ul className="space-y-6 text-xl text-primary font-medium mb-8">
                    <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 mt-1" /> They are told to fix the problem, but they are not given the classroom.</li>
                    <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 mt-1" /> They are told to improve, but they are not given the tools.</li>
                    <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 mt-1" /> They are told to make better decisions, but they are not taught how the system works.</li>
                </ul>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <p className="font-bold text-primary mb-4">That is why Spartan Warrior Foundation exists.</p>
                    <p className="text-primary/70 mb-2">Not to carry people. Not to do the work for them.</p>
                    <p className="text-accent font-bold">But to equip them with access, education, tools, and structure.</p>
                </div>
                <div className="mt-8 text-center">
                    <Link to="/about" className="inline-block px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all">
                        Read the Founder Story
                    </Link>
                </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. What We Provide Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 relative">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">What We Provide</h2>
            <p className="text-4xl font-bold mb-6 text-primary">What Spartan Warrior Foundation Provides</p>
            <p className="text-xl text-muted">
              Spartan Warrior Foundation provides educational access and tools designed to help individuals better understand their financial profile and financial decision-making.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {[
              "Financial literacy education",
              "Credit education resources",
              "Classroom-style training",
              "Credit report awareness education",
              "Software tools when available through sponsorship",
              "Budgeting and financial organization resources",
              "Educational workshops",
              "Learning materials",
              "Community education opportunities",
              "Structured resources to help people understand where they stand"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                <span className="text-primary font-medium">{item}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-premium border border-gray-100">
            <p className="text-xl font-medium text-primary leading-relaxed">
              Our goal is <span className="text-red-600 font-bold">not to create dependency</span>.<br/>
              Our goal is to equip people with education and tools so they can <strong className="text-accent font-bold">take ownership of their own financial journey</strong>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. What We Do Not Do Section */}
      <section className="py-24 bg-red-50/50 border-b border-red-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">What We Do Not Do</h2>
            <p className="text-4xl font-bold mb-6 text-primary">We Are Not a Credit Repair Company</p>
            <p className="text-xl text-red-900/70">Spartan Warrior Foundation does not provide credit repair services.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {[
              "We do not fix credit.",
              "We do not repair credit.",
              "We do not remove items from credit reports.",
              "We do not dispute accounts on behalf of participants.",
              "We do not communicate with credit bureaus, creditors, collectors, lenders, or financial institutions on behalf of participants.",
              "We do not promise deletions.",
              "We do not guarantee credit score increases.",
              "We do not guarantee approvals, loans, funding, or financial outcomes.",
              "We do not provide legal, tax, investment, or financial advice."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="right" className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-red-50">
                <XCircle className="text-red-500 shrink-0 mt-0.5" size={24} />
                <span className="text-primary font-medium">{text}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center bg-primary p-10 rounded-3xl shadow-xl mx-auto w-full text-white">
            <h3 className="text-2xl font-bold mb-4 text-accent">We are an education-focused nonprofit organization.</h3>
            <p className="text-xl text-white/90">
              Our role is to provide education, tools, classroom access, and structure so people can learn how to better understand their own financial information.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Philosophy Section */}
      <section className="py-32 relative bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Philosophy</h2>
            <p className="text-4xl md:text-6xl font-bold leading-tight mb-12 text-primary">
              Access Creates Opportunity.<br/>
              <span className="text-accent">Action Creates Progress.</span>
            </p>
            <div className="space-y-8 text-xl text-muted text-left md:text-center bg-secondary p-10 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <p className="text-2xl font-medium text-primary">Spartan Warrior Foundation is built on <strong>education, access, accountability, and action</strong>.</p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                  <div className="bg-white p-4 rounded-xl text-sm font-bold text-primary shadow-sm border border-gray-100">We can provide the classroom.</div>
                  <div className="bg-white p-4 rounded-xl text-sm font-bold text-primary shadow-sm border border-gray-100">We can provide the tools.</div>
                  <div className="bg-white p-4 rounded-xl text-sm font-bold text-primary shadow-sm border border-gray-100">We can provide the education.</div>
                  <div className="bg-white p-4 rounded-xl text-sm font-bold text-primary shadow-sm border border-gray-100">We can provide the structure.</div>
              </div>

              <div className="py-6 font-bold text-primary text-2xl md:text-3xl space-y-4">
                <p>But the participant must show up.</p>
                <p>The participant must learn.</p>
                <p>The participant must participate.</p>
                <p>The participant must take action.</p>
                <p className="text-accent text-3xl md:text-4xl mt-6">The participant must stay consistent.</p>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                  <p className="mb-4">This foundation is not about shortcuts. It is about giving people a real starting point, a toolset, a classroom, and the opportunity to do the work for themselves.</p>
                  <p className="text-2xl font-bold text-primary">We are not here to carry people. We are here to equip them.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Who We Help Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Who We Help Section</h2>
              <p className="text-4xl font-bold mb-6 text-primary">Who This Foundation Is For</p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Spartan Warrior Foundation is designed for individuals who want to learn but may not have access to premium financial literacy tools, credit education, or structured learning resources on their own.
              </p>
              <div className="p-6 bg-white border-l-4 border-accent rounded-r-xl shadow-sm">
                <p className="text-xl font-medium text-primary">
                  This foundation is for people who are ready to learn, show up, and move with purpose.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-white p-10 rounded-3xl shadow-premium border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-primary">We support people who:</h3>
              <ul className="space-y-5">
                {[
                  "Want to better understand their financial profile",
                  "Need access to financial literacy education",
                  "Want to learn how credit reports work",
                  "Feel overwhelmed by the financial system",
                  "Do not know where to start",
                  "Cannot afford premium education or tools on their own",
                  "Are ready to show up and participate",
                  "Are willing to take responsibility for their own learning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="text-accent w-3 h-3" />
                    </div>
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. Impact Numbers Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Impact Numbers</h2>
              <p className="text-4xl md:text-5xl font-bold mb-6 text-primary">Built on Proven Reach, Real Education, and Community Impact</p>
              <p className="text-xl text-primary/80 max-w-4xl mx-auto leading-relaxed">
                Spartan Warrior Foundation is not being built from theory. It is being built from years of experience educating people, developing tools, building financial education systems, and helping individuals better understand the information in front of them.
              </p>
              <p className="text-lg text-primary/70 mt-6 max-w-4xl mx-auto leading-relaxed">
                Through Ali Badi’s financial education ecosystem, software platforms, community education, and training resources, thousands of individuals have already been reached with tools and education designed to help them better understand credit, financial literacy, and financial readiness.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="bg-primary rounded-[2.5rem] p-10 md:p-16 shadow-premium relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Impact Snapshot</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10,000+</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">Individuals Reached</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">7,000+</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">[Insert Full Stat Here]</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">[Number]</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">[Insert Stat Label Here]</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">[Number]</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">[Insert Stat Label Here]</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Why This Matters</h3>
            <div className="space-y-4 text-lg text-primary/80">
              <p>These numbers show that the mission behind Spartan Warrior Foundation is not new.</p>
              <p>The foundation is being created to expand access to the same type of education, tools, and structure for people who may not be able to afford them on their own.</p>
              <p className="font-bold text-primary">The goal is to take what has already reached thousands and make it accessible to individuals who need education, guidance, and tools but may not have the financial ability to access them privately.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. How Program Access Works Section */}
      <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Program Access</h2>
                  <p className="text-4xl font-bold mb-6 text-primary">How We Create Access</p>
                  <p className="text-xl text-primary/70">Spartan Warrior Foundation creates access through donor support, sponsor partnerships, and educational programming. The process is simple:</p>
              </FadeIn>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {[
                      { step: "Step 1", title: "Apply or Request Access", desc: "Individuals can request access to financial literacy education, credit education resources, classroom-style learning, or tools." },
                      { step: "Step 2", title: "Foundation Review", desc: "The foundation reviews requests based on eligibility, need, available resources, sponsor support, and program capacity." },
                      { step: "Step 3", title: "Access Is Provided When Available", desc: "Approved participants may receive access to educational resources, tools, classroom training, or learning materials." },
                      { step: "Step 4", title: "The Participant Shows Up", desc: "The participant must use the resources, attend training when available, review the education, and take responsibility for their own progress." },
                      { step: "Step 5", title: "The Participant Takes Action", desc: "The goal is for each participant to become more educated, more aware, more organized, and better prepared to make informed decisions." },
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                              {i + 1}
                          </div>
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                              <div className="text-xs font-bold text-accent uppercase mb-1">{item.step}</div>
                              <h3 className="font-bold text-primary text-xl mb-2">{item.title}</h3>
                              <p className="text-primary/70">{item.desc}</p>
                          </div>
                      </FadeIn>
                  ))}
              </div>

              <FadeIn delay={0.4} className="text-center mt-16">
                  <Link to="/apply" className="inline-block px-10 py-5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xl transition-all shadow-premium">
                      Apply for Program Access
                  </Link>
              </FadeIn>
          </div>
      </section>

      {/* 10. The Score Machine Sponsor Match Section */}
      <section className="py-24 relative bg-secondary border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-premium border border-gray-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px]" />
              <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Sponsor Match</h2>
                  <p className="text-3xl md:text-4xl font-bold mb-6 text-primary">When You Support the Mission, Your Donation Goes Further</p>
                  <p className="text-primary/80 text-lg mb-6 leading-relaxed">
                    Through a sponsor partnership with <strong className="text-primary font-bold">The Score Machine</strong>, every dollar donated to Spartan Warrior Foundation is matched dollar-for-dollar.
                  </p>
                  <p className="text-primary font-bold text-xl mb-8">
                    That means once someone believes in the mission and chooses to support it, their donation can create twice the support.
                  </p>
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                      <p className="font-bold text-primary mb-4 text-lg">Example Impact</p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-accent w-5 h-5" /> A $250 donation becomes $500 in support.</li>
                        <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-accent w-5 h-5" /> A $500 donation becomes $1,000 in support.</li>
                        <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-accent w-5 h-5" /> A $1,000 donation becomes $2,000 in support.</li>
                        <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-accent w-5 h-5" /> A $5,000 donation becomes $10,000 in support.</li>
                      </ul>
                  </div>
                </div>
                <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  <HandHeart className="text-accent w-16 h-16 mb-8" />
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    The match helps provide more financial literacy education, credit education resources, classroom access, software tools, and learning materials for individuals who are ready to show up and do the work.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. How Donations Help Section */}
      <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <FadeIn direction="right">
                      <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">How Donations Help</h2>
                      <p className="text-4xl font-bold mb-6 text-primary">Your Support Helps Create Access</p>
                      <p className="text-xl text-primary/80 mb-8">Donations to Spartan Warrior Foundation may help provide:</p>
                      <div className="bg-secondary p-6 rounded-2xl border border-gray-100">
                          <p className="font-bold text-accent text-lg">Your support helps someone receive access to tools and education they may not be able to afford on their own.</p>
                      </div>
                  </FadeIn>
                  <FadeIn direction="left">
                      <ul className="grid sm:grid-cols-2 gap-4">
                          {[
                              "Financial literacy education",
                              "Credit education resources",
                              "Sponsored software access",
                              "Classroom-style learning",
                              "Educational workshops",
                              "Participant learning materials",
                              "Community outreach",
                              "Technology and platform support",
                              "Program onboarding",
                              "Impact tracking and reporting"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                                  <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                  <span className="text-primary font-medium text-sm">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* 12. Impact Preview Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
              <FadeIn>
                  <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Impact Preview Section</h2>
                  <p className="text-4xl font-bold mb-6 text-primary">Built on Transparency</p>
                  <p className="text-lg text-primary/70 mb-6">Spartan Warrior Foundation believes donors, sponsors, and partners deserve to understand how support is being used.</p>
                  <p className="text-lg text-primary/70 mb-12">As the foundation grows, we are committed to tracking and sharing the impact created through donations, sponsor matching, program access, and participant support.</p>
                  
                  <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 mb-12 text-left">
                      <p className="font-bold text-xl text-primary mb-6 border-b border-gray-100 pb-4">We aim to report:</p>
                      <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                          {[
                              "Total donations raised",
                              "Total sponsor match contributed",
                              "Total program support created",
                              "Number of people sponsored",
                              "Number of education access opportunities provided",
                              "Number of tools and resources distributed",
                              "Community education efforts",
                              "Participant stories and updates"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                                  <BarChart3 className="w-5 h-5 text-accent shrink-0" />
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-2xl font-bold text-primary mb-12">
                      <span>Trust matters.</span>
                      <span className="hidden md:block w-2 h-2 rounded-full bg-accent"></span>
                      <span>Transparency matters.</span>
                      <span className="hidden md:block w-2 h-2 rounded-full bg-accent"></span>
                      <span>Impact matters.</span>
                  </div>

                  <Link to="/impact" className="inline-block px-10 py-5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-primary font-bold text-xl transition-all shadow-sm">
                      View Our Impact
                  </Link>
              </FadeIn>
          </div>
      </section>

      {/* 13. Final Call to Action Section */}
      <section className="py-32 relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Get Involved</h2>
            <p className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Help Us Equip People Who Are Ready to Learn</p>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Spartan Warrior Foundation exists to create access for people who are ready to show up, learn, and take ownership of their financial future.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl mb-12">
                <p className="text-2xl font-medium leading-relaxed italic">
                    "If you believe in giving people tools instead of excuses, education instead of empty promises, and access instead of judgment, you can support the mission."
                </p>
            </div>
            <p className="text-accent font-bold text-2xl mb-12">And with The Score Machine matching every dollar donated, your support can go twice as far.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/donate" className="px-10 py-5 rounded-full bg-accent hover:bg-accentHover text-white font-bold text-xl transition-all shadow-gold">
                Support the Mission
              </Link>
              <Link to="/sponsor-match" className="px-10 py-5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xl transition-all border border-white/20">
                Become a Sponsor
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 14. Final Disclaimer */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            <strong className="text-primary">Disclaimer:</strong> Spartan Warrior Foundation provides educational resources, financial literacy education, credit education, classroom-style learning, and access to tools for informational purposes only. Spartan Warrior Foundation does not provide credit repair services. We do not dispute accounts on behalf of participants. We do not remove items from credit reports. We do not guarantee credit score increases, deletions, approvals, loans, funding, or specific financial outcomes. We do not provide legal, tax, investment, or financial advice. Participants are responsible for their own actions, decisions, participation, and results.
          </p>
          <p className="font-bold text-primary">The foundation provides access. The participant must take action.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
