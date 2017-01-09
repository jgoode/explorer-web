/**
 * Created by johngoode on 1/8/17.
 */
/// <reference path="../typings/jquery/index.d.ts" />
var Index = (function () {
    function Index(title) {
        this.title = title;
        this.systemsVisited = 1.1;
        this.objectsScanned = 0.0;
        this.distanceTravelded = 0.0;
        this.fuelConsumed = 0.0;
    }
    Index.prototype.say = function () {
        alert(this.title);
    };
    Index.prototype.main = function () {
        $("#expedition").text(this.title);
        $("#systemsVisited").text(this.systemsVisited);
        $("#objectsScanned").text(this.objectsScanned);
        $("#distanceTravelled").text(this.distanceTravelded);
        $("#fuelConsumed").text(this.fuelConsumed);
    };
    return Index;
}());
var index = new Index("Helloo!");
index.main();
