import React, { ReactNode, FC } from "react";
import { Content } from "./Content";

interface ThemeLayoutProps {
  sidebar?: ReactNode;
}

const ThemeLayout: FC<ThemeLayoutProps> = ({ children, sidebar }) => (
  <main className="py-8 px-8 md:px-16 bg-gray-200 absolute w-full h-full overflow-y-auto">
    {sidebar && <nav>{sidebar}</nav>}
    <Content>{children}</Content>
  </main>
);

export { ThemeLayout };
