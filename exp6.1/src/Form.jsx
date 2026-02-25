import React, { useState } from "react";
import "./Form.css";

function FirstName({ value, onChange }) {
  return (
    <>
      <label>First Name</label>
      <input type="text" name="firstName" value={value} onChange={onChange} />
    </>
  );
}

function LastName({ value, onChange }) {
  return (
    <>
      <label>Last Name</label>
      <input type="text" name="lastName" value={value} onChange={onChange} />
    </>
  );
}

function Gender({ value, onChange }) {
  return (
    <div className="form-row">
      <label>Gender:</label>
      <div className="inline-options">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={value === "Male"}
            onChange={onChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={value === "Female"}
            onChange={onChange}
          />
          Female
        </label>
      </div>
    </div>
  );
}

function State({ value, onChange }) {
  const statesAndUTs = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar",
    "Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh",
    "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
    "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu","Delhi",
    "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  return (
    <div className="form-row">
      <label>State:</label>
      <select name="state" value={value} onChange={onChange}>
        <option value="">Select State</option>
        {statesAndUTs.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

function Address({ value, onChange }) {
  return (
    <>
      <label>Address</label>
      <textarea
        name="address"
        rows="3"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

function Skills({ value, onChange }) {
  const skillsList = ["Java", "Python", "C++"];

  return (
    <div className="form-row">
      <label>Skills:</label>
      <div className="inline-options">
        {skillsList.map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              value={skill}
              checked={value.includes(skill)}
              onChange={onChange}
            />
            {skill}
          </label>
        ))}
      </div>
    </div>
  );
}

function Dob({ value, onChange }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={value}
        max={today}
        onChange={onChange}
      />
    </>
  );
}

function Age({ dob }) {
  const calculateAge = (dob) => {
    if (!dob) return "";

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} Years ${months} Months ${days} Days`;
  };

  return (
    <>
      <label>Age</label>
      <input type="text" value={calculateAge(dob)} readOnly />
    </>
  );
}

function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    state: "",
    address: "",
    skills: [],
    dob: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const details = `
Please confirm your details:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
State: ${formData.state}
Address: ${formData.address}
Skills: ${formData.skills.join(", ")}
Date of Birth: ${formData.dob}
`;

  const confirmSubmit = window.confirm(details);

  if (confirmSubmit) {
    alert("Form submitted successfully! ✅");
    setFormData(initialState);
  }
};

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <FirstName value={formData.firstName} onChange={handleChange} />
          <LastName value={formData.lastName} onChange={handleChange} />
          <Gender value={formData.gender} onChange={handleChange} />
          <State value={formData.state} onChange={handleChange} />
          <Address value={formData.address} onChange={handleChange} />
          <Skills value={formData.skills} onChange={handleChange} />
          <Dob value={formData.dob} onChange={handleChange} />
          <Age dob={formData.dob} />

          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
