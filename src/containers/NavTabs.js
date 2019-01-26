import React from "react";
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li>
        <Link to="/">🏠 Home </Link>
      </li>
      <li>
        <Link to="/socialmedia">📋 Social Media </Link>
      </li>
      <li>
        <Link to="/uploads">▶ Videos </Link>
      </li>
      <li>
        <Link to="/shop">🛍 Shop </Link>
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
