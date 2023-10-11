this.self.importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js")

onmessage = (async (e) => {
    if (e.data.blob) {

        let blob = e.data.blob
        console.log(blob)

        try {
            const videoURL = URL.createObjectURL(blob);
            URL.revokeObjectURL(videoURL);
            // await uploadFile(blob)

        } catch (error) {
            console.log(error)
        }

        postMessage('done');
    }
})