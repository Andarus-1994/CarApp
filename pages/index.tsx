import Head from "next/head";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import styled from "styled-components";
import { useState } from "react";
export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function MobileMenuToggle() {
    setToggleMenu(!toggleMenu);
  }
  const Home = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background-image: url("../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: relative;
    width: 100%;
    height: 253px;
    left: 50px;
    top: 36px;
    @media (max-width: 768px) {
      width: 100%;
      left: 20px;
    }
  `;
  const BehindContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    @media (max-width: 768px) {
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
  `;

  const SearchBar = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 20px;

    position: static;
    width: 90%;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    left: 0px;
    right: 0;

    top: 64px;

    background: #ffffff;

    border: 1px solid #5b626f;
    box-sizing: border-box;
    border-radius: 5px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 40px 0px;

    color: #5b626f;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 768px) {
      width: 90%;
    }
  `;

  const HeadersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 15vh 0px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      position: relative;
      width: 100%;
      height: 55vh;
      left: 0px;
      top: 0px;
    }
    h1 {
      position: static;
      left: 0px;
      top: 0px;

      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 56px;
      line-height: 56px;
      letter-spacing: 0.02em;
      font-feature-settings: "pnum" on, "lnum" on;

      color: #ffffff;

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 16px 0px;
      @media (max-width: 768px) {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        margin: 0px 0px;
        /* identical to box height, or 133% */
        letter-spacing: 0.02em;
        font-feature-settings: "pnum" on, "lnum" on;

        color: #ffffff;
      }
    }
    h2 {
      position: static;
      left: 0px;
      top: 72px;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 44px;

      letter-spacing: 0.02em;
      font-feature-settings: "pnum" on, "lnum" on;

      color: #ffffff;

      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 16px 0px;
      @media (max-width: 768px) {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        margin: 0px 0px;
      }
    }
    button {
      display: none;
      @media (max-width: 768px) {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        position: absolute;
        width: 90%;
        height: 44px;
        bottom: 0;
        margin-top: auto;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-sizing: border-box;
        border-radius: 3px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.02em;
        font-feature-settings: "pnum" on, "lnum" on;
        color: white;
      }
    }
  `;

  return (
    <Home>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;900&display=swap"
          rel="stylesheet"
        />
        <title>Krusn</title>
      </Head>
      <BehindContainer></BehindContainer>
      <Container>
        <Nav />
        <NavMobile Menu={MobileMenuToggle} toggleMenu={toggleMenu} />
        <SearchBar placeholder="Search by make, model, or trim "></SearchBar>
        <HeadersContainer>
          <h1>Krusn 2 U</h1>
          <h2>Our services. Your Schedule</h2>
          <button>Browse Inventory</button>
        </HeadersContainer>
      </Container>
    </Home>
  );
}
