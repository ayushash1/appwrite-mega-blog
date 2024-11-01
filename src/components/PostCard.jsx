/* eslint-disable react/prop-types */
import appwriteSerivice from "../appwrite/config"
import { Link } from "react-router-dom"

const PostCard = ({
  $id,    // app write expects $id insted of id
  title,
  featuredImage,
}) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-lg p-4">
        <div className="w-full justify-center mb-4">
          <img src={appwriteSerivice.getFilePreview(featuredImage)} alt={title} className="rounded-xl"/>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard