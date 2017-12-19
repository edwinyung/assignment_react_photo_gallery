import React, {Component} from 'react';

const PageCounter = ({pageNum, handlePage}) => {
  let pages = Array.apply(null, {length: pageNum}).map(Number.call, Number);
  console.log(pages);
  return (
    <select onChange={handlePage}>
      {pages.map(page => {
        return <option>{page}</option>;
      })}
    </select>
  );
};

export default PageCounter;
