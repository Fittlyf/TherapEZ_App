this.importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
this.importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-storage-compat.js');

var firebaseConfig = {
    apiKey: "AIzaSyB9QLepVKOLuK6IshHapO5ezxn9elfIWrM",
    authDomain: "aipd-15f6b.firebaseapp.com",
    projectId: "aipd-15f6b",
    storageBucket: "aipd-15f6b.appspot.com",
    messagingSenderId: "253496855545",
    appId: "1:253496855545:web:adea80edbc86a4725d0b28",
    measurementId: "G-KRYBVHMYK8"
  };

this.firebase.initializeApp(firebaseConfig);
const storageRef = this.firebase.storage().ref().child(new Date().toUTCString());

const uploadFile = async (file) => {
    await storageRef.put(file).then(async (snapshot) => {
        console.log(snapshot);
        // await getVideoURL(storageRef)
    });
}

onmessage = (async (e) => {
    if (e.data.blob) {
        
        let blob = e.data.blob
        console.log(blob)

        try {
            const videoURL = URL.createObjectURL(blob);
            URL.revokeObjectURL(videoURL);
            await uploadFile(blob)

        } catch (error) {
            console.log(error)
        }

        postMessage('done');
    }
})