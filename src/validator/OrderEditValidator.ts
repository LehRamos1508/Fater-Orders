import validadorMessage from "@/constants/validatorMessages";
import * as Yup from "yup";
const { requiredField, equalLength, minValue, maxValue, numericField } =
  validadorMessage;

export const OrderEditValidator = () => {
  return Yup.object().shape({
    date: Yup.string().required(requiredField).length(10, equalLength),
    client_id: Yup.string().required(requiredField).length(11, equalLength),
    payment_method: Yup.string().required(requiredField),
    quantity: Yup.number()
      .typeError(numericField)
      .min(1, minValue)
      .required(requiredField),
    totalValue: Yup.number()
      .typeError(numericField)
      .min(0.01, minValue)
      .required(requiredField),
  });
};
