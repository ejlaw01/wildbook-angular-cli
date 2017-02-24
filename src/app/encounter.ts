export class Encounter {
  constructor(
    public name: string,
    public mediaAssets: MiniMediaAsset[]
  ){}
}

export class MiniMediaAsset {
  constructor(
    public imageURL: string,
    public annotation: AnnotationParam,
    public secondaryAnnotations: AnnotationParam[],
    public isSelected: boolean = false
  ){}
}

export class AnnotationParam {
  constructor(
    public id: string,
    public height: number,
    public width: number,
    public x: number,
    public y: number
  ){}
}
//
//
// export class JsonEncounter {
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
//     public Class: string,
//     public size_guess: string,
//     public locationID: string,
//     public genus: string,
//     public hour: number,
//     public occurenceID: string,
//     public tissueSamples: string[],
//     public modified: string,
//     public occurrenceRemarks: string,
//     public measurements: number[],
//     public decimalLatitude: number,
//     public metalTags: number[],
//     public numSpotsLeft: number,
//     public _imagesNote: string,
//     public decimalLongitude: number,
//     public month: number,
//     public images: string[],
//     public annotations: Annotation[],
//     public day: number,
//     public dwcDateAdded: string,
//     public okExposeViaTapirLink: boolean,
//     public identificationRemarks: string
//   ){}
// }
//
// export class Annotation {
//   constructor(
//     public id: string,
//     public features: Feature[],
//     public isExemplar: boolean
//   ){}
// }
//
// export class Feature {
//   constructor(
//     public id: string,
//     public mediaAsset: MediaAsset,
//     public parameters: AnnotationParam,
//     public type: string
//   ){}
// }
//
// export class MediaAsset {
//   constructor(
//     public id: number,
//     public userDateTime: string,
//     public store: Store,
//     public dateTime: string,
//     public imageURL: string,
//     public labels: string[],
//     public features: MediaAssetFeature[],
//     public userLongitude: number,
//     public url: string,
//     public userLatitude: number,
//     public metadata: Metadata,
//     public annotation: AnnotationParam
//   ){}
// }
//
// export class MediaAssetFeature {
//   constructor(
//     public id: string,
//     public parameters: AnnotationParam,
//     public type: string
//   ){}
// }
//
// export class Store {
//   constructor(
//     public type: string
//   ){}
// }
//
// export class Metadata {
//   constructor(
//     public height: number,
//     public width: number,
//     public contentType: string
//   ){}
// }
