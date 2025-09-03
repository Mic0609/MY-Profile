import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Send,
} from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'internship', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      role: 'Junior Engineer',
      company: 'Signal and System Pvt. Ltd',
      location: 'Chennai, India',
      duration: '2022 - 2023',
      description: [
        'Performed precision soldering and assembly of electronic components on PCBs.',
        'Ensured high-quality connections with minimal rework and maintained production standards.',
        'Collaborated with senior engineers to troubleshoot and resolve technical issues.',
      ],
    },
    {
      role: 'Game Developer',
      company: 'Synnoviq Technologies Pvt. Ltd',
      location: 'Kovilpatti, India',
      duration: '2025 (One Month)',
      description: [
        'Contributed to gameplay development and level design using Unreal Engine.',
        'Implemented interactive game mechanics and optimized performance.',
        'Worked on environment setup and asset integration for immersive gaming experiences.',
      ],
    },
  ];

  const internships = [
    {
      role: 'Trainee Intern',
      company: 'Industrial Oriented Training on Oracle Technologies',
      location: 'Chennai, India',
      duration: '07/2024 - 09/2024',
      description: [
        'Completed comprehensive Oracle SQL internship by Vibathi Labs & NEC Alumni Association.',
        'Gained hands-on experience in writing and optimizing complex SQL queries.',
        'Worked with database design, data modeling, and performance optimization techniques.',
        'Developed practical skills in Oracle database management and administration.',
      ],
    },
  ];

  const skills = {
    Programming: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'C#'],
    Technologies: ['Unity', 'Unreal Engine', 'Android Studio', 'Firebase', 'React'],
    'Design & Tools': ['UI/UX Design', 'Figma', 'WebGL', 'Git', 'VS Code'],
    'Soft Skills': ['Quick Learning', 'Team Collaboration', 'Problem Solving', 'Communication'],
  };

  const projects = [
    {
      title: 'Immersive Campus Explorer',
      description:
        'A comprehensive 360° VR Campus Tour built in Unity featuring interactive hotspots, multimedia pop-ups, and seamless WebGL deployment for cross-device compatibility.',
      technologies: ['Unity', 'WebGL', 'VR', 'C#', '360° Video'],
      github: '#',
      live: '#',
      image:
        '/image.png',
    },
    {
      title: 'Food Delivery App UI/UX',
      description:
        'Designed a modern, responsive food delivery application interface with intuitive navigation, smooth animations, and comprehensive user experience flow.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      github: '#',
      live: '#',
      image:
        'image copy.png',
    },
    {
      title: 'Real-Time Chatting App',
      description:
        'Developed a feature-rich real-time chat application using Java and XML in Android Studio, with Firebase integration for seamless authentication, messaging, and user status management.',
      technologies: ['Java', 'Android Studio', 'Firebase', 'XML', 'Real-time Database'],
      github: '#',
      live: '#',
      image:
        '/image copy 2.png',
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Susai Micheal</div>

          <div className="nav-links">
            {['about', 'education', 'experience', 'internship', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-btn ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {['about', 'education', 'experience', 'internship', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="mobile-nav-btn"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h1>
              Hi, I'm <span className="highlight">Susai Micheal A</span>
            </h1>
            <h2>Full-Stack Developer</h2>
            <p>
              Enthusiastic Computer Engineering student with a solid foundation in programming and
              system design. Quick learner with hands-on experience in Java, Unity, and web
              development. Passionate about building efficient tech solutions and contributing to
              innovative projects.
            </p>

            <div className="about-buttons">
  <a href="/resume.pdf" download className="btn primary">
    <Download size={20} />
    Download Resume
  </a>
  <button className="btn secondary" onClick={() => scrollToSection('contact')}>
    Contact Me
  </button>
</div>


            <div className="social-links">
              <a href="mailto:susaimicheal0609@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/susai-micheal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Mic0609" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="about-image">
            <img src="../assets/mich.png" alt="Susai Micheal A - Profile" />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">
          <GraduationCap size={32} /> Education
        </h2>
        <p className="section-subtitle">My academic background and achievements</p>
        <div className="card">
          <h3>Bachelor of Engineering (Computer Science)</h3>
          <h4>National Engineering College (NEC)</h4>
          <span className="duration">2023 - 2026</span>
          <p>Currently pursuing BE in Computer Science Engineering with focus on software development, algorithms, and system design.</p>
        </div>
        <div className="card">
          <h3>Diploma in Electronics and Communication Engineering</h3>
          <h4>Lakshmi Ammal Polytechnic College (LAPC)</h4>
          <span className="duration">2019 - 2021</span>
          <p>Completed diploma with strong foundation in electronics, communication systems, and programming fundamentals.</p>
        </div>
        <div className="card">
          <h3>Secondary School Leaving Certificate (SSLC)</h3>
          <h4>Government Higher Secondary School</h4>
          <span className="duration">2016 - 2017</span>
          <p>Completed secondary education with excellent academic performance and strong foundation in mathematics and sciences.</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">
          <Briefcase size={32} /> Professional Experience
        </h2>
        <p className="section-subtitle">Work experience in technology and engineering</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <h3>{exp.role}</h3>
              <h4>{exp.company} | {exp.location}</h4>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.description.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="section">
        <h2 className="section-title">
          <GraduationCap size={32} /> Internships
        </h2>
        <p className="section-subtitle">Practical training and professional development</p>
        <div className="timeline">
          {internships.map((intern, i) => (
            <div key={i} className="timeline-item">
              <h3>{intern.role}</h3>
              <h4>{intern.company} | {intern.location}</h4>
              <span className="duration">{intern.duration}</span>
              <ul>
                {intern.description.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">
          <Code size={32} /> Skills & Technologies
        </h2>
        <p className="section-subtitle">Technical expertise and core competencies</p>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-card">
              <h3>{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">
          <Code size={32} /> Featured Projects
        </h2>
        <p className="section-subtitle">Showcase of my development work and creative solutions</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2 className="section-title">
          <Mail size={32} /> Get In Touch
        </h2>
        <p className="section-subtitle">Let's connect and build something amazing together</p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <Mail size={20} />
              <span>susaimicheal0609@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+91 7708576474</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Tuticorin, Tamil Nadu</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully! We'll get back to you soon.");
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Your city, state" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  placeholder="Tell us about your project or how we can help you..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Susai Micheal A. Built with React & ❤️</p>
      </footer>
    </div>
  );
};

export default Portfolio;