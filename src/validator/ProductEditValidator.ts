import validadorMessage from "@/constants/validatorMessages";
import * as Yup from "yup";
const {
  requiredField,
  maxLenght,
  minLenght,
  maxValue,
  minValue,
  equalLength,
  numericField,
} = validadorMessage;

export const ProductEditValidator = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required(requiredField)
      .min(3, minLenght)
      .max(100, maxLenght),
    brand: Yup.string().required().max(80, minLenght),
    value: Yup.number().typeError(numericField).min(0.01, minValue).required(),
    weight: Yup.number().typeError(numericField).min(0.01, minValue),
    flavor: Yup.string(),
  });
};
