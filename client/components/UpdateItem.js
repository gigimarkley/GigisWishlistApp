import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateItem } from "../store/singleItem";

class UpdateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      link: "",
      notes: "",
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.selectedItem.id,
      name: this.props.selectedItem.name,
      link: this.props.selectedItem.link,
      notes: this.props.selectedItem.notes,
      quantity: this.props.selectedItem.quantity,
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateItem(this.state);
  }

  render() {
    const { name, link, notes, quantity } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <h1 id="pageTitles">Update Item Info</h1>
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
          Submit
        </button>
        <button>
          <Link to="/account">Cancel</Link>
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedItem: state.selectedItem,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    updateItem: (item) => {
      dispatch(updateItem(item, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(UpdateItem);
