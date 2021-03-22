import { Component } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  constructor(public modalService: ModalService) {}
}
