import React, {Component} from "react";
import "./studio.scss";
export default class Studio extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const {id, city, img, name, info, rate} = this.props.studio;
    const {removeStudio} = this.props;

    return (
      <article className="studio">
        <div className="img-container">
          <img src={img} alt="image of the said studio"/>
          <span className="close-button" onClick={()=>removeStudio(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="studio-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h4>{rate}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
