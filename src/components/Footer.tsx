
import React from 'react';
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1">
            <a href="/" className="text-2xl font-medium tracking-tight mb-6 block hover:opacity-80 transition-opacity">
              manus
            </a>
            <p className="text-gray-600 text-sm mt-2 mb-6 max-w-xs">
              The AI assistant designed to help you focus on what matters.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-800 hover:text-black transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.9992 3.46012 21.7801 2.93267 21.3941 2.54678C21.0081 2.1609 20.4806 1.94192 19.9307 1.94123C19.3808 1.94055 18.8527 2.15835 18.4658 2.54335C18.0789 2.92836 17.8587 3.45529 17.857 4.005C17.857 4.005 17.857 4.462 17.857 4.462C16.655 4.255 15.547 3.715 14.643 2.92C12.407 1.739 9.492 2.013 7.572 3.559C5.85 4.992 5.269 7.229 6.047 9.232C5.034 9.276 4.028 8.976 3.145 8.362C3.145 10.502 4.953 12.216 7.066 12.67C6.173 12.949 5.219 12.951 4.324 12.675C4.893 14.35 6.49 15.483 8.305 15.518C6.586 16.839 4.432 17.452 2.214 17.292C4.374 18.623 6.92 19.354 9.516 19.315C15.203 19.315 20.306 14.925 20.306 9.385C20.306 9.182 20.301 9.072 20.294 8.862C21.2016 8.18899 21.9745 7.35322 22.567 6.397C21.7571 6.75798 20.8902 6.98443 20.004 7.064C20.9061 6.52306 21.5883 5.66826 21.909 4.66C21.039 5.1566 20.0832 5.50229 19.089 5.678C18.3363 4.89052 17.2864 4.43676 16.185 4.437C14.102 4.437 12.5 6.003 12.5 7.925C12.4987 8.27158 12.5369 8.6172 12.614 8.953C9.393 8.812 6.75 7.419 5.002 5.142C4.5988 5.82503 4.42345 6.61074 4.499 7.39398C4.57455 8.17722 4.90013 8.9127 5.426 9.487C4.78162 9.47293 4.1547 9.30265 3.602 8.988C3.602 8.988 3.602 9.011 3.602 9.035C3.61555 9.98089 3.9414 10.8949 4.52594 11.6187C5.11047 12.3425 5.92008 12.8338 6.819 13.008C6.22424 13.1567 5.60242 13.1837 5 13.087C5.241 13.8857 5.7318 14.5977 6.4103 15.1206C7.08881 15.6435 7.92434 15.9512 8.789 16.002C7.23278 17.1946 5.29386 17.8341 3.3 17.831C2.94957 17.8303 2.59944 17.8092 2.251 17.768C4.30822 19.0369 6.67515 19.7188 9.093 19.721" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-800 hover:text-black transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-800 hover:text-black transition-colors" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30384 19.5325 7.15559 18.7 6.3C19.0905 5.26136 19.0545 4.11801 18.6 3.1C18.6 3.1 17.5 2.8 15.6 4C14.0396 3.56459 12.3604 3.56459 10.8 4C8.9 2.8 7.8 3.1 7.8 3.1C7.34548 4.11801 7.30954 5.26136 7.7 6.3C6.86745 7.15559 6.40123 8.30384 6.4 9.5C6.4 14.1 9.1 15.2 11.9 15.5C11.3 16.1 11.1 16.7 11.1 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-black transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors text-sm">Pricing</a></li>
              <li><a href="#integrations" className="text-gray-600 hover:text-black transition-colors text-sm">Integrations</a></li>
              <li><a href="#changelog" className="text-gray-600 hover:text-black transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">About</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-black transition-colors text-sm">Team</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-black transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-600 hover:text-black transition-colors text-sm">Privacy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-black transition-colors text-sm">Terms</a></li>
              <li><a href="#cookies" className="text-gray-600 hover:text-black transition-colors text-sm">Cookies</a></li>
              <li><a href="#licenses" className="text-gray-600 hover:text-black transition-colors text-sm">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Manus AI, Inc. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#privacy" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
