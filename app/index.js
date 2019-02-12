import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import App from "./pages"

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)
