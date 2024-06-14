document.addEventListener('DOMContentLoaded', function() {
    const sessionToken = localStorage.getItem('sessionToken');

    if (sessionToken !== 'loggedIn') {
        
        window.location.href = 'index.html';
    }

    const params = new URLSearchParams(window.location.search);
    const athleteId = params.get('id');

    if (!athleteId) {
        document.getElementById('athlete-details').innerText = 'ID do atleta não fornecido';
        return;
    }

    const endpoint = `https://botafogo-atletas.mange.li/2024-1/${athleteId}`;
    const athleteDetailsContainer = document.getElementById('athlete-details');

    async function fetchAthleteDetails() {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados do atleta');
            }
            const athlete = await response.json();
            displayAthleteDetails(athlete);
        } catch (error) {
            console.error('Erro:', error);
            athleteDetailsContainer.innerHTML = '<p>Não foi possível carregar os dados do atleta.</p>';
        }
    }

    function displayAthleteDetails(athlete) {
        athleteDetailsContainer.innerHTML = `
            <div class="athlete-detail">
                <div class="athlete-imagem">
                <img src="${athlete.imagem}" alt="${athlete.nome}">
                </div>
                <div class="athlete-infos">
                    <p><strong>Nome:</strong> ${athlete.nome}</p>
                    <p><strong>Elenco:</strong> ${athlete.elenco}</p>
                    <p><strong>Posição:</strong> ${athlete.posicao}</p>
                    <p><strong>Naturalidade:</strong> ${athlete.naturalidade}</p>
                    <p><strong>Data de Nascimento:</strong> ${athlete.nascimento}</p>
                    <p><strong>Altura:</strong> ${athlete.altura}</p>
                    <p><strong>Detalhes:</strong> ${athlete.detalhes}</p>
                </div>
            </div>
        `;
    }

    document.getElementById('back-to-home-button').addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    fetchAthleteDetails();
});
