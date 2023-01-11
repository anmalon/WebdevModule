const button = document.getElementById('btnRandom');
    button.addEventListener('click', async () => {
        try {
            const imgWrapper = document.getElementById('img-wrapper');
            
            // clearing the imgWrapper so images dont overlap
            imgWrapper.innerHTML = "";
            const contHeight = imgWrapper.clientHeight;
            const contWidth = imgWrapper.clientWidth;

            // setting min values for the pictures
            const minHeight = 50;
            const minWidth = 50;

            // randomising the values to get different cat pictures every time
            const y = Math.max(minHeight, Math.floor(Math.random() * contHeight));
            const x = Math.max(minWidth, Math.floor(Math.random() * contWidth));

            const url = `http://placekitten.com/${x}/${y}`;
            const response = await fetch(url, {mode: 'no-cors'});
            const imageUrl = `http://placekitten.com/${x}/${y}`;

            var image = new Image();
            image.src = imageUrl;
            imgWrapper.appendChild(image);
        } catch (error) {
            console.error('Error:', error);
        }
    });