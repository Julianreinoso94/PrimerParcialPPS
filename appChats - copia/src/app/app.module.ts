import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';


//PLUGGIN
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

//DB
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
//import { AngularFireDatabase} from 'angularfire2/database';


var firebaseAuth  = {
  apiKey: "AIzaSyBAzufQrAc5uUTAuZ3ZMEH59SYMrn3uXTQ",
  authDomain: "appchats-96aa7.firebaseapp.com",
  databaseURL: "https://appchats-96aa7.firebaseio.com",
  projectId: "appchats-96aa7",
  storageBucket: "appchats-96aa7.appspot.com",
  messagingSenderId: "523487215548" 
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage
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
    RegisterPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
