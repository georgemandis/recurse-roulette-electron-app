/**
 * Recurse Roulette
 * ===
 */
const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 1280,
    height: 800,
    titleBarStyle: "default",
  });

  win.loadURL("https://roulette.recurse.com");
});
