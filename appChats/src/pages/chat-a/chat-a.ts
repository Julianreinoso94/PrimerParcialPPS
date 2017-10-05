import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ChatAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-a',
  templateUrl: 'chat-a.html',
})
export class ChatAPage {
  username: string ='';
  message:string='';
  s;
  email: string;
  messages:object[]=[];
  public datosUserLog;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db:AngularFireDatabase,private fire: AngularFireAuth) {

      //DATOS DEL USUARIO
      this.username = fire.auth.currentUser.email;
      this.datosUserLog = fire.auth.currentUser.uid;


      this.s=this.db.list('/chat').subscribe (data=>
        {
          this.messages=data;
          
          //data.map(elem=>{
            // this.messages.push(elem);
         // })
        });
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatAPage');
   
  }

  sendMessage()
  {
    this.db.list('/chat').push(
      {
        username : this.username,
        message: this.message

      }).then( ()=>{

      }).catch( ()=>{

      });
  }


}
