// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

$(function() {
    $(".show-sample").on("ajax:complete", function(event,xhr) {
        $("#show-fullname").val(xhr.responseText);
        $("#read-tab-link").click();
    });

    $(".update-sample").on("ajax:complete", function(event,xhr) {
        $("#update-fullname").val(xhr.responseText);
        $("#update-tab-link").click();
    });

    $(".delete-sample").on("ajax:complete", function(event,xhr) {
        $("#delete-fullname").val(xhr.responseText);
        $("#delete-tab-link").click();
    });
});
