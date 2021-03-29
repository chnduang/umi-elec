const { app, BrowserWindow }  = require('electron');
const isDev = require('electron-is-dev')
const path  = require('path');

let mainWin=null;
function createWindow() {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
  });
  // 开发环境
  if (isDev) {
    mainWin.loadURL('http://localhost:9009');
    // mainWin.loadFile('index.html');
    mainWin.webContents.openDevTools();
  }

  mainWin.on('closed', () => {
    mainWin = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  //
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0 || !mainWin) {
      createWindow();
    }
  });
});

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
