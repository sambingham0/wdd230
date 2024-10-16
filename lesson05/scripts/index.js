// Select the input field, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');

// Add event listener to the "Add Chapter" button
button.addEventListener('click', () => {
    errorMessage.textContent = ''; // Clear error message

    // Check if the input value is not empty
    if (input.value !== '') {

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Append delete button to the list item
        li.append(deleteButton);

        // Append the new list item to the ul (unordered list)
        list.append(li);

        // Add event listener to the delete button to remove the chapter
        deleteButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this chapter?')) {
                list.removeChild(li);
                input.focus();
            }
        });

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    } else {
        // If the input is empty, show an alert or provide feedback
        errorMessage.textContent = 'Please enter a book and chapter.';
    }
});
