"use strict";

var DiaryListList = function DiaryListList(props) {
  return React.createElement(
    "div",
    null,
    props.item
  );
};

window.DiaryListList = DiaryListList;

// class DiaryListList extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//   render() {
//     return (
//     <div>
//       {props.item}
//     </div>
//     )
//   }
// }

// window.DiaryListList = DiaryListList;