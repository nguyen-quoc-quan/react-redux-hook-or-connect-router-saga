import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Home from './Home'

export default () => (
  <Switch>
    <Route exact path = '/' component = {Home} />
    <Route exact path = '/about' component = {About} />
  </Switch>
)

const About = () =>(
  <div>
    ABOUT
  </div>
)
