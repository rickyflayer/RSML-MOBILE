import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor(public alertController: AlertController,
    public toastController: ToastController) { }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Konfirmasi',
      message: 'Anda Sudah Yakin?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yakin',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Data Anda Telah Terdaftar',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
