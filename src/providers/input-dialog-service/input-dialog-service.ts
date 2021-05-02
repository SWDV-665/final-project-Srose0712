import { Injectable } from '@angular/core';
import { AlertController, Item } from 'ionic-angular';
import { GroceriesServiceProvider as CharacterServiceProvider } from '../character-service/character-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: CharacterServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle:'You have added this characater as a friend. Please wait for them to accept.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAcceptance() {
    let alert = this.alertCtrl.create({
      title: 'Friend Accepted!',
      subTitle:'Your requested friend invitation was accepted.',
      buttons: ['OK']
    });
    alert.present();
  }

  showItemPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item? "Please edit Character...": "Please enter Character info.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'class',
          placeholder: 'Class',
          value: item ? item.class : null
        },
        {
          name: 'guild',
          placeholder: 'Guild',
          value: item ? item.guild : null
        },
        {
          name: 'stregnth',
          placeholder: 'Stregnth',
          value: item ? item.stregnth : null
        },
        {
          name: 'dexterity',
          placeholder: 'Dexterity',
          value: item ? item.dexterity : null
        },
        {
          name: 'agility',
          placeholder: 'Agility',
          value: item ? item.agility : null
        },
        {
          name: 'intelligence',
          placeholder: 'Intelligence',
          value: item ? item.intelligence : null
        },
        {
          name: 'stamina',
          placeholder: 'Stamina',
          value: item ? item.stamina : null
        },
        {
          name: 'wisdom',
          placeholder: 'Wisdom',
          value: item ? item.wisdom : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    prompt.present();
  } 
}
