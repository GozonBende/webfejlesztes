document.querySelector('.form2').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve numeric ability scores
    const academic = parseInt(document.getElementById('academic').value) || 0;
    const physical = parseInt(document.getElementById('physical').value) || 0;
    const social = parseInt(document.getElementById('social').value) || 0;
    const cooperation = parseInt(document.getElementById('cooperation').value) || 0;
    const adaptability = parseInt(document.getElementById('adaptability').value) || 0;

    // Calculate total score
    const totalScore = academic + physical + social + cooperation + adaptability;

    // Determine class assignment
    let assignedClass = '';
    let classImage = '';
    if (totalScore >= 400) {
        assignedClass = 'Class A';
        classImage = 'images/overall/ClassA.jpg';
    } else if (totalScore >= 300) {
        assignedClass = 'Class B';
        classImage = 'images/overall/ClassB.jpg';
    } else if (totalScore >= 200) {
        assignedClass = 'Class C';
        classImage = 'images/overall/ClassC.jpg';
    } else {
        assignedClass = 'Class D';
        classImage = 'images/overall/ClassD.jpg';
    }

    // Retrieve beneficial system text
    const beneficialSystem = document.getElementById('beneficial-system').value;

    // Retrieve final decision
    const decision = document.querySelector('input[name="decision"]:checked')?.nextElementSibling.textContent.trim() || 'No selection';

    // Display result
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.add('visible');
    resultContainer.innerHTML = `
        <h3>You are assigned to: ${assignedClass}</h3>
        <p>Beneficial System: ${beneficialSystem}</p>
        <p>Final Decision: ${decision}</p>
        <div class="result-content">
            <img src="${classImage}" alt="${assignedClass}">
            <ul>
                <li>Academic Ability: ${academic}</li>
                <li>Physical Ability: ${physical}</li>
                <li>Social Contribution: ${social}</li>
                <li>Cooperation Ability: ${cooperation}</li>
                <li>Adaptability: ${adaptability}</li>
            </ul>
        </div>
    `;
});
