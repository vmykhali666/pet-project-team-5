/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
const reply = document.querySelectorAll(".actions__reply");
const rt = document.querySelectorAll(".actions__rt");
const fav = document.querySelectorAll(".actions__fav");
const more = document.querySelectorAll(".actions__more");
const tweets = document.querySelectorAll(".tweet-footer__actions")

let tweetActions = [];

function IsActive() {
  this.reply = false,
  this.rt = false,
  this.fav = false,
  this.more = false
};

while (tweets) {
  let isActive = new IsActive()
  tweetActions.push(isActive)
}

function actionIncrement(action) {
  if (action == undefined) {
    return;
  }
  let number = +action.textContent;
  return String(++number);
}

function actionDecrement(action) {
  if (action == undefined) {
    return;
  }
  let number = +action.textContent;
  return String(--number);
}

function actionChange(action, et, isActive) {
  let target;
  if (et.className == `mr-2 actions__${action}`) {
    target = et;
  } else if (et.parentNode.className == `mr-2 actions__${action}`) {
    target = et.parentNode;
  }
  let filterChange;
  switch (action) {
    case "reply":
      filterChange = `filter: hue-rotate(30deg) saturate(20) contrast(100%);`;
      break;
    case "rt":
      filterChange = `filter: hue-rotate(230deg) saturate(20) contrast(100%);`;
      break;
    case "fav":
      filterChange = `filter: hue-rotate(200deg) saturate(20) contrast(110%);`;
      break;
    case "more":
      filterChange = `filter: hue-rotate(0deg) saturate(20) contrast(100%);`;
      break;
  }
  if (isActive[action] == false) {
    isActive[action] = true;
    target.style.cssText = filterChange;
    if (target.children[1] !== undefined) {
      target.children[1].textContent = actionIncrement(target.children[1]);
    }
  } else {
    isActive[action] = false;
    target.style.cssText = ``;
    if (target.children[1] !== undefined) {
      target.children[1].textContent = actionDecrement(target.children[1]);
    }
  }
}

function chooseTweet (action, event) {
  let parent;
  let tFooter;
  if(event.target.parentNode.className == `mr-2 actions__${action}`) {
    parent = event.target.parentNode.parentNode
  }
  else {
    parent = event.target.parentNode
  }
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i] == parent) {
      tFooter = tweetActions[i];
    }
  }
  return tFooter
}

function replyChange(event) {
  let tFooter = chooseTweet("reply", event)
  actionChange("reply", event.target, tFooter);
}
for (let i = 0; i < reply.length; i++) {
  reply[i].addEventListener("click", replyChange);
}

function rtChange(event) {
  let tFooter = chooseTweet("rt", event)
  actionChange("rt", event.target, tFooter);
}
for (let i = 0; i < rt.length; i++) {
  rt[i].addEventListener("click", rtChange);
}

function favChange(event) {
  let tFooter = chooseTweet("fav",event)
  actionChange("fav", event.target, tFooter);
}
for (let i = 0; i < fav.length; i++) {
  fav[i].addEventListener("click", favChange);
}

function moreChange(event) {
  let tFooter = chooseTweet("more", event)
  actionChange("more", event.target, tFooter);
}
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", moreChange);
}

module.exports = {};
