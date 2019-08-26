import React, { Component } from 'react'
import styled from 'styled-components'
import LogoClr from '../../assets/img/logo-color.svg'
import LogoGray from '../../assets/img/logo-gray.svg'

export default class Logo extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const { theme } = this.props
    return (
      <LogoWrapper>
        <LogoImg src = {theme === 'gray' ? LogoGray : LogoClr}/>
      </LogoWrapper>
    )
  }
}

const LogoImg = styled.img`
  width: 166px;
  height: 40px;
`
const LogoWrapper = styled.div``