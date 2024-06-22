import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import sampleImage from "../Images/new/courses.jpg"; // استبدل المسار بمسار الصورة الفعلي

import axios from "axios";
export const AssignmentImg = () => {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("API_URL")
      .then((response) => {
        setImageUrl(response.data.image); //
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Button variant="primary" onClick={handleShow}>
          Assignment Img
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="text-center">
            <img
              src={sampleImage}
              alt="عرض الصورة"
              className="img-fluid"
              onClick={() => {
                window.open(sampleImage, "_blank");
              }}
              style={{ cursor: "pointer" }}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
/**
 * 
 *  <div className="App">
        <Button variant="primary" onClick={handleShow}>
          افتح الصورة
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="text-center">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="عرض الصورة"
                className="img-fluid"
                onClick={() => {
                  window.open(imageUrl, "_blank");
                }}
                style={{ cursor: "pointer" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
 */
