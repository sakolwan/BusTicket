import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: "สมัครสมาชิกสำเร็จ",
      subTitle: "ลงทะเบียนสำเร็จ ขอให้สนุกกับการใช้แอปพลิเคชันครับ",
      buttons: [
        {
          text : 'OK',
          handler: data => {
            this.goHome();
            console.log('OK');
          }
        }
      ]
    });
    alert.present();
  }
  
  goHome() {
    this.navCtrl.pop();
  }
}
