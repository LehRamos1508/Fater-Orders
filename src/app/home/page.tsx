"use client";
import Layout from "@/components/UI/organisms/Layout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10rem"
        bgcolor="#f5f5f5"
        sx={{ textAlign: "center", padding: 2 }}
      >
        <Typography variant="h3" component="h1" color="blue">
          Bem-vindo ao Fatec Orders 💲📊
        </Typography>
      </Box>
    </Layout>
  );
};

export default Home;
