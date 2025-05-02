import React from 'react';
import ThemeToggle from '../ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-4 font-sans text-gray-800 dark:text-custom-primary-white min-h-screen relative
                    bg-[radial-gradient(circle_at_25%_60%,_#f8e3b8_0%,_#e9eef3_45%,_#7fc3e8_100%)] bg-cover bg-no-repeat
                    dark:bg-[radial-gradient(circle_at_5%_100%,_#371c00_0%,_#000000_45%,_#01192a_100%)]
                    ">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="
        text-5xl md:text-6xl font-extrabold
        text-center mb-8
        dark:text-custom-accent-blue
        uppercase tracking-widest
        after:content-[''] after:block
        after:w-24 after:h-1
        after:bg-custom-accent-blue
        after:rounded-full
        after:mx-auto after:mt-2
      ">
        Galactic-Fishing Game
      </h1>

      <main>{children}</main>

      <footer className="mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Coded with 💙 by{' '}
        <a
          href="https://www.linkedin.com/in/brycot/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-custom-accent-blue hover:underline"
        >
          Brycot
        </a>
      </footer>
    </div>
  );
};

export default Layout; 