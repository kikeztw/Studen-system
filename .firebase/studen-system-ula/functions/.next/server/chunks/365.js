"use strict";
exports.id = 365;
exports.ids = [365];
exports.modules = {

/***/ 2365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "Mx": () => (/* binding */ signOutUser),
/* harmony export */   "R2": () => (/* binding */ inviteUser),
/* harmony export */   "Ry": () => (/* binding */ signInWithEmail),
/* harmony export */   "w2": () => (/* binding */ signInUser)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7023);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const inviteUser = async (email)=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_config__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l);
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendSignInLinkToEmail)(auth, email, {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: `${window.location.origin}/signin/?email=${email}`,
            // This must be true.
            handleCodeInApp: true,
            iOS: {
                bundleId: "com.example.ios"
            },
            android: {
                packageName: "com.example.android",
                installApp: true,
                minimumVersion: "12"
            },
            dynamicLinkDomain: "studensystem.page.link"
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(JSON.stringify(error));
    }
};
const changePassword = async (password)=>{
    const user = (0,_user__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentUser */ .t)();
    if (!user) {
        throw new Error("Current user no found");
    }
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePassword)(user, password);
        console.log("success");
    } catch (error) {
        console.log(JSON.stringify(error));
        throw new Error("error change password");
    }
};
const signInWithEmail = async (email)=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_config__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l);
    if (!(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.isSignInWithEmailLink)(auth, window.location.href)) {
        return undefined;
    }
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailLink)(auth, email, window.location.href);
    } catch (error) {
        console.log(JSON.stringify(error));
        throw new Error("Error");
    }
};
const signInUser = async (email, password)=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_config__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l);
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, email, password);
    } catch (error) {
        console.log(JSON.stringify(error));
        throw new Error("Error signin user");
    }
};
const signOutUser = async ()=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_config__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l);
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7023:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getCurrentUser)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getCurrentUser = ()=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_config__WEBPACK_IMPORTED_MODULE_1__/* .app */ .l);
    return auth.currentUser;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ database),
/* harmony export */   "l": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqrpleKoVZOhyTVjNk_PjhtxckulLWswY",
    authDomain: "studen-system-ula.firebaseapp.com",
    projectId: "studen-system-ula",
    storageBucket: "studen-system-ula.appspot.com",
    messagingSenderId: "520800956817",
    appId: "1:520800956817:web:aafad10ac808e68c8b6a30"
};
console.log(firebaseConfig);
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;