import "./App.css";

import { useState } from "react";

const App = () => {
  const [pages, setPages] = useState([
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
  ]);

  const allSelected = pages.length > 0 && pages.every((page) => page.checked);

  const handleAllCheck = () => {
    const newCheckedState = !allSelected;
    setPages(pages.map((page) => ({ ...page, checked: newCheckedState })));
  };

  const handlePageCheck = (id) => {
    setPages(
      pages.map((page) =>
        page.id === id ? { ...page, checked: !page.checked } : page
      )
    );
  };

  return (
    <div className="main-container">
      <div className="card">
        <div className="row-item" onClick={handleAllCheck}>
          <span className="label-text">All pages</span>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={allSelected}
            onChange={handleAllCheck}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div className="divider"></div>

        <div className="spacer">
          {pages.map((page) => (
            <div
              key={page.id}
              className="row-item"
              onClick={() => handlePageCheck(page.id)}
            >
              <span className="label-text">{page.label}</span>
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={page.checked}
                onChange={() => handlePageCheck(page.id)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ))}
        </div>

        <div
          className="divider"
          style={{ marginBottom: "20px", marginTop: "0" }}
        ></div>

        <button className="btn-done">Done</button>
      </div>
    </div>
  );
};

export default App;
