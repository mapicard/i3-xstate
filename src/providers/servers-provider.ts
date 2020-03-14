import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { toggleMachine, toggleService } from './toggle-machine';

export interface Server {
    name: string;
    ip: string;
}

@Injectable()
export class ServersProvider {

  constructor() { 
    console.log("pServers.constructor");
  }

  public startMachine():void {
    console.log("pServers.startMachine");
    toggleService.send('TOGGLE');
    // => 'active'
    toggleService.send('TOGGLE');
    // => 'inactive'
    }
}
