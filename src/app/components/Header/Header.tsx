import ILinks, { navLinks } from "@/app/constants/navLinks";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { LiaAmazon } from "react-icons/lia";

const Header = () => {
  return (
    <header>
      <picture>
        <LiaAmazon style={{ color: "#d32020", width: 60, height: 60 }} />
      </picture>
      <nav>
        {navLinks.map((link: ILinks) => (
          <Link key={link.id} href={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
      <Link href="/profile">
        <FaUser />
      </Link>
    </header>
  );
};

export default Header;
