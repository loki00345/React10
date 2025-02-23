import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /* Глобальна функція для обробки входу */
    window.handleGoogleLogin = (response) => {
      const userData = jwtDecode(response.credential);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/profile");
    };

    /* Ініціалізація Google Sign-In */
    window.google.accounts.id.initialize({
      client_id: "65730480314-g0vv2n2qinqjt0u5lov1m43befc0kgtr.apps.googleusercontent.com",
      callback: window.handleGoogleLogin,
    });

    /* Рендеримо кнопку */
    window.google.accounts.id.renderButton(
      document.getElementById("google-login-btn"),
      { theme: "outline", size: "large" }
    );
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Увійдіть через Google</h2>
      <div id="google-login-btn"></div>
    </div>
  );
};

export default Login;
