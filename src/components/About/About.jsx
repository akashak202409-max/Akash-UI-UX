import { useState, useEffect, useRef } from 'react';
import './About.css';
import aboutProfilePic from '../../assets/profile_pic44.png';

const StatCounter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <h3 className="stat-number" ref={ref}>{count}{suffix}</h3>;
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-grid">
          {/* Left Column: Image & Tags */}
          <div className="about-image-side">
            <div className="id-card-wrapper">
              {/* Lanyard & Clip */}
              <div className="lanyard-strap"></div>
              <div className="lanyard-clip">
                <div className="clip-top"></div>
                <div className="clip-bottom"></div>
              </div>
              
              {/* The ID Card */}
              <div className="id-card">
                <div className="id-card-hole"></div>
                <div className="id-card-inner">
                  
                  <div className="id-image-container">
                    <img src={aboutProfilePic} alt="Akash" className="id-profile-img" />
                  </div>
                  
                  <div className="id-card-footer">
                    <h4 className="id-name">A AKASH</h4>
                    <p className="id-role">UI UX DESIGNER</p>
                    <div className="id-barcode">
                      <span>|| | ||| || ||| | ||</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="about-content-side">
            <div className="about-badge">
              <span className="badge-text">About Me</span>
            </div>

            <h2 className="about-heading">
              Who is <span className="highlight-blue">Akash?</span>
            </h2>

            <div className="about-description">
              <p>
                I'm <strong>Akash Annamalai</strong>, a <strong>UI/UX Designer and Front-End Developer</strong> passionate about creating intuitive, user-centered digital experiences. I specialize in transforming complex ideas into clean, functional, and visually engaging interfaces that solve real user problems.
              </p>
              <p>
                My design process combines user research, wireframing, prototyping, and design systems to craft seamless web and mobile experiences. Alongside design, I bring interfaces to life through front-end development, ensuring every design is responsive, accessible, and development-ready.
              </p>
              <p>
                I enjoy collaborating with teams, learning new technologies, and continuously improving my craft. My goal is to build digital products that not only look great but also deliver meaningful and enjoyable user experiences.
              </p>
            </div>

            <div className="about-actions">
              <button className="download-btn">
                <span>Download CV</span>
                <div className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
              <div className="signature">Akash</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="about-stats">
          <div className="stat-item">
            <StatCounter end={10} suffix="+" />
            <p className="stat-label">Practical Projects</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <StatCounter end={2} suffix="+" />
            <p className="stat-label">Years of Experience</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <StatCounter end={5} suffix="+" />
            <p className="stat-label">Industries Covered</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <StatCounter end={100} suffix="%" />
            <p className="stat-label">Dedication</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
