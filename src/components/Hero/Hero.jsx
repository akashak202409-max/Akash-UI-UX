import './Hero.css';
import profilePic from '../../assets/profile_pic.png';
import doodles from '../../assets/doodles.png';
import figmaLogo from '../../assets/figma logo.webp';
import canvaLogo from '../../assets/canva logo.webp';
import claudeLogo from '../../assets/claude_logo2.png';
import antigravityLogo from '../../assets/antigravity logo.png';
import chatgptLogo from '../../assets/chatgpt_logo2.png';
const Hero = () => {
  return (
    <div className="hero-section" id="home">

      
      <div className="hero-content">
        <div className="hello-badge">Hello!</div>
        
        <h1 className="hero-title">
          I'm <span className="highlight-primary">Akash,</span><br/>
          UI UX <span className="bold-text">Designer</span>
        </h1>
      </div>
      
      <div className="hero-image-container">
        <svg className="concentric-rings" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="90" fill="none" stroke="#0885FE" strokeWidth="35" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="#0885FE" strokeOpacity="0.7" strokeWidth="35" />
          <circle cx="250" cy="250" r="210" fill="none" stroke="#0885FE" strokeOpacity="0.4" strokeWidth="35" />
        </svg>
        <img src={doodles} alt="Doodles Background" className="doodles-img" />
        <img src={profilePic} alt="Akash Profile" className="profile-img" />
        <img src={figmaLogo} alt="Figma" className="tool-icon figma-icon" />
        <img src={canvaLogo} alt="Canva" className="tool-icon canva-icon" />
        <img src={claudeLogo} alt="Claude" className="tool-icon claude-icon" />
        <img src={antigravityLogo} alt="Antigravity" className="tool-icon antigravity-icon" />
        <img src={chatgptLogo} alt="ChatGPT" className="tool-icon chatgpt-icon" />
      </div>
    </div>
  );
};

export default Hero;
