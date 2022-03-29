import React from "react";

const Content: React.FC = ({ children }) => (
  <section className="bg-white px-6 py-6 md:p-8 pb-8 rounded-sm shadow-sm text-gray-500">
    {children}
  </section>
);

export { Content };
