import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { StoreContext } from "../context/Storecontext";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const Navbaar = () => {
  const navigate = useNavigate();

  const { token, setToken, instData, setinstData, setUserData } =
    useContext(StoreContext);
  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("myData");
    setToken("");
    navigate("/");
    setinstData("");
    setUserData("");
    toast.success("account delete");
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*  mach */

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="">
        <nav
          className={`navbar navbar-expand-lg  mb-3  shadow-sm position-fixed w-100  border-opacity-75 top-0   ${
            scroll ? "scrolled" : ""
          }`}
        >
          <div class="container-fluid">
            <div className="d-flex align-items-center">
              <Link
                class="navbar-brand mx-1 d-flex gap-2 align-items-center"
                to="/"
              >
                <BsBookFill className="icons-head" size={30} />{" "}
                <h2 className="p-head ">E-Learning</h2>
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNav">
              <div>
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">
                      <span className="pa-head">Home</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/about">
                      <span className="pa-head">About</span>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/courses">
                      <span className="pa-head">Courses</span>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      class="nav-link "
                      aria-current="page"
                      to="/instructor
"
                    >
                      <span className="pa-head">Instructor</span>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/contact">
                      <span className="pa-head">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-en d-flex gap-4 align-items-center justify-content-center">
                <div className="d-flex gap-4 mx-4 text-decoration-none  icons-navv">
                  <div>
                    <div class="searchBox">
                      <input
                        class="searchInput"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search something"
                      />
                      <Link to={`/search/${query}`}>
                        <button class="searchButton" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_17)">
                              <g filter="url(#filter0_d_2_17)">
                                <path
                                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  shape-rendering="crispEdges"
                                ></path>
                              </g>
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2_17"
                                x="-0.418549"
                                y="3.70435"
                                width="29.7139"
                                height="29.7139"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                ></feFlood>
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                ></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feComposite
                                  in2="hardAlpha"
                                  operator="out"
                                ></feComposite>
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                ></feColorMatrix>
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2_17"
                                ></feBlend>
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2_17"
                                  result="shape"
                                ></feBlend>
                              </filter>
                              <clipPath id="clip0_2_17">
                                <rect
                                  width="28.0702"
                                  height="28.0702"
                                  fill="white"
                                  transform="translate(0.403503 0.526367)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="d-flex align-items-center">
                    <div className="shoping-cart text-decoration-none ">
                      <FaShoppingBag size={30} />
                    </div>
                  </Link>
                  <div>
                    {!token ? (
                      <div className="d-flex gap-3">
                        <button className="btn-sup">
                          <Link
                            className="text-decoration-none text-white"
                            to="/signup"
                          >
                            SignUp
                          </Link>
                          <div class="arrow-wrapper">
                            <div class="arrow"></div>
                          </div>
                        </button>
                        <button className="btn btn-outline-success btn-sin  ">
                          <Link
                            className="text-decoration-none text-black btn-singin  "
                            to="/login"
                          >
                            {" "}
                            LogIn{" "}
                          </Link>
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex gap-3 align-items-center">
                        <Link to="/userprofile">
                          <IoPersonCircleSharp
                            size={35}
                            className="rounded-5 bg-info"
                          />
                        </Link>
                        <button
                          onClick={LogOut}
                          className="btn  btn-danger text-white btn-sin  "
                        >
                          <Link
                            className="text-decoration-none text-white  btn-singin  "
                            to=""
                          >
                            {" "}
                            LogOut{" "}
                          </Link>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
