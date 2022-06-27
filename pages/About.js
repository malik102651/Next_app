import Head from "next/head"
import Login from "../Components/Login"
const About = () => {
    return (
        <>
        <Head><title>About Page</title></Head>
            <div>
                <h1>This is About Page</h1>
                <Login/>
            </div>
        </>
    )
}

export default About