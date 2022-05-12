import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import firebase from './firebase';
import { toast } from 'react-toastify';
import axios from 'axios';

function ForgotPass() {
  const history = useHistory();
  if (localStorage.getItem('DM_Admin_ID') != null) {
    toast.error('Already login...!');
    history.push(`/dashboard`);
  }

  const [loginInfo, setLoginInfo] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);

  const InputEvent = (e) => {
    const newLoginInfo = { ...loginInfo };
    newLoginInfo[e.target.name] = e.target.value;
    setLoginInfo(newLoginInfo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    /* if (validate()) {
        setDisable(true);
        const { email, password } = loginInfo;
        const check = firebase.firestore().collection('admin').where('email','==',email).where('password','==',password);
        check.get().then((querySnapshot) => {
          if (querySnapshot.docs.length > 0) {
            querySnapshot.forEach((doc) => {
              localStorage.setItem('DM_Admin_ID', doc.id);
              localStorage.setItem('DM_Admin_EMAIL', doc.data().email);
              localStorage.setItem('DM_Admin_NAME', doc.data().name);
              localStorage.setItem('DM_Admin_IMAGE', doc.data().image);
                          toast.success("Login Successfully...!");
              history.push(`/dashboard`);
            });
          } else {
                      setDisable(false);
                      toast.error("Your Email Id and Password does not match...!");
          }
        }).catch((error) => {
                  setDisable(false);
          console.log("Error getting documents: ", error);
        });
    }  */
  };

  const validate = () => {
    let input = loginInfo;

    let errors = {};
    let isValid = true;

    if (!input['email']) {
      isValid = false;
      errors['email_err'] = 'Please enter email';
    }
    if (!input['password']) {
      isValid = false;
      errors['password_err'] = 'Please enter password';
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    document.getElementById('page-loader').style.display = 'none';

    var element = document.getElementById('page-container');
    element.classList.add('show');
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
            backgroundImage: 'url(assets/img/login-bg/login-bg-17.jpg)',
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
              <small>Forgot Password </small>
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
                  onChange={InputEvent}
                />
                <div className="text-danger">{errors.email_err}</div>
              </div>
              <div className="form-group m-b-20">
                <NavLink to={'/travel-app-admin'}>Login Page</NavLink>
              </div>
              <div className="login-buttons">
                <button
                  type="submit"
                  className="btn btn-success btn-block btn-lg"
                  disabled={disable}
                >
                  {disable ? 'Processing...' : 'Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
