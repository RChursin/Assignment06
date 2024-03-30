document.addEventListener('DOMContentLoaded', () => {
    // Get add employee form and employee table from the DOM
    const empForm = document.getElementById('empForm');
    const employeeTable = document.getElementById('employees');

    // Set a count variable to display next to employees header
    const employeeCount = document.getElementById('empCount');
    let count = 0;

    // Add employee form submission event listener
    empForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent form submission

        // Get the values from the text boxes
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const ext = document.getElementById('ext').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;

        // Insert a new row at the end of the employees table
        const row = employeeTable.insertRow();

        // Insert a cell for each item within the new row
        const cellID = row.insertCell();
        const cellName = row.insertCell();
        const cellExtension = row.insertCell();
        const cellEmail = row.insertCell();
        const cellDepartment = row.insertCell();
        const cellDelete = row.insertCell();

        // Append the text values as text nodes within the cells
        cellID.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExtension.appendChild(document.createTextNode(ext));
        cellEmail.appendChild(document.createTextNode(email));
        cellDepartment.appendChild(document.createTextNode(department));

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.addEventListener('click', deleteEmployee);
        cellDelete.appendChild(deleteButton);

        // Increment the number of employees in the table
        count++;
        employeeCount.textContent = count;

        // Reset the form
        empForm.reset();

        // Set focus back to the ID text box
        document.getElementById('id').focus();
    });

    // Delete employee function
    function deleteEmployee(e) {
        if (confirm('Are you sure you want to delete this employee?')) {
            const row = e.target.parentElement.parentElement;
            employeeTable.deleteRow(row.rowIndex);

            // Decrement the number of employees in the table
            count--;
            employeeCount.textContent = count;
        }
    }
});