export class Encounter {
  constructor(
    public name: string,
    public MediaAssets: MediaAsset[]
  ){}
}

export class MediaAsset {
  constructor(
    public imageURL: string,
    public annotation: AnnotationParam
  ){}
}

export class AnnotationParam {
  constructor(
    public height: number,
    public width: number,
    public x: number,
    public y: number
  ){}
}


// export class Encounter {
//   constructor(
//     public sex: string,
//     public numSpotsRight: number,
//     public state: string,
//     public zebraClass: string,
//     public gpsLongitude: string,
//     public spotImageFileName: string,
//     public dateInMilliseconds: number,
//     public catalogNumber: string,
//     public gpsLatitude: string,
//     public rightSpotImageFileName: string,
//     public mmaCompatible: boolean,
//     public year: number,
//     public specificEpithet: string,
//     public distinguishingScar: string,
//     public minutes: string,
//     public individualID: string,
//     public hasAnnotations: boolean,
//     public class: string,
//     public size_guess: string,
//     public locationID: string,
//     public genus: string,
//     public hour: number,
//     public occurenceID: string,
//     public tissueSamples: sample[],
//     public modified: string,
//     public occurrenceRemarks: string,
//     public measurements: measurement[],
//     public decimalLatitude: number,
//     public metalTags: tag[],
//     public numSpotsLeft: number,
//     public _imagesNote: string,
//     public decimalLongitude: number,
//     public month: number,
//     public images: image[],
//     public annotations: annotation[],
//     public day: number,
//     public dwcDateAdded: string,
//     public okExposeViaTapirLink: boolean,
//     public identificationRemarks: string
//   ){}
// }
