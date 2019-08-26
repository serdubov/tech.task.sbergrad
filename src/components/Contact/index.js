import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Logo from '../Logo'

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ContactWrapper>
        <ContactContainer>
          <ContactInfoWrap>
            <Title title='Контактная информация' size='small' />
            <ContactInfo>
              <ContactInfoItem>
                <ContactTitle>Телефон</ContactTitle>
                <ContactSubTitle>8 (800) 222-74-59</ContactSubTitle>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactTitle>Эл. почта</ContactTitle>
                <ContactSubTitle>support@sbergrad.ru</ContactSubTitle>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactTitle>Почтовый адрес</ContactTitle>
                <ContactSubTitle>603093, г. Нижний Новгород, ул. Печерский съезд, д.24А, офис 311</ContactSubTitle>
              </ContactInfoItem>
            </ContactInfo>
            <FakeLine />
            <Disclaimer>
              <DisclaimerP>
                Услугу подбора предложений на ресурсе Sbergrad.com предоставляет компания ООО "Медиамаркетинг", ОГРН 1175275078263, ИНН/КПП 5260449693 / 526001001. Сайт оказывает платные услуги по подбору кредитных продуктов для клиентов, а именно предлагает клиенту список предложений кредитных учреждений, некредитных финансовый организаций, в которые клиент может обратиться с целью оформления заявки на кредитный продукт. Проект не является банком или кредитором, не относится к финансовым учреждениям и не несёт ответственности за последствия любых заключенных договоров кредитования или условия по ним. Минимальная процентная ставка у некоторых партнеров составляет 0%. Чтобы оформить заявку на получение займа, необходимо заполнить анкету на сайте проекта. Совершая любые действия на сайте, вы даете свое Согласие на обработку персональных данных и Согласие на получение рекламных материалов. Вы ознакомились и соглашаетесь с Договором публичной оферты, Политикой Конфиденциальности.
              </DisclaimerP>
              <DisclaimerP>
                * У пользователей сервиса есть возможность получить займ с минимальной процентной ставкой 0%. Подробности при выборе персонального предложения.
              </DisclaimerP>
              <DisclaimerP>
                <b>**Внимание! Обработка заявки платная: стоимость услуги (далее по сайту — Активация сервиса) составляет составляет 399 (триста девяносто девять) рублей с периодичностью согласно тарифам сервиса.</b>
              </DisclaimerP>
              <DisclaimerP>
                Если услуга перестала быть актуальна для вас (вы получили займ или более не нуждаетесь в займах), вы можете самостоятельно отписаться от услуги в любой момент Изменить подписку.
              </DisclaimerP>
              <DisclaimerP>
                По любым вопросам вы можете связаться со специалистами сервиса по электронной почте support@sbergrad.ru
              </DisclaimerP>
              <Logo theme='gray'/>
            </Disclaimer>
          </ContactInfoWrap>
        </ContactContainer>
      </ContactWrapper>
    )
  }
}

const DisclaimerP = styled.p`
  margin: 0 0 20px;
  font-family: Lato Regular;
`
const Disclaimer = styled.div`
  width: 100%;
  font-size: 14px;
  color: #79929a;
  line-height: 1.3em;
  margin: 60px 0 40px;
  font-family: Lato Regular;
`
const FakeLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(121, 146, 154, 0.3);
`
const ContactSubTitle = styled.div`
  font-family: Lato Heavy;
  font-size: 18px;
  font-weight: bold;
  color: #353740;
`
const ContactTitle = styled.div`
  font-family: Lato Regular;
  font-size: 16px;
  color: #353740;
  margin: 0 0 12px;
`
const ContactInfoItem = styled.div`
  flex: 1 0 0;
`
const ContactInfo = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  margin: 60px 0;
`
const ContactInfoWrap = styled.div`
  
`
const ContactContainer = styled.div`
  padding: 80px 0 40px;
  margin: 0 auto;
  max-width: 1200px;
`
const ContactWrapper = styled.div`
  width: 100%;
  background: #f1f4f5;
`