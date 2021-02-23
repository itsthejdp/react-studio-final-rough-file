import React, {Component} from "react";
import Studio from "../Studio";
import "./studiolist.scss";
import {studioData} from "../../studioData";

export default class StudioList extends Component {
  state = {
    studios: studioData
  };
  removeStudio = id =>{
    const{ studios } = this.state;
    const sortedStudios = studios.filter(studio => studio.id !== id);
    this.setState({
      studios: sortedStudios
    })
  };
  render() {
    // console.log(this.state.studios)
    const {studios} = this.state;
    return (
      <section className="studiolist">
      {
        studios.map(studio =>(<Studio key={studio.id} studio={studio} removeStudio={this.removeStudio}></Studio>))
      }
      </section>
    );
  }
}
