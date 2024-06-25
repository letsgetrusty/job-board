const ctx3 = document.getElementById('chart-1');

var datasets3 = [{
        'label': 'AI/ML',
        'color': 'red',
        'value': 12.00
    },
    {
        'label': 'Backend',
        'color': 'blue',
        'value': 19.02
    },
    {
        'label': 'Embedded/low-level',
        'color': 'green',
        'value': 45.55
    },
    {
        'label': 'Finance',
        'color': 'orange',
        'value': 5.23
    },
    {
        'label': 'Blockchain/Web3',
        'color': 'purple',
        'value': 26.52
    },
    {
        'label': 'Desktop/mobile',
        'color': 'yellow',
        'value': 3.25
    },
    {
        'label': 'Other',
        'color': 'grey',
        'value': 1.51
    }
];

datasets3 = datasets3.sort((a, b) => b.value - a.value);
var labels3 = datasets3.map(data => data.label);
var colors3 = datasets3.map(data => data.color);
var values3 = datasets3.map(data => data.value);

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: labels3,
        datasets: [
            {
                label: 'market share %',
                data: values3,
                borderWidth: 1
           }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'left'
            },
            title: {
                display: true
            }
        }
    }
});