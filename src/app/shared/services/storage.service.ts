import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  setObjectToStore(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObjectFromStore(key: string): Object {
    const objectStored = sessionStorage.getItem(key);
    return objectStored ? JSON.parse(objectStored) : undefined;
  }

  removeFromStore(key: string): void {
    sessionStorage.removeItem(key);
  }

}
