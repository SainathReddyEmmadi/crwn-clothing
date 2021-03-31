import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";
const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};
// creating a function prop called addItem
// that will go into CollectionItem as the addItem function
// whenever we dispatch or call addItem function
// addItem function will receive item as the property
// it will pass it into the add Item action creator
// which gives us back the object where type is ADD_ITEM
// and payload is item we are passed in
// then we will dispatch the new object into the store

// INITIAL_STATE in reducer
// types actiom
// action
// reducer
// update collection-item
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
