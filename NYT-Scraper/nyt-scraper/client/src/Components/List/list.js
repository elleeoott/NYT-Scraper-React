import React from "react";

export const List = ({ children }) => {
 
    //Renders the list of articles within the container
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};