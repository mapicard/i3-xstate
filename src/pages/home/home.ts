import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServersProvider } from '../../providers/servers-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public pServers:ServersProvider) {

  }

  startToggleMachine() {
    this.pServers.startMachine();
  }

}
