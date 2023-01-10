import Header from "../header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import CustomButtom from "../shared/CustomButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Newblog.css";

const Newblog = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleClick = async (e) => {
    const data = JSON.stringify({
      title,
      content,
    });

    await axios({
      method: "post",
      url: "http://localhost:5000/newblog",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Header headerText="NEW POST" />
      <CustomButtom
        buttonIcon={
          <i
            className="fa fa-solid fa-house-user"
            style={{ fontSize: "2rem" }}
          ></i>
        }
        style={{
          borderRadius: "19px",
          padding: "0px",
          position: "fixed",
          top: "9rem",
          left: "3rem",
        }}
        path="/"
      />
      <CustomButtom
        buttonIcon={
          <i className="fa fa-solid fa-check" style={{ fontSize: "2rem" }}></i>
        }
        style={{
          borderRadius: "19px",
          padding: "0px",
          position: "fixed",
          top: "15rem",
          left: "3rem",
        }}
        onClick={handleClick}
      />
      <Card className="card-style">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Content
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter title"
                onChange={(e) => setContent(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Newblog;
