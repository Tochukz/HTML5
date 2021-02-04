'use strict';

self.addEventListener('push', event => {
  const data = event.data.json();
 
  // event.waitUntil(
  //   self.registration.showNotification(data.title, {
  //     body: data.body,
  //     icon: 'https://mywebstation.tochukwu.xyz/images/logo8.png',
  //   })
  // );

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: 'https://mywebstation.tochukwu.xyz/images/logo8.png',
  });
});