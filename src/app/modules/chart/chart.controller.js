(function() {
  'use strict';

  angular
    .module('allocMe')
    .controller('ChartController', ChartController);

  /** @ngInject */
  function ChartController() {
    var vm = this;

    vm.chartData = {
        chart: {
            canvasbgcolor: 'F1F1FF, FFFFFF',
            canvasbgangle: 90,
            dateformat: 'dd/mm/yyyy',
            ganttlinecolor: '0372AB',
            ganttlinealpha: 8,
            gridbordercolor: '0372AB',
            canvasbordercolor: '0372AB',
            showshadow: 0,
            taskbarfillmix: '{light-60}',
            showborder: 0
        },
        categories: [
            {
                bgcolor: '0372AB',
                category: [
                    {
                        start: '1/1/2016',
                        end: '2/6/2016',
                        name: 'Projects',
                        fontcolor: 'FFFFFF'
                    }
                ]
            },
            {
                bgalpha: '0',
                category: [
                    {
                        start: '1/1/2016',
                        end: '1/2/2016',
                        name: 'Janeiro'
                    },
                    {
                        start: '2/2/2016',
                        end: '1/3/2016',
                        name: 'Fevereiro'
                    },
                    {
                        start: '2/3/2016',
                        end: '1/4/2016',
                        name: 'Março'
                    },
                    {
                        start: '2/4/2016',
                        end: '1/5/2016',
                        name: 'Abril'
                    },
                    {
                        start: '2/5/2016',
                        end: '2/6/2016',
                        name: 'Maio'
                    }
                ]
            }
        ],
        processes: {
            isbold: '1',
            headerbgcolor: '0372AB',
            fontcolor: '0372AB',
            bgcolor: 'FFFFFF',
            process: [
                {
                    'name': 'Tiba',
                    'id': 'A'
                },
                {
                    'name': 'Fabio',
                    'id': 'B'
                },
                {
                    'name': 'Marcelo',
                    'id': 'C'
                }
            ]
        },
        tasks: {
            task: [
                {
                    'name': 'Projeto A',
                    'processid': 'A',
                    'start': '1/1/2016',
                    'end': '2/3/2016',
                    'taskid': 'B',
                    'alpha':50,
                    'bordercolor': 'FF654F',
                    'color': 'FF654F'
                },
                {
                    'name': 'Projeto C',
                    'processid': 'A',
                    'start': '20/2/2016',
                    'end': '2/6/2016',
                    'alpha': 50,
                    'taskid': 'B',
                    'bordercolor': '8BBA00',
                    'color': '8BBA00'
                },
                {
                    'name': 'Projeto B',
                    'processid': 'B',
                    'start': '1/1/2016',
                    'end': '15/3/2016',
                    'taskid': 'B',
                    'bordercolor': 'FF654F',
                    'color': 'FF654F'
                },
                {
                    'name': 'Projeto E',
                    'processid': 'B',
                    'start': '15/1/2016',
                    'end': '2/6/2016',
                    'taskid': 'B',
                    'bordercolor': 'F6BD0F',
                    'color': 'F6BD0F'
                },
                {
                    'name': 'Projeto A',
                    'processid': 'C',
                    'start': '5/1/2016',
                    'end': '1/2/2016',
                    'taskid': 'B',
                    'bordercolor': 'FF654F',
                    'color': 'FF654F'
                },
                {
                    'name': 'Projeto D',
                    'processid': 'C',
                    'start': '2/2/2016',
                    'end': '1/3/2016',
                    'taskid': 'B',
                    'bordercolor': '8BBA00',
                    'color': '8BBA00'
                },
                {
                    'name': 'Projeto B',
                    'processid': 'C',
                    'start': '15/3/2016',
                    'end': '1/6/2016',
                    'taskid': 'B',
                    'bordercolor': 'FF654F',
                    'color': 'FF654F'
                }
            ]
        },
        'legend': {
            'item': [
                {
                    'label': 'Projeto A',
                    'color': 'FF654F'
                },
                {
                    'label': 'Projeto B',
                    'color': 'F6BD0F'
                },
                {
                    'label': 'Projeto C',
                    'color': '8BBA00'
                }
            ]
        }
    }
    
    vm.myTest = 'myTest!!!';

    angular.forEach(vm.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  }
})();
