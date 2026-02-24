import React, { useEffect, useState } from 'react';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}

const TypedText = ({ strings, typeSpeed = 80, backSpeed = 40, backDelay = 1500 }: TypedTextProps) => {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentString.length) {
          setText(currentString.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), backDelay);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, stringIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className="text-primary font-semibold">
      {text}
      <span className="text-primary/60">|</span>
    </span>
  );
};

export default TypedText;
