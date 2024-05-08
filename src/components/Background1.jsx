import React from "react";
// import Spline from '@splinetool/react-spline';
import ParticleBg from "./ParticleBg";

// class ComponentTwo extends React.Component {
//     render() {
//         return <div className="parc"><Spline scene="https://prod.spline.design/fEyZazpFnoIGCkNF/scene.splinecode" /></div>
//     }
// }

class ComponentOne extends React.Component {
  render() {
    return (
      <div className="parc">
        <ParticleBg />
      </div>
    );
  }
}

class Background1 extends React.Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  render() {
    var arr = [
      <ComponentOne />,
      //   <ComponentTwo />
    ];
    return <div>{this.randomize(arr)}</div>;
  }
}

export default Background1;
