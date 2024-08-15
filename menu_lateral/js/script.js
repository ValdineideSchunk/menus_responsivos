document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const descriptions = document.querySelectorAll('.item-description');
    
    if (sidebar.classList.contains('open-sidebar')) {
        // Esconde os nomes e fecha o menu simultaneamente
        sidebar.classList.remove('open-sidebar');
        descriptions.forEach(description => {
            description.style.width = '0px';
        });
    } else {
        // Abre o menu e mostra os nomes simultaneamente
        sidebar.classList.add('open-sidebar');
        descriptions.forEach(description => {
            description.style.width = '120px';
        });
    }
});
