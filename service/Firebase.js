import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyDDUFsSRO1nH8RhS29e2t2D-T2P2r_GTiU",
    authDomain: "test-4041c.firebaseapp.com",
    databaseURL: "https://test-4041c.firebaseio.com",
    storageBucket: "test-4041c.appspot.com"
  };
  
export const Firebase = firebase.initializeApp(config);