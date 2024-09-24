import * as Yup from "yup";

export const ProductEditValidator = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Campo deve ter ao menos ${min} caracteres")
      .max(100, "Campo deve ter no máximo ${max} caracteres"),
    brand: Yup.string()
      .required()
      .max(80, "Campo deve ter no máximo ${max} caracteres"),
    value: Yup.number()
      .min(0.01, "Campo deve ter ao menos ${min} caracteres")
      .required(),
    weight: Yup.number().min(0.01, "Campo deve ter ao menos ${min} caracteres"),
    flavor: Yup.string(),
  });
};
