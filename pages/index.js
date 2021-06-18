import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharely</title>
        <link rel="icon" href="https://yearngroup.herokuapp.com/public/random.png" />
        <meta name="title" content="Sharely" />
        <meta name="description" content="Sharely, how sharing is meant to be" />

      </Head>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="og:title" content="Sharely" />
        <meta property="og:description" content="Sharely, how sharing is meant to be" />
        <meta property="og:image" content="https://yearngroup.herokuapp.com/public/random.png" />
      </Head>
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="twitter:title" content="Sharely" />
        <meta property="twitter:description" content="Sharely, how sharing is meant to be" />
        <meta property="twitter:image" content="https://yearngroup.herokuapp.com/public/random.png"></meta>
      </Head>

      <Wrapper>
        <Main>
          <section >
            <p>Sharely</p>
            <p>How sharing is meant to be</p>
          </section>

        </Main>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Main = styled.div`


`;
