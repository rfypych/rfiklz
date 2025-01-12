import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Coder</>",
          "Code Enthusiast👨‍💻",
          "Green Hat Hacker📗",
          "Script Kiddie😹",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
