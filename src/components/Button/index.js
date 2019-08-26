import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const {theme} = this.props
    return (
      <ButtonWrapper>
        <ButtonContainer theme={theme}>
          Получить деньги
        </ButtonContainer>
      </ButtonWrapper>
    )
  }
}

const ButtonContainer = styled.div`
  min-width: ${props => props.theme === 'green' ? '240px' : '180px'};
  height: ${props => props.theme === 'green' ? '70px' : '40px'};
  font-size: ${props => props.theme === 'green' ? '24px' : '16px'};
  border-radius: 6px;
  font-family: Lato Heavy;
  font-weight: 600;
  text-transform: lowercase;
  padding: 0 20px;
  color: ${props => props.theme === 'green' ? '#FFF' : '#353740'};
  text-shadow: ${props => props.theme === 'green' ? '0 1px 2px #129964' : null};
  background: ${props => props.theme === 'green' ? 'linear-gradient(to bottom, #57e47b 0%, #2cc592 100%)' : 'linear-gradient(to bottom, #fad561 0%, #ffc062 100%)'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  &:hover{
    background: ${props => props.theme === 'green' ? 'linear-gradient(to bottom, #8fff6b 0%, #32e295 100%)' : 'linear-gradient(to bottom, #faed61 0%, #ffdd62 100%)'};
  }
`
const ButtonWrapper = styled.div``