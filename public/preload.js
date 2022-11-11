const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
  filesApi: {
    sendFile(txtVal) {
      ipcRenderer.send("saveText", txtVal);
    },
  },
  filesUp: {
    openDialog() {
      ipcRenderer.send("open-dialog");
    },
  },
});
