import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AssetService } from './asset.service';
import { ExportTreeComponent, ImportExportDialogComponent } from './export-tree/export-tree.component';
import { KeyComponent } from './key/key.component';
import { MaterialModule } from './material.module';
import { ScenarioInfoComponent, ScenarioInfoDialogComponent } from './scenario-info/scenario-info.component';
import { TreeLogicService } from './tree-logic.service';
import { TreeComponent } from './tree/tree.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ScenarioInfoComponent,
    ScenarioInfoDialogComponent,
    ExportTreeComponent,
    ImportExportDialogComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AssetService, TreeLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
