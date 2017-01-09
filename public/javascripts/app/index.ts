/**
 * Created by johngoode on 1/8/17.
 */
/// <reference path="../typings/jquery/index.d.ts" />
class Index {
    public systemsVisited: number;
    public objectsScanned: number;
    public distanceTravelded: number;
    public fuelConsumed: number;

    constructor(public title: string) {
        this.systemsVisited = 1.1;
        this.objectsScanned = 0.0;
        this.distanceTravelded = 0.0;
        this.fuelConsumed = 0.0;
    }

    say() {
        alert(this.title);
    }



    main() {
       $("#expedition").text(this.title);
       $("#systemsVisited").text(this.systemsVisited);
       $("#objectsScanned").text(this.objectsScanned);
       $("#distanceTravelled").text(this.distanceTravelded);
       $("#fuelConsumed").text(this.fuelConsumed);

    }
}

var index = new Index("Helloo!");
index.main();
