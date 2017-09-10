### Setup
* Fork, Clone, yarn install, yarn start
* Do Not use the instructions as your guide for what code to type, use the reference guide project (address book)
* Slight quirk - refreshing doesn't work from any path other than the default one so you will have to go back to the default path to refresh

### App.js
*x Import BrowserRouter,Switch and Route from react-router-dom
*x Import components needed
*x Create the appropriate routes `{/* PUT YOUR ROUTES HERE */}`
*x Make sure the default route goes at the bottom
*x Make sure BrowserRouter wraps everything
*x Make sure you use the component prop, not render.

### Routes
*x /              -> Dashboard
*x /charts        -> Charts
*x /tables        -> Tables
*x /settings      -> Settings
*x /wall          -> Wall
*x /profiles      -> Profiles
*x /marquee/:text -> Marquee
*x /profile/:id   -> Profile

### Create these components. The content of the components is not important, just put anything `<div> whatever </div>`
*x Charts.js
*x Tables.js
*x Settings.js
*x Wall.js

### Existing components
*x Profiles.js
    * Import Link from react-router-dom
    * change the `<a>` to be a Link that links to `/profile/ + user.id`
*x Profile.js 
    * Change the hard coded 0 with the value from the parameter id
* Dashboard.js
*?? Marquee
    * replace the hard coded "hello" with the text parameter from the route

### SideNav
*x Import Link from react-router-dom
*x Create links to all the routes except Profile
*x Hard code some links to Marquee
    * /marquee/iloveroutes
    * /marquee/reactrouterrules
    * …etc
