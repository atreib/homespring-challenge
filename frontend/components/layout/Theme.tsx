import React from "react";

const ThemeLayout: React.FC = ({ children }) => (
  <div className="py-8 px-16 bg-gray-200 absolute w-full h-full overflow-y-auto">
    {children}
  </div>
);

export { ThemeLayout };
