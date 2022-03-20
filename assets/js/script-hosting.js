const backbtn = document.querySelector('.back-input')
backbtn.onclick = function(){
    history.back()
};

const meNu = document.querySelector('#mobile-menu')
console.log(meNu)
meNu.onclick = function () {
    var listInfo = document.querySelector('.list-info')
    if(listInfo.style.display === 'none'){
        listInfo.style.display = 'block'
    }
    else{
        listInfo.style.display = 'none'
    }
}

const counters = document.querySelectorAll('.counter');
const speed = 300; // The lower the slower

counters.forEach(function (counter) {
	const updateCount = function() {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = Math.floor(target / speed);

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});







// const increaseN = document.querySelectorAll('.div-increase-num');
// const speed = 200; // The lower the slower

// // const increaseDV = document.querySelector('.div-increase-num')

// console.log(increaseN)

// var arr = []

// for(i = 0;i<increaseN.length;i++){
//     let valueN = increaseN[i].textContent
//     arr.push(Number(valueN))
// }
// console.log(arr)

// for(var i = 0;i<arr[0];i++){
//     increaseDV.innerHTML = `<span class="increase-num">${i}</span>`
// }
// mobileMenu.onclick = function() {
//     var isMenu = document.getElementById('menu');
//     if (isMenu.style.display === 'none') {
//         isMenu.style.display = 'block';
//     } else {
//         isMenu.style.display = 'none';
//     }
// }