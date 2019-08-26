import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Item from '../Item'
import orderIcon from '../../assets/img/icon-order.svg'
import waitIcon from '../../assets/img/icon-wait.svg'
import selectIcon from '../../assets/img/icon-select.svg'
import moneyIcon from '../../assets/img/icon-money.svg'
import _ from 'lodash'
import mir from '../../assets/img/icon-mir.png'
import mir2 from '../../assets/img/icon-mir2.png'
import visa from '../../assets/img/icon-visa.png'
import master from '../../assets/img/icon-maestro-master.png'
import qiwi from '../../assets/img/icon-qiwi.png'
import yandex from '../../assets/img/icon-yandex.png'





export default class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      ask: [
        'Условия выдачи займа',
        'Как долго рассматривается заявка?',
        'Если я не успеваю вернуть заем?',
        'Переплаты и комиссии по займу',
        'Получу ли я деньги с плохой кредитной историей?',
        'Сколько я могу получить и на какой срок?'
      ],
      payIcons: [mir, mir2, visa, master, qiwi, yandex],
      items: [
        {
          icon: orderIcon,
          title: 'Оставьте заявку в любом месте и в любое время: вам потребуется только паспорт и доступ в интернет'
        },
        {
          icon: waitIcon,
          title: 'Заполните анкету: это займет не больше трех минут.'
        },
        {
          icon: selectIcon,
          title: 'Выберите самое выгодное предложение.'
        },
        {
          icon: moneyIcon,
          title: 'Получите деньги удобным способом.'
        }
      ]
    }
  }
  render() {
    const { items, payIcons, ask } = this.state
    return (
      <AboutWrapper>
        <AboutContainer padding='80px 0'>
          <AboutService>
            <Title title='О сервисе' size='big'/>
            <AboutServiceDescription>
              Sbergrad — это площадка подбора предложений по микрозаймам. Оставьте заявку на получение денег: работаем со всеми клиентами — не важно, какая у вас кредитная история и имеются ли текущие просрочки.
            </AboutServiceDescription>
            <AboutUl>
              <AboutLi>приготовьте паспорт;</AboutLi>
              <AboutLi>заполните анкету;</AboutLi>
              <AboutLi>ждите зачисления займа.</AboutLi>
            </AboutUl>
            <AboutUl>
              <AboutLi>Переплата по займу: 0 рублей.</AboutLi>
              <AboutLi>Комиссия за выдачу займа 0 рублей.</AboutLi>
              <AboutLi>Комиссия сервиса 399 рублей**.</AboutLi>
            </AboutUl>
          </AboutService>
          <HowItWork>
            <Title title='Как это работает?' size='big'/>
            {
              _.map(items, (el, index) => {
                return (
                  <ElementTitle key={index}>
                    <ElementIndex>{index + 1}</ElementIndex>
                    <Item icon={el.icon} title={el.title}/>
                  </ElementTitle>
                )
              })

            }
            
          </HowItWork>
        </AboutContainer>
        <AboutContainer padding='0 0 80px'>
          <AboutService>
            <Title title='Sbergrad — это удобно' size='small'/>
            <AboutServiceDescription>
              Моментальный подбор подходящих займов: просто укажите, какая сумма вам необходима. Мы подберем предложения с моментальным переводом денег на карту.<br/>Оплату услуг сервиса можно произвести удобным способом.
            </AboutServiceDescription>
            <AboutIcons>
              {
                _.map(payIcons, (el, index) => {
                  return (
                    <Icon src={el} key={index}/>
                  )
                })
              }
            </AboutIcons>
          </AboutService>
        </AboutContainer>
        <AboutContainer padding='0 0 80px'>
          <AboutServiceAsk>
            <Title title='Часто спрашивают' size='small'/>
            <AboutAsk>
              {
                _.map(ask, (el, index) => {
                  return (
                    <AboutAskItem key={index}>
                      <Link>{el}</Link>
                    </AboutAskItem>
                  )
                })
              }
            </AboutAsk>
          </AboutServiceAsk>
        </AboutContainer>
      </AboutWrapper>
    )
  }
}

const Link = styled.a`
  font-family: Lato Heavy;
  font-size: 16px;
  font-weight: 600;
  color: #353740;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 1px dotted;
  color: #2cc592;
  cursor: pointer;
`
const AboutAskItem = styled.div`
  line-height: 1.2em;
  flex: 30% 0 0;
  margin-bottom: 30px;
`
const AboutAsk = styled.div`
  flex: 1 1;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 0 0;
`
const Icon = styled.img`
  height: 30px;
  margin: 0 20px 0 0;
`
const AboutIcons = styled.div`
  display: flex;
`
const ElementIndex = styled.div`
  font-family: Lato Heavy;
  font-size: 24px;
  color: #dfe7e9;
  font-weight: bold;
  margin-right: 16px;
`
const ElementTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 0;
`
const AboutLi = styled.li`
  font-size: 16px;
  line-height: 1.4em;
  font-family: Lato Regular;
  color: #353740;
`
const AboutUl = styled.ul`
  font-size: 10px;
  line-height: 1.4em;
  font-family: Lato Regular;
  color: #353740;
  margin: 30px 0 15px 0;
`
const AboutServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.4em;
  font-family: Lato Regular;
  color: #353740;
  margin: 0 0 20px 0;
`
const HowItWork = styled.div`
  flex: 30% 0 0;
`
const AboutService = styled.div`
  flex: 55% 0 0;
`
const AboutServiceAsk = styled.div`
  flex: 1 0 0;
`
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding : null};
  display: flex;
  justify-content: space-between;
`
const AboutWrapper = styled.div`
  width: 100%;
`