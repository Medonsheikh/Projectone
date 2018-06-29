// When size is submitted by the user, call makeGrid()

let color;
$('input[type="submit"]').click(makeGrid);

function makeGrid(evt) {
	evt.preventDefault();
	color = $('#colorPicker').val();
	//takes value for height and width
	const height = parseInt($('#input_height').val());
	const width = parseInt($('#input_width').val());

	if(height === NaN || width === NaN){
		alert("Height and width must be a valid number.");
	}

	// generate grid
	const canvas = $('#pixelCanvas');
	let content = "";
	for(let row=0; row<height; row++){
		content += "<tr>";
		for(let col=0; col<width; col++){
			content += "<td></td>";
		}
		content += "</tr>";
	}

	canvas.html(content);
}

$('#colorPicker').on('change', function() {
	color = $(this).val();
});

$('#pixelCanvas').on('click', 'td', function() {
	$(this).css("background-color", color);
});

function removeGrid(){
    pixelCanvas.children().remove();
}

function clearGrid(){
    countRows();
    if (currentGridRows > 0){
        removeGrid();
        makeGrid();
    }
}

clearBtn.click(clearGrid);