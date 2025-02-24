document.getElementById('current-year').textContent = new Date().getFullYear();

function showPopup(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup').style.display = 'block';
}


        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }

        function filterYear(year) {
            let experiences = document.querySelectorAll('.experience');
            experiences.forEach(exp => {
                if (year === 'all' || exp.getAttribute('data-year') === year) {
                    exp.style.display = 'inline-block';
                } else {
                    exp.style.display = 'none';
                }
            });
        }