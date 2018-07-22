import React from "react";
import "../../asset/css/postPage/sideBar.css";

const SideBar = () => {
  return (
    <div className="post-sideBar">
      <ul>
        <li>
          <a href="jsx-a11y/href-no-hash">소외계층</a>
        </li>
        <li>
          <a href="jsx-a11y/href-no-hash">양로원</a>
        </li>
        <li>
          <a href="jsx-a11y/href-no-hash">보육원</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
