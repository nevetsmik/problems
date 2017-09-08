/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/

/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/

/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

const groupingDishes = array => {
  let ingredients = {};
  for (let i = 0; i < array.length; i++) {
    let dish = array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      let ingredient = array[i][j];
      ingredients[ingredient] = ingredients[ingredient] || [];
      if (!ingredients[ingredient].includes(dish)) {
        ingredients[ingredient].push(dish);
      }
    }
  }

  let result = [];
  Object.keys(ingredients).sort().forEach(key => {
    if (ingredients[key].length > 1) {
      result.push([key].concat(ingredients[key].sort()));
    }
  });
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = groupingDishes;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groupingDishes__ = __webpack_require__(0);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';



/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
window.dishes = [
  [
    "BbJARRtwbtPlmMJGLEYuzMMdbVLeYtnpgMHAVRKeduXmTtMVxn",
    "kCdCc",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz"
  ],
  [
    "IefhFYodXLmmkhiHffQr",
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "kTYoSrYyWxVpdmD"
  ],
  [
    "GsxpnOGLvsovBAKyqWRlvQci",
    "KWlRFZBbRNP",
    "aNyKuTJvXVoQcGTGdSNazmgNYkIexq",
    "OGgVkxKpsnDTKIUXoYPYJAvHJUnlBgcs",
    "hmwNeHkZBXMtOtiqrAqBpWprxudnZvCUcnsKLIredP",
    "T",
    "QWzewgfgILJjGXiZPSsuULftQJugntGHoKxeIOdUKJrLXqvPE",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "YbjfhDnAQGowCjtTqYDoc"
  ],
  [
    "lRtlExjGvwk",
    "lzgbMTEnCPCLziYGubwSiJqoWPwFpeyqGcu",
    "kTYoSrYyWxVpdmD",
    "kCdCc",
    "oUthxrskNGsp"
  ],
  [
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "KJ wXjYkOOgNFZCBib TfoXPAhaGO",
    "vrDyvW",
    "aNyKuTJvXVoQcGTGdSNazmgNYkIexq",
    "EwaWcSkXha tWr",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "QWzewgfgILJjGXiZPSsuULftQJugntGHoKxeIOdUKJrLXqvPE",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz",
    "OGgVkxKpsnDTKIUXoYPYJAvHJUnlBgcs"
  ],
  [
    "VEzdllSWYYz",
    "qLnQGqMKRulqB",
    "JjvbPTRbICNqrvzlfjtMZXBXLgdOhuvmvswWEniAIbREhpoZy",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz",
    "KWlRFZBbRNP",
    "FseQmHqTJGzlPOdwXvU",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq"
  ],
  [
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "j",
    "NuquTeIZtVWgrGngsNdAvpgW",
    "PQLIrCqTFa JJTYQXyde",
    "RIyUPcovuGDrPvYFFobA",
    "aNyKuTJvXVoQcGTGdSNazmgNYkIexq",
    "mEsLIhX OE ACGLQASNrTFTqxaXHfcaXISJGkcmijoeDgx",
    "kCdCc"
  ],
  [
    "f RGnbHGCQkOStPozqsKfpRsqcYgffFdolmg",
    "ELHqkjDr wzNDLHr",
    "NuquTeIZtVWgrGngsNdAvpgW"
  ],
  ["tUPbaXERWGNtAOXtPCdmoVuLoYJnq", "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K"],
  [
    "xKrXTcjdFr nMDnzXDahjuWbnU",
    " KQDLrdsCpYKWjPCZlEsiCBxl",
    "tnzMlHsyrPimhGpJnlKbDNnrcJg KkvDWqSwkZixKvDxVlusBS"
  ],
  [
    "SuiiWSpIUYdcrJXsX zbbqKHQtNPyEsMbcbiinWPquculvCkoB",
    "pcLKjbfbGbuKOcksnvjUKdq",
    "FfuUydwSqCpJtEuEWWRhxezOXPdeRu zZtobhcDJEXaw",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd"
  ],
  [
    "YLlsgwmXifogTlEDIjNOzof",
    "pJBKLCwuPYRwuaGvuYNmmpnA",
    "mEsLIhX OE ACGLQASNrTFTqxaXHfcaXISJGkcmijoeDgx",
    "KJ wXjYkOOgNFZCBib TfoXPAhaGO",
    "kTYoSrYyWxVpdmD",
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "FfuUydwSqCpJtEuEWWRhxezOXPdeRu zZtobhcDJEXaw",
    "RJxJcPLxJzBfj ZDPItPZAgvvNmz"
  ],
  [
    "nTOUbMhKokeUhiKGoWHSyAyI",
    "lCbprdLWCQhnqpvOsH",
    "pcLKjbfbGbuKOcksnvjUKdq",
    "oOGcILKITAjbqEisXGWMXqcqVNAkdhcCPx ",
    "KbiETXsu",
    "dnvhWXdwuMPlGydn"
  ],
  [
    "GXUIPEKGhbgOZEcIupMoxPxSVxgWaXcJ",
    "FseQmHqTJGzlPOdwXvU",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "lCbprdLWCQhnqpvOsH",
    " KQDLrdsCpYKWjPCZlEsiCBxl"
  ],
  [
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu",
    "FseQmHqTJGzlPOdwXvU",
    "VRNNcMZNLHESGUbrYCmoabWmKnonDgZVEqGiltPlbRhWBTiHVg",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz",
    "pcLKjbfbGbuKOcksnvjUKdq",
    "tnzMlHsyrPimhGpJnlKbDNnrcJg KkvDWqSwkZixKvDxVlusBS",
    " QyCHIPLUrPiSVBbRIUiVZFrAhi POTzpdHzxReUGf",
    "NuquTeIZtVWgrGngsNdAvpgW",
    "efx"
  ],
  [
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu",
    "rFpz",
    "T TcwywQjxZgUCFOqTKIBcITHHpUlfIfiWQTpd",
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz",
    "byxXYfZsokeZqozjCGcltTWQOY DefJcIBCGamyZhNZjdeM",
    "vDTLzlMRWeLtxRPCCfsMotddfuQimtSDjfDTspUli",
    "TUmpGpybXSErBTSFTfOxRFcj jDzYoJNlHDBqDcfMcr",
    "usJhgZZbxpEpmiYdtsMecPPUa",
    "CkcZdbfcATWdiHmeWFHFmdW"
  ],
  [
    "SFrIiROjhJcVuGlwYQij OxdsWKBFxQNCOzEuodVsYr",
    "QSkjfXdS",
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "YkcpQEn oRYRYYC"
  ],
  [
    "fSnen",
    "qLnQGqMKRulqB",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd",
    "CtgwAutobmreCj",
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz"
  ],
  [
    "ruGXqswGhufoXdUeQDAYMj ac",
    "QSkjfXdS",
    "Nkuhsdb",
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "mEsLIhX OE ACGLQASNrTFTqxaXHfcaXISJGkcmijoeDgx"
  ],
  [
    "EEBgNpUjTjFYIlqwOyCjBglIdGMOGCndltVxmdWuRLJx",
    "rIiFVIIBCfwjFm",
    "xcawqVirAu",
    "hmwNeHkZBXMtOtiqrAqBpWprxudnZvCUcnsKLIredP",
    "lNZrqESQEqCufJiQz HdLtwkxCEoQzXdFdcUNV",
    "KWlRFZBbRNP",
    "kTYoSrYyWxVpdmD",
    "PQLIrCqTFa JJTYQXyde"
  ],
  [
    "anNTcAQMOjDkcUiOjtVEFquA",
    "lzgbMTEnCPCLziYGubwSiJqoWPwFpeyqGcu",
    "tzFeG QXcXLsRpDVkrH PqnzTsFlKEI JFAk fnn",
    "JjvbPTRbICNqrvzlfjtMZXBXLgdOhuvmvswWEniAIbREhpoZy",
    "PVKpF",
    "KUxvrIzJaKweMmTwkwAKsRWEPGHAeQVChV",
    "YbjfhDnAQGowCjtTqYDoc",
    "YqJLN eqUmvPLQuchLgpwNLlTWzyCUmYNnxyLluIo PYIzLz",
    "IHWPZjwwWcNAKZwTpUfOCwWGxUgcuvTxef",
    "RIyUPcovuGDrPvYFFobA"
  ],
  [
    "LGOSvYoOIeHjlyQuAFTQueFwEPuJhXVHZGVyonVmDjT MReFr",
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY",
    "QWzewgfgILJjGXiZPSsuULftQJugntGHoKxeIOdUKJrLXqvPE",
    "uKerT",
    "aQCKiewLgQ SalneziUEEJwPkbtoatllNOSBEfDxJJ",
    "HchzMSCwXfNAF"
  ],
  [
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN",
    "CkcZdbfcATWdiHmeWFHFmdW",
    "DfkhSppbCBHjuaLOlf ",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY",
    "OOluIHyOZ pZjpHkOTPOLlReRyw eGaG P",
    "FseQmHqTJGzlPOdwXvU"
  ],
  [
    "cfolGfdXHgJB",
    "tzFeG QXcXLsRpDVkrH PqnzTsFlKEI JFAk fnn",
    "TUmpGpybXSErBTSFTfOxRFcj jDzYoJNlHDBqDcfMcr",
    "KUxvrIzJaKweMmTwkwAKsRWEPGHAeQVChV"
  ],
  [
    "pxHNxCTeEYeIP",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd",
    "lvWzpGVFQM",
    "OGgVkxKpsnDTKIUXoYPYJAvHJUnlBgcs",
    "qcwogb T IaZuFJFlBrzCkOKy",
    "CIhtBAmUMatB Y HLKsFdvCVTaeDFiZcdwjACRYHEoxXeBA",
    "CDnEhMMqPRuMZlcOtHXhz",
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY"
  ],
  [
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "KWlRFZBbRNP",
    "arqz",
    "pcLKjbfbGbuKOcksnvjUKdq",
    "hmwNeHkZBXMtOtiqrAqBpWprxudnZvCUcnsKLIredP",
    "sMADooXXDndpfOhpgDgyizhnG",
    "PVKpF",
    "qzDSsLYLleAfjUgdqMpmFEZV XdOBjvAtYe l",
    "eLaWbGWWaiBsvtCVDB"
  ],
  [
    "tl WvwIYStCLhwHMNIsFabIHrszmRNdXoauhNtCCsWvfv",
    "SiYPPuqCJhPrOAsatoWRObCyxVHhAUgDCNBRfUfclRBIkh"
  ],
  [
    "RnFPXgGrteeKvKBqfUGKFfkrhRNTuTqiey",
    "xoaPigtubkRYpwcQdvatndhFvhfwB",
    "COjezGtVYiruUmXxWdfJbLnXBGEdlyNxTiejGZkcRWk",
    "qzDSsLYLleAfjUgdqMpmFEZV XdOBjvAtYe l",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd",
    "arqz",
    "DfkhSppbCBHjuaLOlf ",
    "mDEl CbHSqXcilHoPDAXhPUfYgIYazmfFeXfVcty"
  ],
  [
    "mpRfYKqXmTlv qraFGym",
    "PQLIrCqTFa JJTYQXyde",
    "T",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd",
    "FseQmHqTJGzlPOdwXvU",
    "Ad",
    "JxaH gLbwbF",
    "nAKFNR",
    "LOcSIESbLyHCqro eaJwLCuUghlPRjkMGOPCzaxEUS",
    "oLIywkMcSWgwKexqIzlBFKuXvatLBpqji"
  ],
  ["STKqUartaaJcxfIKZPnKvZTfAp", "CtgwAutobmreCj"],
  [
    "wVPaechrqiNhwyxLoeudPSYG hhm Dfy",
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd"
  ],
  [
    " UZMaYVFTYqEMSYSnSJKghfHfgfofpFf",
    "byxXYfZsokeZqozjCGcltTWQOY DefJcIBCGamyZhNZjdeM",
    "sogy lXguj",
    "EaOWqaZPLCJHhinlXKYCSKIVDADBcrOD",
    "JhLmAtdMmRMEdnJuOUJJQtbxxVktmmmbWTOISGhxinanxlK"
  ],
  [
    "uLfZJGvUGfHPQPsNyZwWpYGs",
    "pJBKLCwuPYRwuaGvuYNmmpnA",
    "j",
    "GRbzQuRBuZrHKpYtUcdftkuPzAOqBCgZNIuadmQMkud",
    "FohBDSSLCXoL",
    "VRNNcMZNLHESGUbrYCmoabWmKnonDgZVEqGiltPlbRhWBTiHVg"
  ],
  [
    "xetqkfgqDgoRCcYRtrys",
    "XfFmfCnsPrUihVOaJjQUMxtpUvicyIdyzPWeRyddshfMwCOVIO",
    "xM IZXlKZClFiqSgEqQDmuzryGHmKugJ",
    "gDvDTFHocn"
  ],
  [
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh",
    "MkYeqddLI",
    "uKerT",
    "pgaAaplXayiELDDXebhYrvKDdD",
    "sMADooXXDndpfOhpgDgyizhnG",
    "RJxJcPLxJzBfj ZDPItPZAgvvNmz",
    "aNyKuTJvXVoQcGTGdSNazmgNYkIexq",
    "arqz",
    "MhdpZeijhTNZEvWBtHmeFKlwncEBnZZGzvwlcN",
    "YOGSjmNaLqbNkf"
  ],
  [
    "UPtMvjFVNzdI",
    "P",
    "T",
    "AOlBIiOzCX",
    "DIoGqAUZVBKS",
    "Ad",
    "FeEdYzSxYfqyu"
  ],
  [
    "jiJZTLotHOIebpVeEMwIsWpzuADyIIddRMrWUSfAyagx",
    "rFpz",
    "DfkhSppbCBHjuaLOlf ",
    "KUxvrIzJaKweMmTwkwAKsRWEPGHAeQVChV",
    "pJBKLCwuPYRwuaGvuYNmmpnA"
  ],
  [
    "mJHhTrbOFJJmHMrsZaiIzbpMshILEKRaTmWVSmFLcATwtjtY",
    "SiYPPuqCJhPrOAsatoWRObCyxVHhAUgDCNBRfUfclRBIkh",
    "F",
    "DIoGqAUZVBKS",
    "mCUGfLHceZpqAMPefteC",
    "JMLG"
  ],
  [
    "CJsPY",
    "OQZKLnIutZn",
    "lSbqEkmUW Wjehb MCej",
    "j",
    "jsxXN RiaihcAgRfTBPfQGXbbJbXdtlzvwgYZHWJxddEMRLK",
    "OGgVkxKpsnDTKIUXoYPYJAvHJUnlBgcs",
    "ELHqkjDr wzNDLHr",
    "DBiFrw"
  ],
  [
    "BE yVDnTm",
    "PQLIrCqTFa JJTYQXyde",
    "xM IZXlKZClFiqSgEqQDmuzryGHmKugJ",
    "LOcSIESbLyHCqro eaJwLCuUghlPRjkMGOPCzaxEUS",
    "jsxXN RiaihcAgRfTBPfQGXbbJbXdtlzvwgYZHWJxddEMRLK",
    "NDtHkcmetflVUDv",
    "pcLKjbfbGbuKOcksnvjUKdq"
  ],
  [
    "geuWhdGsYNOFpAPquX RypMDvxaPbRmzrMMDdHNmK",
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY",
    "pTGLTc",
    "XdpatHtDsmeeLFYZMLKX",
    "ToHsHvBmJTDEQnhAzPHdVPwLnoPLi",
    "IBpZnyJwXTwkkmHhKIkyeNXHWRrUSTvaN"
  ],
  [
    "lWz IkqkWGfjmxJqsCnNVpLsD",
    "edljfNcVNVspQfwDNfLyZirCfDdXwwMkkePLdAStgaKillLt",
    "jRhMfWDSUzpcm JIOMdPalnKcFsETJVuIacOrcRZxOjmx",
    "FSRAGOyO"
  ],
  [
    "qbgHafWkXWJ pNgepPANmbPGUBgu",
    "OQZKLnIutZn",
    "kCdCc",
    "HvKRNiJClrlUhToNfcMweTqsJ",
    "cLakEEeOvLcqzNTvpiBwxwGuNSrsBq"
  ],
  [
    "gumgPIONQdHcXPAjCQFUBdmkUwCeyCqlITO",
    "f",
    "nmLPrDTUFYXssJxWPYSLUWBHOzHvcgw LxagOoc",
    "PLDxHwUW",
    "DIoGqAUZVBKS",
    "HvKRNiJClrlUhToNfcMweTqsJ",
    "usJhgZZbxpEpmiYdtsMecPPUa",
    "qcwogb T IaZuFJFlBrzCkOKy"
  ],
  [
    "BCQEdEGxFmPWkaWOWGzWTJLSpdngTw QbhvXvhxFoKfuHTK",
    "NuquTeIZtVWgrGngsNdAvpgW"
  ],
  ["PPKUvPOyzVIq", "kTYoSrYyWxVpdmD"],
  [
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "gcZALmPOuiIOcE",
    "LOcSIESbLyHCqro eaJwLCuUghlPRjkMGOPCzaxEUS",
    "lzgbMTEnCPCLziYGubwSiJqoWPwFpeyqGcu",
    "sMADooXXDndpfOhpgDgyizhnG",
    "ye",
    "byxXYfZsokeZqozjCGcltTWQOY DefJcIBCGamyZhNZjdeM",
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "LtwVXbeT nqKqHZhc"
  ],
  [
    "NpMgODRgqzlIe aKpgrdsmB",
    "XdpatHtDsmeeLFYZMLKX",
    "sMADooXXDndpfOhpgDgyizhnG",
    "pcLKjbfbGbuKOcksnvjUKdq",
    "lzgbMTEnCPCLziYGubwSiJqoWPwFpeyqGcu",
    "PwIkWlZtjoFsayCUozXbLm  ikPnTVxSpnhdbjuoZmUG"
  ],
  ["PMhMpBOibgkD", "pJBKLCwuPYRwuaGvuYNmmpnA", "eLaWbGWWaiBsvtCVDB"],
  [
    "EcA",
    "RHIJPQVxCemjuxhIonJukAlxNXexuNyA iFHyvlgI",
    "VRNNcMZNLHESGUbrYCmoabWmKnonDgZVEqGiltPlbRhWBTiHVg",
    "aQCKiewLgQ SalneziUEEJwPkbtoatllNOSBEfDxJJ",
    "eiLJbwB",
    "YOGSjmNaLqbNkf"
  ]
];
window.groupingDishes = __WEBPACK_IMPORTED_MODULE_0__groupingDishes__["a" /* groupingDishes */];

