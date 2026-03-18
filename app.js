$(document).ready(function() {

    // Add Tasks
    $('#add-btn').on('click', function() {
        var taskValue = $('#task-input').val();
        if (taskValue.trim() !== "") {
            var newTask = `
                <div class="task-item d-flex justify-content-between align-items-center mb-2">
                    <div class="task-text">
                        <input type="checkbox" class="task-checkbox me-2">
                        <span class="text-content">${taskValue}</span>
                    </div>
                    <span class="delete" style="cursor:pointer; font-weight:bold;">×</span>
                </div>`;
            $('#task-list').append(newTask);
            $('#task-input').val('');
        }
    });

    // 2. Remove Tasks
    $(document).on('click', '.delete', function() {
        $(this).closest('.task-item').remove();
    });

    // 3. Toggle Completion
    $(document).on('change', '.task-checkbox', function() {
        $(this).siblings('.text-content').toggleClass('completed');
    });

});