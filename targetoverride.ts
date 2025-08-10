namespace servos {
    //% block="servo P0" fixedInstance whenUsed
    export const P0 = new servos.PinServo(pins.P0);
    //% block="servo P1" fixedInstance whenUsed
    export const P1 = new servos.PinServo(pins.P1);
    //% block="servo P2" fixedInstance whenUsed
    export const P2 = new servos.PinServo(pins.P2);
   //% block="servo P8" fixedInstance whenUsed
    export const P8 = new servos.PinServo(pins.P8);
  //% block="servo P16" fixedInstance whenUsed
    export const P16 = new servos.PinServo(pins.P16);

  // below are unsafe conflict with led control
  //% block="servo P3x" fixedInstance whenUsed, unsafe
    export const P3 = new servos.PinServo(pins.P3); 
  //% block="servo P4x" fixedInstance whenUsed, unsafe
    export const P4 = new servos.PinServo(pins.P4); 
  //% block="servo P6x" fixedInstance whenUsed, unsafe
    export const P6 = new servos.PinServo(pins.P6); 
  //% block="servo P7x" fixedInstance whenUsed, unsafe
    export const P7 = new servos.PinServo(pins.P7); 
  //% block="servo P9x" fixedInstance whenUsed, unsafe
    export const P9 = new servos.PinServo(pins.P9); 
  //% block="servo P10x" fixedInstance whenUsed, unsafe
    export const P10 = new servos.PinServo(pins.P10); 
  //% block="servo P12x" fixedInstance whenUsed, unsafe
    export const P12 = new servos.PinServo(pins.P12);   
}
