// import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
      <h1>index</h1>
    </>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revaidate: 60 * 60 * 8,
  } 
}
 