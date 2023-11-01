function fetchJokes(event) {
    event.preventDefault();
    const jokeCount = document.getElementById('jokeCount').value;
    const responseBox = document.getElementById('APIResponseBox');

    fetch(`https://api.api-ninjas.com/v1/jokes?limit=${jokeCount}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'EKYYV1KOOOSK4GwgWP+lzg==GXo9LwCULPeCevdU'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            responseBox.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const jokeParagraph = document.createElement('p');
                jokeParagraph.textContent = data[i].joke;
                responseBox.appendChild(jokeParagraph);
            }
        })
        .catch(error => {
            document.getElementById('APIResponseBox').textContent = `Error fetching API response D: ${error.message}`;
        });
}
