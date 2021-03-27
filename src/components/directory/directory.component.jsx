import React, { Component } from "react";
import { sections } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      // <div className="directory-menu">
      //   {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      //   ))}
      // </div>
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
