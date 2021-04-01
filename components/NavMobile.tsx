import Link from "next/link";
import styled from "styled-components";

export default function Nav({ Menu, toggleMenu }) {
  const Nav = styled.nav`
    display: none;

    @media (max-width: 768px) {
      display: flex;

      position: static;
      width: 100%;
      height: 24px;
      left: 0px;
      top: 0px;
      align-items: flex-start;
    }
  `;

  const BehindMobileMenu = styled.div`
    position: fixed;
    cursor: pointer;
    top: 0;
    height: 100vh;
    width: 100%;
    background: none;
    z-index: 5;
  `;
  const LinksList = styled.ul`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    left: 0px;
    top: 0;
    justify-content: space-between;
    padding: 20px 0;
    padding-left: 30px;
    list-style-type: none;
    /* White */
    background: #ffffff;
    z-index: 30;
  `;
  const LinkStyle = styled.li`
    margin: 20px 0;
    a {
      text-decoration: none;
      color: black;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
    }
  `;
  const Logo = styled.div`
    position: absolute;
    width: 82px;
    height: 24px;
    left: 40px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
    /* identical to box height, or 100% */
    font-feature-settings: "pnum" on, "lnum" on;

    /* White */
    color: #ffffff;
  `;

  const SmallLinks = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    li {
      margin: 0;
      margin-top: 5px;
    }
    a {
      text-decoration: none;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      /* identical to box height, or 150% */
      letter-spacing: 0.02em;
      font-feature-settings: "pnum" on, "lnum" on;

      color: #000000;
    }
  `;

  const MobileMenu = styled.div`
    color: white;
  `;

  const Details = styled.ul`
    list-style-type: none;
    margin-bottom: 0;
    color: #5b626f;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    li {
      margin: 10px 0;
    }
  `;

  const ToggleMenu = styled.div`
    cursor: pointer;
    div {
      width: 25px;
      height: 3px;
      background-color: #ffffff;
      margin: 4px 0;
    }
  `;

  return (
    <Nav>
      <ToggleMenu onClick={Menu}>
        {" "}
        <div></div>
        <div></div>
        <div></div>
      </ToggleMenu>
      <Logo>Kruse</Logo>
      {toggleMenu ? (
        <div>
          <LinksList>
            <div>
              <LinkStyle>
                <Link href="/">Shop New</Link>
              </LinkStyle>
              <LinkStyle>
                <Link href="/">Shop Used</Link>
              </LinkStyle>
              <LinkStyle>
                <Link href="/">Finance</Link>
              </LinkStyle>
              <LinkStyle>
                <Link href="/">Service and Parts</Link>
              </LinkStyle>
              <LinkStyle>
                <Link href="/">More</Link>
              </LinkStyle>
              <SmallLinks>
                <LinkStyle>
                  <Link href="/">Blog</Link>
                </LinkStyle>
                <LinkStyle>
                  <Link href="/">Contact Us</Link>
                </LinkStyle>
                <LinkStyle>
                  <Link href="/">My Account</Link>
                </LinkStyle>
              </SmallLinks>
            </div>
            <Details>
              <li>912-210-5690</li>
              <li>9:00 AM - 8:00 PM</li>
            </Details>
          </LinksList>{" "}
          <BehindMobileMenu onClick={Menu}></BehindMobileMenu>
        </div>
      ) : (
        ""
      )}
    </Nav>
  );
}
