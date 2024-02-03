import React,{useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar/admin-navbar";
import AdminSidebar from "../../components/AdminSidebar/admin-sidebar";
// import Footer from "../components/Footer";
import { useRouter } from 'next/router';


const Home = () => {

  const router = useRouter();
  useEffect(() => {
    let accessToken = localStorage.getItem('AuthAccessToken');
    if(!accessToken) { router.push("/login") };
    if(accessToken === "undefined") { router.push("/login") };
  }, []);



  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64" >
        <AdminNavbar />
        <section className="md:p-10">
          <div className="px-4 mx-auto w-full " >

                   Home
        
            {/* <Footer /> */}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;
