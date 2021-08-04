# HTML5  

## Web Push
##### Service Worker Development Cookbook (2016)
__by Sean Amarasinghe__
###### Chapter 8: Experimenting with Web Push
Generate a _vapid_ key using the `web-push` module on the command line:  
```
> npx web-push generate-vapid-keys
```
In order to support older browsers you may need to also get a GCM API key, but you don't need this in desktop Chrome 63 or higher.  

__Articles__  
* [Node.js Push Notification](https://thecodebarbarian.com/sending-web-push-notifications-from-node-js.html)
* [Push Notification with React](https://medium.com/@jasminejacquelin/integrating-push-notifications-in-your-node-react-web-app-4e8d8190a52c#9a53)

__Alternative Push Library__
* [push.js](https://pushjs.org/)  
* [minishlink/web-push](https://github.com/web-push-libs/web-push-php)


# Media Device
To create handle the image capture sent from the client, on ExpressJS, the file upload module `express-fileupload` is imperative. It sits as the middleware that processes the file so that is doesn't get rejected by the other request processing middlewares like json parser or post/body parser.  
