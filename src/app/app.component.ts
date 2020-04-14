import { Component, OnInit } from '@angular/core';
import { Resource, Translation } from './model/resources';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Firebase Internationalization';
  param = {nameApp: this.title};

  resource$ = new Observable<Resource[]>();
  translation$ = new Observable<Translation[]>();

  getData(): void {
    this.resource$ = this.tfs.retrieveResources();
    this.translation$ = this.tfs.retrieveTranslations();
  }

  resources: Resource[] = [
    {icon: "school", title: "i18n", link: "https://angular.io/guide/i18n"},
    {icon: "import_contacts", title: "ngx-translate", link: "https://github.com/ngx-translate/core"},
    {icon: "whatshot", title: "firebase", link: "https://firebase.google.com/"},
  ]

  translations: Translation[] = [
    {title: "i18n", description: "i18n is the tool used in Angular for internationalization of the content"},
    {title: "ngx-translate", description: "Angular library wrapper based in a JSON format"},
    {title: "firebase", description: "Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014"},
  ]

  constructor(private translate: TranslateService, private tfs: FirebaseService) {
    this.addLanguageConfig();
    this.getData();
  }

  addLanguageConfig(): void {
    this.translate.addLangs(['en', 'es'])
    this.translate.setDefaultLang('en');
    this.translate.use(navigator.language);
  }



}
