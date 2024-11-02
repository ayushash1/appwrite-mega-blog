import { useEffect, useState } from "react";
import { Container, PostForm } from "../components/Index";
import appwriteSerice from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    appwriteSerice.getPost(slug).then((post) => {
      if (post) {
        appwriteSerice.getPost(slug).then(post => {
          if (post) { 
            setPost(post);
          }
        })
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost