import { makeAutoObservable } from 'mobx';

interface NGOUsers {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

class Stores {
  users: Array<NGOUsers> = [];
  constructor() {
    makeAutoObservable(this);
  }
  setUsers(users: Array<NGOUsers>) {
    this.users = users;
  }
}

export const store = new Stores();
