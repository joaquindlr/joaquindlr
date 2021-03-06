import { useState } from "react";

import HeaderStyles from "./HeaderStyles";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";

const Header = () => {
  const classes = HeaderStyles();
  const matches = useMediaQuery("(max-width:768px)");

  const [home, setHome] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [services, setServices] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    if (links) {
      setLinks(false);
    }
    setTimeout(function () {
      setLinks(true);
    }, 0);
  };

  return (
    <>
      <div className={classes.cont}>
        {matches ? (
          <>
            <MenuIcon
              onClick={() => handleOpen()}
              style={{ fontSize: "3rem" }}
            />
            {open && (
              <>
                <div
                  style={{
                    backgroundColor: "#474555",
                    height: "100vh",
                    width: "100vw",
                    position: "fixed",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Close
                      onClick={() => handleOpen()}
                      style={{
                        fontSize: "3rem",
                      }}
                    />
                  </div>
                  <Collapse in={links} timeout="auto">
                    <div
                      style={{
                        display: "grid",
                        placeItems: "center",
                        marginTop: "8rem",
                      }}
                    >
                      <Link href="/">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "2rem",
                            fontWeight: 500,
                            marginBottom: "1rem",
                          }}
                        >
                          Home
                        </a>
                      </Link>
                      <Link href="/">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "2rem",
                            fontWeight: 500,
                            marginBottom: "1rem",
                          }}
                        >
                          About Me
                        </a>
                      </Link>
                      <Link href="/">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "2rem",
                            fontWeight: 500,
                            marginBottom: "1rem",
                          }}
                        >
                          Services
                        </a>
                      </Link>
                      <Link href="/">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "2rem",
                            fontWeight: 500,
                            marginBottom: "1rem",
                          }}
                        >
                          Works
                        </a>
                      </Link>
                      <Link href="/">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "2rem",
                            fontWeight: 500,
                          }}
                        >
                          Contact
                        </a>
                      </Link>
                    </div>
                  </Collapse>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={classes.contLink}>
              <Link href="/">
                <a
                  className={home ? classes.linkSelect : classes.link}
                  onMouseEnter={() => setHome(true)}
                  onMouseLeave={() => setHome(false)}
                >
                  Home
                </a>
              </Link>
              <Link href="/#AboutMe">
                <a
                  className={aboutMe ? classes.linkSelect : classes.link}
                  onMouseEnter={() => setAboutMe(true)}
                  onMouseLeave={() => setAboutMe(false)}
                >
                  About Me
                </a>
              </Link>
              <Link href="/">
                <a
                  className={services ? classes.linkSelect : classes.link}
                  onMouseEnter={() => setServices(true)}
                  onMouseLeave={() => setServices(false)}
                >
                  Services
                </a>
              </Link>
              <Link href="/">
                <a
                  className={works ? classes.linkSelect : classes.link}
                  onMouseEnter={() => setWorks(true)}
                  onMouseLeave={() => setWorks(false)}
                >
                  Works
                </a>
              </Link>
              <Link href="/">
                <a
                  className={contact ? classes.linkSelect : classes.link}
                  onMouseEnter={() => setContact(true)}
                  onMouseLeave={() => setContact(false)}
                >
                  Contact
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
