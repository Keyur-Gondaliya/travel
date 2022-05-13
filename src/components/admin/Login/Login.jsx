import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();

  // if (localStorage.getItem("DM_Admin_ID") != null) {
  //   toast.error("Already login...!");
  //   navigate("/dashboard");
  // }
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [checkVisible, setcheckVisible] = useState({
    email: false,
    password: false,
  });
  const [first, setfirst] = useState(1);
  useEffect(() => {
    if (localStorage.getItem("forgotTest") != "false") {
      toast.success("Password reset mail sent successfully");
      localStorage.setItem("forgotTest", false);
      setfirst(first);
    }
  }, [first]);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    // validate();
    if (email.trim().length === 0 || password.trim().length === 0) {
      if (email.trim().length === 0 && password.trim().length !== 0) {
        setcheckVisible({ email: true, password: false });
        setDisable(false);
      } else if (password.trim().length === 0 && email.trim().length !== 0) {
        setcheckVisible({ email: false, password: true });
        setDisable(false);
      } else {
        setcheckVisible({ email: true, password: true });
        setDisable(false);
      }
    } else {
      checkAuth(email);
      localStorage.setItem("DM_Admin_ID", email);
      localStorage.setItem("DM_Admin_EMAIL", password);

      setcheckVisible({ email: false, password: false });
    }
  };
  function checkAuth(tempEmail) {
    signInWithEmailAndPassword(auth, tempEmail.trim(), password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setemail("");
        setpassword("");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorMessage.search("wrong-password") ||
          errorMessage.search("user-not-found")
        ) {
          toast.error("Incorrect email or password ");
          setDisable(false);
        } else {
          toast.error(`Something Went Wrong`);
          setDisable(false);
        }
      });
  }

  useEffect(() => {
    document.getElementById("page-loader").style.display = "none";

    var element = document.getElementById("page-container");
    element.classList.add("show");
  }, []);

  return (
    <>
      <div id="page-loader" className="fade show">
        <span className="spinner"></span>
      </div>

      <div className="login-cover">
        <div
          className="login-cover-image"
          style={{
            backgroundImage: "url(assets/img/login-bg/login-bg-17.jpg)",
          }}
          data-id="login-cover-image"
        ></div>
        <div className="login-cover-bg"></div>
      </div>

      <div id="page-container" className="fade">
        <div
          className="login login-v2"
          data-pageload-addclassName="animated fadeIn"
        >
          <div className="login-header">
            <div className="brand">
              <span className="logo"></span> <b>Travel App</b>
              <small>Login for Travel App admin panel</small>
            </div>
            <div className="icon">
              <i className="fa fa-lock"></i>
            </div>
          </div>

          <div className="login-content">
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="form-group m-b-20">
                <input
                  type="text"
                  className="form-control form-control-lg ml-0"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                {checkVisible.email ? (
                  <div className="text-danger ms-0 text-start">
                    Please enter email
                  </div>
                ) : null}
              </div>
              <div className="form-group m-b-20">
                <input
                  type="password"
                  className="form-control form-control-lg ml-0"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
                {checkVisible.password ? (
                  <div className="text-danger ms-0 text-start">
                    Please enter password
                  </div>
                ) : null}{" "}
              </div>
              {console.log(email)}
              <div className="form-group m-b-20">
                <Link
                  to={{
                    pathname: "/forgot-password",
                  }}
                  state={email}
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="login-buttons">
                <button
                  type="submit"
                  className="btn btn-success btn-block btn-lg"
                  disabled={disable}
                  onClick={submitHandler}
                >
                  {disable ? "Processing..." : "Sign me in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;