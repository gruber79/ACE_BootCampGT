/**
document.getElementById('info-name').textContent = catData[selected].name;
document.getElementById('info-origen').textContent = catData[selected].origen;
document.getElementById('info-personality').textContent = catData[selected].personality;
document.getElementById('info-tall').textContent = catData[selected].tall;
document.getElementById('info-length').textContent = catData[selected].length;
document.getElementById('info-mass').textContent = catData[selected].mass;
document.getElementById('info-lifespan').textContent = catData[selected].lifespan;
**/
document.getElementById('cat-list').onchange = function() {
var selected = this.value;
		document.getElementById('info-pic').src= 'img/'+ selected +'@2x.jpg';
		document.getElementById('info-name').textContent = catData[selected].name;
    document.getElementById('info-origen').textContent = catData[selected].origen;
    document.getElementById('info-temperament').textContent = catData[selected].temperament;
    document.getElementById('info-height').textContent = catData[selected].height;
    document.getElementById('info-length').textContent = catData[selected].length;
    document.getElementById('info-mass').textContent = catData[selected].mass;
    document.getElementById('info-lifespan').textContent = catData[selected].lifespan;
};	