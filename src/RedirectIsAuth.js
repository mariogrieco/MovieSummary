import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from "react-router-dom"
import { connect } from 'react-redux'

class RouteWrap extends Component {
  render () {
    let Component = this.props.Component
    let onRedirectPath = this.props.onRedirectPath
    let path = this.props.path
    let extendedProps = this.props.extendedProps
    let exact = this.props.exact
    return (
      <Fragment>
        {this.props.isAuth ?
         <Redirect to={onRedirectPath} />
         :
        <Route exact={exact} path={path} render={() => (<Component {...extendedProps} />)} />
        }
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  let isAuth = state.session.isAuth
  return {
    isAuth
  }
}

let WrapInstance = connect(mapStateToProps)(RouteWrap)

export default function RedirectIsAuth ({
  onRedirectPath,
  component,
  extendedProps,
  path,
  exact
}) {
 return (
  <WrapInstance 
    onRedirectPath={onRedirectPath}
    Component={component}
    extendedProps={extendedProps}
    path={path}
    exact={exact}
  />
  )
}
