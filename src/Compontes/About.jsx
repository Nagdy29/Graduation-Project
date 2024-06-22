import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import aboutimg from "../Images/course-3.jpg";
import { GiSkills } from "react-icons/gi";
import { FaBook, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaCalendarMinus } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import av1 from "../Images/clients/21.jpg";
import av2 from "../Images/clients/6.jpg";
import av3 from "../Images/clients//4.jpg";
import av4 from "../Images/clients/3.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Footer } from "./Footer";
import { StoreContext } from "../context/Storecontext";
import { BiLogoGmail } from "react-icons/bi";
import in1 from "../Images/team-1.jpg";

export const About = () => {
  const { persone_list, setpersone, url, food_list } = useContext(StoreContext);
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary py-5 mb-5 about-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">
                      About Us
                    </h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                          <Link class="text-white text-decoration-none" to="/">
                            Home
                          </Link>
                        </li>

                        <li
                          class="breadcrumb-item text-white active"
                          aria-current="page"
                        >
                          About
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="about-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 mx-5">
          <div className="container row d-flex align-items-center justify-content-center my-2">
            <div className="col-md-6">
              <h2 className="fw-bold fs-1">About E-Learinig</h2>
            </div>
            <div className="col-md-6">
              <p className="fw-normal fs-6  ">
                Welcome to our platform, where we are passionate about
                empowering individuals to master the world of design and
                development. We offer a wide range of online courses designed to
                equip learners with the skills and knowledge needed to succeed
                in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="about-sec">
          <section className="d-flex align-items-center justify-content-center py-4">
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <div className="about__img">
                    <img src={aboutimg} alt="" className="w-100" />
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div className="about__content">
                    <h2 className="fw-lighter my-1 mx-1">About Us</h2>
                    <h3 className="fs-2 fw-semibold">Welcome to eLEARNING</h3>
                    <div className="about__counter">
                      <div className=" d-flex gap-5 align-items-center my-4">
                        <div className="single__counter">
                          <span className="counter">
                            <CountUp
                              start={0}
                              end={25}
                              duration={4}
                              suffix="K"
                            />
                          </span>

                          <p className="counter__title">Completed Projects</p>
                        </div>

                        <div className="single__counter">
                          <span className="counter">
                            <CountUp
                              start={0}
                              end={12}
                              duration={4}
                              suffix="M"
                            />
                          </span>

                          <p className="counter__title">Patient Around World</p>
                        </div>
                      </div>

                      <div className=" d-flex gap-5 align-items-center">
                        <div className="single__counter">
                          <span className="counter">
                            <CountUp
                              start={0}
                              end={95}
                              duration={4}
                              suffix="M"
                            />
                          </span>

                          <p className="counter__title">Ideas Raised Funds</p>
                        </div>

                        <div className="single__counter">
                          <span className="counter">
                            <CountUp
                              start={0}
                              end={5}
                              duration={4}
                              suffix="K"
                            />
                          </span>

                          <p className="counter__title">Categories Served</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        <div className="Our-Goals my-4 mx-5 container row d-flex align-items-center">
          <div className=" d-flex align-items-center justify-content-center flex-column my-2">
            <h2 className="my-4 fs-1 fw-bolder">Our Goals</h2>
            <p className="w-75 fw-normal p-goals mx-3">
              At E-learing, our goal is to empower individuals from all
              backgrounds to thrive in the world of design and development. We
              believe that education should be accessible and transformative,
              enabling learners to pursue their passions and make a meaningful
              impact. Through our carefully crafted courses, we aim to
            </p>{" "}
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <div className="d-flex gap-2 align-items-center my-2 justify-content-center">
                  <GiSkills size={30} className="icons-Goals" />
                  <p class="card-title">Provide Practical Skills</p>
                </div>
                <p class="small-desc">
                  We focus on delivering practical skills that are relevant to
                  the current industry demands. Our courses are designed to
                  equip learners with the knowledge and tools needed to excel in
                  their chosen field.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <div className="d-flex gap-2 align-items-center my-2 justify-content-center">
                  <IoBook size={30} className="icons-Goals" />
                  <p class="card-title">Foster Creative Problem-Solving</p>
                </div>
                <p class="small-desc">
                  We encourage creative thinking and problem-solving abilities,
                  allowing our students to tackle real-world challenges with
                  confidence and innovation.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <div className="d-flex gap-2 align-items-center my-2 justify-content-center">
                  <FaBook size={30} className="icons-Goals" />
                  <p class="card-title">Promote Collaboration and Community</p>
                </div>
                <p class="small-desc">
                  We believe in the power of collaboration and peer learning.
                  Our platform fosters a supportive and inclusive community
                  where learners can connect, share insights, and grow together.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <div className="d-flex gap-2 align-items-center my-2 justify-content-center">
                  <FaCalendarMinus size={30} className="icons-Goals" />
                  <p class="card-title">Stay Ahead of the Curve</p>
                </div>
                <p class="small-desc">
                  The digital landscape is constantly evolving, and we strive to
                  stay at the forefront of industry trends. We regularly update
                  our course content to ensure our students receive the latest
                  knowledge and skills.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Instructor container mx-2 my-5 ">
          <div className=" d-flex align-items-center justify-content-center flex-column my-2">
            <h2 className="mt-4   fw-normal">INSTRUCTORS</h2>
            <p className=" fw-bold fs-1 mx-3 mb-4">Expert Instructors</p>{" "}
          </div>
          <div className="container instractor-card-h row mx-5 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap">
              {persone_list.slice(0, 5).map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12 mb-5">
                    <div className="tp-instructor position-relative">
                      <div className="d-flex  ">
                        <Link to={`/insInfo/${item.id}`}>
                          <img
                            src={in1}
                            alt="Not"
                            className="d-flex items-center align-items-baseline justify-content-center "
                          />
                        </Link>
                      </div>
                      <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                        <span>Instructor</span>
                        <h4>
                          <Link
                            to={`/insInfo/${item.id}`}
                            className="text-decoration-none name"
                          >
                            {item.fname}
                          </Link>
                        </h4>
                      </div>
                      <div className="d-flex gap-2">
                        <p>
                          <BiLogoGmail size={25} /> {item.email}
                        </p>
                      </div>
                      <div className="social-inst position-absolute">
                        <div className="d-flex flex-column gap-2">
                          <FaFacebookF size={30} className="social-icons" />
                          <FaLinkedin size={30} className="social-icons" />
                          <FaYoutube size={30} className="social-icons" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
