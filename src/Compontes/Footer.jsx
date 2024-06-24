import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Compontes/anamation/variants";
export const Footer = () => {
  return (
    <>
      <div>
        <footer class="footer">
          <div class="container">
            <div class="row-footer">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="footer-col"
              >
                <h4 className="">E-Learing</h4>
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
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="footer-col"
              >
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">shipping</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                  <li>
                    <a href="#">payment options</a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="footer-col"
              >
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">Designing</a>
                  </li>
                  <li>
                    <a href="#">Network Cabling</a>
                  </li>
                  <li>
                    <a href="#">CCTV</a>
                  </li>
                  <li>
                    <a href="#">Hosting Services</a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="footer-col"
              >
                <h4>follow us</h4>
                <div class="social-links">
                  <a class="" href="#">
                    <IoLogoFacebook size={30} />
                  </a>
                  <a class="" href="#">
                    <IoLogoInstagram size={30} />
                  </a>
                  <a class="" href="#">
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
