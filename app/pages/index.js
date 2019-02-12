import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom"

import React, {
  Suspense,
  lazy
} from "react"

const Home = lazy(() => import("./main"));
console.log(Home)

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default App
