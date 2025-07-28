/**
 * @file Helper function for creating the initial window that contains the application.
 */

import { BrowserWindow } from "electron";

export const createWindow = (windowContext: BrowserWindow) => {
  windowContext = new BrowserWindow({
    width: 1366,
    height: 768,
    icon: "app/lib/assets/icon.ico",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
    },
  });

  windowContext.setMenuBarVisibility(false);
  windowContext.loadFile("app/index.html");
};
