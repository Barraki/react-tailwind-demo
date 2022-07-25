import React from "react";

type ButtonProps = {
  text: string;
  link: string;
};

const Button: React.FC<ButtonProps> = function (props) {
  const { text, link } = props;
  return (
    <a
      className="App-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Button;
