import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded-md py-2 pl-2 pr-3 text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--primary)] md:p-0 md:text-base"
    >
      {title}
    </Link>
  );
};

export default NavLink;
