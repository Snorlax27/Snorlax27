"use strict";

var DiaryList = function DiaryList(_ref) {
  var list = _ref.list;
  return React.createElement(
    "div",
    null,
    list.map(function (item) {
      return React.createElement(
        "li",
        null,
        React.createElement(DiaryEntry, { item: item })
      );
    }),
    ">"
  );
};
"use strict";
