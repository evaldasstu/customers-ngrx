import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../store/customer.model';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ModalService } from '../../shared/modal.service';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  @Input() customer = {} as Customer;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Customer>();
  @Output() update = new EventEmitter<Customer>();

  @ViewChild('name', { static: true }) nameElement = {} as ElementRef;

  selected = {} as any; // any!
  customers = [] as Customer[];
  loading = false;
  customer$ = {} as Observable<Customer | undefined>;

  addMode = false;

  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    saying: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    // private store: Store<AppState>,
    public modalService: ModalService,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    // this.customer$ = {} as Observable<Customer>;
  }

  // galimai ne DRY
  getCustomers() {
    this.loading = true;
    this.customerService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((customers) => (this.customers = customers));
    this.close();
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  // close() {
  //   this.selected = null;
  // }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    // this.customer$ = this.store.select(selectCustomerById(id));
    // this.customer$ = this.customerService.getById(id);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.customer && this.customer.id) {
      this.form.patchValue(this.customer);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCustomer(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.customer, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveCustomer(form: FormGroup) {
    if (this.addMode) {
      this.addCustomer(form);
    } else {
      this.updateCustomer(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateCustomer(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.customer, ...value });
    }
    this.close();
  }
}
