async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const silverAndGoldMembers = data.members.filter(member =>
        member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
    );

    const selectedMembers = getRandomMembers(silverAndGoldMembers, 2, 3); // Randomly select 2-3 members
    displayMembers(selectedMembers);
}

function getRandomMembers(members, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min; // Randomly select a count between min and max
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Return the first `count` members
}

function displayMembers(members) {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = ''; // Clear previous members if any

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

        const img = document.createElement('img');
        img.src = `images/${member.image}`;
        img.alt = `${member.name} Logo`;

        const name = document.createElement('h3');
        name.textContent = member.name;

        const membership = document.createElement('p');
        membership.textContent = `Membership Level: ${member.membershipLevel}`;

        const address = document.createElement('p');
        address.textContent = member.address;

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = 'Visit Website';

        memberElement.appendChild(img);
        memberElement.appendChild(name);
        memberElement.appendChild(membership);
        memberElement.appendChild(address);
        memberElement.appendChild(phone);
        memberElement.appendChild(website);

        container.appendChild(memberElement);
    });
}

// Load member data on page load
getMembers();
