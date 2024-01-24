const preview = document.querySelector('#preview')
const innerBox = document.querySelector('#innerBox')
const widthInput = document.querySelector('#widthInput')
const heightInput = document.querySelector('#heightInput')
const fontSelect = document.querySelector('#fontSelect')
const bgCheck = document.querySelector('#bgCheck')
const bgInputDiv = document.querySelector('#bgInputDiv')
const bgInput = document.querySelector('#bgInput')
const exportBtn = document.querySelector('#exportBtn')
const text = document.querySelector('#text')

widthInput.addEventListener('keyup', () => {
    preview.style.width = widthInput.value + "px";
})
heightInput.addEventListener('keyup', () => {
    preview.style.height = heightInput.value + "px";
})
fontSelect.addEventListener('change', (e) => {
    text.style.fontFamily = e.target.value;
})
bgCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        bgInputDiv.style.display = "block"
    } else {
        bgInputDiv.style.display = "none"
    }

})

bgInput.addEventListener('change', () =>{
    let imgUrl = URL.createObjectURL(bgInput.files[0])
    innerBox.style.background = "url("+imgUrl+")"
})

function exportElementAsPNG(element, fileName) {
    html2canvas(element).then(function(canvas) {
        let link = document.createElement('a');
        link.download = fileName + '.png';
        canvas.toBlob(function(blob) {
            let url = URL.createObjectURL(blob);
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });
    });
}

exportBtn.addEventListener('click', () => {
    let elementToExport = document.getElementById('preview');
    exportElementAsPNG(elementToExport, 'exported-element');
})
