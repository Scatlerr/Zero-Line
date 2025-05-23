//this file was written by ai

function logToConsole(msg) {
  let logBox = document.getElementById("debugLog");
  if (!logBox) {
    logBox = document.createElement("div");
    logBox.id = "debugLog";
    logBox.style.position = "absolute";
    logBox.style.bottom = "60px";
    logBox.style.left = "0";
    logBox.style.maxHeight = "200px";
    logBox.style.overflowY = "auto";
    logBox.style.background = "rgba(0,0,0,0.7)";
    logBox.style.color = "#0f0";
    logBox.style.fontFamily = "monospace";
    logBox.style.fontSize = "12px";
    logBox.style.padding = "5px";
    document.body.appendChild(logBox);
  }
  logBox.innerHTML += msg + "<br>";
}

const logToScreen = logToConsole
const consoleToLog = logToConsole

window.onerror = function(message, source, lineno, colno, error) {
  logToScreen(`Global Error: ${message} at ${source}:${lineno}:${colno}`);
};