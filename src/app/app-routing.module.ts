import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { load } from '@angular/core/src/render3';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs/tentang', loadChildren: './tentang/tentang.module#TentangPageModule'},
  { path: 'tabs/web', loadChildren: './web/web.module#WebPageModule'},
  { path: 'tabs/panduan', loadChildren: './panduan/panduan.module#PanduanPageModule'},
  { path: 'tabs/grup', loadChildren: './grup/grup.module#GrupPageModule'},
  { path: 'tabs/agenda', loadChildren: './agenda/agenda.module#AgendaPageModule'},
  { path: 'tabs/lokasi', loadChildren: './lokasi/lokasi.module#LokasiPageModule'},
  { path: 'tabs/presensi', loadChildren: './presensi/presensi.module#PresensiPageModule'},
  { path: 'tabs/tab3/aduan', loadChildren: './aduan/aduan.module#AduanPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
