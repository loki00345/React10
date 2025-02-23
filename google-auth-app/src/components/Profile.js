import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Будь ласка, увійдіть!</h2>;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 Профіль користувача</h2>
      <img src={user.picture} alt="avatar" style={{ width: "100px", borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout} style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}>
        Вийти
      </button>
    </div>
  );
};

export default Profile;
