'use client';

import React from 'react';
import Image from 'next/image';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1a1a2e] px-4 py-2.5 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between text-sm">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="https://it2.tv/img/call.webp"
                alt="Call"
                width={18}
                height={18}
              />
              <a
                href="https://wa.me/919344618144"
                className="transition-colors duration-300 hover:text-[#00d9ff]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Chat with Expert
              </a>
            </div>
            <a
              href="mailto:enquiry@it2.tv"
              className="transition-colors duration-300 hover:text-[#00d9ff]"
            >
              enquiry@it2.tv
            </a>
          </div>

          {/* Right Section - Follow us */}
          <div className="flex items-center gap-3">
            <span className="text-sm">Follow us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://goo.gl/maps/ihFiQeqtGGQfrkqh7"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://it2.tv/img/google.webp"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.facebook.com/googleseospecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://it2.tv/img/fb.webp"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://twitter.com/gseospecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://it2.tv/img/twitter.webp"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.instagram.com/googlerankingexpert/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://it2.tv/img/instagram.webp"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/googlerankingexpert/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://it2.tv/img/linkedin.webp"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
