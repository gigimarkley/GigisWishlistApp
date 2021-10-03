import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/singleUser";

class Home extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
  }

  render() {
    return (
      <div>
        <h1 id="pageTitles">
          Welcome to your wishlist app, {this.props.user.name}
        </h1>
      </div>
    );
  }
}

const mapState = (state) => {
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

export default connect(mapState, mapDispatch)(Home);
