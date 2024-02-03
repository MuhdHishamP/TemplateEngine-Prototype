import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app_id, app_secret, baseURL } from "./index";
import axios from "axios";

var googleToken;
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
const signIn = async () => {
    //const router = useRouter();
    localStorage.clear();
    localStorage.removeItem('access_token');
    const google_provider = await signInWithPopup(firebaseAuth, provider)
        .then( async (response) => {
            console.log(response);
            googleToken = response._tokenResponse.oauthAccessToken.toString();
            var prData = response.user.providerData;
            var name = prData[0].displayName;
            var email = prData[0].email;
            var image = prData[0].photoURL;
            localStorage.setItem('userEmailX', email);
            localStorage.setItem('userNameX',name);
            localStorage.setItem('userProfileImageX', image);
            localStorage.setItem("user", JSON.stringify(prData));
            localStorage.setItem("accessToken", JSON.stringify(googleToken));
            await FetchGoogleToken(googleToken);
        }).catch((error) => {
            console.log(error);
        })
};


async function FetchGoogleToken(googleAuthToken) {
    var newData = {
        grant_type: "convert_token",
        client_id: app_id,
        client_secret: app_secret,
        backend: "google-oauth2",
        token: googleAuthToken,
    };
    var token__convert_url = baseURL + '/auth/convert-token';
    fetch(token__convert_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
    }).then(data => data.json())
        .then(async data => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('AuthAccessToken', data.access_token)
                    localStorage.setItem('AuthRefreshToken', data.refresh_token)
                }
                let user = await FetchUser(data.access_token);
                let currentDate = new Date()
                let currentHour = currentDate.setHours(currentDate.getHours() + 1);
                localStorage.setItem('refresh_time', currentHour)
                return false;
            }
        )
        .catch(error => console.log(error));
}


async function FetchUser(token) {
    if (!token) { return "No access token" }
    var token__convert_url = baseURL + '/users/user';
    fetch(token__convert_url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token },
    }).then(async data => await data.json())
        .then(
            async data => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('UserAuthID', data[0].id)
                    localStorage.setItem('UserAuthEmail', data[0].email)
                }
                let profile = await FetchUserData(token, data[0].id)
            }
        )
        .catch(error => {
            console.log(error);
            return { "error": "error"}
        });
}


async function FetchUserData(accessToken, userId) {
    let userProfileUrl = baseURL + "/users/createAppProfile";
    let form_data = new FormData();
    form_data.append("user_id", userId)
    axios.post(userProfileUrl, form_data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(res => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('UserProfileAuthID', res.data.response.id);
        }
        setTimeout(() => {
            window.location.href = "/dashboard"
        }, 2000);
        return false;
    }).catch(err => console.log(err));
}




export default signIn;
export { googleToken };