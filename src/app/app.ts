import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ElectronService } from './electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [DecimalPipe],
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  stats: any = {};

  constructor(private electron: ElectronService) {}

  async ngOnInit() {
    this.stats = await this.electron.getStats();
  }
}
