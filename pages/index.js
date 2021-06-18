import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharely</title>
        <link rel="icon" href="/random.png" />
        <meta name="title" content="Sharely" />
        <meta name="description" content="Sharely, how sharing is meant to be" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="og:title" content="Sharely" />
        <meta property="og:description" content="Sharely, how BBBBBsharing is meant to be" />
        <meta property="og:image" content="https://yearngroup.herokuapp.com/assets/images/random.jpg" />
        <meta property="og:image:secure_url" content="https://yearngroup.herokuapp.com/assets/images/random.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="twitter:title" content="Sharely" />
        <meta property="twitter:description" content="Sharely, how  AAAAAsharing is meant to be" />
        <meta property="twitter:image" content="https://yearngroup.herokuapp.com/assets/images/random.jpg"></meta>

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
