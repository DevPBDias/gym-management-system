import ILinks, { navLinks } from "@/app/constants/navLinks";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { LiaAmazon } from "react-icons/lia";
import { HeaderContainer, NavContainer } from "./Styles";
import { IoExitOutline, IoHome } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";

const Header = () => {
  return (
    <HeaderContainer>
      <section>
        <picture>
          <LiaAmazon style={{ color: "#f0e8e8", width: 48, height: 48 }} />
        </picture>
        <div className="navContent">
          <div className="iconsBox">
            <IoHome style={{ color: "#e6dddd", width: 24, height: 24 }} />
            <CgGym style={{ color: "#e6dddd", width: 24, height: 24 }} />
            <GiNotebook style={{ color: "#e6dddd", width: 24, height: 24 }} />
            <FaUser style={{ color: "#e6dddd", width: 24, height: 24 }} />
          </div>
          <NavContainer>
            {navLinks.map((link: ILinks) => (
              <Link className="link" key={link.id} href={link.path}>
                {link.name}
              </Link>
            ))}
          </NavContainer>
        </div>
      </section>
      <Link className="iconContainer" href="/">
        <IoExitOutline
          className="iconHover"
          style={{ color: "#e6dddd", width: 32, height: 32 }}
        />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
