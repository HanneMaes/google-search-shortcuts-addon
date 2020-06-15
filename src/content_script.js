console.log('-----------------------')
console.log('--- GOOGLE DETECTED ---')
console.log('-----------------------')

var searchResults = []

// add the styling to the page
document.head.innerHTML = document.head.innerHTML + `
<link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet"> 
<style>
  .googleSearchResultsShortcut, .googleSearchResultsShortcut::after {
    border-radius: 5px;
    border: 2px solid black;
    cursor: default;
  }
  
  .googleSearchResultsShortcut {
    /* positioning */
    position: absolute;
    right: 20px;
    top: 0px;

    /* size */
    width: 20px;
    height: 20px;
  
    /* background */
    background-color: white;
    border-radius: 5px;

    /* typography */
    font-family: 'Nova Mono', monospace;
    color: black;
  
    /* center text */
    text-align: center;
    line-height: 19px;
  }
  
  .googleSearchResultsShortcut::after {
    content: '';
    display: block;
    
    /* draw this underneath the div */
    z-index: -1;
    
    /* size */
    width: 20px;
    height: 20px;
    
    /* positioning */
    position: relative;
    left: -2px;
    top: -15px;
    
    background-color: rgb(0, 0, 0);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  }
</style>
`
console.log("--------> document.head.innerHTML:", document.head.innerHTML);

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
        <div class="googleSearchResultsShortcut">` + parseInt(parseInt(i, 10) + 1, 10) + `</div>
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