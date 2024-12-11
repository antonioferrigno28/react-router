import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function showPosts() {
  const { id: postId } = useParams();

  const navigate = useNavigate();
  const urlApi = import.meta.env.VITE_API_URL;

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    fetch(`${urlApi}/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            console.log("not found");
          }
          throw new Error("Not found!");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        {post && (
          <div className="card w-50 mt-5">
            <img src={post.immagine} className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">
                <b>Autore:</b> <span className="fst-italic">{post.autore}</span>
              </h5>
              <p className="card-text">{post.contenuto}</p>
              <div className="d-flex">
                <p className="card-text">Categoria:</p>
                <span className="badge text-bg-secondary ms-3 mb-3">
                  {post.categoria}
                </span>
              </div>

              <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Torna alla lista dei post
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
