import * as Yup from "yup";

export const OrderEditValidator = () => {
  return Yup.object().shape({
    date: Yup.date().required("Campo obrigatório"),
    client_id: Yup.string()
      .required("Campo obrigatório")
      .length(11, "Campo deve ter 11 caracteres"),
    payment_method: Yup.number()
      .required("Campo obrigatório")
      .min(1, "Selecione um método de pagamento válido"),
    quantity: Yup.number()
      .min(1, "Campo deve ter ao menos 1 item")
      .required("Campo obrigatório"),
    total: Yup.number()
      .min(0.01, "O valor total deve ser maior que 0")
      .required("Campo obrigatório"),
  });
};
