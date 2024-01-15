import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contectIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
