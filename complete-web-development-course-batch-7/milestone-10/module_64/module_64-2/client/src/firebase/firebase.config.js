import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxIES-dHK0SkeeRg3zkXXz4lvMudxrzZs",
  authDomain: "sample-firebase-project-a892d.firebaseapp.com",
  projectId: "sample-firebase-project-a892d",
  storageBucket: "sample-firebase-project-a892d.appspot.com",
  messagingSenderId: "253477801197",
  appId: "1:253477801197:web:81349c5fc03039224210e4"
};

const app = initializeApp(firebaseConfig);

export default app;