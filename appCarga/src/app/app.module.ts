import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//PLUGGIN
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

//DB
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseAuth  = {
  apiKey: "AIzaSyCDLDZtnlim-MHyW30KYNN1jLiMjB6t-tI",
  authDomain: "appcarga-d9895.firebaseapp.com",
  databaseURL: "https://appcarga-d9895.firebaseio.com",
  projectId: "appcarga-d9895",
  storageBucket: "appcarga-d9895.appspot.com",
  messagingSenderId: "1930562520"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule, HttpModule,
     AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
