'use strict';
$(document).ready(function () {
    $.getJSON("plugins.json", function (data) {
        for (var i = 0; i < data.length; i = i + 2) {
            $('#main-container').append(
                $('<div>').prop({
                    id: 'main-flex'+i,
                    className: 'd-flex justify-content-center align-items-center'
                })
            );
            $.fn.get_pypi(data[i],'#main-flex'+i)
            $.fn.get_pypi(data[i+1],'#main-flex'+i)
        }
    }).fail(function () {
        console.error("Can't get list of plugins");
    });
});
$.fn.get_pypi = function (name,id) {
    $.getJSON("https://pypi.org/pypi/" + name + "/json", function (data) {
        $(id).append($('<div>').prop({
            id: name,
            innerHTML: `<div class="row mb-2">
            <div class="col-md-6">
              <div
                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              >
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">${data.info.author}</strong>
                  <h3 class="mb-0">${data.info.author_email}</h3>
                  <div class="mb-1 text-muted">Nov 12</div>
                  <p class="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="#" class="stretched-link">Continue reading</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>`,
            className: 'p-2 flex-fill bd-highlight'
        }));
    }).fail(function () {
        console.error("An error has occurred.");
    });
}