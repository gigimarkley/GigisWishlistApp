import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/singlewishlist";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
    this.state = {
      name: "",
      link: "",
      notes: "",
      quantity: 1,
      wishlistId: props.selectedWishlist.id,
      categoryId: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
  }

  render() {
    const { name, link, notes, quantity } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <h1 id="pageTitles">Add Item Info</h1>
        <div id="row1">
          <div>
            <label>NAME:</label>
            <input onChange={handleChange} name="name" value={name} />
          </div>

          <div>
            <label>LINK:</label>
            <input onChange={handleChange} name="link" value={link} />
          </div>

          <div>
            <label>NOTES:</label>
            <input onChange={handleChange} name="notes" value={notes} />
          </div>

          <div>
            <label>QUANTITY:</label>
            <input onChange={handleChange} name="quantity" value={quantity} />
          </div>
        </div>

        <button id="pageLinks" type="submit">
          <Link to={`/wishlist/${this.props.selectedWishlist.id}`}>Submit</Link>
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedWishlist: state.selectedWishlist,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(AddItem);
