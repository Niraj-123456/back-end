import React from "react";
import _ from "lodash";

function Pagination({ count, pageSize, currentPage, onPageChange }) {
  const pageRange = Math.floor(count / pageSize);
  const pages = _.range(1, pageRange + 1);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
