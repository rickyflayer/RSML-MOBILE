import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarirPageRoutingModule } from './karir-routing.module';

import { KarirPage } from './karir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarirPageRoutingModule
  ],
  declarations: [KarirPage]
})
export class KarirPageModule {}
