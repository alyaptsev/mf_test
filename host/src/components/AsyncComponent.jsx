import React from "react";

function asyncComponent (Component) {
  return class AsyncComponent extends React.Component {
    componentDidCatch (error, info) {
      console.error(error, info)
    }

    render () {
      if (!Component) {
        return null
      }

      return (
        <React.Suspense fallback="Loading...">
          <Component
            {...this.props}
          />
        </React.Suspense>
      )
    }
  }
}

export default asyncComponent