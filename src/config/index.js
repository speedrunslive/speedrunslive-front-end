//export const apiUrl = 'http://api.speedrunslive.com'
export const DEV = process.env.NODE_ENV !== 'production';
export const port = process.env.PORT || 3000;
export const apiUrl = 'http://192.168.99.100:3000'; // This is your docker-machine IP