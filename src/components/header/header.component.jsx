import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./header.styles.scss";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
// export class Header extends Component {
//   render() {
//     return (
//       <div className="header">
//         <Link to="/">
//           <Logo />
//         </Link>
//         <div className="options">
//           <Link className="option" to="/shop">
//             SHOP
//           </Link>
//           <Link className="option" to="/contact">
//             CONTACT
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Header;
