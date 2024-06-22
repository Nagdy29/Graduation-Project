import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Footer } from "./Footer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export const Contact = () => {
  const [data, setData] = useState({
    message: "",
    email: "",
    subject: "",
    name: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://lightsoft-001-site5.ltempurl.com/api/Contact/Add
`,
      data
    );
    console.log(response);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>
        <div className=" contact">
          <div class="container-fluid bg-primary py-5 mb-5 contact-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">
                      CONTACT US
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
                          Cotact
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

        <div className="container row my-4 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center col-xl-8 col-md-12 col-sm-12">
            <form className="w-50" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  onChange={onChangeHandler}
                  value={data.name}
                  name="name"
                  type="text"
                  class="form-control"
                  id="exampleInputText"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  onChange={onChangeHandler}
                  value={data.email}
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Subject
                </label>
                <input
                  onChange={onChangeHandler}
                  value={data.subject}
                  name="subject"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <textarea
                  onChange={onChangeHandler}
                  value={data.message}
                  name="message"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-outline-info mb-4 ">
                Submit
              </button>
            </form>
          </div>
          <div className="col-xl-4 col-md-12 col-sm-12 ">
            <div>
              <Card sx={{ minWidth: 275 }} className="border-2 shadow-lg">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="d-flex align-items-center  gap-4">
                      <FaMapLocation size={25} className="text-info" />
                      <div className="">
                        <h2 className="fs-4 text-black">New York Office</h2>
                        <p className="w-75">
                          Maypole Crescent 70-80 Upper St Norwich NR2 1LT
                        </p>
                      </div>
                    </div>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="d-flex align-items-center  gap-4">
                      <FaPhoneAlt size={25} className="text-info" />
                      <div className="">
                        <h2 className="fs-4 text-black">Phone</h2>
                        <p className="">+(426) 742 26 44</p>
                      </div>
                    </div>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="d-flex align-items-center  gap-4">
                      <MdOutlineEmail size={25} className="text-info" />
                      <div className="">
                        <h2 className="fs-4 text-black">Email us directly</h2>
                        <p className="w-75">
                          support@educal.com info@educal.com
                        </p>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
