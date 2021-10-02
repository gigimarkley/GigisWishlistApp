import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/singleUser";

class AllWishlists extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
  }
  render() {
    return (
      <div>
        <h3>Here are all your wishlists, {this.props.user.name}</h3>
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

export default connect(mapState, mapDispatch)(AllWishlists);
