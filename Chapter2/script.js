let dom = document.querySelector('#root');
let element = React.createElement(
  //List2-3
  /*'p', {}, 'Hello React!'*/
  
  //List2-4
  'div',{},[
    React.createElement(
      'h2',{},"Hello!"
    ),
    React.createElement(
      'h3',{},"React Sample page."
    ),
    React.createElement(
      'ul',{},[
        React.createElement(
          'li',{},"First item."
        ),
        React.createElement(
          'li',{},"Second items"
        ),
        React.createElement(
          'li',{},"Third items"
        ),
      ]
    ),
  ]);
ReactDOM.render(element, dom);