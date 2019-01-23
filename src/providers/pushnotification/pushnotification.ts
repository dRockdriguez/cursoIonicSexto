import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(
    private oneSignal: OneSignal,
    private platform: Platform
  ) {
    console.log('Hello PushnotificationProvider Provider');
  }

  initNoti() {
    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('27669d98-6fc4-469d-bc9f-8d8746b905dd', '506005353551');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log('Notificacion recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificacion abierta');
      });

      this.oneSignal.endInit();
    }

  }

}
