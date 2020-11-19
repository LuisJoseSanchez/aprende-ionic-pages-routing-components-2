import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MalagaDescriptionComponent } from '../components/malaga-description/malaga-description.component';
import { MalagaInformationComponent } from '../components/malaga-information/malaga-information.component';
import { MalagaImageComponent } from '../components/malaga-image/malaga-image.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    MalagaDescriptionComponent,
    MalagaImageComponent,
    MalagaInformationComponent]
})
export class HomePageModule {}
