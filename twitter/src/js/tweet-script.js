const reply = document.querySelectorAll('.actions__reply');
const replySpan = document.querySelectorAll('.reply-number');
const rt = document.querySelectorAll('.actions__rt');
const rtSpan = document.querySelectorAll('.rt-number');
const fav = document.querySelectorAll('.actions__fav');
const favSpan = document.querySelectorAll('.fav-number');
const more = document.querySelectorAll('.actions__more');


let replyIsActive = false;
let rtIsActive = false;
let favIsActive = false;
let moreIsActive = false;

function actionIncrement(action) {
    let number = +action.textContent;
    return String(++number);
}

function actionDecrement(action) {
    let number = +action.textContent;
    return String(--number);
}

for(let i = 0; i < reply.length; i++) {
    reply[i].addEventListener('click', replyColorChange)

    function replyColorChange () {
        if (replyIsActive == false) {
            reply[i].style.cssText = `cursor: pointer;
            filter: hue-rotate(30deg) saturate(20) contrast(110%);`;
            replySpan[i].textContent = actionIncrement(replySpan[i]);
            replyIsActive = true;
        }
        else {
            reply[i].style.cssText = ``;
            replySpan[i].textContent = actionDecrement(replySpan[i]);
            replyIsActive = false;
        }
    }
}

for(let i = 0; i <  rt.length; i++) {
     rt[i].addEventListener('click',  rtColorChange)

    function  rtColorChange () {
        if ( rtIsActive == false) {
             rt[i].style.cssText = `cursor: pointer;
            filter: hue-rotate(230deg) saturate(15);`;
             rtSpan[i].textContent = actionIncrement(rtSpan[i]);
             rtIsActive = true;
        }
        else {
             rt[i].style.cssText = ``;
             rtSpan[i].textContent = actionDecrement(rtSpan[i]);
             rtIsActive = false;
        }
    }
}

for(let i = 0; i < fav.length; i++) {
    fav[i].addEventListener('click', favColorChange)

    function favColorChange () {
        if (favIsActive == false) {
            fav[i].style.cssText = `cursor: pointer;
            filter: hue-rotate(200deg) saturate(20) contrast(110%);`;
            favSpan[i].textContent = actionIncrement(favSpan[i]);
            favIsActive = true;
        }
        else {
            fav[i].style.cssText = ``;
            favSpan[i].textContent = actionDecrement(favSpan[i]);
            favIsActive = false;
        }
    }
}

for(let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', moreColorChange)

    function moreColorChange () {
        if (moreIsActive == false) {
            more[i].style.cssText = `cursor: pointer;
            filter: hue-rotate(0deg) saturate(15);`;
            moreIsActive = true;
        }
        else {
            more[i].style.cssText = ``;
            moreIsActive = false;
        }
    }
}
