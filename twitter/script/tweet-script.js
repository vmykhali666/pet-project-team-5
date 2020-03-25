const reply = document.querySelectorAll('.actions__reply');
const rt = document.querySelectorAll('.actions__rt');
const fav = document.querySelectorAll('.actions__fav');
const more = document.querySelectorAll('.actions__more');


const isActive = {
    reply: false,
    rt: false,
    fav: false,
    more: false
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

function actionChange (action, et) {

    let target;
    if(et.className == `mr-2 actions__${action}`) {
        target = et;
    }
    else if (et.parentNode.className == `mr-2 actions__${action}`) {
        target = et.parentNode;
    }

    let filterChange;
    switch (action) {
        case 'reply':
            filterChange = `filter: hue-rotate(30deg) saturate(20) contrast(100%);`
            break;
        case 'rt': 
            filterChange = `filter: hue-rotate(230deg) saturate(20) contrast(100%);`
            break;
        case 'fav':
            filterChange = `filter: hue-rotate(200deg) saturate(20) contrast(110%);`
            break;
        case 'more': 
            filterChange = `filter: hue-rotate(0deg) saturate(20) contrast(100%);`
            break;
    }
    if (isActive[action] == false) {
        isActive[action] = true;
        target.style.cssText = filterChange;
        if (target.children[1] !== undefined) {
            target.children[1].textContent = actionIncrement(target.children[1]);
        }
    }
    else {
        isActive[action] = false;
        target.style.cssText = ``;
        if (target.children[1] !== undefined) {
            target.children[1].textContent = actionDecrement(target.children[1]);
        }
    }

}

function replyChange (event) {

    actionChange('reply', event.target);
}
for(let i = 0; i < reply.length; i++) {
    reply[i].addEventListener('click', replyChange)
}

function rtChange (event) {
    
    actionChange('rt', event.target);
}
for(let i = 0; i < rt.length; i++) {
    rt[i].addEventListener('click', rtChange)
}

function favChange (event) {
    
    actionChange('fav', event.target);
}
for(let i = 0; i < fav.length; i++) {
    fav[i].addEventListener('click', favChange)
}

function moreChange (event) {
    
    actionChange('more', event.target);
}
for(let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', moreChange)
}



