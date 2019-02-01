const displayMemory = (label) => {
  document.body.insertAdjacentHTML('afterbegin', '<div id="memory"></div>')
  setInterval(() => {
    let memory = window.performance.memory
    document.getElementById('memory').innerHTML = `
      <strong>${label}</strong><br><br>
      <div><strong>Limit:</strong> ${memory.jsHeapSizeLimit / 1000000}</div>
      <div><strong>Total:</strong> ${memory.totalJSHeapSize / 1000000}</div>
      <div><strong>Used:</strong> ${memory.usedJSHeapSize / 1000000}</div>
    `
  }, 1000)
}

export default displayMemory
