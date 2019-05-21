// define the routes inside an object called routes and assign each route it's content div
// make sure 404 is final route
var routes = [
  {
    pathname: "/",
    div: document.getElementById("get-started")
  },
  {
    pathname: "/questions",
    div: document.getElementById("questions")
  },
  {
    pathname: "/finished",
    div: document.getElementById("finished")
  },
  {
    pathname: "/404",
    div: document.getElementById("404")
  }
]

// function to be called on every new navigation
function router() {
  // set all routed divs to display: none
  // note: all routed divs are set to display: none in css as well in case browser has js disabled
  for (var i = 0; i < routes.length; i++) {
    console.log(routes[i].div)
    routes[i].div.style.display = "none;"
  }

  // find corrent route object if available
  let route = routes.find(route => route.pathname === window.location.pathname)

  if (route) {
    console.log('route found')
    // do routing functions
    route.div.style.display = "flex"
  } else {
    console.log('route not found')
    // return 404 content
    routes[routes.length-1].div.style.display = "flex"
  }
}

// call router function on load
router()
