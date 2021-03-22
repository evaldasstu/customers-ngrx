import { Component } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public modalService: ModalService) {}
}
