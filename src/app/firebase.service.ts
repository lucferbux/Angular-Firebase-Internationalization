import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource, Translation } from './model/resources';

@Injectable({
    providedIn: 'root'
  })
  export class FirebaseService {
  
    resourceCollection: AngularFirestoreCollection<Resource>;
    resources: Observable<Resource[]>;

    translationCollection: AngularFirestoreCollection<Translation>;
    translations: Observable<Translation[]>;
  
    constructor(private afs: AngularFirestore) {
      this.resourceCollection = this.afs.collection('resources', ref => {
        return ref.orderBy('title', 'desc')
      })

      this.translationCollection = this.afs.collection('translations', ref => {
        return ref.orderBy('title', 'desc')
      })

    }
  
    retrieveResources() {
      return this.resources = this.resourceCollection.snapshotChanges().pipe(
        map(introEntries => introEntries.map(a => {
          const data = a.payload.doc.data() as Resource;
          return data;
        }))
      );
    }

    retrieveTranslations() {
        return this.translations = this.translationCollection.snapshotChanges().pipe(
          map(introEntries => introEntries.map(a => {
            const data = a.payload.doc.data() as Translation;
            return data;
          }))
        );
      }
  

  }
  
