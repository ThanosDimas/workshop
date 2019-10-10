import * as React from "react";

interface ILoginProps {
  onInputChange(e: any): void;
  submitUser(): void;
}

interface ILoginState {}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  render() {
    const { onInputChange, submitUser } = this.props;
    return (
      <>
        <p className="text-center">
          Please login with your username to proceed
        </p>
        <div className="text-center">
          <label className="d-block">User Name</label>
          <input type="text" onChange={onInputChange} />
          <button
            className="btn btn-primary d-block mt-3 mx-auto"
            onClick={submitUser}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}
