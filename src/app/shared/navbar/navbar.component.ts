import { Component,OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  title: string= '';
  subtitle: boolean = false;
  
  constructor( private router: Router) {}

  items!: MenuItem[];

  ngOnInit(): void {
    // Change the title of the navbar depending on the route
    this.router.events.pipe(
      filter<any>(e => e instanceof NavigationEnd),
      tap(console.log),
      map( eventdata => {
        this.subtitle = false;
        switch (eventdata.url) {
          case '/productos':
            return 'PRODUCTOS'
          case '/auth/ingresar':
            return 'LOG IN'
          case '/auth/registrarse':
            return 'SIGN IN'
          case '/nosotros':
            return 'NOSOTROS'
          case '/auth/ingresar':
            return 'LOG IN'
          case '/carrito':
            return 'CART'
          default:
            this.subtitle = true;
            return 'ECOGAIA'
        }
      }),
    )
      .subscribe(data => {
        this.title = data
      })   

    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-slack',
        routerLink: '/productos'
      },
      {
        label: 'Ordenes',
        icon: 'pi pi-ticket',
        routerLink: '/ordenes'
      },
      {
        label: 'Sobre Nosotros',
        icon: 'pi pi-globe',
        routerLink: '/nosotros'
      },
      {
        label: 'Ingresar',
        icon: 'pi pi-sign-in',
        routerLink: '/auth/ingresar'
      },
      {
        label: 'Registrarse',
        icon: 'pi pi-user',
        routerLink: '/auth/registrarse'
      }
    ]
  }

}
