import React, { Component } from 'react'
import Dynamicform from '../Component/dynamic-FormData'
import D_form from '../Component/formUsingJson'
import DynamicForm from '../Component/new'

export default class Home extends Component {
  render() {
    return (
      <div>
          {/* <Dynamicform/> */}
          <D_form/>
          {/* <DynamicForm/> */}
      </div>
    )
  }
}