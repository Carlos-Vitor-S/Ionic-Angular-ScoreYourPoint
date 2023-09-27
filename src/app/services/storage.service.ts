import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setLocalstorage(key: string, value:string) {
    localStorage.setItem(key, value);
  }

  getLocalstorage(key: string) {
    localStorage.getItem(key);
  }

  
}
