document.addEventListener('DOMContentLoaded', function () {
    const imgInput = document.getElementById('img');
    const imgForm = document.getElementById('img-form');
    const fileImg = document.getElementById('img-file');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const filenameSpan = document.getElementById('filename');

    imgInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            filenameSpan.textContent = file.name;
            imgForm.classList.remove('hidden');
            fileImg.classList.remove('hidden');

            const image = new Image();
            image.src = URL.createObjectURL(file)
            image.onload = function () {
                widthInput.value = this.width
                heightInput.value = this.height
                console.log('Exito');
    
            }
        }
    });
/* 
    imgForm.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('Enviando imagen');

        const width = parseInt(widthInput.value, 10);
        const height = parseInt(heightInput.value, 10);

        if (isNaN(width) || isNaN(height)) {
            alert('Por favor, ingrese valores válidos para ancho y alto.');
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // Set the width and height inputs with the image dimensions
                widthInput.value = img.width;
                heightInput.value = img.height;

                // Resize the image to user-specified dimensions
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = parseInt(widthInput.value);
                canvas.height = parseInt(heightInput.value);

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Save the resized image
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/jpeg');
                link.download = 'resized_image.jpg';
                link.click();

                // Set the filename in the span
                filenameSpan.textContent = file.name;
            };
        };

        reader.readAsDataURL(file);
    }); */
});

function resizeImage() {
    const input = document.getElementById('img');
    const file = input.files[0];

    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = parseInt(widthInput.value);
                canvas.height = parseInt(heightInput.value);

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height,);

                // Guardar la imagen redimensionada
                const resizedDataUrl = canvas.toDataURL('image/jpeg');
                
                console.log(resizedDataUrl);

                // Crear un enlace para descargar la imagen redimensionada
                const link = document.createElement('a');
                link.href = resizedDataUrl;
                link.download = 'resized_image.jpg';
                link.click();

            };
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select an image.');
    }
}

