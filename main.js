const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const si = require("systeminformation");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, 'dist/sysutils-app/browser/app.html'));
}

app.whenReady().then(createWindow);

// Angular’dan "get-stats" isteği gelince sistem bilgilerini dönecek
ipcMain.handle('get-stats', async () => {
  return {
    cpu: await si.currentLoad(),
    mem: await si.mem(),
    gpu: await si.graphics(),
  };
});
