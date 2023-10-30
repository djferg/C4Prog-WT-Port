function fetchJokes(event) {
    event.preventDefault();
    const jokeCount = document.getElementById('jokeCount').value;

    fetch('https://api.api-ninjas.com/v1/jokes?limit=' + jokeCount, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'EKYYV1KOOOSK4GwgWP+lzg==GXo9LwCULPeCevdU'
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('APIResponseBox').textContent = JSON.stringify(data, null, 2);
    });
}
