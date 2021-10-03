import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addWishlist } from "../store/singleWishlist";

class AddWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      userId: this.props.user.id,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addWishlist(this.state);
  }

  render() {
    const { name } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <h1 id="pageTitles">Add Wishlist Info</h1>
        <div id="row1">
          <div>
            <label>NAME:</label>
            <input onChange={handleChange} name="name" value={name} />
          </div>
        </div>

        <button id="pageLinks" type="submit">
          Submit
        </button>

        <Link to={"/wishlist"}>
          <button>Cancel</button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    addWishlist: (wishlist) => {
      dispatch(addWishlist(wishlist, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(AddWishlist);
