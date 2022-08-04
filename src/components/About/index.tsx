import { AboutContainer } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface TitleDetails {
  postId: number;
  name: string;
  body: string;
  email: string;
}

export function About() {
  const [posts, setPosts] = useState<TitleDetails[]>([]);
  useEffect(() => {
    api.get("/comments").then((response) => {
      setPosts(response.data);
    });
  }, []);
  const post1 = posts.find((post) => post.postId === 1);
  return (
    <AboutContainer>
      <h1>
        {post1?.name}
        <br />
        <span>{post1?.email}</span> de <span>{post1?.email}</span>
      </h1>
      <p>{post1?.body}</p>
    </AboutContainer>
  );
}
