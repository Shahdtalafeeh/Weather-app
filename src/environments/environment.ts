// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyB3eEZ29AGLGkstsYNORTVnBpdjFT09jGQ',
    authDomain: 'weather-app-project-69c3f.firebaseapp.com',
    projectId: 'weather-app-project-69c3f',
    storageBucket: 'weather-app-project-69c3f.appspot.com',
    messagingSenderId: '264103047550',
    appId: '1:264103047550:web:446bd10423e33db1f3432f',
  },
  weatherApiBaseUrl: 'https://openweather43.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'openweather43.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'fbb347a828msh719851731918c1dp1f3c26jsnaf89ef9d5660',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
