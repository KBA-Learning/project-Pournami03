const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    const movies = [
        { title: 'ARM', id: '1', poster: 'images/ARM.jpg' },
        { title: 'Jigra', id: '1', poster: 'images/film2.jpeg' },
        { title: 'Venom', id: '1', poster: 'images/film3.jpeg' },
        { title: 'Vettaiyan', id: '1', poster: 'images/film4.jpeg' },
        { title: 'Inception', id: '1', poster: 'img/inception.jpg' },
        { title: 'The Matrix', id: '2', poster: 'img/matrix.jpg' },
        { title: 'Interstellar', id: '3', poster: 'img/interstellar.jpg' }
    ];

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

    const resultsContainer = document.getElementById('results-container');


    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieCard = `
                <div class="bg-gray-800 p-4 rounded-lg text-center">
                    <img src="${movie.poster}" alt="${movie.title}" class="w-full h-64 object-cover mb-4">
                    <h3 class="text-xl font-bold mb-2">${movie.title}</h3>
                    <a href="movie-details.html?id=${movie.id}" class="px-4 py-2 bg-blue-600 text-white rounded-lg">View Details</a>
                </div>
            `;
            resultsContainer.innerHTML += movieCard;
        });
    } else {
        resultsContainer.innerHTML = '<p class="text-lg">No movies found.</p>';
    }