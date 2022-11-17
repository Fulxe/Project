import "./blog.css";
import { Second } from "../second/Second";
import React, { useState } from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import { DarkMode } from "../Theme/theme";

function Blog() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  const [data, setData] = useState([]);

  const getData = async () => {
    // const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    try {
      // console.log('sent')
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert("dahiad yavul");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App" style={{ backgroundcolor: darkMode && "gray" }}>
      <div className="Head">
        <div className="head2">
          <h1>Blog posts</h1>
          <p>Our latest updates and blogs about managing your team</p>
        </div>
      </div>
      <div className="margin"></div>
      <div className="posts">
        {data.map((post) => (
          <Second
            id={post.id}
            image={post.image}
            text={post.text}
            heading={post.tags}
            name={post.owner.firstName}
            avatar={post.owner.picture}
          />
        ))}
      </div>
      <div className="nxt-page">
        <div className="cntr">
          <button>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Logo() {
  return (
    <div className="navbar-left">
      <p>team</p>
    </div>
  );
}
export default Blog;
