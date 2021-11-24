import * as input from "@grapecity/wijmo.input";

function init() {
  let popup = new input.Popup("#content", {
    owner: document.getElementById("btn-explore"),
    showTrigger: "Click",
    hideTrigger: "Blur",
  });
}
