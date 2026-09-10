import './Skills.css';

const Skills = () => {
  const topLayerSkills = [
    "UI/UX Design",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Responsive Design",
    "Mobile & Web Design"
  ];

  const bottomLayerSkills = [
    "Figma",
    "Front-End Development",
    "HTML",
    "CSS",
    "JavaScript",
    "Antigravity",
    "AI-Assisted Design (ChatGPT, Claude, Gemini)"
  ];

  // We duplicate the arrays to create a seamless infinite scroll loop
  return (
    <section className="skills-section">
      <div className="skills-container">
        
        {/* Top Layer Marquee - Moves Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-left">
            {[...topLayerSkills, ...topLayerSkills, ...topLayerSkills].map((skill, index) => (
              <div className="skill-pill glass-effect" key={`top-${index}`}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Layer Marquee - Moves Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-right">
            {[...bottomLayerSkills, ...bottomLayerSkills, ...bottomLayerSkills].map((skill, index) => (
              <div className="skill-pill glass-effect" key={`bottom-${index}`}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
