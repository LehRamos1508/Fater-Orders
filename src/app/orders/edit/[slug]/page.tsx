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
import { OrderEditValidator } from "@/validator/OrderEditValidator";
import EditTemplate from "@/components/templates/orders/EditTemplate";

interface OrderEditProps {
  params: { slug: string };
}

const OrderEdit = ({ params }: OrderEditProps) => {
  return <EditTemplate />;
};

export default OrderEdit;
