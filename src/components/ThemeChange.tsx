import { useState, useEffect } from 'preact/hooks';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      setIsDark(currentTheme === 'dark');
    }
  }, []);

  const switchTheme = (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div class="flex justify-end items-center">
      <label class="inline-block h-9 w-16 relative">
        <input
          type="checkbox"
          class="sr-only"
          checked={isDark}
          onChange={switchTheme}
        />

        <div class="absolute top-0 left-0 w-full h-full bg-orange dark:bg-purple rounded-full cursor-pointer transition dark"></div>
        <div
          class="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300"
          style={{
            transform: isDark ? 'translateX(27px)' : 'translateX(0)',
          }}></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#FCD53F"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          id="moon"
          strokeLinejoin="round"
          className={`absolute cursor-pointer top-1 right-1 h-7 w-7 text-gray-800 transition-opacity duration-300 animate__animated ${
            isDark ? 'opacity-0' : 'opacity-100 animate__fadeInLeft'
          }`}>
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          id="sun"
          fill="#FCD53F"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute cursor-pointer top-1 left-1 h-7 w-7 text-gray-800 transition-opacity duration-300 animate__animated ${
            isDark ? 'opacity-100 animate__fadeInRight' : 'opacity-0'
          }`}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ThemeSwitch;
