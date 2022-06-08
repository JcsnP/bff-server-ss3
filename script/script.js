const date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
const time = document.getElementById('time');

setTimeout(() => {
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);
    time.innerHTML = hour + " : " + minutes;;
    toast.show();
}, 5000);