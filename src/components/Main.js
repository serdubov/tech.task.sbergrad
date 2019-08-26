import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Header from './Header'
import ItemsIcon from './ItemsIcon'
import About from './About'
import Help from './WeHelp'
import Contact from './Contact'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <MainWrapper>
        <Menu />
        <Header />
        <ItemsIcon />
        <About />
        <Help />
        <Contact />
      </MainWrapper>
    )
  }
}

const MainWrapper = styled.div`
  width: 100%;
`