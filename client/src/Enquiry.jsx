import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import EnquiryList from "./EnquiryList";
import "./enquiry.css";

export default function Enquiry() {
  const [enquiryList, setEnquiryList] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const saveEnquiry = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/web/enquiry/enquiry-insert", formData)
      .then(() => {
        toast.success("Enquiry saved successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        getAllEnquiry();
      });
  };

  const getValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getAllEnquiry = () => {
    axios
      .get("http://127.0.0.1:8000/api/web/enquiry/enquiry-read")
      .then((res) => {
        if (res.data.status) {
          setEnquiryList(res.data.data);
        }
      });
  };

  useEffect(() => {
    getAllEnquiry();
  }, []);

  return (
    <div className="page">
      <h1>User Enquiry</h1>

      <div className="container">
        {/* ================= FORM ================= */}
        <div className="form-card">
          <h3>Enquiry Form</h3>

          <form onSubmit={saveEnquiry}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={getValue}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={getValue}
              required
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={getValue}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={getValue}
              rows="4"
              required
            />

            <button type="submit">Save</button>
          </form>
        </div>

        {/* ================= TABLE ================= */}
        <EnquiryList
          data={enquiryList}
          onEdit={(item) => console.log("Edit:", item)}
          onDelete={(id) => console.log("Delete:", id)}
        />
      </div>

      <ToastContainer />
    </div>
  );
}