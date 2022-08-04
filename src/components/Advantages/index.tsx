import { AdvantagesContainer } from "./styles";
import {
  FaClock,
  FaDollarSign,
  FaHeadset,
  FaPlane,
  FaStore,
} from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { Card } from "./Card";

export function Advantages() {
  return (
    <AdvantagesContainer>
      <Card
        icon={<FaStore color={"#FFF"} size={48} />}
        content="Seja dono do seu próprio negócio"
      />
      <Card
        icon={<FaDollarSign color={"#FFF"} size={48} />}
        content="Conquiste sua independência financeira"
      />
      <Card
        icon={<BsGraphUp color={"#FFF"} size={48} />}
        content="Lucros recorrentes"
      />
      <Card
        icon={<FaHeadset color={"#FFF"} size={48} />}
        content="Suporte e orientação"
      />
      <Card
        icon={<IoIosLogIn color={"#FFF"} size={48} />}
        content="Início imediato"
      />
      <Card
        icon={<FaPlane color={"#FFF"} size={48} />}
        content="Sua representação não precisa de ponto físico"
      />
      <Card
        icon={<FaClock color={"#FFF"} size={48} />}
        content="Você não tem flexibilidade de horário e organiza sua agenda"
      />
    </AdvantagesContainer>
  );
}
