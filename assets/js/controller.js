var parkoController = angular.module('parko.controllers', []);

parkoController.controller('DashboardController', ['$scope', 'Authentication', function ($scope, Authentication) {
    Authentication.ValidatePage();
    var weeklyChart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'parko-weekly',
            //backgroundColor: 'transparent',
            height: 230,
            marginLeft: 3,
            plotOptions: {
                column: {
                    pointPadding: 0,
                    borderWidth: 0,
                    groupPadding: 0,
                    shadow: false
                }
            }
        },
        title: {
            text: 'Current Week'
        },
        xAxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        },
        yAxis: {
            title: {
                text: 'Past 3 days'
            }
        },
        series: [{
            name: 'Parking Space 1',
            data: [1, 0, 0]
        
        }]
    });
}]);