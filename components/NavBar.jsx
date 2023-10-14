import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <div className="flex w-full mb-16 pt-3 dark:text-white justify-center">
      <div className="absolute top-2 left-5">
        <DarkModeToggle />
      </div>
      <div className="p-2 ease-in duration-300 hover:-tracking-[-1rem]">
        <a href="/assets/resume.pdf" className="text-2xl md:text-4xl font-leaugeSpartan font-extrabold">{"</>"}</a>
      </div>
    </div>
  );
};

export default NavBar;
