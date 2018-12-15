# SimpleNgModalDialog

A simple ng modal dialog.

This is an idea from : http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box

```html
<div class="main">
  <button (click)="openModal('my-app-model')">my-app-model</button>
  <button (click)="openModal('my-second-app-model')">my-second-app-model</button>
  <app-modal id="my-app-model">
    <h1>A Custom Modal!</h1>
  </app-modal>

  <app-modal id="my-second-app-model">
    <h1>A Second Modal!</h1>
  </app-modal>
</div>

<router-outlet></router-outlet>
```
