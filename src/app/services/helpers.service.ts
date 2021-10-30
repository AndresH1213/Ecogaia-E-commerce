import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private router: Router) { }

  getTitle() {
    return this.router.events
  }

}
