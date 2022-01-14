import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full flex flex-col flex-center items-center p-12 md:justify-between bg-gray-200">
      <div className="mb-3">
        <Link href="/" passHref>
          <span className="cursor-pointer font-bold text-3xl text-black inline-block">
            HC
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-green-500 to-blue-900 text-4xl">
              [OD]
            </span>
            ES
          </span>
        </Link>
      </div>

      <div className="flex flex-center flex-col items-center">
        <p>Follow Me On Social Media</p>

        <div className="grid grid-cols-3 gap-5 mt-4">
          <a href="https://twitter.com/HCODES15" target="_blank">
            <FontAwesomeIcon icon={faTwitter} height={20} width={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-castro-20b538163/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Hcastro1515" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
