
function newImage(asset, source, posLeft, posBottom){
    let newElem = document.createElement('img')
    newElem.src = `assets/${source}`
    newElem.style.position = 'fixed'
    newElem.style.left = posLeft
    newElem.style.bottom = posBottom
    newElem.addEventListener('click', function(){
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
newImage('sword', 'sword.png', '500px', '405px')
newImage('shield', 'sheild.png', '165px', '185px')
newImage('staff', 'staff.png', '600px', '100px')


