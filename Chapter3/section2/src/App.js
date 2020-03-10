import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';

// Chapter3-2.3
class App extends Component{
  render(){
    return(
      <div>
        <h1>React</h1>
        <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />
        <Rect x="150" y="100" w="150" h="150" c="#f6f9"  r="75" />
        <Rect x="100" y="150" w="150" h="150" c="#6669"  r="25" />
      </div>
    );
  }
}

export default App;

// class Rect extends Component{
//   x=0;
//   y=0;
//   width=0;
//   height=0;
//   color="white";
//   style={};

//   constructor(props){
//     super(props);
//     this.x=props.x;
//     this.y=props.y;
//     this.width=props.w;
//     this.height=props.h;
//     this.color=props.c;
//     this.style={
//       backgroundColor:this.color,
//       position:"absolute",
//       left: this.x + "px",
//       top: this.y + "px",
//       width: this.width + "px",
//       height: this.height + "px"
//     }
//   }
//   render(){
//     return(
//       <div  style = {this.style}>
//       </div>
//     );
//   }
// }
// export default App;

// Chapter3-section2-2
// class App extends Component{
//   constructor(props){
//     super();
//     this.title = props.title;
//     this.message = props.message;
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1>{this.title}</h1>
//         <p>{this.message}</p>
//       </div>
//     )
//   }
// }

// export default App;

// Chapter3-section2-1
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>React</h1>
//         <p>This is sample Component</p>
//         <p>これはサンプルのコンポーネントです</p>
//       </div>
//     );
//   }
// }

// export default App;