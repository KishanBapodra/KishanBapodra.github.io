import { useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark': ''}>
      <div className='h-screen w-screen bg-light dark:bg-slate-800 3xl:px-24'>
        <nav className='bg-extraLight dark:bg-darknav py-3 flex justify-around items-center dark:text-white'>
          <div className="flex justify-between items-center ">
            <h1 className='text-lg mr-8 lg:mr-10 2xl:mr-24'>Kishan Bapodra</h1>
            <div className="hidden sm:block space-x-4 text-lg">
              <a>Home</a>
              <a>Experience</a>
              <a>Projects</a>
              <a>Contact</a>
            </div>
          </div>
          <button className='border-2 p-2 rounded-md border-slate-800 dark:border-light' onClick={handleThemeSwitch}>
            {darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
          </button>
        </nav> 
        <div className="flex justify-center items-center">
          <p className="text-3xl dark:text-white">Hello Mom</p>
        </div>
      </div>
    </div>
  )
}

export default App
