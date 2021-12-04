import logo from "../assets/logo.png";
import styled from "styled-components";
import { aboutResponsive, tablet } from "../responsive.js";

const HeaderSection = styled.header`
  position: relative;
  z-index: 2;
  overflow-x: hidden;
`;
const Container = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${aboutResponsive({
    padding: "2rem 4rem",
  })};
  ${tablet({
    padding: "2rem",
  })};
`;
const Logo = styled.img``;
const Nav = styled.nav`
  ${tablet({
    display: "none",
  })}
`;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;
const NavItem = styled.li`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #3a3b7b;
  margin-right: 34px;
`;
// const MobileNav = styled.div`
//   display: none;
//   ${tablet({
//     display: "block",
//   })}
// `;

const navData = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Marketplace",
  },
  {
    id: 3,
    name: "About us",
  },
  {
    id: 4,
    name: "Contact us",
  },
];

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Logo src={logo} alt="logo" />

        <Nav>
          <NavList>
            {navData.map(({ id, name }) => (
              <NavItem key={id}>{name}</NavItem>
            ))}
          </NavList>
        </Nav>
      </Container>
    </HeaderSection>
  );
};

export default Header;
