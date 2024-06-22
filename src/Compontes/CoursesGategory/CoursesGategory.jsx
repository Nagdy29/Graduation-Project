import React from "react";
import { Link } from "react-router-dom";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";
import { FaBook } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import c1 from "../../Images/course-catogry.jpg";

const CoursesGategory = () => {
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary py-5 mb-5 courses-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center text-courses">
                    <h1 class="display-3 text-white animated slideInDown">
                      Courses Category
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
                          Courses
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="about-overlay"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-ins  row mx-4  my-5 d-flex align-items-center justify-content-center  ">
            <div className="col-xl-3 col-lg-6 col-md-6 mb-5 ">
              <div className=" box-inst text-center shadow-lg">
                <div className="mb-3">
                  <IoPaperPlaneSharp className="icon-ins mb-4" />

                  <h2 className="text-center">Online Courses</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
              <div className=" box-inst text-center shadow-lg">
                <div className="mb-3">
                  <IoIosPerson className="icon-ins mb-4" />

                  <h2 className="text-center">Expert Trainer</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
              <div className=" box-inst text-center shadow-lg">
                <div className="mb-3">
                  <FaFileAlt className="icon-ins mb-4" size="10px" />

                  <h2 className="text-center">Get Certificate</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
              <div className=" box-inst text-center shadow-lg">
                <div className="mb-3">
                  <FaCalendarCheck className="icon-ins mb-4" />

                  <h2 className="text-center">Life Time Access</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="instructor-text d-flex align-items-center justify-content-center flex-column mb-4">
            <h2 className="mb-3"> Course Category </h2>
            <p>Design</p>
          </div>
          <div className="container">
            <Row>
              <div className="row gap-5 d-flex align-items-center justify-content-center my-5">
                <Col
                  lg="6"
                  md="6"
                  className="shadow-lg d-flex gap-4 category-col align-items-center"
                >
                  <div>
                    <Link to="/coursedetails">
                      <img
                        src={c1}
                        alt=""
                        width={180}
                        className="img-catogry my-2"
                      />
                    </Link>
                  </div>
                  <div>
                    <h2>Design</h2>
                    <Link className="text-decoration-none" to="/coursedetails">
                      <p className="p-catogry">
                        Master Web Design in Adobe XD: Complete UI/UX
                        Masterclass
                      </p>
                    </Link>
                    <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                      <FaBook size={25} /> <h5>35 Classes</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        4.7
                        <div className="text-danger">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <h3>$29.99</h3>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  md="6"
                  className="shadow-lg d-flex gap-4 category-col align-items-center"
                >
                  <div>
                    <Link to="/coursedetails">
                      <img
                        src={c1}
                        alt=""
                        width={180}
                        className="img-catogry my-2"
                      />
                    </Link>
                  </div>
                  <div>
                    <h2>Design</h2>
                    <Link className="text-decoration-none" to="/coursedetails">
                      <p className="p-catogry">
                        Master Web Design in Adobe XD: Complete UI/UX
                        Masterclass
                      </p>
                    </Link>
                    <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                      <FaBook size={25} /> <h5>35 Classes</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        4.7
                        <div className="text-danger">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <h3>$29.99</h3>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  md="6"
                  className="shadow-lg d-flex gap-4 category-col align-items-center"
                >
                  <div>
                    <Link to="/coursedetails">
                      <img
                        src={c1}
                        alt=""
                        width={180}
                        className="img-catogry my-2"
                      />
                    </Link>
                  </div>
                  <div>
                    <h2>Design</h2>
                    <Link className="text-decoration-none" to="/coursedetails">
                      <p className="p-catogry">
                        Master Web Design in Adobe XD: Complete UI/UX
                        Masterclass
                      </p>
                    </Link>
                    <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                      <FaBook size={25} /> <h5>35 Classes</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        4.7
                        <div className="text-danger">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <h3>$29.99</h3>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  md="6"
                  className="shadow-lg d-flex gap-4 category-col align-items-center"
                >
                  <div>
                    <Link to="/coursedetails">
                      <img
                        src={c1}
                        alt=""
                        width={180}
                        className="img-catogry my-2"
                      />
                    </Link>
                  </div>
                  <div>
                    <h2>Design</h2>
                    <Link className="text-decoration-none" to="/coursedetails">
                      <p className="p-catogry">
                        Master Web Design in Adobe XD: Complete UI/UX
                        Masterclass
                      </p>
                    </Link>
                    <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                      <FaBook size={25} /> <h5>35 Classes</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        4.7
                        <div className="text-danger">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <h3>$29.99</h3>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesGategory;
