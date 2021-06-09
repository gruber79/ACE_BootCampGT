var cat = document.getElementById('cat');

	cat.onchange = function() {
		// console.log('cat index: ' + cat.selectedIndex);
		// console.log('cat name: ' + cat.options[cat.selectedIndex].text);
		// console.log('img/' + cat.value + '@2x.jpg');
		document.getElementById('postcard').style.backgroundImage = 'url(img/' +cat.value+ '@2x.jpg)';
		document.getElementById('cat-heading').innerHTML = cat.options[cat.selectedIndex].text;
  };