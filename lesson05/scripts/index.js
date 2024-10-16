// Select the input field, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the "Add Chapter" button
button.addEventListener('click', () => {
    // Check if the input value is not empty
    if (input.value !== '') {
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Append delete button to the list item
        li.append(deleteButton);

        // Append the new list item to the ul (unordered list)
        list.append(li);

        // Add event listener to the delete button to remove the chapter
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    } else {
        // If the input is empty, show an alert or provide feedback
        alert('Please enter a book and chapter.');
    }
});
