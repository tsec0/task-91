import EventEmitter from "eventemitter3";

export class Beat extends EventEmitter {
  
  get events() {
    return {      
      BIT: "bit",
    };
   }

  constructor() {
    super()
    setInterval(() => {
      this.emit(this.events.BIT)
      console.log("bit");
    }, 1000);
  }
 
}