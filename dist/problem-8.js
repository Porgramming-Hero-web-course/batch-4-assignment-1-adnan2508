"use strict";
function validateKeys(obj, keys) {
    return keys.every(key => key in obj);
}
