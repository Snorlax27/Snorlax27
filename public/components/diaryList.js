"use strict";

var DiaryList = function DiaryList(_ref) {
  var list = _ref.list;
  return React.createElement(
    "div",
    null,
    list.map(function (item, key) {
      return React.createElement(DiaryEntry, { item: item });
    })
  );
};