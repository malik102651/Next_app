import Head from "next/head"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();

  return {
    props: {
      // data: data //first method to return data
      data,  //2nd method to return data
    }
  }
}
const Contact = ({ data }) => {
  return (
    <>
      <Head><title>Home Page</title></Head>
      <h1>This is Contact</h1>
      {data.slice(0, 6).map((currEle) => {
        return (
          <div key={currEle.id}>
            <h3>{currEle.id}</h3>
            <Link href={`/screens/${currEle.id}`}>
              <h2 style={{cursor: "pointer"}}>{currEle.title}</h2>
            </Link>

          </div>
        )
      })}
    </>
  )
}
export default Contact
