import React from "react";
import _ from "lodash";

function Pagination({ count, pageSize, currentPage, onPageChange }) {
  const pageRange = Math.floor(count / pageSize);
  const pages = _.range(1, pageRange + 1);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {pages.map((page) => (
                <li
                  key={page}
                  className={
                    currentPage === page ? "page-item active" : "page-item"
                  }
                >
                  <a onClick={() => onPageChange(page)} className="page-link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
