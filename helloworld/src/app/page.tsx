import Link from "next/link";

export default function Home(){
    return(
        <>
        <h1>Welcome home!</h1>
        <Link href = "/blog">Blog</Link>
        <br/>
        <Link href = "/products">Products</Link>
        </>
    
)
}
