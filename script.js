function goToPage(pageId) {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hidden');
    });
    document.getElementById('page1').classList.remove('hidden');
}