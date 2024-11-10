import React from 'react';

const LinkButton = ({ href, text, secondary }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
        secondary 
          ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
          : 'bg-accent text-white hover:bg-accent/90'
      }`}
    >
      {text}
    </a>
  );
};

export default LinkButton; 