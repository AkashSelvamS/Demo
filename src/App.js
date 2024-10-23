import React from "react";
import "./App.css"; // Styles specific to App component

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item">🏠 Dashboard</div>
        <div className="sidebar-item">🚚 Supplier</div>
        <div className="sidebar-item">📦 Stocks</div>
        <div className="sidebar-item">📊 Distributed</div>
        <div className="sidebar-item">🔔 Notification</div>
        <div className="profile-section">
          <img src="profile-pic.png" alt="Profile" className="profile-pic" />
          Profile
        </div>
      </div>

      {/* Main content */}
      <div className="dashboard">
        <div className="header">
          <h1>Paavai Store Inventory</h1>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card">
            <h3>Product/category</h3>
            <div className="card-buttons">
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
            </div>
          </div>
          <div className="card">
            <h3>Suppliers</h3>
            <div className="card-buttons">
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
              <button className="category-btn">Sports</button>
            </div>
          </div>
          <div className="card">
            <h3>Low Stocks ⚠️</h3>
            <ul className="low-stock-list">
              <li>Product-1</li>
              <li>Product-2</li>
              <li>Product-3</li>
              <li>Product-4</li>
            </ul>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <div className="activity-header">
            <h3>Recent Activity</h3>
            <div className="filter-buttons">
              <button className="filter-btn">Purchased</button>
              <button className="filter-btn">Distributed</button>
            </div>
          </div>

          <table className="activity-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Date</th>
                <th>PO no</th>
                <th>Bill no</th>
                <th>Party Name</th>
                <th>Institution</th>
                <th>Department</th>
                <th>Particular</th>
                <th>Qty</th>
                <th>UOM</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
