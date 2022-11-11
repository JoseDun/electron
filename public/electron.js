const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  dialog,
} = require("electron");
const path = require("path");
const fs = require("fs");
const isDev = require("electron-is-dev");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  }

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

ipcMain.on("saveText", (_, txtVal) => {
  fs.writeFile("file.csv", txtVal, "utf-8", (err) => {
    if (!err) {
      console.log("file written");
    } else {
      console.log(err);
    }
  });
});
ipcMain.on("open-dialog", () => {
  dialog
    .showOpenDialog({ properties: ["openFile", "multiSelections"] })
    .then((result) => {
      console.log(result.canceled);
      console.log(result.filePaths);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
