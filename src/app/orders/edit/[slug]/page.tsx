import { TextField } from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";

interface PedidosEditProps {
  params: { slug: string };
}

const PedidosEdit: React.FC<PedidosEditProps> = ({ params }) => {
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default PedidosEdit;
