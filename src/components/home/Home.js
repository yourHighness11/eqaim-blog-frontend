import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import CustomButtom from "../shared/CustomButton";
import "./Home.css";

function WithHeaderAndQuoteExample() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000`,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setBlogData(response.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="project" id="project">
      <CustomButtom
        buttonIcon={
          <i className="fa fa-solid fa-plus" style={{ fontSize: "2rem" }}></i>
        }
        style={{
          borderRadius: "19px",
          padding: "0px",
          position: "fixed",
          bottom: "4rem",
          right: "3rem",
        }}
        path="/newblog"
      />
      <Header headerText="HOME" />
      <div className="box">
        {blogData.map((data) => {
          return (
            <div className="column project-1" key={data._id}>
              <Link to={`/${data._id}`} style={{ textDecoration: "none" }}>
                <h2 className="project-text">{data.title}</h2>
                <p className="project-para">{data.content.slice(0,23)+"..."}</p>
              </Link>
            </div>
          );
        }).reverse()}
      </div>
    </div>
  );
}

export default WithHeaderAndQuoteExample;
