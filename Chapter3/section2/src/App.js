import React,{Component} from 'react';
import './App.css';

// Chapter3-section2-2
class App extends Component{
  constructor(props){
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render(){
    return(
      <div className="App">
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    )
  }
}

export default App;

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