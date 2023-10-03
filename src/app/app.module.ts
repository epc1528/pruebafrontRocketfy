import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { ModalComponent } from './component/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { CardproductComponent } from './component/cardproduct/cardproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { FormproductComponent } from './component/formproduct/formproduct.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { CreateproductComponent } from './component/createproduct/createproduct.component';





@NgModule({
  declarations: [
    ListproductComponent,
    ModalComponent,
    AppComponent,
    CardproductComponent,
    DetailproductComponent,
    FormproductComponent,
    CreateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap:[AppComponent]
})

export class AppModule { }