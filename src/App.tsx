import * as React from "react";
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import { findUser } from "./ApiClient/ApiClient";
import { Permissions } from "./Permissions/Permissions";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import "bootstrap/dist/css/bootstrap.css";

interface IXMfoodProps {}

interface IXMfoodState {
  userToLogin: any;
  user: any;
}

export default class XMfood extends React.Component<
  IXMfoodProps,
  IXMfoodState
> {
  state = {
    userToLogin: null,
    user: null
  };

  onInputChange = e => {
    this.setState({
      userToLogin: e.target.value
    });
  };

  submitUser = () => {
    findUser(this.state.userToLogin).then(result =>
      this.setState({
        user: result[0]
      })
    );
  };

  userUI = () => {
    if (Permissions.CANT_BUY == this.state.user.permission) {
      return (
        <h1 className="text-center text-danger">
          FAT ERROR
          <br />
          WE ARE NOT VEGAN!!! GET OUT OF HERE
        </h1>
      );
    }
    if (Permissions.ADMIN == this.state.user.permission) {
      return <Admin />;
    }
    if (Permissions.CAN_BUY == this.state.user.permission) {
      return <BurgerBuilder />;
    }
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <h1 className="text-center">Welcome to the workshop</h1>
        {user ? (
          this.userUI()
        ) : (
          <Login
            onInputChange={this.onInputChange}
            submitUser={this.submitUser}
          />
        )}
      </>
    );
  }
}
