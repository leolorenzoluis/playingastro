import { useState, useEffect } from 'preact/hooks';
import { createRef, RefObject } from 'preact';
import './home.css';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const typewriterRef = createRef() as RefObject<HTMLParagraphElement>;
  const words = [
    'Explore and enjoy',
    'Discover new things',
    'Learn something new',
    'Connect with others',
  ];
  const colors = [
    'from-blue to-purple',
    'from-red to-blue',
    'from-purple to-red',
    'from-orange to-purple',
  ];
  let timer;
  const typingSpeed = 50;
  const erasingSpeed = 20;
  const pauseDuration = 2000;

  useEffect(() => {
    type();
    return () => clearInterval(timer);
  }, [isDoneTyping]);

  function type() {
    setIsDoneTyping(false);
    const word = words[index];
    const letters = word!.split('');
    let i = 0;
    timer = setInterval(() => {
      const element = typewriterRef.current;
      if (element) element.textContent += letters[i];

      i++;
      if (i === letters.length) {
        clearInterval(timer);
        setTimeout(deleteText, pauseDuration);
      }
    }, typingSpeed);
  }

  function deleteText() {
    if (!typewriterRef.current) return;
    const letters = typewriterRef.current.textContent.split('');
    let i = letters.length - 1;
    timer = setInterval(() => {
      const element = typewriterRef.current;
      letters.pop();
      element.textContent = letters.join('');
      i--;

      if (i < 0) {
        clearInterval(timer);
        setIndex((prevIndex) => {
          let nextIndex = prevIndex + 1;
          if (nextIndex === words.length) {
            nextIndex = 0;
          }
          return nextIndex;
        });
        setTimeout(() => setIsDoneTyping(true), pauseDuration);
      }
    }, erasingSpeed);
  }

  return (
    <div
      class="relative bg-gradient-to-r 
    from-white to-white
    dark:from-gray-900 dark:to-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        class="absolute z-0 w-full h-full object-cover">
        <source src="astro-640.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black opacity-95 z-5"></div>
      <div class="relative h-screen max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1 class="text-4xl lg:text-9xl font-bold text-white sm:text-5xl md:text-6xl z-10 animate__animated animate__zoomIn">
          Leo Lorenzo Luis
        </h1>
        <div class="hero-subtitle-container z-10">
          <p
            id="typewriter"
            ref={typewriterRef}
            class="py-1 text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-6xl font-mono text-gradient"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
