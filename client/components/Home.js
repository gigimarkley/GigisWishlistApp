import React from "react";
import { connect } from "react-redux";
import { parser } from "html-metadata-parser";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  (async () => {
    var result = await parser(
      "https://gorjana.com/products/blake-necklace?nosto=dynamic-frontpage-nosto-1-copy-copy-2"
    );
    console.log(result.og); //this is the url data. it contains the image and other stuff like name and brand and urlc
    //console.log(JSON.stringify(result, null, 3));
  })();
  return (
    <div>
      <h3>Welcome to your wishlist, {username}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
