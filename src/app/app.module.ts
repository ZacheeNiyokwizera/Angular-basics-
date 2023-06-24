import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent} from '../server/server.component';
import { AboutComponent } from 'src/about/about.component';
import { FormTemplateComponent} from 'src/form/hero-form-template.component';
import { StyleComponent } from 'src/style/style.component';
import { ServiceComponent } from 'src/services/service.component';
import { ChildComponent } from 'src/child/child.component';
import { ParentComponent } from 'src/parent/parent.component';
import { StoryComponent } from '../story/story.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AboutComponent, 
    FormTemplateComponent,
    StyleComponent,
    ServiceComponent,
    ChildComponent,
    ParentComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
