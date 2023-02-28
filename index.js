
function newImage(asset, source, posLeft, posBottom){
    let newElem = document.createElement('img')
    newElem.src = `assets/${source}`
    newElem.style.position = 'fixed'
    newElem.style.left = posLeft
    newElem.style.bottom = posBottom
    document.body.append(newElem)
    return(asset)
}

newImage('greenCharacter', 'green-character.gif', '100px', '100px');
