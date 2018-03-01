import React from "react";

//Renders the form 

export const TextArea = props =>

  <div className="form-group">
    <textarea className="form-control" rows="5" {...props} />
  </div>;