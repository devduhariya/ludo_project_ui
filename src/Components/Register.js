import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import { isMobilePhone } from "validator";
import AuthService from "../services/auth.service";
import './Style.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};


const validPhone = (value) => {
  if (!isMobilePhone(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Please enter correct mobile number.
      </div>
    );
  }
};



const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeMobile = (e) => {
    const mobile = e.target.value;
    setMobile(mobile);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.register(name, mobile, email, password).then(
      (result) => {
        window.alert("User Registered Successfully");
        localStorage.setItem('role', JSON.stringify({
          role: result.user
        }))
        props.history.push('/login');
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );

  };

  return (
    <div className="row no-gutters justify-content-center">
      <div className="col-10 col-md-4">
        <div>
          <p className="custom-title">Register</p>
        </div>
        <div className="form-group">
          <Form onSubmit={handleRegister} ref={form} id="registerForm">
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username"></label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="username"
                    value={name}
                    onChange={onChangeName}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"></label>
                  <Input
                    type="text"
                    placeholder="Mobile"
                    className="form-control"
                    name="username"
                    value={mobile}
                    onChange={onChangeMobile}
                    validations={[required, validPhone]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"></label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"></label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                  {message}
                </div>
              </div>
            )}

          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;