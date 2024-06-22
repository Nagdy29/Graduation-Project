import React from "react";
import { Container, Row, Col } from "reactstrap";
import { IoLogoGoogle } from "react-icons/io";
import { RiFinderFill } from "react-icons/ri";
import { GrApple } from "react-icons/gr";
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiVimeo } from "react-icons/si";

export const Company = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="3" sm="4" xs="6">
              <h3 className=" d-flex align-items-center gap-1">
                <SiVimeo size={38} className="d-flex gap-2 icons-company" />
                Vimeo
              </h3>
            </Col>

            <Col lg="2" md="3" sm="4" xs="6">
              <h3 className=" d-flex align-items-center gap-1">
                <FaPinterest size={38} className="d-flex gap-2 icons-company" />
                Pinterest
              </h3>
            </Col>

            <Col lg="2" md="3" sm="4" xs="6">
              <h3 className=" d-flex align-items-center gap-1">
                <FaDribbble size={38} className="d-flex gap-2 icons-company" />
                Dribble
              </h3>
            </Col>

            <Col lg="2" md="3" sm="4" xs="6">
              <h3 className=" d-flex align-items-center gap-1">
                {" "}
                <GrApple size={38} className="d-flex gap-2 icons-company" />
                Apple
              </h3>
            </Col>

            <Col lg="2" md="3" sm="4" xs="6">
              <h3 className=" d-flex align-items-center gap-1">
                {" "}
                <RiFinderFill
                  size={38}
                  className="d-flex gap-2 icons-company"
                />
                Finder
              </h3>
            </Col>

            <Col lg="2" md="3" sm="4" xs="6">
              <h2 className=" d-flex align-items-center gap-1">
                {" "}
                <IoLogoGoogle
                  size={38}
                  className="d-flex gap-2 icons-company"
                />
                Google
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
