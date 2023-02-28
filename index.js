
function newImage(asset, source, posLeft, posBottom){
    let newElem = document.createElement('img')
    newElem.src = `assets/${source}`
    newElem.style.position = 'fixed'
    newElem.style.left = posLeft
    newElem.style.bottom = posBottom
    document.body.append(newElem)
    return(asset)
}

function newItem(asset, source, posLeft, posBottom){
    let newElem = document.createElement('img')
    newElem.src = `assets/${source}`
    newElem.style.position = 'fixed'
    newElem.style.left = posLeft
    newElem.style.bottom = posBottom
    newElem.addEventListener('dblclick', function(){
        newElem.remove()
    })
    document.body.append(newElem)
    return(asset)
}

newImage('greenCharacter', 'green-character.gif', '100px', '100px');
newImage('pineTree', 'pine-tree.png', '450px', '200px')
newImage('tree', 'tree.png', '200px', '300px')
newImage('pillar', 'pillar.png', '350px', '100px')
newImage('crate', 'crate.png', '150px', '200px')
newImage('well', 'well.png', '500px', '425px')

newItem('sword', 'sword.png', '500px', '405px')
newItem('shield', 'sheild.png', '165px', '185px')
newItem('staff', 'staff.png', '600px', '100px')


