// this is dynamic routing thats why we place square brackets around the file name
// import { useRouter } from "next/router"



// const Pageno = () => {
//     const router = useRouter();
//     const pagenumber = router.query.pageNo;
//     return (
//         <>
//             <h1>this is my {pagenumber} </h1></>
//     )
// }

// export default Pageno

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map((currEle) => {
      return{
        params:{
            pageNo: currEle.id.toString(),
        }
      }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
  
    return {
      props: {
        // data: data //first method to return data
        data,  //2nd method to return data
      }
    }
  }
const myData = ({data}) => {
    return (
        <>
            <h1>Hello dynamic</h1>
            <h2>{data.id}</h2>
            <h3>{data.title}</h3>

        </>
    )
}

export default myData