import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: any[] = [];

  add(modal: any) {
    modal && this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal && modal.open();
  }

  close(id: string) {
    // close modal specified by id
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal && modal.close();
  }
}
