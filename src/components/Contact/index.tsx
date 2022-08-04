import { FormEvent, useState } from "react";
import { ContactContainer, ContactForm, ContactText } from "./styles";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(corporateName, name, email, phone, site);
    setPhone("");
    setEmail("");
    setCorporateName("");
    setSite("");
    setName("");
  }
  return (
    <ContactContainer>
      <ContactText>
        <h2>Preencha com seus dados e cadastre-se</h2>
        <p>Agradecemos seu interesse em ser nosso Parceiro.</p>
        <p>
          Para sabermos um pouco a seu respeito, pedmos que preencha o
          formulário e o nosso time de parcerias entrará em contato com você.
        </p>
      </ContactText>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="corporate_name">
          <p>Razão Social:</p>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCorporateName(e.target.value)
            }
            value={corporateName}
            type="text"
            name="corporate_name"
          />
        </label>
        <div>
          <label htmlFor="name">
            <p>Nome:</p>
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              type="text"
              name="name"
            />
          </label>
          <label htmlFor="email">
            <p>E-mail:</p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              type="email"
              name="email"
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <p>Telefone:</p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
              value={phone}
              type="text"
              name="phone"
            />
          </label>
          <label htmlFor="site">
            <p>Site:</p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSite(e.target.value)
              }
              value={site}
              type="text"
              name="site"
            />
          </label>
        </div>
        <button>Enviar</button>
      </ContactForm>
    </ContactContainer>
  );
}
