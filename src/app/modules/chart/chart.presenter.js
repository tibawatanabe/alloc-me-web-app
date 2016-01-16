(function() {
  'use strict';

  angular
    .module('allocMe')
    .service('ChartPresenter', ChartPresenter);

  function ChartPresenter() {

    function timestampToFormattedDate(timestamp) {
      return formatDate(new Date(timestamp));
    }

    function formatDate(date) {
      return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    }

    function parseData(data){
      var parsed;
      
      var guy;
      var guys = [];
      var task;
      var tasks = [];
      var i;

      var startMonth=1;
      var endMonth=12;
      var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      var mCategories = [];
      for (i=startMonth; i<endMonth; i++) {
        var mCategory = {
          start: '2/'+i+'/2016',
          end: '30/'+i+'/2016',
          name: months[i-1]
        }
        mCategories.push(mCategory);
      }
      var mCategory = {
          start: '2/12/2016',
          end: '1/1/2017',
          name: months[11]
        }
        mCategories.push(mCategory);


      for (i=0; i<data.data.employees.length; i++) {
        var employee = data.data.employees[i];
        guy = {
          name: employee.name,
          id: employee._id
        };
        guys.push(guy);
      }

      for (i=0; i<data.data.allocations.length; i++){
        var allocation = data.data.allocations[i];
        task = {
          name: allocation.project.name,
          processid: allocation.employee._id,
          start: timestampToFormattedDate(allocation.startDate),
          end: timestampToFormattedDate(allocation.endDate),
          taskid: 'A',
          alpha: 50,
          bordercolor: allocation.project.color,
          color: allocation.project.color
        };
        tasks.push(task);
      }

      parsed = {
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
                        start: '2/'+startMonth+'/2016',
                        end: '1/'+(endMonth+1)+'/2016',
                        name: 'Projetos 2016',
                        fontcolor: 'FFFFFF'
                    }
                ]
            },
            {
                bgalpha: '0',
                category: mCategories
            }
        ],
        processes: {
            isbold: '1',
            headerbgcolor: '0372AB',
            fontcolor: '0372AB',
            bgcolor: 'FFFFFF',
            process: guys
        },
        tasks: {
            task: tasks
        }
    };
      return parsed;
    }

    return {
      parseData : parseData
    };
  }
})();