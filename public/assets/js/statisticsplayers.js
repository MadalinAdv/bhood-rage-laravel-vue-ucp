$(document).ready(function() {
    e = $('._statisticsplayers').data('players');
    starthour = $('._statisticsplayers').data('starthour');
    $('.players-card').css({
        'display': 'block'
    });
    const data = e;
    const labels = [...Array(data.length).keys()];

    mplayers = [];
    for (i = parseInt(starthour) + 1; i <= parseInt(starthour) + 24; i++) {
        if (i >= 24) mplayers.push(parseInt(i - 24) + ":00");
        else mplayers.push(parseInt(i) + ":00");
    }

    const dailyAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    $('._dailyAverage').text(new Intl.NumberFormat('ro-RO').format(Math.round(dailyAverage(data))) + ' ');
    new Chart(document.getElementById('players-chart').getContext('2d'), {
        type: 'line',
        data: {
            labels: mplayers,
            datasets: [{
                data: data,
                label: 'Online Players',
                //borderWidth: 3,
            }],
            //labels: labels,
        },
        options: {
            title: {
                display: true,
                text: 'Statistics online players',
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Online Players'
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return new Intl.NumberFormat('ro-RO').format(value) + ' ';
                        }
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Hour'
                    }
                }],
            }
        }
    });
});