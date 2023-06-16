import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './header/world/world.component';
import { HelloComponent } from './hello/hello.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  {
    path:"header",component:HeaderComponent,
    children:[
      {path:"world",component:WorldComponent,
      children:[
        {path:"hello",component:HelloComponent},
      ]
    },
    ]
  },
  {path:"world",component:WorldComponent},
  {path:"hello",component:HelloComponent},
  {path:"front",component:FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
