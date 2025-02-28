import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
              About Headstart CSE
            </h3>
            <p className="text-white/60">
              Empowering future tech leaders through innovative events and competitions in computer science and engineering.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a href="mailto:headstart.cse@example.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                headstart.cse@example.com
              </a>
              <a href="https://github.com/headstart-cse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://linkedin.com/company/headstart-cse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
              Location
            </h3>
            <p className="text-white/60">
              Department of Computer Science<br />
              Your University Name<br />
              City, State, ZIP<br />
              Country
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          © 2025 Headstart CSE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;