import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 50%;
  margin: 0 auto;
  align-items: center;
  height: auto;
  justify-content: center;
  font-size: 16px;
  font-family: Helvetica;
  

    button {
    border: 2px solid black;
    width: 100px;
    height: 25px;
    border-radius: 15px;
  }
`;

export default class Jokes extends React.Component {
  state = {
    jokes : [],
  };

  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      const tok = JSON.parse(window.localStorage.getItem('token'));
      axios
        .get('http://localhost:3300/api/jokes', { headers: { Authorization: tok } })
        .then(res => {
          this.setState({ jokes: res.data });
        })
        .catch(e => {
          console.log(e);
        });
    }
    else {
      this.props.history.push('/unauthorized');
    }
  }

  render() {
    return (
      <Container>
        {this.state.jokes.map(joke => {
          return (
            <div key={joke.id * Math.random()}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          );
        })}

        <button
          onClick={() => {
            window.localStorage.removeItem('token');
            this.props.history.push('/');
          }}>
          Logout
        </button>
      </Container>
    );
  }
}
