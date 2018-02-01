import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  setObjectToStorage(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObjectFromStorage(key: string): Object {
    const objectStored = sessionStorage.getItem(key);
    return objectStored ? JSON.parse(objectStored) : undefined;
  }

  removeFromStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

}
