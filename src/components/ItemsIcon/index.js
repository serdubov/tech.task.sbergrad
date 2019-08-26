import React, { Component } from 'react'
import styled from 'styled-components'
import Item from '../Item'
import clockIcon from '../../assets/img/icon-clock.svg'
import secureIcon from '../../assets/img/icon-secure.svg'
import handsIcon from '../../assets/img/icon-handshake.svg'
import _ from 'lodash'



export default class ItemsIcon extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          icon: clockIcon,
          title: '5 минут от заявки до денег'
        },
        {
          icon: secureIcon,
          title: 'Шифруем и защищаем данные'
        },
        {
          icon: handsIcon,
          title: 'Займы без отказов и проверок'
        }
      ]
    }
  }
  render() {
    const {items} = this.state
    return (
      <ItemsIconWrapper>
        <ItemsIconContainer>
          {
            _.map(items, (el, index) => {
              return (
                <Item key = {index} icon={el.icon} title={el.title} flex='23% 0 0'/>
              )
            })
          }
        </ItemsIconContainer>
      </ItemsIconWrapper>
    )
  }
}

const ItemsIconContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
`
const ItemsIconWrapper = styled.div`
  width: 100%;
`