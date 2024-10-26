
        document.getElementById('search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const query = document.getElementById('search-query').value;
            if (query) {
                window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
            }
        });
    