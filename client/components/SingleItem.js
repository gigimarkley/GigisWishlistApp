import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/singleUser";
import { fetchItem } from "../store/singleItem";
import { deleteItem } from "../store/singlewishlist";
import { Link } from "react-router-dom";

class SingleItem extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
    this.props.getItem(this.props.match.params.itemId);
  }

  render() {
    const selectedItem = this.props.selectedItem;

    return (
      <div>
        <a href={selectedItem.link}>
          <h1 id="pageTitles">{selectedItem.name}</h1>
          <img src={selectedItem.imageUrl}></img>
        </a>

        <h3>WISHLIST: {this.props.selectedWishlist.name}</h3>
        <h3>NOTES: {selectedItem.notes}</h3>
        <h3>CURRENT PRICE:</h3>
        <h3>QUANTITY: {selectedItem.quantity}</h3>
        <h3>STATUS: {selectedItem.status}</h3>
        <h3>ADDED TO LIST ON: {selectedItem.createdAt}</h3>
        <Link id="pageLinks" to={`/item/${selectedItem.id}/update`}>
          <button>Update Item Info</button>
        </Link>
        <Link
          id="pageLinks"
          to={`/wishlist/
        ${selectedItem.wishlistId}`}
        >
          <button>Go Back To Wishlist</button>
        </Link>

        <button
          onClick={() => {
            this.props.deleteItem(selectedItem.id);
          }}
        >
          Delete Item
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
    selectedItem: state.selectedItem,
    selectedWishlist: state.selectedWishlist,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAccount: (userId) => {
      dispatch(fetchUser(userId));
    },
    getItem: (itemId) => {
      dispatch(fetchItem(itemId));
    },
    deleteItem: (itemId) => {
      dispatch(deleteItem(itemId));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(SingleItem);
