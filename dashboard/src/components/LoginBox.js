import React from 'react';
import './LoginBox.css'
import { withRouter } from "react-router";
import {Link
} from "react-router-dom";


const LoginInput = ({onChange, value, placeholder, password}) => (
  <div className="wrap-input100 validate-input m-b-10" data-validate="password is required">
    <input onChange={onChange} password={password} value={value} class="input100 placeholder0 s1-txt1" type="text" placeholder={placeholder} />
    <span class="focus-input100"></span>
  </div>
)


class LoginBoxComponent extends React.Component {


 constructor(props){
   super(props);
   this.state = { username: '',password: '' };
 }


 onUsernameChange = ({ target }) => {
    this.setState({ username: target.value })
 };
 onPasswordChange = ({ target }) => {
    this.setState({ password: target.value })
 };

 onSubmit = (e) => {
   const { onUserSubscribe, history} = this.props;
   const { username, password } = this.state;

   history.push('/dashboard')
   // if (this.handleValidation(password, username)) {
   //  onUserSubscribe(password, username);
   // }
   fetch('/v1/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ username, password }),
   })
      console.log(this.state.password);
 }



  render() {
    const {
      username,
      password,

    } = this.state;

    return (

      <div id="LoginBox" class="bg0 wsize1 bor1 p-l-45 p-r-45 p-t-50 p-b-18 p-lr-15-sm">
        <h3 className="l1-txt3 txt-center p-b-43">
        <h3>Fussball Organiser</h3>
        </h3>

        <div class="w-full validate-form" >
          <LoginInput onChange={this.onUsernameChange} value={username} password="username" placeholder={'Username'}/>
          <LoginInput onChange={this.onPasswordChange} value={password} password="Password" placeholder={'Password'}/>

          <button class="flex-c-m size2 s1-txt2 how-btn1 trans-04" onClick={this.onSubmit}>
            Login
          </button>

          <Link to="/createUser">
          <button class="flex-c-m size2 s1-txt2 how-btn1 trans-04">
            Sign up
          </button>
          </Link>


        </div>
      </div>
    );
  }
}



export const LoginBox = withRouter(LoginBoxComponent);
export default LoginBox;
