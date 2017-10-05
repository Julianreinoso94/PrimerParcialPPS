import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatBPage } from './chat-b';

@NgModule({
  declarations: [
    ChatBPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatBPage),
  ],
})
export class ChatBPageModule {}
