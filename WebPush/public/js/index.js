const publicVapidKey='BGy_8YCk-2GZew1NGx47BWsrp9eeT_xHynU-uABE5FklAi1SgocFQXTefYG2eNrrCoTQVBz90krRmOJlNLZH45g';

if ('serviceWorker' in navigator) {    
    run(); 
} else {
    console.error('Service Wokrer API not supported: ', navigator);
}

let subscription;
async function run() {
    try {
        // Registering service worker
        const registration = await navigator.serviceWorker.register('/service-worker.js', {scope: '/'});
    
        // Subscribe to push notification
        subscription = await registration.pushManager.subscribe({        
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });

        await fetch('/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch(err) {
        console.error('run:', err);
    }
}

function sendNote() {   
    const message = document.querySelector('#message').value;  
    const payload = {subscription, data: { message }}; 
 
    fetch('/sendNotification', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        // console.log('result', result);
    }).catch(err => {
        console.error('note', err);
    });
}

function unRegister() {
    navigator.serviceWorker.getRegistration().then(function(registration) {
        registration.unregister();
        window.location.reload();
    });
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
   
