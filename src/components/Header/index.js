import React, { Component } from 'react'
import styled from 'styled-components'
import headerDesktop from '../../assets/img/header.jpg'
import Form from '../Form'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderTitleContainer>
            <SubTitle>
              Займы от 0%*
            </SubTitle>
            <Title>
              Получите деньги быстро и просто
            </Title>
            <TitleDescription>
              Подберем предложения по займам независимо от вашей кредитной истории
            </TitleDescription>
          </HeaderTitleContainer>
          <HeaderTitleContainer>
            <Form />
          </HeaderTitleContainer>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

const TitleDescription = styled.div`
    color: #FFF;
    font-size: 24px;
    line-height: 1.2em;
    font-family: Lato Regular;
`
const Title = styled.h1`
  font-family: Lato Heavy;
  color: #FFF;
  margin: 0 0 50px 0;
  font-size: 46px;
  line-height: 1em;
  font-weight: bold;
`
const SubTitle = styled.div`
  max-width: 200px;
  height: 40px;
  border-radius: 6px;
  font-family: Lato Heavy;
  padding: 0 20px;
  color: #FFF;
  border: dotted 1px #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 25px 0;
  position: relative;
  &::after{
    content: '';
    display: block;
    position: absolute;
    border-left: dotted 1px #FFF;
    border-radius: 50% 0 0 50%;
    width: 25px;
    height: 25px;
    left: -12.5px;
    bottom: -25px;
  }
`
const HeaderTitleContainer = styled.div`
  width: 500px;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderWrapper = styled.div`
  width: 100%;
  height: 680px;
  margin: 80px 0 0 0;
  background: #f1f4f5 url(${headerDesktop}) 50% 50% no-repeat;
  background-size: cover;
`