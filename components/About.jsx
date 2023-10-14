import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-5 dark:text-white">
      <div className="text-3xl md:text-4xl text-gray-500 font-semibold">Hello there! <br /><span className="text-black">I'm Luat Pham</span>.</div>
      <div className="text-xl font-semibold">{"{"}</div>
      <div className="text-sm md:text-base text-gray-500 px-7">
        {
        `a passionate and innovative software engineer dedicated to crafting robust, user-friendly, and high-performing software solutions. With a keen interest in technology and a strong background in computer science, I am committed to pushing the boundaries of what is possible in the world of software development.`
        }
      </div>
      <div className="text-xl font-semibold">{"}"}</div>
    </div>
  );
};

export default About;
