import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactContainer, ContactForm, ContactText } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneNumber } from "../../utils/validations";
import { normalizePhoneNumber } from "../../utils/masks";

interface IFormInputs {
  name: string;
  email: string;
  site: string;
  phone: string;
  corporateName?: string;
}

let schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório."),
  email: yup
    .string()
    .email("Insira um e-mail válido.")
    .required("Email é obrigatório."),
  site: yup
    .string()
    .url("Insira um website válido")
    .required("Site é obrigatório."),
  corporateName: yup.string().required("Razão Social é obrigatória."),
  phone: yup
    .string()
    .matches(phoneNumber, "Insira um telefone válido")
    .required("Telefone é obrigatório."),
});

export function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data: any) => {
    alert("Dados inseridos com sucesso!");
  }, []);

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

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
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="corporate_name">
          <p>Razão Social:</p>
          {errors.corporateName && <span>{errors.corporateName.message}</span>}
          <input
            placeholder="Digite aqui o nome da sua empresa"
            type="text"
            id="corporateName"
            {...register("corporateName")}
          />
        </label>
        <div>
          <label htmlFor="name">
            <p>Nome:</p>
            {errors.name && <span>{errors.name.message}</span>}
            <input
              placeholder="Digite aqui seu nome"
              type="text"
              id="name"
              {...register("name")}
            />
          </label>
          <label htmlFor="email">
            <p>E-mail:</p>
            {errors.email && <span>{errors.email.message}</span>}
            <input
              placeholder="contato@empresa.com"
              type="email"
              id="email"
              {...register("email")}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <p>Telefone:</p>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input
              placeholder="()_____-____"
              type="text"
              id="phone"
              {...register("phone")}
            />
          </label>
          <label htmlFor="site">
            <p>Site:</p>
            {errors.site && <span>{errors.site.message}</span>}
            <input
              placeholder="https://suaempresa.com.br"
              type="text"
              id="site"
              {...register("site")}
            />
          </label>
        </div>
        <button>Enviar</button>
      </ContactForm>
    </ContactContainer>
  );
}
