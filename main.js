$('#btn').click(function() {
    $.getJSON('https://aws.random.cat/meow')
    .done(function(data) {
        $('#catImg').attr('src', data.file);
        console.log(data);
    })
    .fail(function() {
        alert('Cat Fail!');
    })
})