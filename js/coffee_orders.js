$(document).ready(function() {
    var $clients = $('#clients');
    var url_get_list = 'http://localhost:8000/api/barman/client/list/';
    var url = 'http://localhost:8000/api/barman/client/';
    var credentials = btoa('admin:admin');

    var $email = $('#email');
    var $is_adult = $('#is_adult');
    var $marketing_accepted = $('#marketing_accepted');
    var $client_processing = $('#processing_accepted');

    var orderTemplate = $('#client-template').html();

    // console.log(credentials);

    function addClient(client) {
        var newElement = Mustache.render(orderTemplate, client);

        $(newElement).appendTo($clients).fadeIn(1000);
    }

    $.ajax({
        type: 'GET',
        url: url_get_list,
        headers: {
            'Authorization': 'Basic ' + credentials
        },
        success: function(clients) {
            $.each(clients, function(index, client) {
                addClient(client);
            });
        },
        error: function() {
            console.log('error loading orders!');
        }
    });

    $('#add_order').on('click', function() {
        var client_data = {
            email: $email.val(),
            is_adult: $is_adult.is(':checked'),
            marketing_accepted: $marketing_accepted.is(':checked'),
            processing_accepted: $client_processing.is(':checked')
        };

        // console.log(client_data);

        $.ajax({
            type: 'POST',
            url: url+'create/',
            headers: {
                'Authorization': 'Basic ' + credentials
            },
            data: client_data,
            success: function(newClient) {
                addClient(newClient);
                console.log('success');
            },
            error: function() {
                console.log('error');
            }
        });
    });

    $clients.delegate('.remove', 'click', function() {
        var $deletedClient = $(this).attr('data-id');
        var $li = $(this).closest('li');

        $.ajax({
            type: 'DELETE',
            url: url+'delete/'+$deletedClient+'/',
            headers: {
                'Authorization': 'Basic ' + credentials
            },
            success: function(deletedClient) {
                console.log('deleted: '+$deletedClient);
                $li.fadeOut(300, function() {
                    $li.remove();
                });
            },
            error: function(deletedClient) {
                console.log('error while deleting item ' + deletedClient);
            }
        });
    });

    $clients.delegate('.editClient', 'click', function() {
        var $li = $(this).closest('li');

        $li.find('input.email').val($li.find('span.email').html());
        $li.find('input.is_adult').prop('checked', $li.find('span.is_adult').is(':checked'));
        $li.find('input.marketing_accepted').val($li.find('span.marketing_accepted').html());
        $li.find('input.processing_accepted').val($li.find('span.processing_accepted').html());
        $li.addClass('edit');
        $('input .edit .name').html()
    });

    $clients.delegate('.cancelEdit', 'click', function() {
        $(this).closest('li').removeClass('edit');
    });

    $clients.delegate('.saveEdit', 'click', function() {
        var $li = $(this).closest('li');
        var client_data = {
            email: $li.find('input.email').val(),
            is_adult: $li.find('input.is_adult').is(':checked'),
            marketing_accepted: $li.find('input.marketing_accepted').is(':checked'),
            processing_accepted: $li.find('input.processing_accepted').is(':checked')
        };

        $.ajax({
            type: 'PUT',
            url: url + 'update/' + $li.attr('id') + '/',
            headers: {
                'Authorization': 'Basic ' + credentials
            },
            data: client_data,

            success: function() {
                $li.find('span.email').html(client.email);
                $li.find('span.is_adult').html(client.is_adult);
                $li.find('span.marketing_accepted').html(client.marketing_accepted);
                $li.find('span.processing_accepted').html(client.processing_accepted);

                console.log('successfully updated!');
            },
            error: function() {
                console.log('error updating client ' + $li.attr('id'));
            }
        });

        $(this).closest('li').removeClass('edit');
    });

});