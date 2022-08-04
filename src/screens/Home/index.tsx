import { useEffect, useState } from "react";
import { About } from "../../components/About";
import { Advantages } from "../../components/Advantages";
import { ComeTogether } from "../../components/ComeTogether";
import { Contact } from "../../components/Contact";
import { HomeContainer } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Advantages />
      <ComeTogether />
      <Contact />
    </HomeContainer>
  );
}
