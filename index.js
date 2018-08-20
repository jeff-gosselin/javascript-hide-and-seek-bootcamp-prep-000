function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var divs = document.getElementById("grand-node");
  var parentDiv;
  while (divs && divs.children[0]) {
    parentDiv = divs;
    divs = divs.children[0];
  }
  return parentDiv;
}
// 2 variables tracking the the parent and the child, only returning the parent
