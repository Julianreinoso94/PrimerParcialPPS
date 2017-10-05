import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import{ChatBPage} from '../chat-b/chat-b';
import{ChatAPage} from '../chat-a/chat-a';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,private alertCtrl:AlertController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) 
  {

  }    
 /*
  showAlert(title :string , mesagge: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }*/
  chatA()
  {
   this.navCtrl.setRoot(ChatAPage);
  }
  chatB()
  {
    this.navCtrl.setRoot(ChatBPage);
  }
  

}
