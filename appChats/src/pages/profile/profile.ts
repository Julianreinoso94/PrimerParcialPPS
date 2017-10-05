import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile} from '../profile';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile1 ={} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private afAuth:AngularFireAuth , private afDatabase:AngularFireDatabase 
     ) {
  }
  perfil: string = '';
  sexo: string = '';

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  createProfile()
  {
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.list('profile/${auth.uid}').push(this.profile1)
      .then(()=>this.navCtrl.push('HomePage'))

    })
  }

}
