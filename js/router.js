// define all router variable divs
var getStartedDiv = document.getElementById("get-started")
var questionsDiv = document.getElementById("questions")
var finishedDiv = document.getElementById("finished")
var fourOhFourDiv = document.getElementById("404")

// define the routes inside an object called routes and assign each route it's content div (except 404)
var routes = {
  '/': getStartedDiv,
  '/questions': questionsDiv,
  '/finished': finishedDiv
}

// function to be called on every new navigation
function router() {

  console.log(window.hash)
  console.log(window.location.pathname)

  if (window.location.pathname === routes[window.location.pathname]) {
    // do routing functions
  } else {
    // return 404 content
  }
}

// call router function on hash change
window.onhashchange = router()
