async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}


function displayMembers(members) {
    const container = document.getElementById('members-container');

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

// Toggle between grid and list view
function toggleView(view) {
    const container = document.getElementById('members-container');
    
    if (view === 'grid') {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    } else {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    }
}

// Load member data on page load
getMembers();
