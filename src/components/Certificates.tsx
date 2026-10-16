import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, Eye, Link, Search, X, ShieldCheck, Calendar, Filter, ExternalLink } from "lucide-react";

export type Certificate = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  issuer: string;
  date: string;
  category: "AI & Machine Learning" | "Web Development" | "Business & Analytics" | "Professional & Other";
  credentialId?: string;
  file?: string;
  skills?: string;
};

const certificates: Certificate[] = [
  // --- AI & Machine Learning ---
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "April 2026",
    category: "AI & Machine Learning",
    credentialId: "8h47q7gj7drw",
    file: "certificates/claude-101.pdf",
    description: "Official Anthropic certification in Claude architecture, prompt engineering, and conversational AI safety.",
    skills: "Claude AI, Prompt Engineering, LLM Alignment"
  },
  {
    id: "tf-deep-learning",
    title: "Python & TensorFlow: Deep Dive",
    issuer: "Udemy",
    date: "February 2026",
    category: "AI & Machine Learning",
    credentialId: "UC-0e702352",
    file: "certificates/tf-deep-learning.pdf",
    description: "Comprehensive deep learning mastery: Convolutional Neural Networks, model optimization, and production inference.",
    skills: "TensorFlow, CNN, Deep Learning, Keras"
  },
  {
    id: "edx-intro-genai",
    title: "Introduction to Generative AI",
    issuer: "edX",
    date: "2026",
    category: "AI & Machine Learning",
    file: "certificates/edx-intro-genai.pdf",
    description: "Foundations of generative models, LLM mechanics, latent diffusion, and industrial applications.",
    skills: "Generative AI, LLMs, Neural Networks"
  },
  {
    id: "edx-prompt-eng",
    title: "Introduction to Prompt Engineering",
    issuer: "edX",
    date: "2026",
    category: "AI & Machine Learning",
    file: "certificates/edx-prompt-eng.pdf",
    description: "Systematic prompt design, few-shot conditioning, chain-of-thought prompting, and agent architectures.",
    skills: "Prompt Engineering, LLM Fine-tuning"
  },
  {
    id: "ai-automation",
    title: "AI Automation Kickstart",
    issuer: "Udemy",
    date: "February 2026",
    category: "AI & Machine Learning",
    credentialId: "97ae3180",
    file: "certificates/ai-automation-kickstart.pdf",
    description: "Hands-on workflow automation, agentic pipelines, and autonomous tooling integration.",
    skills: "AI Automation, Agentic Workflows"
  },
  {
    id: "tf-nlp-transfer",
    title: "Transfer Learning for NLP with TensorFlow Hub",
    issuer: "Google",
    date: "2025",
    category: "AI & Machine Learning",
    description: "State-of-the-art NLP fine-tuning, embeddings transfer, and text classification with TF Hub.",
    skills: "NLP, Transfer Learning, TensorFlow Hub"
  },
  {
    id: "aws-devops-genai",
    title: "DevOps & AI on AWS: Upgrading Apps with GenAI",
    issuer: "AWS",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Cloud deployment of generative AI services, automated CI/CD pipelines, and AWS AI services.",
    skills: "AWS, DevOps, Generative AI"
  },
  {
    id: "applied-ml-python",
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Advanced supervised & unsupervised machine learning, model validation, and feature pipelines.",
    skills: "Scikit-Learn, Pandas, Machine Learning"
  },
  {
    id: "azure-ml-experiment",
    title: "Experiment with Azure Machine Learning",
    issuer: "Microsoft",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Cloud-native ML training, hyperparameter tuning, model registry, and managed endpoints.",
    skills: "Azure ML, Cloud AI, MLOps"
  },
  {
    id: "intro-llms",
    title: "Introduction to Large Language Models",
    issuer: "Google",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Core transformer architecture concepts, attention mechanisms, and enterprise LLM deployment.",
    skills: "LLM, Transformers, Deep Learning"
  },
  {
    id: "genai-intro-apps",
    title: "Generative AI: Introduction & Applications",
    issuer: "IBM",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Enterprise applications of generative models, ethics, and multi-modal synthesis.",
    skills: "Enterprise GenAI, Ethics in AI"
  },
  {
    id: "ai-for-startups",
    title: "AI for Startups",
    issuer: "Google",
    date: "2025",
    category: "AI & Machine Learning",
    description: "Scaling high-impact AI products from prototype to production with Google cloud tooling.",
    skills: "AI Product Architecture, Cloud Scaling"
  },

  // --- Web Development ---
  {
    id: "python-django",
    title: "Python & Django Learning Course",
    issuer: "Udemy",
    date: "February 2026",
    category: "Web Development",
    file: "certificates/python-django.pdf",
    description: "Full-stack Python web development, ORM schema design, REST APIs, and authentication flows.",
    skills: "Python, Django, REST APIs, PostgreSQL"
  },
  {
    id: "python-beginners",
    title: "Python Complete Course",
    issuer: "Udemy",
    date: "February 2026",
    category: "Web Development",
    credentialId: "UC-701fba4c",
    file: "certificates/python-beginners.pdf",
    description: "Rigorous object-oriented programming, data structures, algorithms, and backend scripting.",
    skills: "Python, OOP, Backend Architecture"
  },
  {
    id: "sorting-algorithms",
    title: "Introduction to Sorting Algorithms",
    issuer: "SkillUp by Simplilearn",
    date: "November 2025",
    category: "Web Development",
    credentialId: "9323087",
    file: "certificates/sorting-algorithms.pdf",
    description: "Time & space complexity analysis (Big-O), divide-and-conquer algorithms, and tree search.",
    skills: "Algorithms, Data Structures, Big-O"
  },
  {
    id: "dotnet-backend",
    title: "Back-End Web Development with .NET",
    issuer: "Microsoft",
    date: "January 2026",
    category: "Web Development",
    description: "C# backend web APIs, Entity Framework Core, MVC architecture, and microservices.",
    skills: ".NET, C#, ASP.NET Core, APIs"
  },
  {
    id: "programming-js",
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "2025",
    category: "Web Development",
    description: "Modern ECMAScript, asynchronous programming, DOM manipulation, and unit testing.",
    skills: "JavaScript, ES6+, Unit Testing"
  },
  {
    id: "intro-frontend",
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "2025",
    category: "Web Development",
    description: "Semantic HTML5, CSS responsive layout engines, accessibility, and modern UI practices.",
    skills: "Frontend Development, HTML5, CSS3, UI/UX"
  },

  // --- Business & Analytics ---
  {
    id: "edx-business-data-analysis",
    title: "Business and Data Analysis Skills",
    issuer: "edX",
    date: "2026",
    category: "Business & Analytics",
    file: "certificates/edx-business-data-analysis.pdf",
    description: "Strategic business intelligence, quantitative metric analysis, and data modeling.",
    skills: "Business Analytics, Data Modeling"
  },
  {
    id: "eyouth-bus-1",
    title: "EYouth Business Administration",
    subtitle: "Business Administration Foundation",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business.pdf",
    description: "Core principles of organizational management, operational strategy, and project leadership."
  },
  {
    id: "eyouth-bus-2",
    title: "EYouth Business Administration — Level 2",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-2.pdf",
    description: "Advanced operational execution, workflow management, and organizational frameworks."
  },
  {
    id: "eyouth-bus-22",
    title: "EYouth Business Administration — Advanced Track 2",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-22.pdf",
    description: "In-depth case analysis and executive strategic planning."
  },
  {
    id: "eyouth-bus-3",
    title: "EYouth Business Administration — Level 3",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-3.pdf",
    description: "Enterprise resource planning, strategic growth models, and team leadership."
  },
  {
    id: "eyouth-bus-33",
    title: "EYouth Business Administration — Advanced Track 3",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-33.pdf",
    description: "Cross-functional business orchestration and digital transformation."
  },
  {
    id: "eyouth-bus-4",
    title: "EYouth Business Administration — Level 4",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-4.pdf",
    description: "Executive leadership, strategic resource allocation, and organizational governance."
  },
  {
    id: "eyouth-bus-44",
    title: "EYouth Business Administration — Advanced Track 4",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-44.pdf",
    description: "Comprehensive enterprise capstone in management and strategic execution."
  },
  {
    id: "eyouth-bus-landscape",
    title: "EYouth Business Landscape Analysis",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-landscape.pdf",
    description: "Market competitive analysis, economic ecosystem mapping, and strategic positioning."
  },
  {
    id: "eyouth-bus-landscape-1",
    title: "EYouth Business Landscape Assessment",
    issuer: "EYouth",
    date: "2025",
    category: "Business & Analytics",
    file: "certificates/certificate-eyouth-business-landscape-1.pdf",
    description: "Dynamic business environment evaluation and strategic growth forecasting."
  },

  // --- Professional & Other ---
  {
    id: "edx-remote-work",
    title: "Remote Work Revolution for Everyone",
    issuer: "edX",
    date: "2026",
    category: "Professional & Other",
    file: "certificates/edx-remote-work.pdf",
    description: "High-performance distributed team dynamics, asynchronous workflow governance, and digital culture.",
    skills: "Remote Leadership, Agile, Asynchronous Collaboration"
  },
  {
    id: "edx-it-support-cases",
    title: "IT Support Case Studies",
    issuer: "edX",
    date: "2026",
    category: "Professional & Other",
    file: "certificates/edx-it-support-cases.pdf",
    description: "Diagnostic methodology for network infrastructure, OS anomalies, and system resilience.",
    skills: "Systems Engineering, Troubleshooting"
  },
  {
    id: "verizon-orientation",
    title: "Verizon Skill Forward Orientation Course",
    issuer: "edX / Verizon",
    date: "February 2026",
    category: "Professional & Other",
    credentialId: "2176429785744d0bb85833259a01eb27",
    file: "certificates/verizon-orientation.pdf",
    description: "Telecommunications modern stack, professional excellence, and digital workforce adaptability.",
    skills: "Professional Excellence, Telecom Fundamentals"
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding — L1 Bronze",
    issuer: "Lovable",
    date: "May 2026",
    category: "Professional & Other",
    skills: "AI-native prototyping, Rapid product delivery"
  },
  {
    id: "course-cert-en",
    title: "Professional Course Certificate (English)",
    issuer: "Educational Platform",
    date: "2025",
    category: "Professional & Other",
    file: "certificates/course-certificate-en.pdf",
    description: "Accredited technical proficiency and comprehensive training completion in English."
  },
  {
    id: "course-cert-en-1",
    title: "Professional Course Certificate (English Track 2)",
    issuer: "Educational Platform",
    date: "2025",
    category: "Professional & Other",
    file: "certificates/course-certificate-en-1.pdf",
    description: "Advanced vocational and technological training certification in English."
  },
  {
    id: "course-cert-ar",
    title: "Training Course Certificate (Arabic)",
    issuer: "Educational Platform",
    date: "2025",
    category: "Professional & Other",
    file: "certificates/course-certificate-ar.pdf",
    description: "Official Arabic track completion certificate covering software fundamentals."
  },
  {
    id: "course-cert-ar-1",
    title: "Training Course Certificate (Arabic Track 2)",
    issuer: "Educational Platform",
    date: "2025",
    category: "Professional & Other",
    file: "certificates/course-certificate-ar-1.pdf",
    description: "Accredited completion certificate for specialized technical training in Arabic."
  },
  {
    id: "cybersecurity-foundations",
    title: "Cybersecurity Foundations: Threats & IoT Protection",
    issuer: "IBM",
    date: "2025",
    category: "Professional & Other",
    description: "Threat vector modeling, cryptographic protocols, perimeter security, and IoT safeguards."
  },
  {
    id: "tech-support-fundamentals",
    title: "Technical Support Fundamentals",
    issuer: "Google",
    date: "2025",
    category: "Professional & Other",
    description: "Operating systems architecture, subnet routing, hardware troubleshooting, and DNS resolution."
  },
  {
    id: "ux-foundations",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    date: "2025",
    category: "Professional & Other",
    description: "User journey mapping, wireframing, high-fidelity interactive prototyping, and usability audits."
  },
  {
    id: "effective-comm",
    title: "Effective Communication Skills",
    issuer: "IBM",
    date: "2025",
    category: "Professional & Other",
    description: "Executive articulation, technical documentation, and cross-functional stakeholder alignment."
  }
];

