import {
  ComeTogetherContainer,
  ComeTogetherImage,
  ComeTogetherText,
} from "./styles";

import comeTogetherImage from "../../assets/come-together-image.png";

export function ComeTogether() {
  return (
    <ComeTogetherContainer>
      <ComeTogetherText>
        <h1>
          Vamos <span>Juntos</span>
        </h1>
        <ul>
          <li>Atuar como representante local da marca.</li>
          <li>Prospectar novos clientes para sua carteira.</li>
          <li>
            Atender presencialmente pequenas e médias empresas e profissionais
            autônomos.
          </li>
          <li>
            Analisar as necessidades de meio de pagamento de seus clientes.
          </li>
          <li>Treinar o cliente/lojista para o uso do equipamento e portal.</li>
          <li>Realizar pós-venda e suporte ao cliente.</li>
        </ul>
      </ComeTogetherText>
      <ComeTogetherImage>
        <img
          src={comeTogetherImage}
          alt="Pessoas apertando as mãos enquanto uma moça sorri"
        />
      </ComeTogetherImage>
    </ComeTogetherContainer>
  );
}
