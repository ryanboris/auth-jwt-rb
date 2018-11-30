import React from 'react'
import styled from 'styled-components'
import Count from './Count'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

library.add(faSmile)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  height: 50vh;
  justify-content: center;
  font-size: 14px;
  font-family: PT Mono;
  border-radius: 15px;
  background: lightblue;
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;

  p {
    font-size: 28px;
    padding: 30px;
  }
`

const Unauthorized = props => {
  setTimeout(() => {
    props.history.push('/')
  }, 8500)
  return (
    <Container>
      <p>Sorry, you shouldn't be here</p>
      <FontAwesomeIcon icon={[ 'fas', 'smile' ]} size='3x' />
      <p>... but you can be! Here's how!</p>
      <p>
        ...redirecting back to main screen in <Count /> seconds
      </p>
    </Container>
  )
}

export default Unauthorized
