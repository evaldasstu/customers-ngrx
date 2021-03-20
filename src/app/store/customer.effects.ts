// // Čia naudojami kintamieji$, o kitur ne
// // atkelti čia routinimus po action

// import { customerActions } from './customer.actions';
// import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import {
//   concatMap,
//   map,
//   mergeMap,
//   catchError,
//   switchMap,
//   tap,
//   exhaustMap,
//   mapTo,
// } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
// import { CustomerService } from '../shared/customer.service';
// import { ModalService } from '../shared/modal.service';

// import * as uuid from 'uuid'; // lauk

// @Injectable()
// export class CustomerEffects {
//   constructor(
//     private customerService: CustomerService,
//     private modalService: ModalService,
//     private actions$: Actions, // private router: Router,
//     private toastr: ToastrService,
//     private router: Router
//   ) {}

//   loadAllCustomers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(customerActions.loadAllCustomers),
//       tap(() => this.toastr.info('Loading...')),
//       concatMap(() => this.customerService.loadAllCustomers()),
//       // Set done loading flag
//       // nu dar pasigilinti ar ir kam naudooju customersLoaded
//       map((customers) => customerActions.customersLoaded({ customers })),
//       tap(() => this.toastr.clear())
//     )
//   );

//   // HERO REF
//   // addHero$ = this.update$.pipe(
//   //   ofAction(heroActions.AddHero),
//   //   switchMap(hero => this.heroService.addHero(hero.payload)),
//   //   map(response => {
//   //     this.messageService.add("Adding hero to the store.");
//   //     return new heroActions.AddHeroSuccess(response);
//   //     },
//   //   catchError(error => error.subscribe().switchMap(error =>{
//   //     console.log(error)
//   //   }))));

//   // addCustomer$ = createEffect(
//   //   () =>
//   //     this.actions$.pipe(
//   //       ofType(customerActions.addCustomer),
//   //       concatMap((action) => this.customerService.addCustomer(action.customer))
//   //     ),
//   //   { dispatch: false }
//   // );

//   // gal success/error padaryt
//   removeCustomer$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(customerActions.removeCustomer),
//         map((customer) => {
//           this.customerService.removeCustomer(customer.id);
//           // this.toastr.clear();
//           this.toastr.info('Customer deleted');
//           // teoriškai čia būt gerai vardą išvest. bet gal tiek to.
//           // console.log(customer);
//         })a
//       ),
//     { dispatch: false }
//   );

//   //   submitCustomer$ = createEffect(
//   //     () =>
//   //       this.actions$.pipe(
//   //         ofType(customerActions.submitCustomer),

//   //         // Generate unique ID for new entries
//   //         map((action) => ({
//   //           ...action.customer,
//   //           id: action.customer.id || uuid.v4(),
//   //         })),

//   //         // Try saving
//   //         tap((customer) => this.customerService.submitCustomer(customer)),

//   //         // tap((action) => console.log('debug:', action)),
//   //         map((action) => {
//   //           // console.log(action);
//   //           return action;
//   //           // https://ngrx.io/guide/effects
//   //           // exhaustMap(
//   //           // (action) => this.customerService.setCustomer(action.id, action)
//   //           // .pipe(
//   //           //   map(user => AuthApiActions.loginSuccess({ user })),
//   //           //   catchError(error => of(AuthApiActions.loginFailure({ error })))
//   //           // )
//   //           // );
//   //         })
//   //       ),
//   //     { dispatch: false }
//   //   );
//   // }

//   // BIŠKI VEIKĖ
//   // addCustomer$ = createEffect(
//   //   () =>
//   //     this.actions$.pipe(
//   //       ofType(customerActions.addCustomer),
//   //       switchMap((action) =>
//   //         this.customerService.addCustomer(action.customer)
//   //       ),
//   //       map(
//   //         (customer) => {
//   //           return customerActions.addCustomerSuccess(customer);
//   //         },
//   //         catchError((error) =>
//   //           of(customerActions.addCustomerFailure({ error }))
//   //         )
//   //       )
//   //     )
//   //   );

//   addCustomer$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(customerActions.addCustomer),
//       switchMap((action) => this.customerService.addCustomer(action.customer)),
//       tap(() => this.toastr.success('Customer added')),
//       tap(() => this.modalService.closeModal()),
//       tap(() => this.router.navigate(['/']))
//     )
//   );
// }
// // export class TodoEffects {
// //   @Effect()
// //   public fetchListOfTodos$: Observable<void> = this.action$.pipe(
// //     ofType(ActionTypes.FETCH_TODO_LIST),
// //     switchMap(() =>
// //       this.todoListService.fetchTodoList().pipe(
// //         map((todos: Todo[]) => {
// //           return {
// //             type: ActionTypes.TODO_LIST_FETCHED,
// //             payload: { todos }
// //           };
// //         }),
// //         // handle failure in todoListService.fetchTodoList()
// //         catchError((error) => {
// //           return Observable.of({
// //             type: ActionTypes.FETCH_TODO_LIST_FAILED,
// //             payload: { error }
// //           });
// //         })
// //       )
// //     )
// //   );
// // }

// // KLAIDA OLD:
// // catchError(error => error.subscribe().switchMap(error =>{
// //   console.log(error)
// // }))));

// // .map(() => new collection.AddBookSuccessAction(book))
// // .catch(() => of(new collection.AddBookFailAction(book)))

// // map((response) => {
// //   return {
// //     type: customerActions.addCustomerSuccess,
// //     action: response,
// //   };
// // })
// // mapTo(customerActions.addCustomerSuccess),
// //   catchError((customer) =>
// //     of({
// //       type: customerActions.addCustomerFailure,
// //       action: customer,
// //     })
// //   )

// // )s
// // ),
// // { dispatch: false } // false?

// // ARCHYVAS:

// // VEIKIA
// // removeCustomer$ = createEffect(
// //   () =>
// //     this.actions$.pipe(
// //       ofType(customerActions.removeCustomer),
// //       switchMap((customer) =>
// //         this.customerService.removeCustomer(customer.id)
// //       ),
// //       map((response) => {
// //         this.toastr.info('Customer deleted');
// //         // pagalvot ką daryt su response ir kaip jo atsisakyti
// //         console.log(response);
// //       })
// //     ),
// //   { dispatch: false }
// // );

// // VEIKIA:
// // removeCustomer$ = createEffect(
// //   () =>
// //     this.actions$.pipe(
// //       ofType(customerActions.removeCustomer),
// //       concatMap((action) => this.customerService.removeCustomer(action.id))
// //     ),
// //   { dispatch: false }
// // );
