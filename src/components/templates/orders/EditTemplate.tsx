"use client";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";
import { useFormik } from "formik";
import { IOrder } from "@/interfaces/IOrders";
import { OrderEditValidator } from "@/validator/OrderEditValidator"

const EditOrder = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      date: "",
      client_id: "",
      payment_method: 0,
      quantity: 0,
      total: 0,
    },
    validationSchema: OrderEditValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <Box mb={1}>
          <TextField
            name="date"
            label="Data"
            fullWidth
            value={values.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
          />
        </Box>
        <Box mb={1}>
          <TextField
            name="client_id"
            label="CPF do Cliente"
            fullWidth
            value={values.client_id}
            onChange={handleChange}
            error={!!errors.client_id}
            helperText={errors.client_id}
          />
        </Box>
        <Box mb={1}>
          <Select
            name="payment_method"
            label="Forma de Pagamento"
            fullWidth
            value={values.payment_method}
            onChange={(ev) => setFieldValue("payment_method", ev.target.value)}
            error={!!errors.payment_method}
          >
            <MenuItem value="">-- Não Informado --</MenuItem>
            <MenuItem value="cartao">Cartão</MenuItem>
            <MenuItem value="boleto">Boleto</MenuItem>
            <MenuItem value="dinheiro">Dinheiro</MenuItem>
          </Select>
        </Box>
        <Box mb={1}>
          <TextField
            name="quantity"
            label="Quantidade de Itens"
            type="number"
            fullWidth
            value={values.quantity}
            onChange={handleChange}
            error={!!errors.quantity}
            helperText={errors.quantity}
          />
        </Box>
        <Box mb={1}>
          <TextField
            name="total"
            label="Valor Total"
            type="number"
            fullWidth
            value={values.total}
            onChange={handleChange}
            error={!!errors.total}
            helperText={errors.total}
          />
        </Box>
        <Button variant="outlined" color="secondary">
          <Typography>Cancelar</Typography>
        </Button>
        <Button variant="contained" color="primary" type="submit">
          <Typography>Salvar</Typography>
        </Button>
      </Box>
    </Layout>
  );
};

export default EditOrder;
