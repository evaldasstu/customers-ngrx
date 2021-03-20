import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, retry, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  // DefaultDataServiceConfig,
} from '@ngrx/data';

import { Customer } from '../store/customer.model';

import * as uuid from 'uuid';

// const api = 'app/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends EntityCollectionServiceBase<Customer> {
  // export class CustomerService {
  // private customersUrl = 'app/customers'; // URL to web api

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Customer', serviceElementsFactory);
  }

  // getById(id: string | number): Observable<Customer> {
  //   return super
  //     .getById(id)
  //     .pipe(map((customer) => this.mapCustomer(customer)));
  // }

  // private mapCustomer(customer: Customer): Hero {
  //   return { ...hero, dateLoaded: new Date() };
  // }
  // REST API implementation settings
  // move?
  // private apiUrl = 'http://localhost:3000/customers';
  // private apiUrl = 'app/customers';
  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  // getAll() {
  //   console.log('getCustomers()');
  //   return this.http.get<Customer[]>(this.apiUrl).pipe(
  //     tap((data) => console.log('dbg', data)),
  //     map((data) => data),
  //     catchError(this.handleError)
  //   );
  // }

  // getHeroes()
  // Šito arba nebeliks, arba kreipsis į localstorage
  // Galbūt palikti komentarus apie API
  // loadAllCustomers(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.apiUrl).pipe(
  //     // return this.http.get<Customer[]>(this.apiUrl + '/?_order=asc').pipe(
  //     // tap((_) => this.log('fetched customers')),
  //     // Courses errorų negaudo. Bet gal reikės dėl incognito local storage.
  //     catchError(this.handleError<Customer[]>('loadAllCustomers', []))
  //   );
  // }
  // Paprastesnio API reference:
  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>('/api/courses');
  // }

  // Šito arba nebeliks, arba kreipsis į localstorage
  // Galbūt palikti komentarus apie API
  // loadCustomer(id: string): Observable<Customer> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http
  //     .get<Customer>(url)
  //     .pipe
  //     // tap((_) => this.log(`fetched customer id=${id}`))
  //     // Courses errorų negaudo. Gal ir nereikės, reiks galvot.
  //     // catchError(this.handleError<Customer>(`loadCustomer id=${id}`))
  //     ();
  // }
  // Courses analogo neturi

  /** POST: add a new customer to the server */
  // Šito arba nebeliks, arba kreipsis į localstorage
  // Galbūt palikti komentarus apie API
  // addCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.post<Customer>(this.apiUrl, customer, httpOptions);
  // .pipe(
  //   tap((newCustomer: Customer) =>
  //     // this.log(`added customer w/ id=${newCustomer.id}`)
  //   )
  //   // Courses errorų negaudo. Gal ir nereikės, reiks galvot.
  //   // catchError(this.handleError<Customer>('addCustomer'))
  // );
  // }
  // Galbūt reiks perdaryti. kad kreiptųsi į localstorage
  // Paprastesnio API reference:
  // createCourse(course: Course): Observable<Course> {
  //   return this.http.post<Course>('/api/courses', course);
  // }

  // add(customer: Customer) {
  //   console.log('adding...');
  //   return this.http
  //     .post<Customer>(`${api}/customer/`, customer)
  //     .pipe(
  //       tap(() =>
  //         this.toastr.success(`Customer ${customer.name} added`, 'POST')
  //       )
  //     );
  // }

  /** DELETE: delete the customer from the server */
  // Šito arba nebeliks, arba kreipsis į localstorage
  // Galbūt palikti komentarus apie API
  // removeCustomer(customer: Customer | number): Observable<Customer> {
  // Turbūt bus perteklinis tipas
  // removeCustomer(customer: Customer | string): Observable<Customer> {
  // removeCustomer(id: string): Observable<Customer> {
  //   // Turbūt bus perteklinis tikrinimas:
  //   // const id = typeof customer === 'number' ? customer : customer.id;
  //   console.log('removing');
  //   const url = `${this.apiUrl}/${id}`;

  //   return this.http
  //     .delete<Customer>(url, this.httpOptions)
  //     .pipe
  //     // tap((_) => this.log(`deleted customer id=${id}`))
  //     // Courses errorų negaudo. Gal ir nereikės, reiks galvot.
  //     // catchError(this.handleError<Customer>('removeCustomer'))
  //     ();
  // }

  /** PUT: update the customer on the server */
  // Šito arba nebeliks, arba kreipsis į localstorage
  // Galbūt palikti komentarus apie API
  // addCustomer(customer: Customer): Observable<any> {
  // Duodu string | number, nes tokį formatą naudoja entity adapteris
  // updateCustomer(
  //   courseId: string | number,
  //   changes: Partial<Customer>
  // ): Observable<Customer> {
  //   // console.log(this.apiUrl);
  //   return this.http
  //     .put<Customer>(this.apiUrl, changes, this.httpOptions)
  //     .pipe
  //     // tap((_) => this.log(`updated custtomer id=${changes.id}`))
  //     // Courses errorų negaudo. Gal ir nereikės, reiks galvot.
  //     // catchError(this.hansdleError<any>('addCustomer'))
  //     ();
  // }
  // submitCustomer(
  //   // id?
  //   // id: string | number,
  //   // changes: Partial<Customer>
  //   customer: Customer
  // ): Observable<Customer> {
  //   const url = `${this.apiUrl}/${customer.id}`;
  //   // console.log(url);
  //   // console.log('--service--');
  //   // console.log('customer:', customer);
  //   this.http.put(url, customer, httpOptions);
  //   return of(customer);
  //   // return this.http.put(url, customer, httpOptions).pipe(
  //   // tap(_ => console.log(`updated custtomer id=${customer.id}`))
  //   // Courses errorų negaudo. Gal ir nereikės, reiks galvot.
  //   // catchError(this.handleError<any>('addCustomer'))
  //   // );
  // }

  // addCustomer(customer: Customer): Observable<any> {
  //   // localStorage API implementation
  //   const customerUnique = { ...customer, id: uuid.v4() };
  //   return this.http.post(this.apiUrl, customerUnique, this.httpOptions);

  //   // REST API implementation
  //   // return this.http.post(this.apiUrl, customer, this.httpOptions);
  // }

  // LEGACY
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // to improve
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
