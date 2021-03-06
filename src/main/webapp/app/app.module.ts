import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { IllaLimpaSharedModule, UserRouteAccessService } from './shared';
import { IllaLimpaAppRoutingModule} from './app-routing.module';
import { IllaLimpaHomeModule } from './home/home.module';
import { IllaLimpaAdminModule } from './admin/admin.module';
import { IllaLimpaAccountModule } from './account/account.module';
import { IllaLimpaEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        IllaLimpaAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        IllaLimpaSharedModule,
        IllaLimpaHomeModule,
        IllaLimpaAdminModule,
        IllaLimpaAccountModule,
        IllaLimpaEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class IllaLimpaAppModule {}
