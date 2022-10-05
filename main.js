var array = [6, 2, 3, 1, 7, 4, 8, 5]
//var startArray = array.slice(0);

function DrawArray(array) {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

function BubbleSort(array) {
	for (var i = array.length; i > 0; i--) {
		for (var j = 1; j <= i; j++) {
			if (array[j - 1] > array[j]) {
				var t = array[j - 1];
				array[j - 1] = array[j];
				array[j] = t;
			}
		}
	}
}

BubbleSort(array);
DrawArray(array);