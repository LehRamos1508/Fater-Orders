import { TextField } from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default ProductEdit;
