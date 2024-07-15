import React from "react";
import linkedin from './linkedin image.png'
import githubicon from './githubicon.png'
import ig from './igicon.png'

export default function Footer(){
    return (
      <div className="footer">
        <a href="https://www.linkedin.com/feed/">
          <img src={linkedin} style={{ width: "25px", height: "25px", margin:"5px" }} />
        </a>
        <a href="https://github.com/dashboard">
          <img src={githubicon} />
        </a>
        <a href="https://www.instagram.com/_baskfit_/">
          <img src={ig} />
        </a>
      </div>
    );
}