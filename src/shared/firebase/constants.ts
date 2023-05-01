export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000',
  // This must be true.
  handleCodeInApp: false,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

export enum COLLECTION_NAME {
  teachers = "TEACHERS",
  coordinators = 'profile',
  course = 'COURSE',
}

export enum GRADE {
  GRADE_01 = 'Primer Año',
  GRADE_02 = 'Segundo Año',
  GRADE_03 = 'Segundo Año',
  GRADE_04 = 'Segundo Año',
  GRADE_05 = 'Segundo Año',
}

export enum COURSE_NAMES {
  MATEMATICAS = 'Matematica',
  FISICA = 'Fisica',
  QUIMICA = 'Quimica',
  INGLES = 'Ingles',
  CASTELLANO = 'Castellano',
}