import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../assets/css/sidebar.css";
import "./../assets/js/sidebar.js";

import { faCaretDown, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(true);
  const [data, setData] = useState(props.api[0]?.submenu[0]?.content || '');

  useEffect(() => {
    document.getElementById("content-item").innerHTML = data;
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    window.addEventListener("load", handleResize);
    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      // window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleMenuItemClick = (content) => {
    setData(content);
    if (window.innerWidth < 768) {
      setSidebar(false);
    }
  };

  return (
    <aside>
      <div className="d-flex">
        {sidebar && (
          <div className="sidebar" id="sidebar">
            <div className="sidebar-item">
              <div className="d-flex w-100 justify-content-between align-items-center h4">
                <h3>Mavzular</h3>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={toggleSidebar}
                />
              </div>
            </div>

            {props.api.map((item, index) => (
              <div className="sidebar-item bg-white text-white" id="parentElement" key={index}
              onClick={(e) => {
                if(e.target.id === "parentElement"){
                  e.target.classList.toggle("active");
                }
                else if(e.target.id === "childElement"){
                  e.target.parentElement.classList.toggle("active");
                }
              }}
              >
                <div className="d-flex w-100 justify-content-between text-success" id="childElement">
                  {item.name}
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <ul className="sidebar-submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="sidebar-submenu-item text-muted"
                      onClick={() => handleMenuItemClick(subItem.content)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div>
          {!sidebar && (
            <>
              <div className="burger-box">
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={toggleSidebar}
                />
              </div>
              <hr />
            </>
          )}
          <div className="content">
            <div className="content-item" id="content-item"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
