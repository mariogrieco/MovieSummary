import React from 'react'
import { hydrate } from 'react-dom'
import Routes from './src/AppRoutes' // entry points
import { BrowserRouter as Router } from 'react-router-dom'

hydrate(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
)
