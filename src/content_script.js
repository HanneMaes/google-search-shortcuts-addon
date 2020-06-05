console.log('-----------------------')
console.log('--- GOOGLE DETECTED ---')
console.log('-----------------------')

var searchResults = []

// get the search result HTML code
var results = document.getElementsByClassName("g")
Object.keys(results).forEach(function (item) {  

  searchResults.push({
    html: results[item],
    href: '',
  })
})

// get the search result HREF
var i = 0
var results = document.getElementsByClassName("r")
Object.keys(results).forEach(function (item) {  

  searchResults[i].href = results[item].firstChild.href,
  i++
})

// now we have everything we need  
console.log("searchResults:", searchResults);

// display the shortcut graphics
for (var i in searchResults) {
  if (i<9) { // only display the first 9 items

    searchResults[i].html.innerHTML = `
      <div style="position: relative; width: 0; height: 0; overfow: visible;">
        <div style="
          position: absolute;
          right: 20px;
          top: 0px;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background-color: black;

          color: white;
          font-weight: bold;
          
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        ">` + parseInt(parseInt(i, 10) + 1, 10) + `</div>
      </div>
    ` + searchResults[i].html.innerHTML
    
  }
}

// do this when a key is pressed  
document.addEventListener('keypress', logKey);
function logKey(e) {
  key = e.key
  for (i = 1; i <= 9; i++) { // only display the first 9 items
    if (key == i+'') window.location.href = searchResults[i-1].href
  }
}