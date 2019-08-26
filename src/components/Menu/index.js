import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Button from '../Button'

export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <MenuWrapper>
        <MenuContainer>
          <Logo theme='default'/>
          <MenuElements>
            <MenuElementsNumber href="tel:+78002227459">8 (800) 222-74-59</MenuElementsNumber>
            <Button />
          </MenuElements>
        </MenuContainer>
      </MenuWrapper>
    )
  }
}

const MenuElementsButton = styled.div`

`
const MenuElementsNumber = styled.a`
  font-family: Lato Regular;
  font-weight: normal;
  font-size: 18px;
  color: #79929a;
  text-decoration: none;
  cursor: pointer;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  margin: 0 40px 0 0;
  &:hover {
    text-decoration: none;
    opacity: .75;
  }
`
const MenuElements = styled.div`
  display: flex;
  align-items: center;
`
const MenuContainer = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`
const MenuWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #FFF;
  position: fixed;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
  left: 0; top: 0;
`