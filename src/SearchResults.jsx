import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "./context/Storecontext";
import { Container, Row, Col } from "reactstrap";
import c5 from "./Images/new/contact.png";

import { ToastContainer, toast } from "react-toastify";
import a1 from "./Images/new/contact.png";

import { FaBook, FaStar } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // قم بتغيير URL إلى API الفعلي الذي ترغب في استخدامه
        const response = await axios.post(
          `http://16.170.174.66/recommend?course_title=${query}`
        );
        console.log(response.data);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div style={{ padding: "20px", marginTop: "80px" }}>
      <h1 className="my-3 fw">
        Search Results for <span className="text-info">"{query}"</span>
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row gap-5 d-flex align-items-center justify-content-center">
          {results.map((item) => {
            return (
              <Col lg="3" md="4" className="shadow-lg">
                <div className="single__free__course">
                  <div className="free__course__img mb-3 mt-2">
                    <Link to={`/coursedetails/${item.id}`}>
                      <img src={c5} alt="" className="w-100" />
                    </Link>
                    <p className="mt-1 fw-bold position-absolute end-0 text-info my-2">
                      {item.price} $
                    </p>
                  </div>

                  <div className="free__course__details">
                    <div>
                      <div className="">
                        <h2> course_title :</h2>
                        <p>{item.course_title}</p>
                      </div>
                      <h6> level : {item.level}</h6>
                      <div className="d-flex gap-2">
                        <h5> course_subject :</h5>
                        <p>{item.subject}</p>
                      </div>
                    </div>

                    <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                      <span className=" d-flex align-items-center gap-2">
                        <p className="fw-light">
                          {" "}
                          <FaBook className="icons-courses" size={25} />{" "}
                          {item.num_lectures}
                        </p>
                      </span>

                      <span className=" d-flex align-items-center gap-2">
                        <p className="fw-medium">
                          {" "}
                          <IoMdPerson className="icons-courses" size={25} />
                          {item.num_reviews}
                        </p>
                      </span>
                    </div>
                    <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                      <span className=" d-flex align-items-center gap-2 mb-2 p-2">
                        <Link to="/courses">
                          <button className="btn btn-outline-info">
                            Go To Courses Page
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
