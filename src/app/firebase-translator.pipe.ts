import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'firestoreTranslator'
})
export class FirestoreTranslator implements PipeTransform {

    /**
     * Get the localized field of the object, this object must have every field with the locale as a sufix
     * @param dataDescription Object that we want to localize
     * @param field Field of the object
     */
  transform(dataDescription: any, field: string): string {
    var userLang = navigator.language; 
    const index = userLang.includes("en") ? field : `${field}_es`;
    // Change to a conditional chain if you want more languages
    const data = dataDescription[index]
    if (data) {
      return data
    } else {
      return dataDescription[field]
    }
  }


}
