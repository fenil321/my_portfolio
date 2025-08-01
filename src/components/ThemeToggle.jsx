import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, SetIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Default to dark mode if no theme is stored
    if (storedTheme === "dark" || storedTheme === null) {
      SetIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // set it if it wasn't already
    } else {
      SetIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      SetIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      SetIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus-outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;


// import { Moon, Sun } from 'lucide-react';
// import React, { useEffect, useState } from 'react'
// import { cn } from '../lib/utils';

// const ThemeToggle = () => {
//     const [isDarkMode, SetIsDarkMode] = useState(false);

//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         if (storedTheme == "dark") {
//             SetIsDarkMode(true);
//             document.documentElement.classList.add("dark");
//         }
//         else{
//             localStorage.setItem("theme","light");
//             SetIsDarkMode(false);
//         }
//     }, [])

//     const toggleTheme = () => {
//         if(isDarkMode){
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme","light");
//             SetIsDarkMode(false);
//         }else{
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme","dark");
//             SetIsDarkMode(true);
//         }
//     }
//   return (
//     <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//         "focus-outline-hidden"
//     )}>
//         {" "}
//         {isDarkMode ? (
//             <Sun className='h-6 w-6 text-yellow-300'/>
//         ) : (
//             <Moon className='h-6 w-6 text-blue-900'/>
//         )}
    
//     </button>
//   )
// }

// export default ThemeToggle