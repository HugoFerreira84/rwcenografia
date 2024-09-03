const urlParams = new URLSearchParams(window.location.search);
const projeto = urlParams.get('projeto');

const projetos = {
    projeto1: {
        title: 'Projeto 1',
        images: ['../assets/images/portifolio-1.jpg', '../assets/images/portifolio-2.jpg', '../assets/images/portifolio-3.jpg', '../assets/images/portifolio-4.jpg'],
        description: 'Descrição detalhada do Projeto 1. Aqui você pode adicionar informações sobre os desafios enfrentados, soluções implementadas e resultados alcançados.'
    },
    projeto2: {
        title: 'Projeto 2',
        images: ['../assets/images/portifolio-1.jpg', '../assets/images/portifolio-2.jpg', '../assets/images/portifolio-3.jpg', '../assets/images/portifolio-4.jpg'],
        description: 'Descrição detalhada do Projeto 2. Detalhe os aspectos únicos deste projeto e como ele se destaca dos demais.'
    },
    projeto3: {
        title: 'Projeto 3',
        images: ['../assets/images/portifolio-1.jpg', '../assets/images/portifolio-2.jpg', '../assets/images/portifolio-3.jpg', '../assets/images/portifolio-4.jpg'],
        description: 'Descrição detalhada do Projeto 3. Explique o impacto deste projeto e o feedback dos clientes.'
    },
    projeto4: {
        title: 'Projeto 4',
        images: ['../assets/images/portifolio-1.jpg', '../assets/images/portifolio-2.jpg', '../assets/images/portifolio-3.jpg', '../assets/images/portifolio-4.jpg'],
        description: 'Descrição detalhada do Projeto 3. Explique o impacto deste projeto e o feedback dos clientes.'
    }
    // Adicione mais projetos conforme necessário
};

if (projetos[projeto]) {
    document.getElementById('projeto-title').innerText = projetos[projeto].title;
    const contentDiv = document.getElementById('project-content');

    projetos[projeto].images.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'card mb-4 shadow-sm';
        card.style.cursor = 'pointer';
        card.setAttribute('data-bs-toggle', 'modal');
        card.setAttribute('data-bs-target', '#projectModal');
        card.setAttribute('onclick', `openModal('${projeto}', ${index})`);

        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = `${projetos[projeto].title} - Imagem ${index + 1}`;
        imgElement.className = 'card-img-top';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const textElement = document.createElement('p');
        textElement.className = 'card-text';
        textElement.innerText = projetos[projeto].description.substring(0, 100) + '...';

        cardBody.appendChild(textElement);
        card.appendChild(imgElement);
        card.appendChild(cardBody);
        contentDiv.appendChild(card);
    });
} else {
    document.getElementById('project-content').innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            Projeto não encontrado.
        </div>
    `;
}

// Função para abrir o modal com detalhes do projeto
function openModal(projeto, index) {
    const selectedProject = projetos[projeto];
    document.getElementById('projectModalLabel').innerText = selectedProject.title;

    // Limpar o conteúdo anterior do carrossel
    const modalCarouselInner = document.getElementById('modalCarouselInner');
    modalCarouselInner.innerHTML = '';

    // Adicionar imagens ao carrossel
    selectedProject.images.forEach((img, idx) => {
        const div = document.createElement('div');
        div.className = idx === index ? 'carousel-item active' : 'carousel-item';

        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.className = 'd-block w-100';
        imgElement.alt = `${selectedProject.title} - Imagem ${idx + 1}`;

        div.appendChild(imgElement);
        modalCarouselInner.appendChild(div);
    });

    // Adicionar descrição
    document.getElementById('modalDescription').innerText = selectedProject.description;
}