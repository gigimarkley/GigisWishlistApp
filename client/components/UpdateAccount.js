import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../store/singleUser";

class UpdateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      username: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      name: this.props.user.name,
      username: this.props.user.username,
      email: this.props.user.email,
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateAccount(this.state);
  }

  render() {
    const { name, username, email } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="userUpdate" onSubmit={handleSubmit}>
        <h1 id="pageTitles">Update Account Info</h1>
        <div id="row1">
          <div>
            <label>Name:</label>
            <input onChange={handleChange} name="name" value={name} />
          </div>

          <div>
            <label>Username:</label>
            <input onChange={handleChange} name="username" value={username} />
          </div>

          <div>
            <label>Email:</label>
            <input onChange={handleChange} name="email" value={email} />
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
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    updateAccount: (user) => {
      dispatch(updateUser(user, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(UpdateAccount);
