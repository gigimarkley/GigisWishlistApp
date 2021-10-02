import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/singleUser";
// import { parser } from "html-metadata-parser";

class Home extends React.Component {
  componentDidMount() {
    this.props.getAccount(this.props.auth.id);
  }
  //This is for parsing the url when I get to it
  // (async () => {
  //   var result = await parser(
  //     "https://gorjana.com/products/blake-necklace?nosto=dynamic-frontpage-nosto-1-copy-copy-2"
  //   );
  //   console.log(result.og); //this is the url data. it contains the image and other stuff like name and brand and urlc
  //   //console.log(JSON.stringify(result, null, 3));
  // })();
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
