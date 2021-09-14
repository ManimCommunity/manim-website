import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
var INCORRECT_LIST = ["manim-ext", "manim-live", "manim-notebook"];
$(document).ready(function () {
    $.getJSON("plugins.json", function (old_data) {
        var old_plugin_data = old_data[0];
        var old_archive_data = old_data[1];
        var data = [];
        
        for (var j = 0; j < old_plugin_data.length; j = j + 1) {
            if ($.inArray(old_plugin_data[j], INCORRECT_LIST) == -1) {
                data.push(old_plugin_data[j]);
            }
        }
        for (var i = 0; i <= data.length; i = i + 2) {
            $('#main-container').append(
                $('<div>').prop({
                    id: 'plugin-flex' + i,
                    className: ''
                })
            );
            if (i + 1 <= data.length - 1) {
                $.fn.get_pypi(data[i], data[i + 1], '#plugin-flex' + i, false)
            } else if (i === data.length - 1) {
                if (i % 2 === 0) {
                    $.fn.get_pypi(data[i], "no", '#plugin-flex' + i, false)
                }
            } else {
                console.log(i, data.length)
            }
        }
        data = [];
        for (var j = 0; j < old_archive_data.length; j = j + 1) {
            if ($.inArray(old_archive_data[j], INCORRECT_LIST) == -1) {
                data.push(old_archive_data[j]);
            }
        }
        for (var i = 0; i <= data.length; i = i + 2) {
            $('#main-container').append(
                $('<div>').prop({
                    id: 'archive-flex' + i,
                    className: ''
                })
            );
            if (i + 1 <= data.length - 1) {
                $.fn.get_pypi(data[i], data[i + 1], '#archive-flex' + i, true)
            } else if (i === data.length - 1) {
                if (i % 2 === 0) {
                    $.fn.get_pypi(data[i], "no", '#archive-flex' + i, true)
                }
            } else {
                console.log(i, data.length)
            }
        }
    }).fail(function () {
        console.error("Can't get list of plugins");
    });
});
$.fn.get_date = function (date_string) {
    var a = new Date(date_string);
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return a.toLocaleDateString("en-US", options)
}
$.fn.get_pypi = function (name1, name2, node_id, archived) {
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
                $("#loading-screen").hide();
                var date = $.fn.get_date(data1.urls[0].upload_time_iso_8601)
                $(node_id).append($('<div>').prop({
                    id: name1 + 'alone',
                    innerHTML: `
    <div class="row mb-2">
        <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative hover-card ${archived ? 'archived' : ''}">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${data1.info.author}</strong>
                    <h3 class="mb-0">${name1} v${data1.info.version} ${archived ? '(Archived)' : ''}</h3>
                    <div class="mb-1 text-muted">${date}</div>
                    <p class="card-text mb-auto py-3 summary">${data1.info.summary}</p>
                    <div class="row no-gutters flex-md-row position-relative">
                        <a href="${data1.info.package_url}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-primary m-1"><i class="fab fa-python"></i> PyPi Page</button></a>
                        <a href="${data1.info.home_page}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-info m-1"><i class="fas fa-home"></i> Home Page</button></a>
                    </div>
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
                    $("#loading-screen").hide()
                    var date1 = $.fn.get_date(data1[0].urls[0].upload_time_iso_8601)
                    var date2 = $.fn.get_date(data2[0].urls[0].upload_time_iso_8601)
                    $(node_id).append($('<div>').prop({
                        id: name1 + '-' + name2,
                        innerHTML: `
<div class="row mb-2">
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative hover-card ${archived ? 'archived' : ''}">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${data1[0].info.author}</strong>
                <h3 class="mb-0">${name1} v${data1[0].info.version} ${archived ? '(Archived)' : ''}</h3>
                <div class="mb-1 text-muted">${date1}</div>
                <p class="card-text mb-auto py-3 summary">${data1[0].info.summary}</p>
                <div class="row no-gutters flex-md-row position-relative">
                    <a href="${data1[0].info.package_url}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-primary m-1"><i class="fab fa-python"></i> PyPi Page</button></a>
                    <a href="${data1[0].info.home_page}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-info m-1"><i class="fas fa-home"></i> Home Page</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative hover-card ${archived ? 'archived' : ''}">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">${data2[0].info.author}</strong>
                <h3 class="mb-0">${name2} v${data2[0].info.version} ${archived ? '(Archived)' : ''}</h3>
                <div class="mb-1 text-muted">${date2}</div>
                <p class="mb-auto py-3 summary">${data2[0].info.summary}</p>
                <div class="row no-gutters flex-md-row position-relative">
                    <a href="${data2[0].info.package_url}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-success m-1"><i class="fab fa-python"></i> PyPi Page</button></a>
                    <a href="${data2[0].info.home_page}" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-info m-1"><i class="fas fa-home"></i> Home Page</button></a>
                </div>
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
