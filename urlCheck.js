let goto = window.location.href.split('?goto=')[1]
let o = goto


const block = () => {
    document.getElementById('block').style.display = 'flex'
    document.getElementById('go').href = o
}
let blockedList = ['www.thoratica.net']

if (goto.includes('https://')) {
    goto = goto.replace('https://', '')
} else if (goto.includes('http://')) {
    goto = goto.replace('http://', '')
}

if (blockedList.includes(goto)) {
    block()
} else {
    window.location.href = o
}