import React, { Component } from 'react'
import styled from 'styled-components'

export default class Title extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const { title, size } = this.props
    return (
      <TitleWrapper>
        <TitleHeader size={size}>
          {title}
        </TitleHeader>
      </TitleWrapper>
    )
  }
}

const TitleHeader = styled.h2`
  font-size: ${props => props.size === 'big' ? '36px' : '26px'};
  font-family: Lato Heavy;
  line-height: 1em;
  font-weight: bold;
  margin-bottom:  ${props => props.size === 'big' ? '30px' : '20px'};
  color: #353740;
`
const TitleWrapper = styled.div`

`