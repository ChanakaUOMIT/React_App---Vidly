import React from "react";
import _ from "lodash";

const Pagination = props => {
  console.log("Pagination - props ", props);
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log("Current page ", currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log("pageCount ", pageCount);
  const pages = _.range(1, pageCount + 1);
  console.log("pages-Lodash ", pages);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
