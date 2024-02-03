import React,{ useState } from 'react';
import axios from "axios";
import { baseURL } from "../../auth";

const DataForm = ({}) => {
    const [errorMessage, ErrorMessage] = useState("");
    


    const  FetchDataAPI = (e) => {
        e.preventDefault();
        let name = document.getElementById("UserName").value;
        let phone = document.getElementById("UserNumber").value;
        const token = localStorage.getItem("AuthAccessToken");
        const postUrl = baseURL + "/users/2/UpdateBusinessProfileAPI";
        const xData = JSON.stringify({
            "name": name,
        });
        axios.patch(postUrl, xData, {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
            ErrorMessage(err.response.data.name)
        });
    }


    async function getBusinessData(server) {
        var pr_url = `${baseURL}/users/BusinessProfileListView`;
        const x = await axios.get((pr_url), {
          headers: { 'Content-Type': 'application/json'   },
        });
        let data = x.data.results;
        return data
      }


    return (
        <>
            <div className="md:flex  md:p-10 p-4 md:mx-20">
                <div className="md:w-1/2 bg-white shadow dark:bg-[#1a1a1a] p-10 ">
                    <div className="w-full max-w-lg">

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                                    Name *
                                </label>
                                <input className="appearance-none block w-full bg-gray-50 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 text-sm  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="UserName" type="text" placeholder="enter name" />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                                    Number *
                                </label>
                                <input className="appearance-none block w-full bg-gray-50 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 text-sm  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="UserNumber" type="text" placeholder="enter number" />
                            </div>
                        </div>

                    </div>

                    <p className="text-sm md:mr-10 lg:ml-36 mb-4 text-red-500">{errorMessage}</p>
                    <div onClick={(e) => FetchDataAPI(e)}
                        className="flex float-left text-sm
                        mr-10 ml-10 lg:ml-36 
                        bg-[#1a1a1a] p-2  text-white
                        cursor-pointer shadow-md hover:bg-gray-600
                        dark:hover:bg-[#313131]" >
                        Submit
                    </div>

                </div>
            </div>
        </>
    )
}

export default DataForm;
