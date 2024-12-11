import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const urlApi = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(urlApi + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  return (
    <>
      <div className="container py-4">
        <h1>Lista dei post:</h1>
        {posts.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th scope="col">Autore</th>
                <th scope="col">Contenuto</th>
                <th scope="col">Immagine</th>
                <th scope="col">Categoria</th>
                <th scope="col">Pubblico</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        ) : (
          <p>ao</p>
        )}
      </div>
    </>
  );
}
