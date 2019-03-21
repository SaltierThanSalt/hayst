import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";

export default function NavTabs() {
  return (
    <ul
      className={css`
        margin: 1.5rem 0 0 0;
        padding: 0 3rem 0 3rem;
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 3rem;
        font-family: sans-serif;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ddd;
        > li {
          margin-right: 1.5rem;
          > a {
            color: #000;
            text-decoration: none;
            &:hover {
              color: #424bf4;
              transition: color 0.5s;
            }
            &.active {
              color: #424bf4;
            }
          }
        }

        @media (max-width: 965px) {
          .label {
            display: none;
          }
        }
      `}
    >
      <li>
        <NavLink exact to="/" activeClassName="active">
          <span style={{ marginRight: "1rem" }} role="img" aria-label="home">
            🏠
          </span>
          <span className="label">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/socialmedia" activeClassName="active">
          <span
            style={{ marginRight: "1rem" }}
            role="img"
            aria-label="social-media"
          >
            📋
          </span>
          <span className="label">Social Media</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/uploads" activeClassName="active">
          ▶ <span className="label">Videos</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/info" activeClassName="active">
          <span style={{ marginRight: "1rem" }} role="img" aria-label="info">
            ℹ️
          </span>
          <span className="label">Infos</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/arts" activeClassName="active">
          <span style={{ marginRight: "1rem" }} role="img" aria-label="art">
            🎨
          </span>
          <span className="label">Arts</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/comics" activeClassName="active">
          <span style={{ marginRight: "1rem" }} role="img" aria-label="comics">
            📰
          </span>
          <span className="label">Comics</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName="active">
          <span style={{ marginRight: "1rem" }} role="img" aria-label="news">
            🗞
          </span>
          <span className="label">News</span>
        </NavLink>
      </li>
    </ul>
  );
}
