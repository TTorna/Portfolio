const SocialSidebar = () => {
  return (
    <div className="fixed left-0 hover:left-5 duration-300 top-1/2 -translate-y-1/2 z-50">
      <div className="color-chupete rounded-r-md hover:rounded-l-md p-3 shadow-lg">
        <div className="flex flex-col gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 hover:rotate-12 duration-300 flex items-center group"
          >
            <img src='./public/Linkedin.svg' className="w-[2rem]" alt="LinkedIn" />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-white hover:scale-125  duration-300 flex items-center group"
          >
            <img src='./public/gmail.svg' className="w-[2rem]" alt="Gmail" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:pl-6  duration-300 flex items-center group"
          >
            <img src='./public/github.svg' className="w-[2rem]" alt="Github" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:pl-6 hover:scale-125 duration-300 flex items-center group"
          >
            <img src='./public/X.svg' className="w-[2rem]" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;