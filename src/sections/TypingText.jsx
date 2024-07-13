import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const timeout = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length-1) {
        clearInterval(timeout);
      }
    }, speed);

    return () => {
      clearInterval(timeout);
      setDisplayedText('');
    };
  }, [text, speed]);

  return (
    <p className="text-white text-3xl md:text-6xl font-sans font-extrabold px-5 md:px-20 pt-20 typing">
      {displayedText}
    </p>
  );
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

TypingText.defaultProps = {
  speed: 50,
};

export default TypingText;
