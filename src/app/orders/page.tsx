"use client";
import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Pedidos = () => {

  const [rows, setRows] = useState([])
  
  useEffect(() => {
    const fetchPedidos = async () => {
      const response = await axios.get(
        `${env.apiBaseUrl}/pedidos`
      );

      const orders = response.data.pedidos.map((order: any) => ({
        id: order.id,
        date: order.data,
        client_id: order.cpf,
        payment_method: order.forma_pagamento,
        quantity: order.quantidade_itens,
        total: order.valor_total
      }));

      setRows(orders)
    };
    fetchPedidos();
  }, []);
  
  const headCells = [
    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Data",
    },
    {
      id: "client_id",
      numeric: false,
      disablePadding: false,
      label: "CPF",
    },
    {
      id: "payment_method",
      numeric: true,
      disablePadding: false,
      label: "Forma de pagamento",
    },
    {
      id: "quantity",
      numeric: true,
      disablePadding: false,
      label: "Quantidade de itens",
    },
    {
      id: "total",
      numeric: true,
      disablePadding: false,
      label: "Valor total",
    },
  ];

  return (
    <Layout>
      <Box>
        <CustomTable rows={rows} headCells={headCells} title="Pedidos" />
      </Box>
    </Layout>
  );
};

export default Pedidos;
