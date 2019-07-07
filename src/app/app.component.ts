import { Component, Inject } from '@angular/core';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'third-party-demo';
  
  data: any = {};
  sessionData: any = {};

  localData: any = {};
  sessionData: any = {};

  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService, @Inject(LOCAL_STORAGE) private localStorage: WebStorageService) {
  }



  storeData(key, value):  void {
    //locally
    this.localStorage.set(key, value);
    this.localData[key] = this.localStorage.get(key);
    //session
    this.sessionStorage.set(key, value);
    this.sessionData[key] = this.sessionStorage.get(key);;

  }


/*

  saveInLocal(key, val): void {

    this.localStorage.set(key, val);
    this.data[key]= this.localStorage.get(key);

  	this.sessionStorage.set(key, val);
    this.sessionData[key] = this.sessionStorage.get(key);
   }

   getFromLocal(key): void {
    //console.log(this.storage);

    this.data[key]= this.localStorage.get(key);
    this.sessionData[key]= this.sessionStorage.get(key);
   }*/
}
