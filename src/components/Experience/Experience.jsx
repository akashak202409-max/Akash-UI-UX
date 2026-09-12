import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.exp-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 3,
      role: "UI/UX Designer",
      company: "TESCO DIGITALS",
      type: "Work",
      date: "Jan 2026 - Present",
      description: "I worked at Tesco Digital as a UI/UX and Graphic Designer, where I designed the brand logo, created marketing posters, and designed the complete company website with structured UI screens, interactive prototypes, and smooth micro-animations to enhance user experience and visual engagement."
    },
    {
      id: 2,
      role: "UI/UX Designer",
      company: "Zhians Private Limited",
      type: "Internship",
      date: "July 2025 - Oct 2025",
      description: "Designed the complete doctor-side interface for a pregnancy & fertility app. Created user flows, wireframes, and high-fidelity screens in Figma. Collaborated with product and development teams to ensure design accuracy. Contributed to marketing visuals including posters and presentation materials."
    },
    {
      id: 1,
      role: "UI/UX Designer",
      company: "Flux Visio Dynamics LLP",
      type: "Internship",
      date: "April 2025 - July 2025",
      description: "I worked as a UI/UX Designer Intern at FluxVisio Dynamics LLP, where I designed the complete interface for EatOpae, a hotel food ordering application for both desktop and mobile platforms. I focused on creating user-friendly designs, ensuring smooth user flow, and collaborating closely with the development team to bring the designs to life.",
      certificate: "/Flux_Visio_Dynamics_LLP.pdf"
    }
  ];

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="experience-container">
        
        {/* Sticky Left Panel */}
        <div className="exp-left-panel">
          <div className="sticky-content">
             <div className="circles-icon">
              <span className="circle circle-white"></span>
              <span className="circle circle-yellow"></span>
              <span className="circle circle-blue"></span>
            </div>
            <h2 className="exp-main-title">
              Professional <br/>
              <span className="highlight-blue">Experience</span>
            </h2>
            <p className="exp-subtitle">A journey through my professional career, internships, and the impactful projects I've contributed to.</p>
          </div>
        </div>

        {/* Right Panel Stacked Cards */}
        <div className="exp-right-panel">
          <div className="exp-cards-stack">
            {experiences.map((exp) => (
              <div className="exp-card" key={exp.id}>
                {exp.certificate && (
                  <div className="exp-overlay">
                    <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      View Document
                    </a>
                  </div>
                )}
                <div className="exp-card-inner">
                  
                  <div className="exp-card-header">
                    <div className="exp-role-info">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-company">"{exp.company}"</span>
                    </div>
                    <div className="exp-meta">
                      <span className={`exp-badge ${exp.type.toLowerCase()}`}>{exp.type}</span>
                      <span className="exp-date">{exp.date}</span>
                    </div>
                  </div>

                  <div className="exp-card-body">
                    <p className="exp-desc">{exp.description}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
