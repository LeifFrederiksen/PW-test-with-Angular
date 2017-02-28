"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals = (function () {
    function Globals() {
        this.version = "2.1";
        if (Globals.instance) {
            throw new Error("Error - use Globals.getInstance()");
        }
    }
    Globals.getInstance = function () {
        Globals.instance = Globals.instance || new Globals();
        return Globals.instance;
    };
    Globals.prototype.setRepository = function (repository) {
        this.currentRepository = repository;
    };
    Globals.prototype.getRepository = function () {
        return this.currentRepository;
    };
    Globals.prototype.getBaseUrl = function () {
        return "https://pwapp.metroselskabet.dk/bwsg/v2.4";
    };
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=globals.js.map