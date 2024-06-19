import Image from "next/image";
import Link from "next/link";

import Grass from "../../public/grass.png";
import Logo from "../../public/Logo.png";
import Sun from "../../public/sunIcon.png";
import Circle from "../../public/Circle.png";
import CircleDark from "../../public/CircleDark.png";
import NailShape from "../../public/NailTombShape.png";
import StudioShape from "../../public/StudioShape.png";
import BoothRightImg from "../../public/boothRentalRightImg.png";

import FormMobile from "./components/FormMobile/Index";
import MapMobile from "./components/MapMobile/Index";

import DeskMap from "./components/DeskMap/Index";
import FormDesk from "./components/FormDesk/Index";

import { IoLogoFacebook, IoLogoInstagram, IoIosMail } from "react-icons/io";

async function getData() {
  const res = await fetch(
    "https://pdqob133.api.sanity.io/v2024-01-22/data/query/production?query=*[_type%20==%20%22data%22]{" +
      "%27deskHomeUrl%27:%20desktopHomeImage.asset-%3Eurl," +
      "%27deskBoothUrl%27:%20desktopBoothImage.asset-%3Eurl," +
      "%27deskNailUrl%27:%20desktopNailImage.asset-%3Eurl," +
      "%27deskStudioUrl%27:%20desktopStudioImage.asset-%3Eurl," +
      "%27mobileHomeUrl%27:%20mobileHomeImage.asset-%3Eurl," +
      "%27mobileBoothUrl%27:%20mobileBoothImage.asset-%3Eurl," +
      "%27mobileNailUrl%27:%20mobileNailImage.asset-%3Eurl," +
      "%27mobileStudioUrl%27:%20mobileStudioImage.asset-%3Eurl," +
      "homeText," +
      "aboutText," +
      "boothTitle," +
      "boothText," +
      "nailTitle," +
      "nailText," +
      "studioTitle," +
      "studioText," +
      "loopNetURL," +
      "facebookURL," +
      "instagramURL," +
      "emailAddress," +
      "showFacebook," +
      "showInstagram," +
      "}"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const dataRaw = await getData();
  const result = dataRaw.result;
  const data = result[0];

  return (
    <div className="main">
      <div className="mobile">
        <div className="home" id="home">
          <div className="homeImgCont">
            <div className="homeTomb">
              <Image
                src={data.mobileHomeUrl}
                alt="Lobby"
                width={400}
                height={200}
              />
            </div>
            <div className="grassCont">
              <Image src={Grass} alt="grass" fill={true} placeholder="blur" />
            </div>
          </div>
          <div className="logoCont">
            <Image src={Logo} alt="Savvy B Logo" width={286} height={286} />
          </div>
          <div className="homeText">
            <h3>{data.homeText}</h3>
            <Link href={data.loopNetURL}>
              <button className="homeBtn">Apply Now</button>
            </Link>
          </div>
        </div>
        <div className="about">
          <div>
            <Image src={Sun} alt="sun icon" width={180} height={90} />
          </div>
          <div className="aboutText">
            <h3>{data.aboutText}</h3>
          </div>
        </div>
        <div className="boothRental" id="booth">
          <div className="boothRentalTitle">
            <h1>{data.boothTitle}</h1>
          </div>
          <div className="rentCircle">
            <Image src={Circle} alt="Circle" width={88} height={88} />
          </div>
          <div className="boothImgCont">
            <div className="boothImg">
              <Image
                src={data.mobileBoothUrl}
                alt="hair style booth"
                width={300}
                height={600}
              />
            </div>
            <div className="boothRect">
              <svg
                width="100vw"
                height="60vh"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="90vw"
                  height="315"
                  x="5vw"
                  y="0"
                  rx="0"
                  ry="0"
                  fill="#C5BCAE"
                />
              </svg>
            </div>
          </div>
          <div className="rentTextCont">
            <h3 className="rentText">{data.boothText}</h3>
            <Link href={data.loopNetURL}>
              <button className="homeBtn">Apply Now</button>
            </Link>
          </div>
        </div>
        <div className="nailRental" id="nail">
          <div className="nailRentalTitle">
            <h1>{data.nailTitle}</h1>
          </div>
          <div className="rentCircleNail">
            <Image src={CircleDark} alt="Circle" width={88} height={88} />
          </div>
          <div className="nailImgCont">
            <div className="nailImg">
              <Image
                src={data.mobileNailUrl}
                alt="hair style booth"
                width={300}
                height={600}
              />
            </div>
            <div className="nailRect">
              <Image
                src={NailShape}
                alt="hair style booth"
                width={300}
                height={600}
              />
            </div>
          </div>
          <div className="studioTextCont">
            <h3 className="studioText">{data.nailText}</h3>
            <Link href={data.loopNetURL}>
              <button className="homeBtnNail">Apply Now</button>
            </Link>
          </div>
        </div>
        <div className="studioRental" id="studio">
          <div className="studioRentalTitle">
            <h1>{data.studioTitle}</h1>
          </div>
          <div className="rentCircle">
            <Image src={Circle} alt="Circle" width={88} height={88} />
          </div>
          <div className="studioImgCont">
            <div className="studioImg">
              <Image
                src={data.mobileStudioUrl}
                alt="salon booths"
                width={320}
                height={320}
              />
            </div>
            <div className="studioRect">
              <Image
                src={StudioShape}
                alt="a circle"
                width={320}
                height={320}
              />
            </div>
            <div className="rentCircle2">
              <Image src={Circle} alt="Circle" width={88} height={88} />
            </div>
          </div>
          <div className="studioTextCont">
            <h3 className="studioText">{data.studioText}</h3>
            <Link href={data.loopNetURL}>
              <button className="homeBtnNail">Apply Now</button>
            </Link>
          </div>
        </div>
        <div id="contact">
          <FormMobile />
        </div>
        <div>
          <MapMobile />
        </div>
        <div className="footer">
          <Image src={Logo} alt="Savvy B Logo" width={286} height={286} />
          <div className="footerIcons">
            {data.showFacebook && (
              <a href={data.facebookURL}>
                <IoLogoFacebook size={40} />
              </a>
            )}
            {data.showInstagram && (
              <a href={data.instagramURL}>
                <IoLogoInstagram size={40} />
              </a>
            )}
            <a href={`mailto:${data.emailAddress}`}>
              <IoIosMail size={40} />
            </a>
          </div>
          <div className="footerText">
            <a href={`mailto:${data.emailAddress}`}>{data.emailAddress}</a>
          </div>
          <div className="footerText">
            <p>
              5056 Federal Blvd,
              <br /> Denver, CO 80221
            </p>
          </div>
          <div className="footerText">
            <p>
              Savvy B Studio & Collective <br /> Copyright 2024
            </p>
          </div>
        </div>
      </div>
      <div className="desktop">
        <div className="deskHeader"></div>
        <div className="heroCont">
          <div className="heroLogoCont">
            <Image src={Logo} alt="Savvy B Logo" height={286} width={286} />
          </div>
          <div className="heroImgCont">
            <Image src={data.deskHomeUrl} alt="Hair salon booths" fill={true} />
          </div>
        </div>
        <div className="deskBooth">
          <div className="deskBoothLeft">
            <div className="deskBoothImgCont">
              <Image
                src={data.deskBoothUrl}
                alt="hair booth"
                width={220}
                height={220}
              />
            </div>
            <div className="deskBoothRect">
              <svg width="300" height="220" xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="300"
                  height="220"
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  fill="#C5BCAE"
                />
              </svg>
            </div>
          </div>
          <div className="deskBoothRight">
            <div className="deskBoothTextCont">
              <h2 className="boothTextTitle">{data.boothTitle}</h2>
              <p className="boothTextBody">{data.boothText}</p>
              <Link href={data.loopNetURL}>
                <button className="deskBoothBtn">Apply Now</button>
              </Link>
            </div>
            <div className="deskBoothRightImgCont">
              <Image src={BoothRightImg} alt="pink mountains moon" />
            </div>
            <div className="deskBoothRightImgCircleCont">
              <Image src={Circle} alt="circle" />
            </div>
          </div>
        </div>
        <div className="deskAbout">
          <div className="deskAboutImg">
            <Image src={Sun} alt="sun" />
          </div>
          <div className="deskAboutText">
            <p>{data.aboutText}</p>
          </div>
        </div>
        <div className="deskRental">
          <div className="deskNail">
            <div className="deskNailLeft">
              <div className="deskNailImg">
                <Image
                  src={data.deskNailUrl}
                  alt="nail tech station"
                  width={200}
                  height={200}
                />
              </div>
              <div className="deskNailCircle">
                <Image src={Circle} alt="circle" />
              </div>
            </div>
            <div className="deskNailRight">
              <div className="deskNailTextCont">
                <h2 className="nailTextTitle">{data.nailTitle}</h2>
                <p className="nailTextBody">{data.nailText}</p>
                <Link href={data.loopNetURL}>
                  <button className="deskNailBtn">Apply Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="deskStudio">
            <div className="deskStudioLeft">
              <div className="deskStudioTextCont">
                <h2 className="studioTextTitle">{data.studioTitle}</h2>
                <p className="studioTextBody">{data.studioText}</p>
                <Link href={data.loopNetURL}>
                  <button className="deskStudioBtn">Apply Now</button>
                </Link>
              </div>
            </div>
            <div className="deskStudioRight">
              <div className="deskStudioImg">
                <Image
                  src={data.deskStudioUrl}
                  alt="person holding flower"
                  width={200}
                  height={200}
                />
              </div>
              <div className="deskStudioRect">
                <svg
                  width="175"
                  height="285"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="175"
                    height="285"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    fill="#71685E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="deskUtil">
          <div className="deskLocationCont">
            <DeskMap />
          </div>
          <div className="deskContactCont">
            <FormDesk />
          </div>
        </div>
        <div className="deskFooter">
          <div className="deskSocialCont">
            {data.showFacebook && (
              <a href={data.facebookURL}>
                <IoLogoFacebook size={24} />
              </a>
            )}
            {data.showInstagram && (
              <a href={data.instagramURL}>
                <IoLogoInstagram size={24} />
              </a>
            )}
            <a href={`mailto:${data.emailAddress}`}>
              <IoIosMail size={24} />
            </a>
          </div>
          <div className="deskEmailCont">
            <a href={`mailto:${data.emailAddress}`}>{data.emailAddress}</a>
          </div>
          <div className="deskFooterLogo">
            <Image src={Logo} alt="Savvy B Logo" height={130} width={130} />
          </div>
          <div className="deskAddressCont">
            <p>
              5056 Federal Blvd, <br /> Denver, CO 80221
            </p>
          </div>
          <div className="deskCopyCont">
            <p>
              Savvy B Studio & Collective <br /> &copy; 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
