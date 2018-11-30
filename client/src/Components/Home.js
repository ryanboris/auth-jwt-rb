import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt, faUserPlus)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  height: 50vh;
  justify-content: center;
  font-size: 54px;
  font-weight: 600;
  max-width: 50%;
  margin: 0 auto;
  font-family: PT Mono;
  button {
    border: 0px;
    width: 50px;
    height: 20px;
    border-radius: 15px;
    margin: 0 40px 20px 40px;
    cursor: pointer;
  }

  p {
    padding: 50px;
  }
`

const SubText = styled.p`
  font-size: 10px;
`
const Home = props => {
  return (
    <Container>
      <p>Welcome</p>
      <div>
        <button
          onClick={() => {
            props.history.push('/signin')
          }}>
          <FontAwesomeIcon icon={[ 'fas', 'sign-in-alt' ]} size='4x' />
        </button>
          <SubText>Login</SubText>
        <button
          onClick={() => {
            props.history.push('/signup')
          }}>
          <FontAwesomeIcon icon={[ 'fas', 'user-plus' ]} size='4x' />
        </button>
          <SubText>Register</SubText>
      </div>
    </Container>
  )
}

export default Home
