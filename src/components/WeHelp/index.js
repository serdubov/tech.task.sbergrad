import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../Button'

export default class WeHelp extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <WeHelpWrapper>
        <WeHelpContainer padding='80px 0 120px'>
          <HelpTitle>
            Мы помогаем получить деньги
          </HelpTitle>
          <HelpNumberContainer>
            <HelpNumber>
              <HelpNumberTitle>19542</HelpNumberTitle>
              <HelpNumberSubTitle>одобренных займов</HelpNumberSubTitle>
            </HelpNumber>
            <HelpNumber>
              <HelpNumberTitle>683 970 000</HelpNumberTitle>
              <HelpNumberSubTitle>выдано рублей</HelpNumberSubTitle>
            </HelpNumber>
            <HelpNumber>
              <HelpNumberTitle>98%</HelpNumberTitle>
              <HelpNumberSubTitle>вероятность одобрения</HelpNumberSubTitle>
            </HelpNumber>
          </HelpNumberContainer>
          <FormContainer>
            <FormContainerTitle>
              Поможем вам получить деньги в течение <TitleSpan>10 минут</TitleSpan>
            </FormContainerTitle>
            <FormContainerButton>
              <Button theme='green' />
            </FormContainerButton>
          </FormContainer>
        </WeHelpContainer>
      </WeHelpWrapper>
    )
  }
}

const FormContainerButton = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`
const TitleSpan = styled.span`
  color: #2cc592;
`
const FormContainerTitle = styled.h3`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  line-height: 1.15em;
  margin-bottom: 40px;
  color: #353740;
  font-family: Lato Heavy;
`
const FormContainer = styled.div`
  width: 520px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 50px 60px 0 rgba(0, 0, 0, 0.04);
  padding: 40px;
  color: #353740;
`
const HelpNumberSubTitle = styled.div`
  font-family: Lato Heavy;
  text-align: center;
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`
const HelpNumberTitle = styled.div`
  font-family: Lato Heavy;
  text-align: center;
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  font-size: 56px;
  margin: 0 0 5px;
`
const HelpNumber = styled.div`
  flex: 1 0 0;
`
const HelpNumberContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 80px;
`
const HelpTitle = styled.div`
  margin: 0 0 60px;
  font-size: 36px;
  line-height: 1em;
  font-weight: bold;
  text-align: center;
  color: #FFF;
  font-family: Lato Heavy;
`
const WeHelpContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding : null};
`
const WeHelpWrapper = styled.div`
  width: 100%;
  background: radial-gradient(circle at 49% 100%, rgba(87, 228, 123, 1) 0%, rgba(44, 197, 146, 1) 100%);
`