const categories = ["All", "AI & Machine Learning", "Web Development", "Business & Analytics", "Professional & Other"] as const;

export const Certificates = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

  const filteredCerts = useMemo(() => {
    return certificates.filter((c) => {
      const term = search.toLowerCase().trim();
      const matchesSearch =
        !term ||
        c.title.toLowerCase().includes(term) ||
        c.issuer.toLowerCase().includes(term) ||
        (c.skills && c.skills.toLowerCase().includes(term)) ||
        (c.description && c.description.toLowerCase().includes(term));
      const matchesCategory = activeCategory === "All" || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="certificates" className="relative py-28">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="section-eyebrow">Accredited Credentials</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              Verified <span className="text-gradient">Certifications</span>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Official certifications, verified degrees, and technical credentials spanning Artificial Intelligence, Machine Learning, Web Engineering, and Business Strategy.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search certificates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-background/50 border border-foreground/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                >
                  Clear
                </button>
              )}
            </div>
            
            <div className="flex bg-background/50 border border-foreground/10 rounded-full p-1.5 overflow-x-auto scrollbar-none">
              <div className="flex px-1 gap-1 items-center">
                <Filter size={14} className="text-muted-foreground mx-1.5 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeCategory === cat
                        ? "bg-primary/20 text-primary-glow border border-primary/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredCerts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground glass rounded-3xl"
              >
                <Search size={44} className="opacity-20 mb-4" />
                <p className="text-base font-medium">No certificates found matching your query.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="mt-4 text-xs font-mono text-primary hover:underline"
                >
                  Reset all filters
                </button>
              </motion.div>
            ) : (
              filteredCerts.map((cert, i) => (
                <motion.div
                  layout
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                  className="group relative glass rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border border-foreground/10 hover:border-primary/40 hover:shadow-[0_10px_35px_-10px_hsl(var(--primary)/0.2)]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-violet/20 border border-primary/25 text-primary-glow shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all">
                        <Award size={20} />
                      </div>
                      
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setPreviewCert(cert)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-background/60 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-primary/20 hover:border-primary/40 transition-colors"
                          aria-label={`Preview ${cert.title}`}
                          title="Preview details"
                        >
                          <Eye size={14} />
                        </button>
                        {cert.file && (
                          <a
                            href={`/${cert.file}`}
                            download
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-background/60 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-primary/20 hover:border-primary/40 transition-colors"
                            aria-label={`Download ${cert.title}`}
                            title="Download PDF"
                          >
                            <Download size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-2 mb-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground">
                        {cert.category}
                      </span>
                      {cert.credentialId && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                          <ShieldCheck size={11} /> Verified ID
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {cert.description || cert.subtitle || "Official verified certificate of completion."}
                    </p>
                  </div>
                  
                  <div className="pt-4 mt-5 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <div className="flex items-center gap-1.5 text-primary-glow font-medium truncate max-w-[60%]">
                      <Link size={12} className="shrink-0" /> {cert.issuer}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Calendar size={12} /> {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewCert(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-50 w-full max-w-xl glass-strong shadow-2xl rounded-3xl overflow-hidden border border-primary/30 my-auto"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-foreground/10 bg-foreground/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-glow border border-primary/30">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg leading-tight">{previewCert.title}</h3>
                    <div className="text-xs font-mono text-muted-foreground mt-0.5">{previewCert.issuer}</div>
                  </div>
                </div>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-2 rounded-full hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-7 space-y-6">
                <div className="glass p-6 rounded-2xl border border-foreground/10 text-center relative overflow-hidden">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-primary-glow mb-4">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="font-display text-xl font-bold mb-1.5">{previewCert.title}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-4">
                    {previewCert.issuer} • {previewCert.date}
                  </p>
                  
                  {previewCert.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                      {previewCert.description}
                    </p>
                  )}

                  {previewCert.skills && (
                    <div className="mt-4 pt-4 border-t border-foreground/10">
                      <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Key Competencies</div>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {previewCert.skills.split(",").map((s) => (
                          <span key={s.trim()} className="chip text-[11px]">
                            {s.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-muted-foreground border-t border-foreground/10 pt-4 mt-5">
                    <div>
                      <span className="block opacity-60 text-[10px] uppercase">Category</span>
                      <span className="text-foreground font-medium">{previewCert.category}</span>
                    </div>
                    <div>
                      <span className="block opacity-60 text-[10px] uppercase">Credential ID</span>
                      <span className="text-foreground font-medium truncate block">
                        {previewCert.credentialId || "Verified Completion"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-foreground/[0.02] border-t border-foreground/10 flex flex-wrap justify-between items-center gap-3">
                <div className="text-xs font-mono text-muted-foreground">
                  Status: <span className="text-emerald-400 font-semibold">Active & Validated</span>
                </div>
                
                <div className="flex gap-2">
                  {previewCert.file && (
                    <>
                      <a
                        href={`/${previewCert.file}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost-glow text-xs px-4 py-2"
                      >
                        <ExternalLink size={14} className="mr-1.5" /> View Full PDF
                      </a>
                      <a
                        href={`/${previewCert.file}`}
                        download
                        className="btn-magnetic text-xs px-4 py-2"
                      >
                        <Download size={14} className="mr-1.5" /> Download
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
