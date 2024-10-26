const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    const movies = {
        '1': { title: 'ARM', poster: 'images/ARM.jpg', overview: 'Directed by Jithin Lal. With Mohanlal, Tovino Thomas, Basil Joseph, Krithi Shetty' },
        '2': { title: 'JIGRA', poster: 'images/film2.jpeg', overview: ' Directed by Vasan Bala. With Alia Bhatt, Vedang Raina, Akansha Ranjan Kapoor, Manoj Pahwa. I' },
        '3': { title: 'DEVARA', poster: 'images/film3.jpeg', overview: 'The film stars N. T. Rama Rao Jr in dual roles, alongside Saif Ali Khan, Janhvi Kapoor, Prakash Raj, Srikanth and Shine Tom Chacko' }
    };

    const movie = movies[movieId];

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-poster').src = movie.poster;
        document.getElementById('movie-overview').textContent = movie.overview;
    } else {
        document.body.innerHTML = '<p class="text-lg text-center">Movie not found.</p>';
    }