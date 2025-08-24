import { Injectable } from '@angular/core';

declare global {
  interface Window {
    electron: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  async getStats() {
    return await window.electron.invoke('get-stats');
  }
}
