function skillsMember() {
    // Get the data
    var data = JSON.parse(localStorage.getItem('data'));

    // Get the current member
    var member = data.members[data.currentMember];

    // Get the skills
    var skills = member.skills;

    // Get the skills container
    var skillsContainer = document.getElementById('skillsContainer');

    // Clear the container
    skillsContainer.innerHTML = '';

    // Loop through the skills
    for (var i = 0; i < skills.length; i++) {
        // Create the skill element
        var skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = skills[i].name;

        // Append the skill element to the skills container
        skillsContainer.appendChild(skillElement);
    }
}