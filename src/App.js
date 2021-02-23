import React, {Component} from "react";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import StudioList from './components/StudioList'

// function App() {
//   return (

//   );
// }


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <StudioList />
    </React.Fragment>
    );
  }
}

export default App;
