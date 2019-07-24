import React from 'react';
import Link from 'gatsby-link';

const Pagination = ({ currentPage, pageCount, nextPage, prevPage }) => (
  <div className="pagination-container">
    {prevPage !== 0 ? (
      <Link className="pagination-link__active" to={`/${prevPage === 1 ? '' : prevPage}`}>
        Prev
      </Link>
    ) : (
      <span className="pagination-link__disabled">Prev</span>
    )}

    <span className="pagination-text">{currentPage} of {pageCount}</span>

    {nextPage <= pageCount ? (
      <Link className="pagination-link__active" to={`/${nextPage}`} style={{ position: 'relative', right: '-1px' }}>
        Next
      </Link>
    ) : (
      <span className="pagination-link__disabled">Next</span>
    )}
  </div>
);

export default Pagination;
