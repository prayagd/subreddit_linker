let node = null
let value = ""

onSpanMouseUp = () => {
    if(!node.contains(document.getElementById(`${value}`))){
        if(value.toString().includes("r/")){
            let newNode = document.createElement("a")
            let textnode = document.createTextNode(`${value}`)
            newNode.appendChild(textnode);  
            node.appendChild(newNode)
            newNode.id = `${value}`
            newNode.target = "_blank"
            let mybr = document.createElement('br');
            node.appendChild(mybr);
            newNode.href = `https://www.reddit.com/${value}`
        }
    }
}


document.onselectionchange = function() {
    let selection = document.getSelection();
    value = selection
    node = selection.anchorNode.parentNode
    node.addEventListener("mouseup", onSpanMouseUp)
}
