import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
const CheckOut = () => {
  const [validated, setValidated] = useState(false);

  // yup validite

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    sn_id: "",
    courseprice: "",
    Address: "",
    email: "",
    courseName: "",
  });
  console.log(data);
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onlogIn = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const response = await axios.post(
      `https://paymentt.onrender.com/cash/add`,
      data
    );
    console.log(response.data);

    if (response.data.success) {
      navigate("/payment");
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div>
        <div class="container-fluid bg-primary py-5 mb-5 about-header ">
          <div className="">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                  <h1 class="display-3 text-white animated slideInDown">
                    Checkout
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
                        checkout
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formmmm">
          <div class="container">
            <div class="row">
              <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Your cart</span>
                  <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3 ">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Subtotal</h6>
                    </div>
                    <span class="text-muted">{getTotalCartAmount()}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Service</h6>
                    </div>
                    <span class="text-muted">{5}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Total</h6>
                    </div>
                    <span class="text-muted">{getTotalCartAmount() + 5}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 order-md-1">
                <Form noValidate validated={validated} onSubmit={onlogIn}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label> name</Form.Label>
                      <Form.Control
                        onChange={onChangeHandler}
                        value={data.name}
                        name="name"
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>courseName</Form.Label>
                      <Form.Control
                        onChange={onChangeHandler}
                        value={data.courseName}
                        name="courseName"
                        required
                        type="text"
                        placeholder="courseName"
                        defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>email</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          onChange={onChangeHandler}
                          value={data.email}
                          name="email"
                          type="email"
                          placeholder="email"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        required
                        onChange={onChangeHandler}
                        value={data.Address}
                        name="Address"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>courseprice</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={getTotalCartAmount() + 5}
                        required
                        onChange={onChangeHandler}
                        value={data.courseprice}
                        name="courseprice"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid courseprice ={" "}
                        {getTotalCartAmount() + 5}.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>National ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="National ID"
                        required
                        onChange={onChangeHandler}
                        value={data.sn_id}
                        name="sn_id"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid sn_id = 14.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit" className="my-lg-5">
                    Submit form
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
