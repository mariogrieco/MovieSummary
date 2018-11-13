import './theme.ant';
import './styles.scss'

import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { LocaleProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
import 'moment/locale/en-au';

import Landing from './pages/landing'

class AppRoutes extends Component {
  componentWillMount = () => {
    console.log('server/client side')
  }

  componentDidMount = () => {
    console.log('client side')
  }

  render () {
    return (
      <LocaleProvider locale={en_US}>
        <Switch>
          <Route
            path='/'
            component={Landing}
          />
        </Switch>
      </LocaleProvider>
    )
  }
}

export default AppRoutes