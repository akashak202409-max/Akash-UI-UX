const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <div className="float-icon figma" title="Figma">
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5A9.5 9.5 0 1 1 38 28.5A9.5 9.5 0 1 1 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5A9.5 9.5 0 1 1 19 47.5L19 38L9.5 38A9.5 9.5 0 0 1 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5A9.5 9.5 0 0 0 9.5 19L19 19L19 0Z" fill="#F24E1E"/>
          <path d="M19 19L9.5 19A9.5 9.5 0 0 0 0 28.5A9.5 9.5 0 0 0 9.5 38L19 38L19 19Z" fill="#A259FF"/>
          <path d="M38 9.5A9.5 9.5 0 1 1 19 9.5L19 0L28.5 0A9.5 9.5 0 0 1 38 9.5Z" fill="#FF7262"/>
        </svg>
      </div>
      <div className="float-icon chatgpt" title="ChatGPT">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.28 9.82a8.82 8.82 0 0 0-.58-3.32 8.8 8.8 0 0 0-2.48-3.08 8.76 8.76 0 0 0-3.35-1.57A8.8 8.8 0 0 0 12.3.94a8.8 8.8 0 0 0-3.56.57 8.74 8.74 0 0 0-3 2 8.8 8.8 0 0 0-2.02 3 8.76 8.76 0 0 0-.54 3.53 8.82 8.82 0 0 0 1.25 4.35 8.78 8.78 0 0 0 3.32 3.12 8.8 8.8 0 0 0 3.73.91 8.8 8.8 0 0 0 3.55-.57 8.74 8.74 0 0 0 3-2 8.8 8.8 0 0 0 2.02-3 8.76 8.76 0 0 0 .54-3.53c0-.17 0-.34-.02-.51a8.8 8.8 0 0 0-1.25-4.35 8.78 8.78 0 0 0-3.32-3.12 8.8 8.8 0 0 0-3.73-.91 8.8 8.8 0 0 0-3.55.57A8.74 8.74 0 0 0 3.74 3a8.8 8.8 0 0 0-2.02 3 8.76 8.76 0 0 0-.54 3.53 8.82 8.82 0 0 0 .58 3.32 8.8 8.8 0 0 0 2.48 3.08 8.76 8.76 0 0 0 3.35 1.57 8.8 8.8 0 0 0 3.57-.91 8.8 8.8 0 0 0 3.56-.57 8.74 8.74 0 0 0 3-2 8.8 8.8 0 0 0 2.02-3 8.76 8.76 0 0 0 .54-3.53z" fill="#000000"/>
        </svg>
      </div>
      <div className="float-icon canva" title="Canva">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#00C4CC"/>
          <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="float-icon claude" title="Claude">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="#D97757"/>
        </svg>
      </div>
      <div className="float-icon antigravity" title="Antigravity">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 6 4 16 2 22L6 22C8 16 10 10 12 8C14 10 16 16 18 22L22 22C20 16 16 6 12 2Z" fill="url(#grad1)"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="50%" stopColor="#FFC107" />
              <stop offset="100%" stopColor="#F44336" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FloatingIcons;
