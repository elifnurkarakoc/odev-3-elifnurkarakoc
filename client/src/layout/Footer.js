import React from "react";
import { LinkedinIcon, GithubIcon } from "../icons/icon";
const Footer = () => {
  return (
    <div className="text-white flex justify-between items-center py-4 text-sm">
      <div>
        <div>Designed and developed by Elif Nur Karakoç.</div>
        <div>
          Built with{" "}
          <a href="https://reactjs.org/" className="text-sm text-gray-400">
            ReactJS
          </a>{" "}
          &{" "}
          <a className="text-sm text-gray-400" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          .
        </div>
      </div>
      <div className="flex items-center justify-center mt-1">
        <a href="https://github.com/elifnurkarakoc/">
          <GithubIcon className="w-6 h-6 ml-2" />
        </a>
        <a href="https://tr.linkedin.com/in/elif-nur-karakoc">
          <LinkedinIcon className="w-6 h-6 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
