class Car {

    private _engine: string;

    constructor(engine: string){
        this._engine = engine;
    }
    // por omision es publico
    starEngine(){
        console.log(`Start engine ${this._engine}`);
        alert(`Start engine ${this._engine}`);
    }

    stopEngine(){
        alert(`Stop engine ${this._engine}`);
    }
}

window.onload = function(){
    var car = new Car("Buggatti");
    car.starEngine();
    car.stopEngine();
}
