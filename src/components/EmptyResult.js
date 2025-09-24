import React from "react";

function EmptyResult() {
  return (
    <div className="search-result">
      <p className="search-result-title">
        No Search Results. Try to{" "}
        <a href="http://rccgc.netlify.app/contactus" target="_blank">contact</a> the Church's
        Administrator if this issue persists.
      </p>
      <div className="row mt-4">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4" key={index}>
            <div className="empty-result-card">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmptyResult;
