'use client';
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4">
        
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          
          {/* Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V12H8v3h2v7h3v-7h2.5l.5-3H13v-2.5c0-.3.2-.5.5-.5z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 3v9.5a3.5 3.5 0 11-3-3.45V6.5a7 7 0 106 6.93V8.5a6.5 6.5 0 003.5 1V6a3.5 3.5 0 01-3.5-3H14z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.2 2H21l-6.5 7.4L22 22h-6.9l-5.4-7-6.2 7H1l7-8L2 2h7l5 6.5L18.2 2zm-2.4 18h2.1L8.2 4H6.1l9.7 16z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 3a2 2 0 110 4 2 2 0 010-4zM3 8h2v13H3V8zm6 0h2v2h.1a2.2 2.2 0 012-1c2.2 0 3 1.4 3 3.3V21h-2v-7.2c0-1.7-.6-2.8-2-2.8-1.1 0-1.7.7-2 1.4-.1.2-.1.6-.1 1V21H9V8z"/>
            </svg>
          </a>

        </div>

        {/* Optional small text */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} BrightNest Cleaning
        </p>
      </div>

      <style jsx>{`
        .social-icon {
          color: #1ed760;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          filter: brightness(1.2);
          transform: translateY(-1px);
          text-shadow: 0 0 6px rgba(30, 215, 96, 0.4);
        }

        .social-icon svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </footer>
  );
}