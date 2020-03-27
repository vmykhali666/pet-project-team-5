"use strict"

$('#nav-tweets-tabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

module.exports = {};