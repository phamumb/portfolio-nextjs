import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="md:text-xl text-lg font-semibold">Get In Touch</div>
      <div className="md:text-base text-xs text-gray-400 text-center max-w-lg">
        Although I'm not currently looking for freelance opportunities, my inbox
        is always open. Whether for a potential project or just to say hi, I'll
        try my best to answer your email!
      </div>
      <div className="flex justify-center">
        <a className="m-4 icon" href="https://twitter.com/">
          <Twitter size={20}/>
        </a>
        <a
          className="m-4 icon"
          href="https://www.linkedin.com/in/luat-pham-6b5338191/"
        >
          <Linkedin size={20}/>
        </a>
        <a className="m-4 icon" href="https://github.com/phamumb">
          <Github size={20}/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
