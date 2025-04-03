import Image from "next/image"

const Profile = () => {
  return (
    <div className="icono">
    <Image src="/image-avatar.webp" alt="Greg Hooper" width={26} height={26} />
    <h5 className="nombre">Greg Hooper</h5>
  </div>
  )
}

export default Profile