import { MessageToWebApp } from '../Shared/IpcMessages'
import { ElectronMainEvents, MainEventHandler } from '../Shared/ElectronMainEvents'
const { ipcRenderer } = require('electron')
const RemoteBridge = require('@electron/remote').getGlobal('RemoteBridge')
const { contextBridge } = require('electron')

process.once('loaded', function () {
  contextBridge.exposeInMainWorld('electronRemoteBridge', RemoteBridge.exposableValue)

  const mainEvents: ElectronMainEvents = {
    setUpdateAvailableHandler: (handler: MainEventHandler) => ipcRenderer.on(MessageToWebApp.UpdateAvailable, handler),

    setWindowBlurredHandler: (handler: MainEventHandler) => ipcRenderer.on(MessageToWebApp.WindowBlurred, handler),

    setWindowFocusedHandler: (handler: MainEventHandler) => ipcRenderer.on(MessageToWebApp.WindowFocused, handler),

    setWatchedDirectoriesChangeHandler: (handler: MainEventHandler) =>
      ipcRenderer.on(MessageToWebApp.WatchedDirectoriesChanges, handler),

    setInstallComponentCompleteHandler: (handler: MainEventHandler) =>
      ipcRenderer.on(MessageToWebApp.InstallComponentComplete, handler),

    setHomeServerConfigurationChangedHandler: (handler: MainEventHandler) =>
      ipcRenderer.on(MessageToWebApp.HomeServerConfigurationChanged, handler),

    setHomeServerStartedHandler: (handler: MainEventHandler) =>
      ipcRenderer.on(MessageToWebApp.HomeServerStarted, handler),
  }

  contextBridge.exposeInMainWorld('electronMainEvents', mainEvents)
})
