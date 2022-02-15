import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HelloWorld from "./HelloWorld"

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld greeting='hello'/>} />
        </Routes>
      </Router>
    );
  }
}

export default App
