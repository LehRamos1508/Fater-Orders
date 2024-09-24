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
import { IProduct } from "@/interfaces/IProducts";
import { ProductEditValidator } from "@/validator/ProductEditValidator";

const EditTemplate = () => {
  const formik = useFormik<IProduct>({
    initialValues: {
      brand: "",
      description: "",
      flavor: "",
      value: 0,
      weight: 0,
    },
    validationSchema: ProductEditValidator,
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
            name="description"
            label="Descrição"
            fullWidth
            value={values.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Box>
        <Box mb={1}>
          <TextField
            name="brand"
            label="Marca"
            fullWidth
            value={values.brand}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.brand}
          />
        </Box>
        <Box mb={1}>
          <TextField
            name="value"
            label="Valor"
            fullWidth
            value={values.value}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.value}
          />
        </Box>
        <Box mb={1}>
          <TextField
            name="weight"
            label="Peso (gr.)"
            fullWidth
            value={values.weight}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.weight}
          />
        </Box>
        <Box mb={1}>
          <Select
            name="flavor"
            label="Sabor"
            fullWidth
            value={values.flavor}
            onChange={(ev) => setFieldValue("flavor", ev.target.value)}
            error={!!errors.flavor}
          >
            <MenuItem value="">-- Não Informado --</MenuItem>
            <MenuItem value="morango">Morango</MenuItem>
            <MenuItem value="chocolate">Chocolate</MenuItem>
            <MenuItem value="abacaxi">Abacaxi</MenuItem>
          </Select>
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

export default EditTemplate;
