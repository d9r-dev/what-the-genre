import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source"];
  static values = {
    name: String,
  };
  switchInput() {
    const input = document.getElementById("input");
    input.value = this.nameValue;
  }
}
