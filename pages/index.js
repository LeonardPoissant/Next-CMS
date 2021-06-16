import Head from 'next/head'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <Wrapper>




      <header>
        <h1>sdfsdf</h1>
      </header>

      <section >

        <p>Sharely</p>
        <p>How sharing is meant to be</p>
        <iframe width="300" height="315" src="https://www.youtube.com/embed/h7qTI6Njp9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>      </section>

      <footer >
      </footer>
    </Wrapper>
  )
}


const Wrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh;
`;
