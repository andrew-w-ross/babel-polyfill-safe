/* global global */
(function(global){
    "use strict";
    if(global._babelPolyfill){
        return;
    }
    
    require("babel-polyfill");
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {});