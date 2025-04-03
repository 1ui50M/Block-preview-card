import Image from "next/image"
import Header from "./Header"
import Blog from "./Blog"
import Profile from "./Profile"

const Card = () => {
  return (
    <div className="contenido">
        <div className="parte-1">
        <Image src={"./illustration-article.svg"} alt={""} width={320} height={100}/>
        <Header/>
        </div>
        <Blog/>
        <Profile/>
    </div>
  )
}

export default Card