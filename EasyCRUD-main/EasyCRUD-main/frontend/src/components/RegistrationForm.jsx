import React from "react";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import "./RegistrationForm.css";
import Modal from "./Modal";

const RegistrationForm = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    course,
    setCourse,
    studentClass,
    setStudentClass,
    percentage,
    setPercentage,
    branch,
    setBranch,
    mobileNumber,
    setMobileNumber,
    users,
    showModal,
    setShowModal,
    handleSubmit,
    handleDelete,
    limitedUsers,
  } = useRegistrationForm();

  return (
    <div className="registration-container">
      <h2 style={{color:"#ff8000"}}>
        CLOUDBLITZ <span style={{color:"#ffff"}} className="heading"> Student Registration</span>
      </h2>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 11))}
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.slice(0, 18))}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value.slice(0, 11))}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Highest Education"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value.slice(0, 12))}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value.slice(0, 11))}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Branch Or Stream"
          value={branch}
          onChange={(e) => setBranch(e.target.value.slice(0, 12))}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value.slice(0, 12))}
          className="form-input"
          required
        />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>

      <h3>Registered Users</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Class</th>
            <th>Percentage</th>
            <th>Branch</th>
            <th>Mobile Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {limitedUsers.length > 0 ? (
            limitedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.course}</td>
                <td>{user.studentClass}</td>
                <td>{user.percentage}</td>
                <td>{user.branch}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-users">
                No users registered yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && (
        <Modal
          message="Your information has been saved!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
