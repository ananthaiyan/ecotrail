import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <p className="whitespace-pre-line">{displayText}</p>;
};

export default TypingEffect;
