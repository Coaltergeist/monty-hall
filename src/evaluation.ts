export class Evaluation {
    private isControl: boolean;
    public disabledDoor: number;

    constructor() {
        this.disabledDoor = 0;
    }

    public setIsControl(x: boolean) {
        this.isControl = x;
    }

    public disableRandom(door: number) {
        var x = Math.random();
        if (door == 1) {
            if (x > .5) {
                this.disabledDoor = 2;
            } else {
                this.disabledDoor = 3;
            }
        } else if (door == 2) {
            if (x > .5) {
                this.disabledDoor = 1;
            } else {
                this.disabledDoor = 3;
            }
        } else if (door == 3) {
            if (x > .5) {
                this.disabledDoor = 1;
            } else {
                this.disabledDoor = 2;
            }
        }        
    }
}