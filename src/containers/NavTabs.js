import React from "react";
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li>
        <Link to="/">
          <span role="img" aria-label="home">
            🏠
          </span>{" "}
          Home{" "}
        </Link>
      </li>
      <li>
        <Link to="/socialmedia">
          <span role="img" aria-label="social-media">
            📋
          </span>{" "}
          Social Media{" "}
        </Link>
      </li>
      <li>
        <Link to="/uploads">▶ Videos </Link>
      </li>
      <li>
        <Link to="/shop">
          <span role="img">🛍</span> Shop{" "}
        </Link>
      </li>
      <li>
        <Link to="/info">
          <span role="img" aria-label="info">
            ℹ️
          </span>{" "}
          Infos{" "}
        </Link>
      </li>
      <li>
        <Link to="/arts">
          <span role="img" aria-label="art">
            🎨
          </span>
          Arts{" "}
        </Link>
      </li>
      <li>
        <Link to="/comics">
          <span role="img" aria-label="comics">
            📰
          </span>
          Comics{" "}
        </Link>
      </li>
      <li>
        <Link to="/news">
          <span role="img" aria-label="news">
            🗞
          </span>
          News{" "}
        </Link>
      </li>
    </ul>
  );
}
