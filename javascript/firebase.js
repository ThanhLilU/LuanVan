	
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA83dGfPP76CuPu4Ud9-kDCXHZqeIAdrm4",
	authDomain: "beuluanvan.firebaseapp.com",
	projectId: "beuluanvan",
	storageBucket: "beuluanvan.appspot.com",
	messagingSenderId: "416247226847",
	appId: "1:416247226847:web:5883cdfe4edbeaef9ce46a",
	measurementId: "G-8EB6BYK6KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
