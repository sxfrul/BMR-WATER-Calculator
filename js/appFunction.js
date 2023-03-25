const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

minimizeBtn.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})

closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})