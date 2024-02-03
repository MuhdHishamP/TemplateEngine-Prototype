import React, { useState } from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import HomeBody from "../components/Home/home"
import { baseURL } from '../auth';
import axios from 'axios';


const Home = ({ brandData }) => {
  return (
    <>
      <Header />
      <HomeBody brandData={brandData} />
      <Footer />
    </>

  )
}



export async function getServerSideProps() {
  const brandData = await FetchBrandMeta();
  return {
    props: {
      brandData,
    },
  };
}



async function FetchBrandMeta() {
  const pr_url = `${baseURL}/api/BrandListListView`;
  const x = await axios.get((pr_url), {
    headers: { 'Content-Type': 'application/json' },
  });
  return x?.data?.results;
}


export default Home;
