import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    children:[
      {
        path:'',
        component: HomeComponent,
      },
      {
        path:'contact',
        component: ContactComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
