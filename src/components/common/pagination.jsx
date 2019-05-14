import React from "react";
import _ from "lodash";

const Pagination = props => {
  console.log("Pagination - props ", props);
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log("pageCount ", pageCount);
  const pages = _.range(1, pageCount + 1);
  console.log("pages-Lodash ", pages);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a href="#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
