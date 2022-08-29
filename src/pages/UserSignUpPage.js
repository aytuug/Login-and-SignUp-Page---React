import React from "react";
import { signUp } from "../api/apiCalls";
import Input from "../components/Input";
class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: null,
    errors: {}
  };

  onChange = event => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;

    if(name === 'password' || name === 'passwordRepeat'){
      if(name === 'password' && value !== this.state.passwordRepeat){
        errors.passwordRepeat = 'Password mismatch';
      }else if(name === 'passwordRepeat' && value !== this.state.password){
        errors.passwordRepeat = 'Password mismatch'
      }else{
        errors.passwordRepeat = undefined;
      }
    }

    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignUp = async event => {
    event.preventDefault();
    const { username, displayName, password } = this.state;

    const body = {
      username,
      displayName,
      password,
    };

    this.setState({ pendingApiCall: true });
    try {
      const response = await signUp(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
    this.setState({ pendingApiCall: false });
  };

  render() {
    const { pendingApiCall, errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;
    return (
      <div className="container">
        <form>


          <figure className="text-center">
            <blockquote className="blockquote">
              <br></br>
              <h2>Sign Up</h2>
            </blockquote>
            <figcaption className="blockquote-footer">
              Dünyada her şey için, medeniyet için, hayat için, muvaffakiyet
              için en hakiki mürşit ilimdir , fendir. İlim ve fennin haricinde
              mürşit aramak gaflettir, cehalettir, dalalettir.{" "}
              <cite title="Source Title">M.Kemal Atatürk</cite>
            </figcaption>
          </figure>

          <Input name="username" label="Username" error={username} onChange={this.onChange} ></Input>
          <Input name="displayName" label="Display Name" error={displayName} onChange={this.onChange} ></Input>
          <Input name="password" label="Password" error={password} onChange={this.onChange} type="password"></Input>
          <Input name="passwordRepeat" label="passwordRepeat" error={passwordRepeat} onChange={this.onChange} type="password"></Input>

          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall || passwordRepeat !== undefined}>
              {pendingApiCall && (
                <span className="spinner-grow spinner-grow-sm"></span>
              )}
              Sign Up
            </button>
          </div>


        </form>
      </div>
    );
  }
}

export default UserSignupPage;
