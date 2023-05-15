import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
  const message = 'AI is here to solve small businesses problems faster and cheaper...';
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (text.length < message.length) {
        setText((prevText) => prevText + message[text.length]);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <div className="flex items-center">
      <span className="text-lg whitespace">{text}</span>
    </div>
  );
};

export default TypingEffect;