'use strict';

var INCORRECT_LIST = ["manim-ext", "manim-live", "manim-notebook"];

$(document).ready(function () {
    $.getJSON("plugins.json", function (old_data) {
        var data = [];
        for (var j = 0; j < old_data.length; j = j + 1) {
            if ($.inArray(old_data[j], INCORRECT_LIST) == -1) {
                data.push(old_data[j]);
            }
        }
        for (var i = 0; i <= data.length; i = i + 2) {
            $('#main-container').append(
                $('<div>').prop({
                    id: 'plugin-flex' + i,
                    className: ''
                })
            );
            if (i + 2 < data.length) {
                $.fn.get_pypi(data[i], data[i + 1], '#plugin-flex' + i)
            } else if (i === data.length -1 ) {
                $.fn.get_pypi(data[i], "no", '#plugin-flex' + i)
            }
        }
    }).fail(function () {
        console.error("Can't get list of plugins");
    });
});
$.fn.get_pypi = function (name1, name2, node_id) {
    if (name2 === "no") {
        $.when($.ajax({
            url: 'https://pypi.org/pypi/' + name1 + '/json',
            success: function (data) {
                console.log(`ajax completed for ${name1}`);
            },
            fail: function () {
                console.log(`Error while loading ${name1}`)
            }
        })).then(
            function (data1) {
                $(node_id).append($('<div>').prop({
                    id: name1 + 'alone',
                    innerHTML: `
    <div class="row mb-2">
        <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${data1.info.author}</strong>
                    <h3 class="mb-0">${name1}</h3>
                    <div class="mb-1 text-muted">Nov 12</div>
                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="${data1.info.home_page}" class="stretched-link">Project Page</a>
                </div>
            </div>
        </div>
    </div>
    `
                }));
            }
        )
    } else {
        $.when($.ajax({
            url: 'https://pypi.org/pypi/' + name1 + '/json',
            success: function (data) {
                console.log(`ajax completed for ${name1}`);
            },
            fail: function () {
                console.log(`Error while loading ${name1}`)
            }
        }),
            $.ajax({
                url: 'https://pypi.org/pypi/' + name2 + '/json',
                success: function (data) {
                    console.log(`ajax completed for ${name2}`);
                },
                fail: function () {
                    console.log(`Error while loading ${name2}`)
                }
            })).then(
                function (data1, data2) {
                    $(node_id).append($('<div>').prop({
                        id: name1 + '-' + name2,
                        innerHTML: `
<div class="row mb-2">
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${data1[0].info.author}</strong>
                <h3 class="mb-0">${name1}</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="${data1[0].info.home_page}" class="stretched-link">Project Page</a>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">${data2[0].info.author}</strong>
                <h3 class="mb-0">${name2}</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="${data2[0].info.home_page}" class="stretched-link">Project Page</a>
            </div>
        </div>
    </div>
</div>
`
                    }));
                }
            )
    }
}
