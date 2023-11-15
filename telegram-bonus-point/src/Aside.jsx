import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [users, setUsers] = useState([]);

  const fetchUserData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchUserData("http://127.0.0.1:8000/api/users/");
  }, []);

  return (
    <aside class="right-side">
      <div class="header-container">
        <div class="header">
          <div class="toggle-button">
            <i class="fas fa-bars"></i>
            <i class="fas fa-arrow-left"></i>
          </div>
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div class="body-container">
        <ul class="chat-list">
          {users.map((user) => { 
            <Link to={"/chat1"} class="chat-box" id="Msg">
              <div class="chat-img">
                <img src={user.photoUrl} alt="ava" />
              </div>
              <div class="chat-details">
                <div class="chat-title">
                  <h3>{user.name}</h3>
                  <span>{user.sendtime}</span>
                </div>
                <div class="chat-msg">
                  <p>{user.msg}</p>
                  <span>{user.msgCnt}</span>
                </div>
              </div>
            </Link>;
          })}
        </ul>
      </div>
      <div class="files" id="files">
        <ul class="menu">
          <li class="active">chats</li>
          <li>media</li>
          <li>links</li>
          <li>files</li>
          <li>music</li>
          <li>voice</li>
        </ul>
      </div>
      <div class="pen">
        <i class="fas fa-pen"></i>
      </div>
    </aside>
  );
}