window.correct = [
  [
    " KQDLrdsCpYKWjPCZlEsiCBxl",
    "GXUIPEKGhbgOZEcIupMoxPxSVxgWaXcJ",
    "xKrXTcjdFr nMDnzXDahjuWbnU"
  ],
  ["Ad", "UPtMvjFVNzdI", "mpRfYKqXmTlv qraFGym"],
  [
    "CkcZdbfcATWdiHmeWFHFmdW",
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  ["CtgwAutobmreCj", "STKqUartaaJcxfIKZPnKvZTfAp", "fSnen"],
  [
    "DIoGqAUZVBKS",
    "UPtMvjFVNzdI",
    "gumgPIONQdHcXPAjCQFUBdmkUwCeyCqlITO",
    "mJHhTrbOFJJmHMrsZaiIzbpMshILEKRaTmWVSmFLcATwtjtY"
  ],
  [
    "DfkhSppbCBHjuaLOlf ",
    "RnFPXgGrteeKvKBqfUGKFfkrhRNTuTqiey",
    "jiJZTLotHOIebpVeEMwIsWpzuADyIIddRMrWUSfAyagx",
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN"
  ],
  ["ELHqkjDr wzNDLHr", "CJsPY", "f RGnbHGCQkOStPozqsKfpRsqcYgffFdolmg"],
  [
    "FfuUydwSqCpJtEuEWWRhxezOXPdeRu zZtobhcDJEXaw",
    "SuiiWSpIUYdcrJXsX zbbqKHQtNPyEsMbcbiinWPquculvCkoB",
    "YLlsgwmXifogTlEDIjNOzof"
  ],
  [
    "FseQmHqTJGzlPOdwXvU",
    "GXUIPEKGhbgOZEcIupMoxPxSVxgWaXcJ",
    "VEzdllSWYYz",
    "mpRfYKqXmTlv qraFGym",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu",
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN"
  ],
  [
    "GhbMtNlPnpvlTqRUOwirrPIgZSYdbDeIrbhq",
    "GXUIPEKGhbgOZEcIupMoxPxSVxgWaXcJ",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "VEzdllSWYYz",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN",
    "wVPaechrqiNhwyxLoeudPSYG hhm Dfy"
  ],
  [
    "HvKRNiJClrlUhToNfcMweTqsJ",
    "gumgPIONQdHcXPAjCQFUBdmkUwCeyCqlITO",
    "qbgHafWkXWJ pNgepPANmbPGUBgu"
  ],
  [
    "JjvbPTRbICNqrvzlfjtMZXBXLgdOhuvmvswWEniAIbREhpoZy",
    "VEzdllSWYYz",
    "anNTcAQMOjDkcUiOjtVEFquA"
  ],
  [
    "KJ wXjYkOOgNFZCBib TfoXPAhaGO",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "YLlsgwmXifogTlEDIjNOzof"
  ],
  [
    "KUxvrIzJaKweMmTwkwAKsRWEPGHAeQVChV",
    "anNTcAQMOjDkcUiOjtVEFquA",
    "cfolGfdXHgJB",
    "jiJZTLotHOIebpVeEMwIsWpzuADyIIddRMrWUSfAyagx"
  ],
  [
    "KWlRFZBbRNP",
    "EEBgNpUjTjFYIlqwOyCjBglIdGMOGCndltVxmdWuRLJx",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "VEzdllSWYYz"
  ],
  [
    "LOcSIESbLyHCqro eaJwLCuUghlPRjkMGOPCzaxEUS",
    "BE yVDnTm",
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "mpRfYKqXmTlv qraFGym"
  ],
  [
    "NuquTeIZtVWgrGngsNdAvpgW",
    "BCQEdEGxFmPWkaWOWGzWTJLSpdngTw QbhvXvhxFoKfuHTK",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "f RGnbHGCQkOStPozqsKfpRsqcYgffFdolmg",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu"
  ],
  [
    "OGgVkxKpsnDTKIUXoYPYJAvHJUnlBgcs",
    "CJsPY",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "pxHNxCTeEYeIP"
  ],
  ["OQZKLnIutZn", "CJsPY", "qbgHafWkXWJ pNgepPANmbPGUBgu"],
  [
    "PQLIrCqTFa JJTYQXyde",
    "BE yVDnTm",
    "EEBgNpUjTjFYIlqwOyCjBglIdGMOGCndltVxmdWuRLJx",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "mpRfYKqXmTlv qraFGym"
  ],
  [
    "PVKpF",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "anNTcAQMOjDkcUiOjtVEFquA"
  ],
  [
    "QSkjfXdS",
    "SFrIiROjhJcVuGlwYQij OxdsWKBFxQNCOzEuodVsYr",
    "ruGXqswGhufoXdUeQDAYMj ac"
  ],
  [
    "QWzewgfgILJjGXiZPSsuULftQJugntGHoKxeIOdUKJrLXqvPE",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "LGOSvYoOIeHjlyQuAFTQueFwEPuJhXVHZGVyonVmDjT MReFr",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS"
  ],
  [
    "RIyUPcovuGDrPvYFFobA",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "anNTcAQMOjDkcUiOjtVEFquA"
  ],
  [
    "RJxJcPLxJzBfj ZDPItPZAgvvNmz",
    "YLlsgwmXifogTlEDIjNOzof",
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"
  ],
  [
    "SiYPPuqCJhPrOAsatoWRObCyxVHhAUgDCNBRfUfclRBIkh",
    "mJHhTrbOFJJmHMrsZaiIzbpMshILEKRaTmWVSmFLcATwtjtY",
    "tl WvwIYStCLhwHMNIsFabIHrszmRNdXoauhNtCCsWvfv"
  ],
  ["T", "GsxpnOGLvsovBAKyqWRlvQci", "UPtMvjFVNzdI", "mpRfYKqXmTlv qraFGym"],
  [
    "TUmpGpybXSErBTSFTfOxRFcj jDzYoJNlHDBqDcfMcr",
    "cfolGfdXHgJB",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  [
    "VRNNcMZNLHESGUbrYCmoabWmKnonDgZVEqGiltPlbRhWBTiHVg",
    "EcA",
    "uLfZJGvUGfHPQPsNyZwWpYGs",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu"
  ],
  [
    "XdpatHtDsmeeLFYZMLKX",
    "NpMgODRgqzlIe aKpgrdsmB",
    "geuWhdGsYNOFpAPquX RypMDvxaPbRmzrMMDdHNmK"
  ],
  ["YOGSjmNaLqbNkf", "EcA", "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"],
  [
    "YbjfhDnAQGowCjtTqYDoc",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "anNTcAQMOjDkcUiOjtVEFquA"
  ],
  [
    "aNyKuTJvXVoQcGTGdSNazmgNYkIexq",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"
  ],
  [
    "aQCKiewLgQ SalneziUEEJwPkbtoatllNOSBEfDxJJ",
    "EcA",
    "LGOSvYoOIeHjlyQuAFTQueFwEPuJhXVHZGVyonVmDjT MReFr"
  ],
  [
    "arqz",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "RnFPXgGrteeKvKBqfUGKFfkrhRNTuTqiey",
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"
  ],
  [
    "byxXYfZsokeZqozjCGcltTWQOY DefJcIBCGamyZhNZjdeM",
    " UZMaYVFTYqEMSYSnSJKghfHfgfofpFf",
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  [
    "eJFaPmBNLzdrXqylFagpFTrODSNgaEAhd",
    "RnFPXgGrteeKvKBqfUGKFfkrhRNTuTqiey",
    "SuiiWSpIUYdcrJXsX zbbqKHQtNPyEsMbcbiinWPquculvCkoB",
    "fSnen",
    "mpRfYKqXmTlv qraFGym",
    "pxHNxCTeEYeIP",
    "wVPaechrqiNhwyxLoeudPSYG hhm Dfy"
  ],
  [
    "eLaWbGWWaiBsvtCVDB",
    "PMhMpBOibgkD",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa"
  ],
  [
    "eMAiYsMdiHpGKhIBntwJebYMSYXEvzvdjZBcxdhENz",
    "BbJARRtwbtPlmMJGLEYuzMMdbVLeYtnpgMHAVRKeduXmTtMVxn",
    "VEzdllSWYYz",
    "WnZCFHdnzEVcBhXnHDYN cKgAgRdbmiMKS",
    "fSnen",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  [
    "ezBOEdCoUMFzvpExmnwRCWB tjUwluzo K",
    "IefhFYodXLmmkhiHffQr",
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "SFrIiROjhJcVuGlwYQij OxdsWKBFxQNCOzEuodVsYr",
    "YLlsgwmXifogTlEDIjNOzof",
    "ruGXqswGhufoXdUeQDAYMj ac",
    "tUPbaXERWGNtAOXtPCdmoVuLoYJnq"
  ],
  [
    "hmwNeHkZBXMtOtiqrAqBpWprxudnZvCUcnsKLIredP",
    "EEBgNpUjTjFYIlqwOyCjBglIdGMOGCndltVxmdWuRLJx",
    "GsxpnOGLvsovBAKyqWRlvQci",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa"
  ],
  [
    "j",
    "CJsPY",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "uLfZJGvUGfHPQPsNyZwWpYGs"
  ],
  ["jsxXN RiaihcAgRfTBPfQGXbbJbXdtlzvwgYZHWJxddEMRLK", "BE yVDnTm", "CJsPY"],
  [
    "kCdCc",
    "BbJARRtwbtPlmMJGLEYuzMMdbVLeYtnpgMHAVRKeduXmTtMVxn",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "lRtlExjGvwk",
    "qbgHafWkXWJ pNgepPANmbPGUBgu"
  ],
  [
    "kFLQcL ZIcVuvuJUgURegSUzGMovWOmxySVRLOY",
    "LGOSvYoOIeHjlyQuAFTQueFwEPuJhXVHZGVyonVmDjT MReFr",
    "geuWhdGsYNOFpAPquX RypMDvxaPbRmzrMMDdHNmK",
    "pxHNxCTeEYeIP",
    "vMmIkGABvVMjypwqiULkVXZFgllllXdbmGfEN",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  [
    "kTYoSrYyWxVpdmD",
    "EEBgNpUjTjFYIlqwOyCjBglIdGMOGCndltVxmdWuRLJx",
    "IefhFYodXLmmkhiHffQr",
    "PPKUvPOyzVIq",
    "YLlsgwmXifogTlEDIjNOzof",
    "lRtlExjGvwk"
  ],
  [
    "lCbprdLWCQhnqpvOsH",
    "GXUIPEKGhbgOZEcIupMoxPxSVxgWaXcJ",
    "nTOUbMhKokeUhiKGoWHSyAyI"
  ],
  [
    "lzgbMTEnCPCLziYGubwSiJqoWPwFpeyqGcu",
    "NpMgODRgqzlIe aKpgrdsmB",
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "anNTcAQMOjDkcUiOjtVEFquA",
    "lRtlExjGvwk"
  ],
  [
    "mEsLIhX OE ACGLQASNrTFTqxaXHfcaXISJGkcmijoeDgx",
    "OewYq ukfIvEwLLXFTvMswnqWGNkFsqSuMfVWsNYxI",
    "YLlsgwmXifogTlEDIjNOzof",
    "ruGXqswGhufoXdUeQDAYMj ac"
  ],
  [
    "pJBKLCwuPYRwuaGvuYNmmpnA",
    "PMhMpBOibgkD",
    "YLlsgwmXifogTlEDIjNOzof",
    "jiJZTLotHOIebpVeEMwIsWpzuADyIIddRMrWUSfAyagx",
    "uLfZJGvUGfHPQPsNyZwWpYGs"
  ],
  [
    "pcLKjbfbGbuKOcksnvjUKdq",
    "BE yVDnTm",
    "NpMgODRgqzlIe aKpgrdsmB",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "SuiiWSpIUYdcrJXsX zbbqKHQtNPyEsMbcbiinWPquculvCkoB",
    "nTOUbMhKokeUhiKGoWHSyAyI",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu"
  ],
  ["qLnQGqMKRulqB", "VEzdllSWYYz", "fSnen"],
  [
    "qcwogb T IaZuFJFlBrzCkOKy",
    "gumgPIONQdHcXPAjCQFUBdmkUwCeyCqlITO",
    "pxHNxCTeEYeIP"
  ],
  [
    "qzDSsLYLleAfjUgdqMpmFEZV XdOBjvAtYe l",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "RnFPXgGrteeKvKBqfUGKFfkrhRNTuTqiey"
  ],
  [
    "rFpz",
    "jiJZTLotHOIebpVeEMwIsWpzuADyIIddRMrWUSfAyagx",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  [
    "sMADooXXDndpfOhpgDgyizhnG",
    "NpMgODRgqzlIe aKpgrdsmB",
    "NuPyCPhxZPaKXxwtqWEeKhWmCHC JuVFivWkKXxLnJqHQvr",
    "PWbsTnRTrZRAknklPFjHtGLvXXTROqJsMNWNhYJEZOa",
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"
  ],
  [
    "tnzMlHsyrPimhGpJnlKbDNnrcJg KkvDWqSwkZixKvDxVlusBS",
    "uczNiOujYLauOejKsypqvodYyfnTslZAUfDBNXBzekjdsxCcu",
    "xKrXTcjdFr nMDnzXDahjuWbnU"
  ],
  [
    "tzFeG QXcXLsRpDVkrH PqnzTsFlKEI JFAk fnn",
    "anNTcAQMOjDkcUiOjtVEFquA",
    "cfolGfdXHgJB"
  ],
  [
    "uKerT",
    "LGOSvYoOIeHjlyQuAFTQueFwEPuJhXVHZGVyonVmDjT MReFr",
    "x MAzxFcMlLyjYKSQHiLDPwZEIdjYigh"
  ],
  [
    "usJhgZZbxpEpmiYdtsMecPPUa",
    "gumgPIONQdHcXPAjCQFUBdmkUwCeyCqlITO",
    "vzDWGOXNQ ialL ZQLmIpwxJsdffrzYkeSZnghPxCwSiNOTYu"
  ],
  ["xM IZXlKZClFiqSgEqQDmuzryGHmKugJ", "BE yVDnTm", "xetqkfgqDgoRCcYRtrys"]
];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map