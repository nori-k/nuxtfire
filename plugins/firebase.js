import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBfOPMYvBeef6SgWRZ-TATOnw2RAr9yzPc",
      authDomain: "fir-nuxt-57ae0.firebaseapp.com",
      databaseURL: "https://fir-nuxt-57ae0.firebaseio.com",
      projectId: "fir-nuxt-57ae0",
      storageBucket: "fir-nuxt-57ae0.appspot.com",
      messagingSenderId: "277624243625"
    }
  )
}

export default firebase
