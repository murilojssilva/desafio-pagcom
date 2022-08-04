import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardContainer {
  icon: ReactNode;
  content: string;
}

export function Card({ icon, content }: CardContainer) {
  return (
    <CardContainer>
      <span>{icon}</span>
      <p>{content}</p>
    </CardContainer>
  );
}
