import Link from "next/link";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../content";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Skills", path: "#skills" },
  { title: "Education", path: "#education" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 border-b border-[color:var(--border)] bg-[color:var(--card-strong)]/90 backdrop-blur-md">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-3">
        <Link
          href="/#top"
          className="text-xl font-semibold text-[color:var(--primary)] md:text-2xl"
        >
          {profile.name}
        </Link>
        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          <div className="block md:w-auto" id="navbar">
            <ul className="mt-0 flex flex-wrap gap-x-2 gap-y-1 p-0 md:flex-row md:gap-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
