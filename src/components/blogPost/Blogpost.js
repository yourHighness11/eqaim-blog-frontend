import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import CustomButtom from "../shared/CustomButton";
import "./Blogpost.css";

const Blogpost = () => {
  const pathId = useParams().pathId;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/${pathId}`,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setTitle(response.data.user.title);
        setContent(response.data.user.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathId]);

  return (
    <div>
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
      <Header headerText="BLOG POST" />
      <div className="blog-post-text">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blogpost;
