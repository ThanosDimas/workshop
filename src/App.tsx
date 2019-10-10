import * as React from "react";
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import { findUser } from "./apiClient/apiClient";
import { Permissions } from "./Permissions/Permissions";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import "bootstrap/dist/css/bootstrap.css";
import { IUser } from "./Interfaces/IUser";

interface IXMfoodProps {}

interface IXMfoodState {
  userToLogin: string | null;
  user: IUser | null;
}

export default class XMfood extends React.Component<
  IXMfoodProps,
  IXMfoodState
> {
  state = {
    userToLogin: null,
    user: null
  };

  onInputChange = (e: any) => {
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

  permissionChecker = (permission: Permissions) => {
    switch (permission) {
      case Permissions.CANT_BUY:
        return (
          <h1 className="text-center text-danger">
            FAT ERROR
            <br />
            WE ARE NOT VEGAN!!! GET OUT OF HERE
          </h1>
        );
      case Permissions.ADMIN:
        return <Admin />;
      case Permissions.CAN_BUY:
        return <BurgerBuilder />;
      default:
        break;
    }
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <h1 className="text-center">Welcome to the workshop</h1>
        {user ? (
          // @ts-ignore
          this.permissionChecker(this.state.user.permission)
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
