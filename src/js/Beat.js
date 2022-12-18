import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter{
  get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();
    setInterval(() => {
      console.log("bit");
      this.emit(this.events.BIT);
    }, 600);
  }
}
