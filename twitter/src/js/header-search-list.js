const searchInputField = document.querySelector('.search-if');
const searchButton = document.querySelector('.custom-search-logo');
let searchListArr = [];
let searchList = document.querySelector('.header-search-list');
const lsData = JSON.parse(localStorage.getItem('search-data'));

searchButton.addEventListener('click', function() {
//   debugger;
  if (searchInputField.value === '') {
    window.location.href = "../search-page.html";
  } else {
//   searchList.classList.add('search-list-show');
  console.log('Search button');
  let searchValue = searchInputField.value;
  console.log(searchValue);
  searchListArr.unshift(searchValue);
  console.log(searchListArr);
//   addValueToList();
  setToLocal();
  console.log('Local has been set');
  console.log('LS DATA', lsData);
  searchInputField.value = '';
  window.location.href = "../search-page.html";
}
});

window.onload = function() {
    if (lsData !== null) {
      searchListArr = lsData;
    }
  };

searchInputField.addEventListener('click', function() {
  while (searchList.firstChild) {
    searchList.removeChild(searchList.firstChild);
  }
  if (searchList.classList.contains('header-search-list')) {
    searchList.classList.add('search-list-show');
    for(let i = 0; i < searchListArr.length; i++) {
        const rowLine = document.createElement('li');
            rowLine.className = 'header-search-list__item';
            rowLine.innerHTML = `${searchListArr[i]}`;
            searchList.append(rowLine);
    }
    if(searchListArr.length > 5){
        searchList.lastChild.remove();
        searchListArr.pop();
    }
  }

});

function addValueToList() {
  const rowLine = document.createElement('li');
  rowLine.className = 'header-search-list__item';
  setToVisibleList(rowLine);
  searchList.prepend(rowLine);
  if (searchListArr.length > 5) {
    searchList.lastChild.remove();
    searchListArr.pop();
  }
  return;
}


function setToLocal() {
  localStorage.setItem('search-data', JSON.stringify(searchListArr));
}

function setToVisibleList(line) {
//   debugger;
  line.innerHTML = `${searchListArr[0]}`;
}

function hideSearchList() {
//   debugger;
  if (searchList.classList.contains('search-list-show')) {
    searchList.classList.remove('search-list-show');
  }
}

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    hideSearchList();
  }
});

// window.onload = function() {

// }

window.addEventListener('click', function(evt) {
    // debugger;
    if (evt.target.value === document.innerHTML) {
        hideSearchList();
    }
})

module.exports = {};
