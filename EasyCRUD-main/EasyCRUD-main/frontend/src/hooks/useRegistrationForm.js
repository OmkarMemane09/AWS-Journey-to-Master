import { useState, useEffect } from "react";
import { fetchUsers, registerUser, deleteUser } from "../api/userService";

export const useRegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [percentage, setPercentage] = useState("");
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadUsers = async () => {
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name &&
      email &&
      course &&
      studentClass &&
      percentage &&
      branch &&
      mobileNumber
    ) {
      try {
        await registerUser({
          name,
          email,
          course,
          studentClass,
          percentage,
          branch,
          mobileNumber,
        });
        setName("");
        setEmail("");
        setCourse("");
        setStudentClass("");
        setPercentage("");
        setBranch("");
        setMobileNumber("");
        loadUsers();
        setShowModal(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const limitedUsers = users.slice(-4);

  return {
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
  };
};
