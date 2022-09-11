let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x:0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // if snake going down you cannot go up
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break // if snake going up you cannot go down       
            inputDirection = { x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break // if snake going right you cannot go left           
            inputDirection = { x: -1, y: 0}
           break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break // if snake going left you cannot go right
           inputDirection = { x: 1, y: 0}
          break
    }
})




export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}