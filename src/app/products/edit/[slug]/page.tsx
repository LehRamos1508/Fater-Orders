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
import EditTemplate from "@/components/templates/products/EditTemplate";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit = ({ params }: ProductEditProps) => {
  return <EditTemplate />;
};

export default ProductEdit;
