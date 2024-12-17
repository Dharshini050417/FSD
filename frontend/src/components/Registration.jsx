import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";
const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    eid: "",
    email: "",
    mobileno: "",
    department: "",
    doj: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const departments = ["HR", "IT", "Marketing"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      eid: "",
      email: "",
      mobileno: "",
      department: "",
      doj: "",
      role: "",
    });
    setErrors({});
  };

  const validateInputs = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.eid) validationErrors.eid = "Employee ID is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    if (!formData.mobileno || !formData.mobileno.match(/^\d{10}$/)) {
      validationErrors.mobileno = "Phone number must be exactly 10 digits.";
    }
    if (!formData.department) validationErrors.department = "Department is required.";
    if (!formData.doj) validationErrors.doj = "Date of Joining is required.";
    if (!formData.role) validationErrors.role = "Role is required.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const res = await axios.post("https://fsd-1-y5jp.onrender.com/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        toast.success("Employee registered successfully.", { position: "top-right" });
        console.log("Registration successful:", res.data);
        handleReset();
      }
    } catch (err) {
      if (err.response) {
        const message = err.response.data.message;
        console.log(message)
        if (message === "exist-email") {
          toast.warning("Email ID already exists.", { position: "top-right" });
        } else if (message === "exist-id") {
          toast.warning("Employee ID already exists.", { position: "top-right" });
        } else {
          toast.error("Error during registration. Please try again later.", { position: "top-right" });
        }
        console.error("Error response:", err.response.data);
      } else {
        console.error("Unexpected error:", err);
        toast.error("An unexpected error occurred.", { position: "top-right" });
      }
    }
  };

  return (
    <div>
      <h1 className="header">Employee Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          type="text"
          value={formData.name}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          name="eid"
          placeholder="Enter Employee ID"
          type="text"
          value={formData.eid}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.eid && <p>{errors.eid}</p>}

        <input
          name="email"
          placeholder="Enter Email"
          type="email"
          value={formData.email}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          name="mobileno"
          placeholder="Enter Phone Number"
          type="text"
          value={formData.mobileno}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.mobileno && <p>{errors.mobileno}</p>}

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          className="input-field"
        >
          <option value="" disabled>
            Select Department
          </option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        {errors.department && <p>{errors.department}</p>}

        <input
          name="doj"
          placeholder="Date of Joining"
          type="date"
          value={formData.doj}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.doj && <p>{errors.doj}</p>}

        <input
          name="role"
          placeholder="Enter Role"
          type="text"
          value={formData.role}
          className="input-field"
          onChange={handleInputChange}
        />
        {errors.role && <p>{errors.role}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Registration;
