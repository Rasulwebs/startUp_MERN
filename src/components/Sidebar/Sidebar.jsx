import React from "react";
import "./styleSidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="sidebarWrapp">
        <div className="accordion border-none bg-transparent" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-transparent border-none">
            <h2 className="accordion-header bg-transparent border-none">
              <button
                className="accordion-button bg-transparent border-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body bg-transparent border-none"></div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header bg-transparent">
              <button
                className="accordion-button bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body bg-transparent"></div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header bg-transparent">
              <button
                className="accordion-button bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
