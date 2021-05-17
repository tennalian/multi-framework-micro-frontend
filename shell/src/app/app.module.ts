import { BrowserModule } from '@angular/platform-browser';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'mfe1',
        loadChildren: () =>
           loadRemoteModule({
               remoteEntry: 'http://localhost:4201/remoteEntry.js',
               remoteName: 'mfe1',
               exposedModule: './mfe'
           })
           .then(m => m.AppModule)
      },
      { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' }},
      { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' }},
      { matcher: startsWith('mfe4'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element' }},
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
