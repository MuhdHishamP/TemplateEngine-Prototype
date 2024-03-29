import { useEffect, useState } from "react";
import AdminNavbar from "../../../../components/AdminNavbar/admin-navbar";
import AdminSidebar from "../../../../components/AdminSidebar/admin-sidebar";
import axios from "axios";
import { baseURL, accessToken } from "@/auth";
import Card1 from "@/components/Cards/Card1";
import Builder from "@/components/Builder/Builder";
// import FooterAdmin from "../../dashboard/components/Footers/FooterAdmin.js";

const BuilderMain = () => {
  const [builder, setbuilder] = useState([]);
  async function FetchBrandMeta() {
    const pr_url = `${baseURL}/api/BuilderMetaListView`;
    const x = await axios.get(pr_url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setbuilder(x?.data?.results);
    console.log(x?.data?.results);
  }
  useEffect(() => {
    FetchBrandMeta();
  }, []);

  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div>
          <Builder />
        </div>

        {/* <FooterAdmin /> */}
      </div>
    </>
  );
};

export default BuilderMain;
