document.addEventListener('DOMContentLoaded', function() {
    const sessionToken = localStorage.getItem('sessionToken');

    if (sessionToken !== 'loggedIn') {
        
        window.location.href = 'index.html';
    }

    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('sessionToken');
        window.location.href = 'index.html';
    });

    const athletesContainer = document.getElementById('athletes-container');
    const searchInput = document.getElementById('search-input');
    const endpoints = {
        all: 'https://botafogo-atletas.mange.li/2024-1/all',
        masculino: 'https://botafogo-atletas.mange.li/2024-1/masculino',
        feminino: 'https://botafogo-atletas.mange.li/2024-1/feminino'
    };
    let currentAthletes = [];

    async function fetchAthletes(endpoint) {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados dos atletas');
            }
            currentAthletes = await response.json();
            displayAthletes(currentAthletes);
        } catch (error) {
            console.error('Erro:', error);
            athletesContainer.innerHTML = '<p>Não foi possível carregar os dados dos atletas.</p>';
        }
    }

    function displayAthletes(athletes) {
        athletesContainer.innerHTML = '';
        athletes.forEach(athlete => {
            const athleteDiv = document.createElement('div');
            athleteDiv.classList.add('athlete');

            const athleteImg = document.createElement('img');
            athleteImg.src = athlete.imagem;
            athleteImg.alt = athlete.nome;

            const athleteName = document.createElement('p');
            athleteName.innerText = athlete.nome;

            const athleteLink = document.createElement('a');
            athleteLink.href = `detalhes.html?id=${athlete.id}`;
            athleteLink.innerText = 'Ver detalhes';
            athleteLink.classList.add('details-link');

            athleteDiv.appendChild(athleteImg);
            athleteDiv.appendChild(athleteName);
            athleteDiv.appendChild(athleteLink);

            athletesContainer.appendChild(athleteDiv);
        });
    }

    function filterAthletes() {
        const query = searchInput.value.toLowerCase();
        const filteredAthletes = currentAthletes.filter(athlete => athlete.nome.toLowerCase().includes(query));
        displayAthletes(filteredAthletes);
    }

    searchInput.addEventListener('input', filterAthletes);

    
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const selectedEndpoint = button.getAttribute('data-endpoint');
            fetchAthletes(endpoints[selectedEndpoint]);
        });
    });

    const filterSelect = document.getElementById('filter-select');
    filterSelect.addEventListener('change', function() {
        const selectedEndpoint = filterSelect.value;
        fetchAthletes(endpoints[selectedEndpoint]);
    });
    

    
    fetchAthletes(endpoints.all);
});
