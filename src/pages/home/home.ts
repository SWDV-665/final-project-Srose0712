import { Component, wtfStartTimeRange } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider as CharacterServiceProvider } from '../../providers/character-service/character-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Character profiles";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: CharacterServiceProvider, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Character - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Character - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  shareItem(item, index) {
    console.log("Sharing Character - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Sharing Character - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    let message = "Character - Name: " + item.name + " - Guild: " + item.guild;
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared successfully!");
    }).catch(() => {

    });
  }

  editItem(item, index) {
    console.log("Edit Character - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Character - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showItemPrompt(item, index);
  }  

  addItem() {
    console.log("Adding Character");
    this.inputDialogService.showItemPrompt();
  }

  addFriend() {
    console.log("Adding Friend");
    this.inputDialogService.showAlert();

    //simulating acceptance
    setTimeout(() => { this.inputDialogService.showAcceptance();; }, 3000);
    
  }

}
