import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
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
