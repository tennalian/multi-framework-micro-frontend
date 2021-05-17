import { loadRemoteModule } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteModule({
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    remoteName: 'mfe3',
    exposedModule: './mfe'})
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
