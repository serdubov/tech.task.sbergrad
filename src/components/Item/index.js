import React, { Component } from 'react'
import styled from 'styled-components'
import clock from '../../assets/img/icon-clock.svg'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const { icon, title, flex } = this.props
    return (
      <ItemWrapper flex={flex}>
        <ItemIcon src = {icon} />
        <ItemTitle>
          {title}
        </ItemTitle>
      </ItemWrapper>
    )
  }
}

const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 1.1em;
  font-family: Lato Regular;
  color: #353740;
`
const ItemIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px 0 0;
`
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: ${props => props.flex ? props.flex : null};
`