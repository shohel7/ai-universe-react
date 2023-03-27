import React from "react";

const SearchButton = ({ children }) => {
  //   const { children } = props;
  return (
    <div className="text-center">
      <button class="btn btn-accent">{children}</button>
    </div>
  );
};

export default SearchButton;
