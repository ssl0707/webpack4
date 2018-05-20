import { hot } from 'react-hot-loader'; //启用热模块更换功能
import React, { Component } from 'react';
import Art from './components/Art/Art.jsx'
class App extends Component {
  btn() {
    console.log(1)
  }
  render() {
    return (
      <div>
        <Art/>
        <button onClick={this.btn.bind(this)}>登录</button>
      </div>
    )
  }
}
export default hot(module)(App);
