import React from "react";

const CustomLink = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  );
};

export default CustomLink;
