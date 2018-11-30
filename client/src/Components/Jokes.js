import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 50%;
  margin: 0 auto;
  align-items: center;
  height: auto;
  justify-content: center;
  font-size: 26px;
  font-family: Helvetica;

  button {
    border: 2px solid black;
    width: 100px;
    height: 25px;
    border-radius: 15px;
  }
`

const Joke = styled.div`
  border: 2px solid black;
  padding: 30px;
  margin: 30px;
  

  p.setup {
    margin-bottom: 20px;
  }

  p.punchline{
    color: red;
    padding: 20px;
    font-size: 16px;
  }
`

export default class Jokes extends React.Component {
  state = {
    jokes : [],
  }

  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      const tok = JSON.parse(window.localStorage.getItem('token'))
      axios
        .get('http://localhost:3300/api/jokes', { headers: { Authorization: tok } })
        .then(res => {
          this.setState({ jokes: res.data })
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      this.props.history.push('/unauthorized')
    }
  }

  render() {
    return (
      <Container>
        {this.state.jokes.map(joke => {
          return (
            <div key={joke.id * Math.random()}>
              <Joke>
                <p className="setup">{joke.setup}</p>
                <p className="punchline"><em>{joke.punchline}</em></p>
              </Joke>
            </div>
          )
        })}

        <button
          onClick={() => {
            window.localStorage.removeItem('token')
            this.props.history.push('/')
          }}>
          Logout
        </button>
      </Container>
    )
  }
}
