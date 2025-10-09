import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

export default function DonationHistory() {
  const data = [
    {
      date: "12/03/25",
      amount: "£25",
      method: "PayPal",
      id: "3498765434567",
      status: "Approved",
    },
    {
      date: "13/03/25",
      amount: "£40",
      method: "Card",
      id: "9876543211234",
      status: "Pending",
    },
    {
      date: "14/03/25",
      amount: "£15",
      method: "Bank",
      id: "1234987654321",
      status: "Decline",
    },
    {
      date: "15/03/25",
      amount: "£50",
      method: "PayPal",
      id: "4567891234567",
      status: "Approved",
    },
    {
      date: "16/03/25",
      amount: "£100",
      method: "Card",
      id: "6543219876543",
      status: "Approved",
    },

    {
      date: "16/03/25",
      amount: "£100",
      method: "Card",
      id: "6543219876543",
      status: "Approved",
    },
    {
      date: "15/03/25",
      amount: "£50",
      method: "PayPal",
      id: "4567891234567",
      status: "Approved",
    },

    {
      date: "14/03/25",
      amount: "£15",
      method: "Bank",
      id: "1234987654321",
      status: "Decline",
    },
    {
      date: "13/03/25",
      amount: "£40",
      method: "Card",
      id: "9876543211234",
      status: "Pending",
    },
    {
      date: "12/03/25",
      amount: "£25",
      method: "PayPal",
      id: "3498765434567",
      status: "Approved",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedRows = data.slice(startIndex, startIndex + rowsPerPage);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="dashboard">
      <SideBar isOpen={sidebarOpen} />
      <div className="body-content">
        <TopBar onToggleSidebar={toggleSidebar} />
        <div className="bottom-content">
          <div className="prayer-title">
            <span>Online Donations & Giving</span>
          </div>

          <div className="donatehistory">
            <div className="donatehistory-head">
              <div>
                <h6>Donate History</h6>
                <p>
                  <small>
                    Only you can view your donation history — your <br />{" "}
                    information is protected and confidential.
                  </small>
                </p>
              </div>
              <div className="filterange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                >
                  <path
                    d="M1.5 4H4.5"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.5 14H7.5"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 14L19.5 14"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 4L19.5 4"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 4C4.5 3.06812 4.5 2.60218 4.65224 2.23463C4.85523 1.74458 5.24458 1.35523 5.73463 1.15224C6.10218 1 6.56812 1 7.5 1C8.43188 1 8.89782 1 9.26537 1.15224C9.75542 1.35523 10.1448 1.74458 10.3478 2.23463C10.5 2.60218 10.5 3.06812 10.5 4C10.5 4.93188 10.5 5.39782 10.3478 5.76537C10.1448 6.25542 9.75542 6.64477 9.26537 6.84776C8.89782 7 8.43188 7 7.5 7C6.56812 7 6.10218 7 5.73463 6.84776C5.24458 6.64477 4.85523 6.25542 4.65224 5.76537C4.5 5.39782 4.5 4.93188 4.5 4Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.5 14C10.5 13.0681 10.5 12.6022 10.6522 12.2346C10.8552 11.7446 11.2446 11.3552 11.7346 11.1522C12.1022 11 12.5681 11 13.5 11C14.4319 11 14.8978 11 15.2654 11.1522C15.7554 11.3552 16.1448 11.7446 16.3478 12.2346C16.5 12.6022 16.5 13.0681 16.5 14C16.5 14.9319 16.5 15.3978 16.3478 15.7654C16.1448 16.2554 15.7554 16.6448 15.2654 16.8478C14.8978 17 14.4319 17 13.5 17C12.5681 17 12.1022 17 11.7346 16.8478C11.2446 16.6448 10.8552 16.2554 10.6522 15.7654C10.5 15.3978 10.5 14.9319 10.5 14Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                  />
                </svg>
                <span>Filter by Date Range</span>
              </div>
            </div>
            <div>
              <table className="table text-center table-bordered accordion-table table-responsive">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>PAYMENT METHOD</th>
                    <th>PAYMENT ID</th>
                    <th>TRANSACTION RESPONSE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedRows.map((row, index) => (
                    <tr key={index}>
                      <td className="tabledate">{row.date}</td>
                      <td>{row.amount}</td>
                      <td>{row.method}</td>
                      <td>{row.id}</td>
                      <td
                        className={
                          row.status === "Approved"
                            ? "tableapproved"
                            : row.status === "Pending"
                            ? "tablepending"
                            : "tabledecline"
                        }
                      >
                        {row.status}
                      </td>
                      <td>
                        {row.status === "Approved" && <u>Print Receipt</u>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="table-pagination">
                <span>
                  <small>
                    Showing {currentPage} of {totalPages}
                  </small>
                </span>
                <div className="tablepagination">
                  <span
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="page-btn"
                  >
                    Previous
                  </span>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <span
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`page-btn ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      {i + 1}
                    </span>
                  ))}
                  <span
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    className="page-btn"
                  >
                    Next
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
