import React from "react";
import man from "../assets/image/man.svg";

function SearchResult() {
  const results = [
    {
      id: 1,
      name: "John Smith",
      profession: "Civil Engineer",
      image: man,
    },
    {
      id: 2,
      name: "Mary Johnson",
      profession: "Doctor",
      image: man,
    },
    {
      id: 3,
      name: "David Brown",
      profession: "Software Developer",
      image: man,
    },
    {
      id: 4,
      name: "Sophia Williams",
      profession: "Teacher",
      image: man,
    },
    {
      id: 5,
      name: "James Anderson",
      profession: "Graphic Designer",
      image: man,
    },
    {
      id: 6,
      name: "Emily Davis",
      profession: "Lawyer",
      image: man,
    },
  ];

  return (
    <div className="search-result">
      <p className="search-result-title">Search Results</p>
      <div className="row">
        {results.map((person) => (
          <div className="col-md-4" key={person.id}>
            <div className="search-result-card">
              <div className="search-result-card-wrap">
                <img src={person.image} alt={person.name} />
                <div className="result-name">
                  <span>{person.name}</span> <br />
                  <span>Profession: {person.profession}</span>
                </div>
              </div>
              <a href="/searchprofile">
                View Profile{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M12 2L1 13"
                    stroke="#0045E8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 1H12C12.4714 1 12.7071 1 12.8536 1.14645C13 1.29289 13 1.5286 13 2V8"
                    stroke="#0045E8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
