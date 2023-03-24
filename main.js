const {app, BrowserWindow, ipcMain} = require("electron");
const path = require('path')
const ipc = ipcMain

const createWindow = () => {
    const win = new BrowserWindow({
      icon: path.join(__dirname, "images/icon.png"),
        height: 440,
        width: 500,
        resizable: false,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          devTools: true,
          preload: path.join(__dirname, 'preload.js'),
        }
    });

    win.loadFile("index.html");

    ipc.on('closeApp', ()=> {
      console.log("Clicked on close btn")
      win.close()
    })

    ipc.on('minimizeApp', ()=> {
      console.log("Clicked on minimized btn")
      win.minimize()
    })
};

app.whenReady().then(()=> {
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});


