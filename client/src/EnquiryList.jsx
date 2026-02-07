import React from "react";
import "./enquiry.css";

export default function EnquiryList({ data, onEdit, onDelete }) {
  return (
    <div className="table-card">
      <h3>Enquiry List</h3>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-row">
                No enquiries found
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}