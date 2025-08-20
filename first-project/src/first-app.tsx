import React from 'react';
function FirstApp() {
  /*
* -------------------------
* Primitive types
* * -------------------------
*/
  let userName: string;
// let userName = 'Max; //No need to choose a type

// useName = 32; // Error here
  userName = 'Max';

  type StringOrNumber = string | number;

  let userAge: number;
  let isValid: boolean;
  let userId: StringOrNumber;

  /*
  * -------------------------
  * Object
  * * -------------------------
  */

  type User = {
    name: string,
    age: number,
    isValid: boolean,
    userId: StringOrNumber
  }

// let user: object; //Not specific values types
// let user: {
//   name: string,
//   age: number,
//   isValid: boolean,
//   // userId: string | number
//   userId: StringOrNumber
// };
  let user: User;
  user = {
    name: 'John',
    age: 43,
    isValid: true,
    userId: 123
  }
// user = {} //Error here

  /*
  * -------------------------
  * Array
  * * -------------------------
  */

// let hobbies: Array<String>;
  let hobbies: string[];
  hobbies = ["Sport", "Cooking", "Reading"];

  let hobbiesObject: {name: string; age: number}[];
  hobbiesObject = [{name: 'Max', age: 43}]

  /*
  * -------------------------
  * Function
  * * -------------------------
  */

  function add(a: number, b: number): void {
    const result = a + b;
    // return result; //Error here, 'cause we return nothing
  }
  function addWithReturn(a: number, b: number): number {
    const result = a + b;
    return result; // 'cause we return number
  }
  function calculate(
    a: number,
    b: number,
    calFn: (a: number, b: number) => number
  ) {
    calFn(a, b);
  }

  add(1,2);
  addWithReturn(1,2);
  calculate(5,6, addWithReturn)

  /*
  * -------------------------
  * Custom Types
  * * -------------------------
  */

  type AddFn = (a: number, b: number) => number;

  function customCalculate(
    a: number,
    b: number,
    calFn: AddFn
  ) {
    calFn(a, b);
  }

  /*
  * -------------------------
  * Interface
  * * -------------------------
  */

  interface Credentials {
    email:string;
    password: string;
  }

// interface Credentials {
//   mode: string
// }

  let creds: Credentials;

  creds = {
    email: 'test@example.com',
    password: 'Admin1!'
  }
  // class AuthCredentials implements Credentials {
  //   email: string;
  //   password: string;
  //   userName: string //new value added
  // }

  function login(credentials: Credentials) {
    return;
  }
  // login(new AuthCredentials())

  /*
  * -------------------------
  * Merge Types
  * * -------------------------
  */

// TYPES

  type Admin = {
    permission: string[]
  }

  type AppUser = {
    userName: string;
  }

  type AppAdmin = Admin & AppUser; // & merge 2 types
  let admin: AppAdmin;

  admin = {
    permission: ['login'],
    userName: 'John'
  }


// INTERFACE

  interface Admin2 {
    permission: string[]
  }

  interface AppUser2 {
    userName: string;
  }

  interface AppAdmin2 extends Admin2, AppUser2 {}
  let admin2: AppAdmin;

  admin2 = {
    permission: ['login'],
    userName: 'John'
  }

  /*
  * -------------------------
  * Literal types
  * * -------------------------
  */

// let role:  // 'admin', 'user', 'editor' (only this specific 3 values)

  type Role = 'admin' | 'user' | 'editor';
  let role: Role;
  role = 'admin'; //This is ok
// role = 'abc'; // This is an eror


  /*
  * -------------------------
  * Type guards
  * * -------------------------
  */

  function performAction(action: string, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
      //...
    }
  }


  /*
  * -------------------------
  * Generic Types
  * * -------------------------
  */

  let roles: Array<Role>
  roles = ['admin', 'editor']

  type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
  }

  const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
      this.storage.push(data);
    }
  }

  const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {}
  }

  function merge<T, U>(a: T, b: U) {
    return {
      ...a,
      ...b
    }
  }

  const userMerge = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 34}); // We dont need <> parameters

  return (
    <div className="App"></div>
  );
}

export default FirstApp;