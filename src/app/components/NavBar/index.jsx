"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../../../public/LogoHead.png";
import Image from "next/image";
const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navIcon, setNavIcon] = useState("nav-icon4");
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      return setNavIcon("nav-icon4");
    } else {
      return setNavIcon("nav-icon4open");
    }
  };

  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header>
      <nav>
        <div className={header}>
          <div className="headContMain">
            <div className="headCont">
              <div className="headBuffer"></div>
              <div className="flex flex-row items-center justify-center text-center">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="FloWorks logo for navagation bar"
                    width={182}
                    height={100}
                  ></Image>
                </Link>
              </div>

              <div className="navHam" onClick={handleShowNavbar}>
                <div className={navIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={`nav-elements  ${showNavbar && "active"}`}>
                <nav>
                  <ul>
                    <li>
                      <Link
                        href="#home"
                        scroll={true}
                        className="navMenuLink"
                        onClick={handleShowNavbar}
                      >
                        <h3 className="navMenuItem">HOME</h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#booth"
                        scroll={true}
                        className="navMenuLink"
                        onClick={handleShowNavbar}
                      >
                        <h3 className="navMenuItem">BOOTH RENTAL</h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#nail"
                        scroll={true}
                        className="navMenuLink"
                        onClick={handleShowNavbar}
                      >
                        <h3 className="navMenuItem">NAIL SALON</h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#studio"
                        scroll={true}
                        className="navMenuLink"
                        onClick={handleShowNavbar}
                      >
                        <h3 className="navMenuItem">PRIVATE STUDIO</h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        scroll={true}
                        className="navMenuLink"
                        onClick={handleShowNavbar}
                      >
                        <h3 className="navMenuItem">CONTACT</h3>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
