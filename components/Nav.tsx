import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: "Inter", normal;
    color: #ffffff;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const LinksList = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
    line-height: 24px;
    list-style-type: none;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 50px;
  `;
  const LinkStyle = styled.li`
    position: static;
    width: 101px;
    height: 24px;
    left: 0px;
    top: 0px;
    line-height: 24px;
    letter-spacing: 0.02em;
    a {
      text-decoration: none;
      font-size: 16px;
      color: #ffffff;
    }
  `;
  const Logo = styled.div`
    position: static;
    width: 82px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 24px;

    color: #ffffff;
    text-transform: uppercase;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 50px;
  `;

  return (
    <Nav>
      <Logo>Kruse</Logo>
      <LinksList>
        <LinkStyle>
          <Link href="/">Shop New</Link>
        </LinkStyle>
        <LinkStyle>
          <Link href="/">Shop Used</Link>
        </LinkStyle>
        <LinkStyle>
          <Link href="/">Finance</Link>
        </LinkStyle>
      </LinksList>
    </Nav>
  );
}
