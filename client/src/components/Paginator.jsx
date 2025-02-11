/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import StyledPaginator from '../styled/components/Paginator';

function getPageNumbers(totalPages) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
}

const Paginator = ({ totalPages, setCurrentPage }) => {
  const pageNumbers = getPageNumbers(totalPages);

  const handlePageChange = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <StyledPaginator>
      {pageNumbers.map((number) => (
        <button 
          key={number}
          onClick={(e) => handlePageChange(number, e)}
        >
          {number}
        </button>
        ))
      }
    </StyledPaginator>
  );
};

export default Paginator;
