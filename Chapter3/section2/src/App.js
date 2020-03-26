import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';

/* Chapter3-3.8 */
let data = {title: 'Title', message: 'this is sample message'};
const SampleContext = React.createContext(data);

class App extends Component{
  render(){
    return(
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component{
  static contextType = SampleContext;

  render(){
    return(
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component{
  static contextType =SampleContext;

  render(){
    return(
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default App;

/* Chapter3-3.7 */
// class App extends Component{
//   input = '';

//   msgStyle ={
//     fontSize: "20pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }

//   constructor (props){
//     super(props);
//     this.state ={
//       message:'type your name:'
//     };
//     this.doCheck = this.doCheck.bind(this);
//   }
//   doCheck(event){
//     alert(event.target.value + "は長すぎます(最大10文字)");
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <h2>{this.state.message}</h2>
//         <Message maxlength ="10" onCheck ={this.doCheck} />
//       </div>
//     );
//   }
// }

// class Message extends Component{
//   inputStyle ={
//     fontSize: "12pt",
//     padding: "5px"
//   }
//   constructor(props){
//     super(props);
//     this.doChange = this.doChange.bind(this);
//   }

//   doChange(e){
//     if(e.target.value.length > this.props.maxlength){
//       this.props.onCheck(e);
//       e.target.value = e.target.value.substr(0, this.props.maxlength);
//     }
//   }

//   render(){
//     return(
//       <input type ="text" style ={this.inputStyle} onChange ={this.doChange} />
//     );
//   }
// }

// export default App;

/* Chapter3-3.6 */
// class App　extends Component{
//   input = '';

//   msgStyle = {
//     fontSize: "24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }
//   inputStyle ={
//     fontSize: "12pt",
//     padding: "5px"
//   }

//   constructor(props) {
//     super(props);
//     this.state={
//       message: 'type your name: '
//     };
//     this.doChange = this.doChange.bind(this);
//     this.doSubmit = this.doSubmit.bind(this);
//   }
//   doChange(event){
//     this.input = event.target.value;
//   }
//   doSubmit(event){
//     this.setState({
//       message: 'Hello, ' + this.input + '!!'
//     });
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <h2>{this.state.message}</h2>
//         <form onSubmit = {this.doSubmit}>
//           <label>
//             <span style ={this.inputStyle}></span>message:
//             <input type = "text" style ={this.inputStyle} onChange ={this.doChange} required pattern = "[A-Za-z _,.]+" />
//           </label>
//           <input type ="submit" style ={this.inputStyle} value ="Click" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

/* Chapter3-3.5 */
// class App extends Component{
//   msgStyle ={
//     fontSize: "24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }

//   constructor(props){
//     super(props);
//     this.state ={
//       message: 'type your name:'
//     };
//     this.doChange = this.doChange.bind(this);
//     this.soSubmit = this.doSubmit.bind(this);
//   }

//   doChange(event) {
//     this.input = event.target.value;
//   }

//   doSubmit(event) {
//     this.setState({
//       message: 'Hello, ' + this.input + '!!'
//     });
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <Message title="Children!">;.
//           これはコンポーネント内のコンテンツです。
//           マルチでテキストを分割し、リストにして表示します。
//           改行の必要はありません。
//         </Message>
//       </div>
//     );
//   }
// }

// class Message extends Component{
//   li ={ 
//     fontSize: "16pt",
//     color: "#06",
//     margin: "0px",
//     padding: "0px",
//   }

//   render() {
//     let content = this.props.children;
//     let arr　= content.split('。');
//     let arr2 = [];
//     for(let i = 0; i < arr.length;i++){
//       if(arr[i].trim() != ''){
//         arr2.push(arr[i]);
//       }
//     } 
//     let list = arr2.map((value,key) => (
//       <li style ={this.li} key ={key}>{value}.</li>
//     ));
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <ol>{list}</ol>
//       </div>
//     );
//   }
// }

// export default App;

/* Chapter3-3.4 */
// class App extends Component{
//   data =[
//     "This is a sample of list!",
//     "これはリストのサンプルです",
//     "配列をリストに変換します"
//   ];

//   msgStyle ={
//     fontSize:"24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }
//   constructor(props){
//     super(props);
//     this.state ={
//       list: this.data
//     };
//   }

//   render(){
//     return(
//       <div>
//         <h1>Reacr</h1>
//         <h2 style ={this.msgStyle}>show list</h2>
//         <List title ="サンプルリスト"　data ={this.data} />
//       </div>
//     );
//   }
// }
// class List extends Component{
//   number = 1;

//   title ={
//     fontSize: "20pt",
//     fontWeight: "bold",
//     color: "blue",
//   };

//   render(){
//     let data = this.props.data;
//     return(
//       <div>
//         <p style ={this.title}>{this.props.title}</p>
//         <ul>
//           {data.map((item) => 
//             <Item number={this.number++} value={item}
//             key ={this.number} />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// class Item extends Component{
//   li ={
//     listStyleType: "square",
//     fontSize: "16pt",
//     color: "#06",
//     margin: "0px",
//     padding: "0px"
//   }
//   num ={
//     fontWeight: "bold",
//     color: "red"
//   }

//   render(){
//     return(
//       <li style ={this.li}>
//         <span style ={this.num}>[{this.props.number}]</span>
//         {this.props.value}
//       </li>
//     );
//   }
// }
// export default App;

/* Chapter3-3.3 */
// class App extends Component{
//   data = [];

//   msgStyle ={
//     fontSize: "24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }
//   area ={
//     width: "500px",
//     height: "500px",
//     border: "1px solid blue"
//   }

//   constructor(props){
//     super(props);
//     this.state ={
//       list: this.data
//     };
//     this.doAction = this.doAction.bind(this);
//   }

//   doAction(e){
//     let x = e.pageX;
//     let y = e.pageY;
//     this.data.push({ x:x, y:y });
//     this.setState({
//       list: this.data
//     });
//   }

//   draw(d){
//     let s ={
//       position: "absolute",
//       left: (d.x - 25) + "px",
//       top: (d.y -25) + "px",
//       width: "50px",
//       height: "50px",
//       backgroundColor: "#66f3",
//     };
//     return <div className ="square" style ={s}></div>
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <h2 style={this.msgStyle}>show rect.</h2>
//         <div style ={this.area} onClick = {this.doAction}>
//           {this.data.map((value) => this.draw(value))}
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

/* Chapter3-3.2 */
// class App extends Component{
//   msgStyle1 ={
//     fontSize: "24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//     borderBottom: "2px solid #900"
//   }
//   msgStyle2 ={
//     fontSize: "2pt",
//     color: "white",
//     backgroundColor: "#900",
//     margin: "20px",
//     padding: "5px",
//     borderBottom: "2px solid #900"
//   }
//   btnStyle ={
//     fontSize: "16pt",
//     padding: "10px"
//   }

//   constructor(props){
//     super(props);
//     this.state ={
//       counter: 0,
//       msg:'count start!',
//       flg: true,
//     };
//     this.doAction = this.doAction.bind(this);
//   }

//   doAction(){
//     this.setState((state) => ({
//       counter: state.counter + 1,
//       msg: state.counter,
//       flg: !state.flg
//     }));
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         {this.state.flg ?
//         <p style ={this.msgStyle1}>count: {this.state.msg}</p>
//         :
//         <p style ={this.msgStyle2}>{this.state.msg}です</p>
//         }
//         <button style ={this.btnStyle} onClick ={this.doAction}>Click</button>
//       </div>
//     );
//   }
// }

// export default App;

/* Chapter3-Section3 */
// class App extends Component{
//   msgStyle = {
//     fontSize: "24pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//     borderBottom: "2px solid #900"
//   }

//   btn = {
//     fontSize: "20px",
//     padding: "0px 10px"
//   }

//   constructor(props){
//     super(props);
//     this.state = {
//       msg:'Hello',
//     };
//     let timer = setInterval(() => {
//       this.setState((state) => ({
//         msg: state.msg + "!"
//       }));
//     },10000);
//   }

//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <p style = {this.msgStyle}>{this.state.msg}</p>
//         <p style = {this.msgStyle}>{this.props.msg}</p>
//       </div>
//     );
//   }
// }

// export default App;

// // Chapter3-2.3
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1>React</h1>
//         <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />
//         <Rect x="150" y="100" w="150" h="150" c="#f6f9"  r="75" />
//         <Rect x="100" y="150" w="150" h="150" c="#6669"  r="25" />
//       </div>
//     );
//   }
// }

// export default App;

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