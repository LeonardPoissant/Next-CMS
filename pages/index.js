import Head from 'next/head'
import styled from 'styled-components'

export default function Home({ metaTags }) {

  console.log('PRPSS', metaTags.data[0].imgUrl)
  const imgUrl = metaTags.data[0].imgUrl;
  const description = metaTags.data[0].description;
  //console.log('URL', imgUrl)
  return (
    <>
      <Head>
        <title>Sharely</title>
        <link rel="icon" href="/random.jpg" />
        <meta name="title" content="Sharely" />
        <meta name="description" content="Sharely, how asddsharing is meant to be" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="og:title" content="Sharely" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png" />
        <meta property="og:image:secure_url" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/cropped-jacques-brel1.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="twitter:title" content="Sharely" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png" ></meta>
      </Head>




      <Wrapper>
        <Main>
          <section >
            <p>Sharely</p>
            <p>How sharing is meant to besdfsfsdf</p>
            <p>{description}</p>
            <img src="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png"></img>
            <div>IM THE BOTTOM DIV</div>
          </section>

        </Main>

      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://quiet-peak-00993.herokuapp.com/meta')
  const metaTags = await res.json()


  console.log('posts', metaTags)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      metaTags,
    },
  }
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
