import ILinks, { navLinks } from "@/app/constants/navLinks";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { LiaAmazon } from "react-icons/lia";
import { HeaderContainer, NavContainer } from "./Styles";

const Header = () => {
  return (
    <HeaderContainer>
      <picture>
        <LiaAmazon style={{ color: "#f0e8e8", width: 48, height: 48 }} />
      </picture>
      <NavContainer>
        {navLinks.map((link: ILinks) => (
          <Link className="link" key={link.id} href={link.path}>
            {link.name}
          </Link>
        ))}
      </NavContainer>
      <Link className="iconContainer" href="/profile">
        <FaUser style={{ color: "#e6dddd", width: 24, height: 24 }} />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
