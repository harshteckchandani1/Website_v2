<script>
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('aboutMe').innerText = data.aboutMe;
            let researchList = document.getElementById('researchList');
            researchList.innerHTML = "";
            data.researchInterests.forEach(item => {
                let li = document.createElement('li');
                li.textContent = item;
                researchList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading data:', error));
</script>
