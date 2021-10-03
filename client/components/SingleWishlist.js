import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/singleUser";
import { fetchSingleWishlist } from "../store/singlewishlist";

class SingleWishlist extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
    this.props.getWishlist(this.props.match.params.wishlistId);
  }

  render() {
    const wishlist = this.props.selectedWishlist;
    const items = wishlist.items || [];

    return (
      <div>
        <h1 id="pageTitles">{wishlist.name}</h1>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.imageUrl}></img>
                <button>{item.name}</button>
              </Link>
            </div>
          );
        })}
        <Link id="pageLinks" to={`/item/add`}>
          <button>Add Item</button>
        </Link>
        <Link id="pageLinks" to={`/wishlist`}>
          <button>Go Back To All Wishlists</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
    selectedWishlist: state.selectedWishlist,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    getAccount: (userId) => {
      dispatch(fetchUser(userId));
    },
    getWishlist: (wishlistId) => {
      dispatch(fetchSingleWishlist(wishlistId));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(SingleWishlist);
