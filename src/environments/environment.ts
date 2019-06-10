// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCL7n1_n7Xu5gm3o37vZwA5OLL0Q1l0nXQ",
    authDomain: "infinity-taki.firebaseapp.com",
    databaseURL: "https://infinity-taki.firebaseio.com",
    projectId: "infinity-taki",
    storageBucket: "infinity-taki.appspot.com",
    messagingSenderId: "645769346101",
    appId: "1:645769346101:web:4e0b8a2310a1756a"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
