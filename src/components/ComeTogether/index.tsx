import {
  ComeTogetherContainer,
  ComeTogetherImage,
  ComeTogetherText,
} from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

import comeTogetherImage from "../../assets/come-together-image.png";

interface TitleDetails {
  username: string;
  name: string;
  id: number;
}

interface AlbumDetails {
  id: number;
  title: string;
  url: string;
}

export function ComeTogether() {
  const [users, setUsers] = useState<TitleDetails[]>([]);
  const [albums, setAlbums] = useState<AlbumDetails[]>([]);

  useEffect(() => {
    api.get("/comments").then((response) => {
      setUsers(response.data.slice(0, 6));
    });
    api.get("/photos").then((response) => {
      setAlbums(response.data);
    });
  }, []);
  const user1 = users.find((user) => user.id === 1);
  const album1 = albums.find((album) => album.id === 1);
  console.log(album1);
  return (
    <ComeTogetherContainer>
      <ComeTogetherText>
        <h1>
          {user1?.username}
          <span>{user1?.name}</span>
        </h1>
        <ul>
          {users.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </ComeTogetherText>
      <ComeTogetherImage>
        <img src={album1?.url} alt={album1?.title} />
      </ComeTogetherImage>
    </ComeTogetherContainer>
  );
}
