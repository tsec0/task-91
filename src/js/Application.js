import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin alive", "stayin alive"];
    this._counter = -1;

    this._beat = new Beat();

    this._beat.addListener(this._beat.events.BIT, () => {
      if(this._counter < this.lyrics.length - 1){
        this._counter ++;
      } else {
        this._counter = 0;
      }
      this._create();
    });

    this.emit(Application.events.READY);
  }

  _create(){
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = this.lyrics[this._counter];
      document.querySelector(".main").appendChild(message);
  }
}

