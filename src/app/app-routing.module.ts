import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'imad', loadChildren: './imad/imad.module#ImadPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'iqra', loadChildren: './iqra/iqra.module#IqraPageModule' },
  { path: 'iqra-info/:id', loadChildren: './iqra-info/iqra-info.module#IqraInfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
