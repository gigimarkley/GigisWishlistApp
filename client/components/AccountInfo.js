import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/singleUser";

class AccountInfo extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
  }

  render() {
    const name = this.props.user.name || "";
    const username = this.props.user.username || "";
    const email = this.props.user.email || "";
    return (
      <div id="single-user">
        <h1>Here is your account info, {name}</h1>
        <div> Username: {username} </div>
        <div> Email: {email}</div>
        <Link to={`/account/update`}>Update Account Info</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAccount: (userId) => {
      dispatch(fetchUser(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(AccountInfo);
