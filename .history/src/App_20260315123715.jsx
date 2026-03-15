import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronRight, ExternalLink, Mail, Github, Twitter, Linkedin, Calendar, MapPin, GraduationCap, Briefcase, BookOpen, Award, ChevronDown } from 'lucide-react';
import './index.css';

// ================ Dark Mode Context ================
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkModeContext);

// ================ Placeholder Data ================
const PERSONAL_DATA = {
  name: 'Lige Zhang',
  title: 'Incoming PhD Student @ Emory University | Computer Science and Informatics',
  bio: 'I am a passionate researcher focusing on Machine Learning and its application to Healthcare. I am currently an undergraduate student at Duke Kunshan University.',
  researchInterests: [
    'Geometric Deep Learning',
    'AI for Healthcare',
    'Multi-Modal Learning',
    'Time Series Analysis',
    'Generative Models',
  ],
  education: [
    {
      institution: 'Duke Kunshan University',
      degree: 'B.S. in Data Science',
      period: '2022 - 2026',
      location: 'Kunshan, China',
      description: 'Still on my last session at DKU.'
    },
    {
      institution: 'Emory University (Incoming Ph.D. Student)',
      degree: 'Computer Science and Informatics',
      period: 'Starting in Fall 2026',
      location: 'Atlanta, USA',
      description: 'To be started.'
    }
  ],
  experience: [
    {
      role: 'Research Intern',
      company: 'Yale University',
      period: 'Summer 2024',
      location: 'Remote',
      description: 'Developed novel geometric deep learning models for protein structure prediction.'
    },
    {
      role: 'ML Engineer Intern',
      company: 'NVIDIA',
      period: 'Spring 2024',
      location: 'Santa Clara, CA',
      description: 'Optimized GNN training pipelines for large-scale graph datasets.'
    },
    {
      role: 'Research Assistant',
      company: 'DKU ML Lab',
      period: '2024 - Present',
      location: 'Kunshan, China',
      description: 'Worked on hyperbolic neural networks, and hypergraph learning.'
    }
  ],
  publications: [
    {
      year: 2024,
      items: [
        {
          title: 'Geometric Neural Processes for Irregular Time Series',
          authors: 'Zhang, L., Chen, Y., Wang, H.',
          venue: 'International Conference on Machine Learning (ICML)',
          status: 'Under Review',
          link: '#',
          code: '#'
        },
        {
          title: 'Hypergraph Attention Networks for Healthcare Predictions',
          authors: 'Zhang, L., Liu, X., Smith, J.',
          venue: 'Neural Information Processing Systems (NeurIPS)',
          status: 'Under Review',
          link: '#',
          code: '#'
        }
      ]
    },
    {
      year: 2023,
      items: [
        {
          title: 'Temporal Graph Networks for COVID-19 Spread Prediction',
          authors: 'Zhang, L., Wang, Q., Li, M.',
          venue: 'AAAI Conference on Artificial Intelligence',
          status: 'Published',
          link: '#',
          code: '#'
        },
        {
          title: 'Self-Supervised Learning for Medical Time Series',
          authors: 'Zhang, L., Zhao, T., Kim, S.',
          venue: 'Journal of Machine Learning Research',
          status: 'Published',
          link: '#',
          code: '#'
        }
      ]
    }
  ],
  projects: [
    {
      title: 'MedGraph: Geometric Deep Learning for Medical Diagnostics',
      description: 'A framework for analyzing medical imaging data using graph neural networks with geometric priors.',
      technologies: ['PyTorch', 'PyTorch Geometric', 'MONAI'],
      github: '#',
      demo: '#',
      status: 'Active'
    },
    {
      title: 'TimeSeriesGAN: Generative Modeling for Irregular Time Series',
      description: 'GAN-based approach for generating realistic irregularly-sampled time series data.',
      technologies: ['TensorFlow', 'TensorFlow Probability', 'NumPy'],
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'CausalHealthcare: Causal Inference for Treatment Effect Estimation',
      description: 'Toolkit for estimating treatment effects from observational healthcare data using causal ML.',
      technologies: ['PyTorch', 'DoWhy', 'EconML'],
      github: '#',
      demo: '#',
      status: 'Active'
    }
  ],
  news: [
    {
      date: 'March 2025',
      content: 'Paper accepted to ICML 2025 (Geometric Neural Processes for Irregular Time Series).'
    },
    {
      date: 'February 2025',
      content: 'Invited to serve as a reviewer for NeurIPS 2025.'
    },
    {
      date: 'January 2025',
      content: 'Started research collaboration with Stanford Medical School on AI for rare disease diagnosis.'
    },
    {
      date: 'December 2024',
      content: 'Presented work at ML4H (Machine Learning for Healthcare) workshop.'
    }
  ],
  teaching: [
    {
      role: 'Teaching Assistant',
      course: 'Deep Learning (Graduate Level)',
      institution: 'Duke Kunshan University',
      period: 'Fall 2023'
    },
    {
      role: 'Guest Lecturer',
      course: 'Introduction to Graph Neural Networks',
      institution: 'DKU AI Lab Seminar',
      period: 'Spring 2023'
    },
    {
      role: 'Mentor',
      course: 'Undergraduate Research Program',
      institution: 'DKU AI Lab',
      period: '2022 - 2024'
    }
  ],
  contact: {
    email: 'lige.zhang@example.com',
    github: 'https://github.com/lige-zhang',
    twitter: 'https://twitter.com/lige_zhang',
    linkedin: 'https://linkedin.com/in/lige-zhang',
    location: 'Kunshan, China / Remote',
    googleScholar: '#',
    orcid: '#'
  }
};

