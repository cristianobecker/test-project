import * as functions from 'firebase-functions';

const REGION = 'us-east1';
const CONFIG = functions.config().any.key;


export const exampleFunction = functions.region(REGION).https.onRequest((req, res) => {
    console.log('exampleFunction()');
    res.send('hi ' + CONFIG);
   });
