import Link from "next/link"
import {useRouter} from 'next/router'
import { useEffect } from "react"

const Errorpage = () => {
    const router = useRouter()
    const handleclick = () =>{
        router.push('/')
    }
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         router.push('/')
    //     },[3000])
        
    // },[])
    return (
        <>
            <h1>We are sorry page not found !</h1>
            {/* <Link href='/'> */}
                <button onClick={handleclick}>Back to Home Page</button>
            {/* </Link> */}
        </>
    )
}

export default Errorpage