$(document).ready(function () {
    if ($('#dataTable').length) {
        $('#dataTable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ url('api/data') }}",
            columns: $("#dataTable thead th").map(function () {
                return { data: $(this).text().trim().toLowerCase().replace(/\s+/g, '_') };
            }).get(),
            dom: 'Bfrtip',
            buttons: ['csv', 'excel', 'pdf']
        });
    }
});
