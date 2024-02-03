import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { app_id, app_secret, baseURL } from '../auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";


const Login = () => {
    const [formInput, updateFormInput] = useState({ username: '', password: '' });
    const [errorMessage, ErrorMessage] = useState("");

    async function FetchTokenAPI(e) {
        e.preventDefault();
        ErrorMessage("");
        const { username, password } = formInput;
        if (!username) { ErrorMessage("enter username"); return false };
        if (!password) { ErrorMessage("enter password"); return false };
        try {
            let access = await FetchAuthToken(username, password);
            return false;
        } catch (error) {
            console.log(error);
        };
    }



    const FetchUserData = async (token) => {
        if (!token) { return ErrorMessage("No access token"); }
        const token__convert_url = baseURL + '/users/UserListView';
        fetch(token__convert_url, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
        }).then(async data => await data.json())
            .then(
                async data => {
                    console.log(data);
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('UserName', data.results[0].name)
                    }
                    if (data.results[0].id) {
                        window.location.href = "/dashboard";
                    }
                    return false;
                }
            )
            .catch(error => {
                console.log(error);
                return { "error": "error" }
            });
    }



    const FetchAuthToken = async (username, password) => {
        const newData = {
            grant_type: "password",
            client_id: app_id,
            client_secret: app_secret,
            username: username,
            password: password,
        };
        var token__convert_url = baseURL + '/auth/token';
        await fetch(token__convert_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        }).then(async data => data.json())
            .then(async data => {
                console.log(data);
                localStorage.setItem('AuthAccessToken', data.access_token)
                localStorage.setItem('AuthRefreshToken', data.refresh_token)
                // if (typeof window !== 'undefined') {
                //     localStorage.setItem('AuthAccessToken', data.access_token)
                //     localStorage.setItem('AuthRefreshToken', data.refresh_token)
                // }
                let user = await FetchUserData(data.access_token);
                // let currentDate = new Date()
                // let currentHour = currentDate.setHours(currentDate.getHours() + 1);
                // localStorage.setItem('refresh_time', currentHour)
                //return data;
            }
            )
            .catch(error => { console.log(error); return error });
    }


    const firebaseConfig = {
        apiKey: "AIzaSyA9YGJtOgR8WZvEMkZLjM-gBTPQQlJ1jCI",
        authDomain: "test-64711.firebaseapp.com",
        projectId: "test-64711",
        storageBucket: "test-64711.appspot.com",
        messagingSenderId: "1031884848221",
        appId: "1:1031884848221:web:91b7a5aa75d33016f161b4",
        measurementId: "G-3GCHNFP38B"
    };

    const app = initializeApp(firebaseConfig);
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const GoogleSignIn = async () => {
        localStorage.clear(); let googleToken;
        const google_provider = await signInWithPopup(firebaseAuth, provider)
            .then(async (response) => {
                googleToken = response._tokenResponse.oauthAccessToken.toString();
                var prData = response.user.providerData;
                var name = prData[0].displayName;
                var email = prData[0].email;
                var image = prData[0].photoURL;
                localStorage.setItem('userEmailX', email);
                localStorage.setItem('userNameX', name);
                localStorage.setItem('userProfileImageX', image);
                localStorage.setItem("user", JSON.stringify(prData));
                localStorage.setItem("accessToken", JSON.stringify(googleToken));
                await FetchGoogleToken(googleToken);
            }).catch((error) => {
                console.log(error);
            })
    };

    async function FetchGoogleToken(googleAuthToken) {
        const newData = {
            grant_type: "convert_token",
            client_id: app_id,
            client_secret: app_secret,
            backend: "google-oauth2",
            token: googleAuthToken,
        };
        const token__convert_url = baseURL + '/auth/convert-token';
        fetch(token__convert_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        }).then(data => data.json())
            .then(async data => {
                console.log(data);

                if (typeof window !== 'undefined') {
                    localStorage.setItem('AuthAccessToken', data.access_token)
                    localStorage.setItem('AuthRefreshToken', data.refresh_token)
                }
                let user = await FetchUserData(data.access_token);
                let currentDate = new Date()
                let currentHour = currentDate.setHours(currentDate.getHours() + 1);
                localStorage.setItem('refresh_time', currentHour)
                return false;
            }
            )
            .catch(error => console.log(error));
    }


    return (
        <>

            <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-layer-2 py-8 px-4 shadow sm:px-10">


                        <h1 className="text-center text-xl font-semibold text-heading">
                            Welcome Back!
                        </h1>
                        <form className="mt-6 flex flex-col space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-heading" >
                                    Email
                                </label>
                                <input
                                    onChange={e => updateFormInput({ ...formInput, username: e.target.value })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="mt-2 block w-full border-2 border-muted-3 bg-transparent px-4 py-2.5 text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-heading" >
                                    Password
                                </label>
                                <input
                                    onChange={e => updateFormInput({ ...formInput, password: e.target.value })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="mt-2 block w-full border-2 border-muted-3 bg-transparent px-4 py-2.5 text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>
                            <div className="flex justify-end">
                                <Link href="/reset-password"
                                    className="text-sm font-semibold text-primary hover:text-primary-accent" >
                                    Forgot password?
                                </Link>
                            </div>
                            {/* <p className="text-sm text-red-500 ml-2">{errorMessage}</p> */}

                            <button
                                onClick={(e) => FetchTokenAPI(e)}
                                type="submit"
                                className="inline-flex cursor-pointer hover:bg-[#f1f1f1] dark:hover:bg-[#2a2a2a] shadow-md items-center justify-center border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80">
                                Login
                            </button>


                            <button
                                onClick={GoogleSignIn}
                                type="button"
                                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 
                                border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text 
                                shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2
                                 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80" >
                                <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                                    <path
                                        fill="#FFC107"
                                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                    />
                                    <path
                                        fill="#FF3D00"
                                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                                    />
                                    <path
                                        fill="#4CAF50"
                                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                    />
                                    <path
                                        fill="#1976D2"
                                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                    />
                                </svg>
                                Sign in with Google
                            </button>

                        </form>
                    </div>
                </div>
            </div>

            <div className='mt-20 h-20'></div>

        </>

    );
}
export default Login;

