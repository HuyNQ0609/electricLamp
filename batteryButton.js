class SwitchButton {
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }
    connectToLamp(newLamp){
        this.lamp = newLamp;
    }
    switchOnOff(){
        this.status = !this.status;
        this.lamp.turnOnOff();
    }
}