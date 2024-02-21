// import React from 'react'
// import SplineLoader from '@splinetool/loader';


// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/LtV1M9z6Ft-A18EK/scene.splinecode');


import React from 'react'
// import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

// const ThreeDObject = () => {

//     const cube = useRef();

//   function onLoad(spline) {
//     const obj = spline.findObjectByName('Cube');
//     // or
//     // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

//     // save it in a ref for later use
//     cube.current = obj;
//   }

//   function moveObj() {
//     console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

//     // move the object in 3D space
//     cube.current.position.x += 10;
//   }

//   return (
  
// <div>
//       <Spline
//         scene="https://prod.spline.design/LtV1M9z6Ft-A18EK/scene.splinecode"
//         onLoad={onLoad}
//       />
//       {/* <button type="button" onClick={moveObj}>
//         Move Cube
//       </button> */}
//     </div>
  
//   )
// }

// export default ThreeDObject

// import React from 'react'

const ThreeDObject = () => {
  return (
  
    <Spline scene="https://prod.spline.design/LtV1M9z6Ft-A18EK/scene.splinecode" />
  
  )
}

export default ThreeDObject