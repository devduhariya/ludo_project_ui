//import { token } from "morgan";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";
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

const Login = () => {
  const form = useRef();
  const [state, setState] = useState({
    login: false,
    store: null,
    phone: "",
    password: ""
  });
  const history=useHistory();
 

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    form.current.validateAll();
    AuthService.login(state.phone, state.password).then(
      (result) => {
        localStorage.setItem('login', JSON.stringify({
          login: true,
          token: result.token,
          role:result.user.role
        }))
        console.log(result.user.role)
        alert("User Successfully Logged In")
         history.push("/Play")
         window.location.reload();
      },
      setState({ ...state, login: true, }),
     
    )
    
  };

  return (
    <div>
      <div className="row no-gutters justify-content-center">
        <div className="col-10 col-md-4">
          <div>
            <p className="custom-title">Login</p>
          </div>
          <div className="form-group">
            <Form onSubmit={handleLogin} ref={form} id="loginForm">
              <Input id="phone" type="number" value={state.phone} name="whatsappNumber" onChange={handleChange} validations={[required]} placeholder="Mobile Number" className="form-control" /><br />
              <Input id="password" type="password" value={state.password} name="password" onChange={handleChange} placeholder="Password" validations={[required]} className="form-control" /><br />
              <Input id="loginButton" type="submit" value="Login" className="btn btn-success" />
            </Form>
          </div>
          <div id="postResponse" className="mssg bg-danger">
            <span id="check" ></span>
          </div>
          <div id="LangTable"><a href="/" id="aa"></a>
          </div>
          <div><span>New here? </span><a href="/Register">Sign up now »</a>
          </div>
          {/* <div><a href="/forget">Forgot password?</a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login
