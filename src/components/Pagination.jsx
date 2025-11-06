/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 16:36:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Pagination.jsx
import React from "react";
import PropTypes from "prop-types";
import "./styles/Pagination.css";

/**
 * Generate compact page list with ellipses
 * e.g. [1, '...', 4, 5, 6, '...', 10]
 */
function getPageList(current, total, siblingCount = 1) {
  const totalNumbers = siblingCount * 2 + 5; // first, last, current ± siblings, and two ellipses
  const pages = [];

  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const left = Math.max(2, current - siblingCount);
  const right = Math.min(total - 1, current + siblingCount);

  pages.push(1);

  if (left > 2) pages.push("left-ellipsis");

  for (let i = left; i <= right; i += 1) {
    pages.push(i);
  }

  if (right < total - 1) pages.push("right-ellipsis");

  pages.push(total);

  return pages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = getPageList(currentPage, totalPages, 1);

  const go = (p) => {
    if (p === "left-ellipsis" || p === "right-ellipsis") return;
    if (p < 1 || p > totalPages) return;
    if (p === currentPage) return;
    onPageChange(p);
  };

  return (
    <nav className="pagination" aria-label="Product pagination">
      <button
        className="pagination__arrow"
        onClick={() => go(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      <ul className="pagination__list">
        {pages.map((p, idx) =>
          p === "left-ellipsis" || p === "right-ellipsis" ? (
            <li key={`ell-${idx}`} className="pagination__ellipsis" aria-hidden>
              …
            </li>
          ) : (
            <li key={p}>
              <button
                className={`pagination__button ${p === currentPage ? "active" : ""}`}
                onClick={() => go(p)}
                aria-current={p === currentPage ? "page" : undefined}
              >
                {p}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        className="pagination__arrow"
        onClick={() => go(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
