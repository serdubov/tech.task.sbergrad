import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-simple-range'
import Button from '../Button'
import moment from 'moment'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      volume: 1000,
      time: ''
    }
  }
  componentDidMount() {
    const time = moment().add('m', 5).format('HH:mm')
    this.setState({ time })
  }
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
  render() {
    let { volume, time } = this.state
    return (
      <FormWrapper>
        <FormTitle>
          Заполните заявку сейчас, и деньги будут у вас в <TitleSpan>{time}</TitleSpan>
        </FormTitle>
        <FormSubTitle>
          <SubTitle>Сумма займа</SubTitle>
          <CountMoney>{volume} ₽</CountMoney>
        </FormSubTitle>
        
        <FormSlider>
          <Slider 
            min={1000}
            max={60000}
            step={1000}
            value={volume}
            onChange={(event) => this.handleOnChange(event.value)}
            thumbSize={28}
          />
        </FormSlider>

        <FormDescription>
          <DescTitle>
            Возвращаете {volume+399} ₽ <DescTitleSpan>с учетом всех комиссий и переплат.*</DescTitleSpan>
          </DescTitle>
        </FormDescription>
        <FormButton>
          <Button theme='green' />
        </FormButton>
      </FormWrapper>
    )
  }
}

const FormButton = styled.div`
  display: flex;
  justify-content: center;
`
const DescTitleSpan = styled.span`
  font-size: 10px;
`
const DescTitle = styled.p`
  font-size: 16px;
  color: #79929a;
  text-align: center;
  font-family: Lato Regular;
`
const FormDescription = styled.div`
  margin : 15px 0 10px;
  padding: 25px 0 10px;
  border-top: 1px dotted rgba(135, 152, 156, 0.5);
`
const CountMoney = styled.div`
  font-size: 26px;
  color: #353740;
  font-family: Lato Regular;
`
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: Lato Heavy;
  color: #353740;
  cursor: default;
`
const FormSubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`
const TitleSpan = styled.span`
  color: #2cc592;
`
const FormTitle = styled.div`
  margin-bottom: 60px;
  font-family: Lato Heavy;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.15em;
  color: #353740;
`
const FormSlider = styled.div`
  padding: 20px 0;
  & > div > div {
    background-color: #dfe7e9 !important;
  }
  & > div > div > div:first-child {
    background: linear-gradient(to right, #2cc592 0%, #57e47b 100%) !important;
  }
  & > div > div > div:last-child > div {
    background-color: #fff !important;
    border-radius: 100%;
    border: solid 1px rgb(223, 231, 233) !important;
    box-shadow: 0 4px 8px 0 rgba(34, 64, 71, 0.2) !important;
    cursor: pointer;
  }
  & > div > div > div:last-child > div:hover {
    border-color: rgb(44, 197, 146) !important;
  }
`
const FormWrapper = styled.div`
  width: 520px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 50px 60px 0 rgba(0, 0, 0, 0.04);
  padding: 40px;
  box-sizing: border-box;
  color: #353740;
`