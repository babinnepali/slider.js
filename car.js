var car1 = {
    name: 'Spark',
    speed: 0,
    year: 2018,
    motor:{
        v: 1.25,
        horsePower: 95,
    },
    start: function() {
        this.speed = 70;
        this.motor.horsePower = 115;
    }
};

