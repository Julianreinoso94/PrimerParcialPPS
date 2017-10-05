import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { LoggedinPage } from '../loggedin/loggedin';
//import { GamePage } from '../game/game';
//import { RegisterPage } from '../register/register';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import{ProfilePage} from '../profile/profile';



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name: string = '';
 pass:string='';
	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
 
     // this.navCtrl.setRoot( HomePage );
     this.navCtrl.setRoot(HomePage);
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  usuario()
  {
    this.name='usuario@usuario.com';
    this.pass='123456';
  }
  invitado()
  {
    this.name='invitado@invitado.com';
    this.pass='123456';
  }
  jugador1(){
    this.name='jugador1@jugador1.com';
    this.pass='123456';
  }
  jugador2(){
    this.name='jugador2@jugador2.com';
    this.pass='123456';
  }
  administrador(){
    this.name='administrador@administrador.com';
    this.pass='123456';
  }

}