// ================ Components ================
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-surface-light dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-gray-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold accent-text">Lige Zhang</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="block">Lige</span>
              <span className="accent-text">Zhang</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-6"
            >
              {PERSONAL_DATA.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            >
              {PERSONAL_DATA.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {PERSONAL_DATA.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
              <a
                href="#publications"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-accent dark:hover:border-accent-dark transition-colors"
              >
                View Publications
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold accent-text mb-4">LZ</div>
                <div className="text-gray-600 dark:text-gray-400">Researcher</div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl blur-xl -z-10"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const NewsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="news" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title flex items-center">
        <Calendar className="w-8 h-8 mr-3" />
        News & Updates
      </h2>

      <div className="space-y-4">
        {PERSONAL_DATA.news.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-accent/10 text-accent dark:text-accent-dark rounded-lg font-medium">
                {item.date}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {PERSONAL_DATA.news.length > visibleCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount(PERSONAL_DATA.news.length)}
            className="px-6 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-accent dark:hover:border-accent-dark transition-colors flex items-center gap-2 mx-auto"
          >
            Show More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-container">
      <h2 className="section-title flex items-center">
        <BookOpen className="w-8 h-8 mr-3" />
        Publications
      </h2>

      <div className="space-y-12">
        {PERSONAL_DATA.publications.map((yearGroup) => (
          <motion.div
            key={yearGroup.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              {yearGroup.year}
            </h3>

            <div className="space-y-6">
              {yearGroup.items.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:border-accent dark:hover:border-accent-dark transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        {pub.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {pub.authors}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {pub.venue} •
                        <span className={`ml-2 px-2 py-1 rounded text-sm ${
                          pub.status === 'Published'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        }`}>
                          {pub.status}
                        </span>
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={pub.link}
                          className="flex items-center gap-2 text-sm text-accent dark:text-accent-dark hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Paper
                        </a>
                        <a
                          href={pub.code}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title flex items-center">
        <Briefcase className="w-8 h-8 mr-3" />
        Research Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSONAL_DATA.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card h-full flex flex-col"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  project.status === 'Active'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href={project.github}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.demo}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent dark:bg-accent-dark text-white hover:opacity-90 rounded-lg transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title flex items-center">
            <GraduationCap className="w-8 h-8 mr-3" />
            Education
          </h2>

          <div className="space-y-6">
            {PERSONAL_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">{edu.institution}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="section-title flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Experience
          </h2>

          <div className="space-y-6">
            {PERSONAL_DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeachingSection = () => {
  return (
    <section id="teaching" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title flex items-center">
        <Award className="w-8 h-8 mr-3" />
        Teaching & Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERSONAL_DATA.teaching.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">{item.role}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{item.course}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{item.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${PERSONAL_DATA.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:underline">
                    {PERSONAL_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_DATA.contact.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="font-medium mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={PERSONAL_DATA.contact.github}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={PERSONAL_DATA.contact.twitter}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href={PERSONAL_DATA.contact.linkedin}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6">Research Interests</h3>

          <div className="space-y-4">
            {PERSONAL_DATA.researchInterests.map((interest) => (
              <div key={interest} className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-accent dark:text-accent-dark" />
                <span className="text-gray-700 dark:text-gray-300">{interest}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm always open to discussing research collaborations, internship opportunities,
              or just chatting about ML/AI.
            </p>
            <a
              href={`mailto:${PERSONAL_DATA.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8">
      <div className="section-container text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Lige Zhang. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
};

// ================ Main App Component ================
const App = () => {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Navigation />
        <HeroSection />
        <NewsSection />
        <PublicationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TeachingSection />
        <ContactSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;