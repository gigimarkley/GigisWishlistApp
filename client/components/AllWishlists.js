import React from "react";
import { connect } from "react-redux";
import { fetchAllWishlists } from "../store/allwishlists";
import { fetchUser } from "../store/singleUser";
import { Link } from "react-router-dom";

class AllWishlists extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
    this.props.getWishlists(this.props.auth.id);
  }
  render() {
    const wislists = this.props.allWishlists || [];
    return (
      <div>
        <h1 id="pageTitles">
          Here are all your wishlists, {this.props.user.name}
        </h1>
        {wislists.map((wishlist) => {
          return (
            <div key={wishlist.id}>
              <Link to={`/wishlist/${wishlist.id}`}>
                <button>{wishlist.name}</button>
              </Link>
            </div>
          );
        })}
        <button>Add A Wishlist</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    user: state.user,
    allWishlists: state.allWishlists,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getAccount: (userId) => {
      dispatch(fetchUser(userId));
    },
    getWishlists: (userId) => {
      dispatch(fetchAllWishlists(userId));
    },
  };
};

export default connect(mapState, mapDispatch)(AllWishlists);
