import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const filters = ['All', 'UI/UX Designer', 'Front-End Developer'];

  // Project Data based on User's Work Experience
  const projectsData = [
    {
      id: 1,
      title: "Sales Head Module",
      category: "UI/UX Designer",
      image: "/sales_head.png",
      description: "Designed dashboard interfaces for monitoring sales performance, team activities, leads, conversions, targets, and overall sales operations."
    },
    {
      id: 2,
      title: "Sales Coordinator Module",
      category: "UI/UX Designer",
      image: "/sales_coordinator.png",
      description: "Designed user-friendly interfaces for managing leads, customer details, follow-ups, sales activities, and daily coordination tasks."
    },
    {
      id: 3,
      title: "ERM – Employee Attendance",
      category: "UI/UX Designer",
      image: "/erm_mobile.png",
      description: "Designed mobile app interfaces for attendance tracking, leave management, and employee monitoring."
    },
    {
      id: 4,
      title: "ERM Web Application",
      category: "Front-End Developer",
      image: "/erm_web.png",
      description: "Developed responsive web interfaces for attendance management and administrative operations using Antigravity."
    },
    {
      id: 5,
      title: "Travel Mate",
      category: "Front-End Developer",
      image: "/travel_mate.png",
      description: "Developed front-end interfaces for a travel companion platform that enables users to connect and travel together."
    },
    {
      id: 6,
      title: "Careiva Platform",
      category: "UI/UX Designer",
      image: "/careiva.png",
      description: "Designed a modern healthcare platform connecting users with Doctor Visits, Nursing Care, Physiotherapy, and Care Taker services."
    },
    {
      id: 7,
      title: "Tesco Digitals",
      category: "UI/UX Designer",
      image: "/tesco_digitals.png",
      description: "Designed a responsive corporate website to showcase IT services and digital solutions."
    },
    {
      id: 8,
      title: "Tesco Structures",
      category: "UI/UX Designer",
      image: "/tesco_structures.png",
      description: "Designed a user-friendly website for a structural engineering and construction company."
    },
    {
      id: 9,
      title: "Nemo Construction",
      category: "UI/UX Designer",
      image: "/nemo_construction.png",
      description: "Designed website interfaces focused on construction project portfolios and service offerings."
    },
    {
      id: 10,
      title: "Sakthi Roofing & Interiors",
      category: "UI/UX Designer",
      image: "/sakthi_roofing.png",
      description: "Created modern UI designs for roofing and interior design services."
    },
    {
      id: 11,
      title: "TesCare",
      category: "UI/UX Designer",
      image: "/tescare.png",
      description: "Designed service-oriented user experiences with intuitive navigation and lead-generation elements for a Pest Control Website."
    },
    {
      id: 12,
      title: "Marai Malai Murasu",
      category: "UI/UX Designer",
      image: "/marai_malai_murasu.png",
      description: "Designed a news portal with structured content layouts and enhanced readability."
    },
    {
      id: 13,
      title: "Careiva Front-End",
      category: "Front-End Developer",
      image: "/careiva.png",
      description: "Developed responsive and functional front-end interfaces for healthcare and home-care services."
    },
    {
      id: 14,
      title: "TesCare Front-End",
      category: "Front-End Developer",
      image: "/tescare.png",
      description: "Converted UI designs into responsive and functional web pages using Antigravity."
    }
  ];

  // Filter the projects based on the active state
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Re-run animation observer when filtered projects change
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.project-card');
    
    // Reset classes for fresh animation when switching filters
    cards.forEach(card => {
      card.classList.remove('animate-scale-in');
      // Small timeout to allow DOM to register the class removal
      setTimeout(() => {
        observer.observe(card);
      }, 50);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="section-header">
           <div className="circles-icon">
            <span className="circle circle-white"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-blue"></span>
          </div>
          <h2 className="projects-title">
            Featured <span className="highlight-blue">Projects</span>
          </h2>
          <p className="projects-subtitle">A collection of my recent work in UI/UX design, mobile apps, and websites.</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card" 
              key={project.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button className="view-project-btn">
                    View Case Study
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
