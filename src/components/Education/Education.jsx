import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.timeline-item');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const eduData = [
    {
      id: 1,
      date: "2022 - 2025",
      title: "B.C.A Madras University",
      subtitle: "Hindustan college of arts and science",
      desc: "Building a strong foundation in computer applications, software engineering, and core technological principles.",
      cert: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 2,
      date: "2025 – 2027",
      title: "M.C.A – SRM Online",
      subtitle: "SRM Institute of Science and Technology",
      desc: "Pursuing Master of Computer Applications through SRM Online, with a focus on advanced computer applications, software development, programming, and emerging technologies.",
      cert: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 3,
      date: "Sep 2024 - Jan 2025",
      title: "UI/UX Designer",
      subtitle: "De Mentee Academy",
      desc: "Completed an intensive UI/UX design certification focusing on user-centered design, prototyping, and modern interface aesthetics.",
      cert: "/UI_UX_DE.pdf",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    },
    {
      id: 4,
      date: "Feb 2025 - Apr 2025",
      title: "Figma UI/UX Advanced",
      subtitle: "Udemy",
      desc: "Mastered advanced Figma techniques including auto-layout, components, variables, and complex interactive prototyping.",
      cert: "/Figma_Certificate.pdf",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="education-section" id="education" ref={sectionRef}>
      <div className="education-container">
        
        <div className="section-header">
          <div className="circles-icon">
            <span className="circle circle-white"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-blue"></span>
          </div>
          <h2 className="education-title">Education & <span className="highlight-blue">Certifications</span></h2>
          <p className="education-subtitle">My academic journey and professional certifications.</p>
        </div>

        <div className="timeline">
          {eduData.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.id}>
              
              <div className="timeline-dot">
                {item.icon}
              </div>

              <div className="timeline-card">
                {item.cert && (
                  <div className="timeline-overlay">
                    <a href={item.cert} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      View Certificate
                    </a>
                  </div>
                )}
                
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.subtitle}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
