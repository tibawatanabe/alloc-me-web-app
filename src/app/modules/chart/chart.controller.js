(function() {
  'use strict';

  angular
    .module('allocMe')
    .controller('ChartController', ChartController);

  /** @ngInject */
  function ChartController(ChartPresenter, AllocationResource) {
    var vm = this;
    var parsedData;

/*
   var fakeData = {
  'isSuccess': true,
  'data': {
    'employees': [
      {
        '_id': '2',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Alexandre Fugita'
      },
      {
        '_id': '569a6028e6e1e0b71bccf493',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Alinne Hanako'
      },
      {
        '_id': '569a6028e6e1e0b71bccf494',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Ana Maranini'
      },
      {
        '_id': '569a6028e6e1e0b71bccf495',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790934'
        ],
        'name': 'André Kanayama'
      },
      {
        '_id': '569a6028e6e1e0b71bccf496',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f'
        ],
        'name': 'André Sales'
      },
      {
        '_id': '569a6028e6e1e0b71bccf497',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Andrea Marx'
      },
      {
        '_id': '569a6028e6e1e0b71bccf498',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790937'
        ],
        'name': 'Arthur Fonseca'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49a',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Daniel Barreto'
      },
      {
        '_id': '569a6028e6e1e0b71bccf499',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937'
        ],
        'name': 'Daniel Nakasato'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49b',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Danilo Toledo'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49c',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Deromir Neves'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49d',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790933',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Edmar Miyake'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49e',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790937'
        ],
        'name': 'Eidi Takahashi'
      },
      {
        '_id': '569a6028e6e1e0b71bccf49f',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Erica Urushibata'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a0',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790935'
        ],
        'name': 'Fábio Hiroki'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a1',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790933',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Felipe Sabino'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a2',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Filipe Lima'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a3',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931'
        ],
        'name': 'Filipe Pereira'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a4',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Flavio Mello'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a5',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790931'
        ],
        'name': 'Gabriela Marques'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a6',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'George Chaves'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a7',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Greg Milani'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a8',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a0179092f'
        ],
        'name': 'Guilherme Hashioka'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4a9',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Guilherme Mamprin'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4aa',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Henrique Arakaki'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ab',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Iury Roger'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ac',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Jaqueline Morais'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ad',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Jéssica Fernandes'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ae',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'John Tomizuka'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4af',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Jônatas Costa'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b0',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Kirsten Austin'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b1',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Leandro Blanc'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b2',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Leonardo Costa'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b3',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790937'
        ],
        'name': 'Letícia Fonseca'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b4',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Leticia Rodrigues'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b7',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790930'
        ],
        'name': 'Lucas Batista'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b5',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790935'
        ],
        'name': 'Lucas Coelho'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b6',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Lucas Figueiredo'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b9',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790932'
        ],
        'name': 'Marcelo Goto'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ba',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790933'
        ],
        'name': 'Marcelo Montanher'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4b8',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790936',
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932'
        ],
        'name': 'Marcelo Risse'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4bb',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Maureen Miller'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4bc',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Mauricio Uehara'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4bd',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932'
        ],
        'name': 'Max Souza'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4be',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Pedro Leão'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4bf',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790934'
        ],
        'name': 'Pedro Matsumoto'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c0',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Rafael Pereira'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c1',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790933'
        ],
        'name': 'Raphael Petegrosso'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c2',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790933',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931'
        ],
        'name': 'Raphael Vinhas'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c3',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790935',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790936',
          '569a4f1b18aec33a01790934',
          '569a4f1b18aec33a01790933'
        ],
        'name': 'Renato Tano'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c4',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790937'
        ],
        'name': 'Rodrigo Serradura'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c5',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790937',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790932'
        ],
        'name': 'Samuel Catalano'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c6',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790931'
        ],
        'name': 'Stefano Seravalli'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c8',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931'
        ],
        'name': 'Thiago Oliveira'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c7',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790936'
        ],
        'name': 'Thiago Watanabe'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4c9',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Tuanny Martins'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4ca',
        'unavailable_periods': [
          null
        ],
        'technologies': [],
        'name': 'Vanessa Yumi'
      },
      {
        '_id': '569a6028e6e1e0b71bccf4cb',
        'unavailable_periods': [
          null
        ],
        'technologies': [
          '569a4f1b18aec33a01790930',
          '569a4f1b18aec33a0179092f',
          '569a4f1b18aec33a01790932',
          '569a4f1b18aec33a01790931',
          '569a4f1b18aec33a01790933',
          '569a4f1b18aec33a01790934'
        ],
        'name': 'Vitor Navarro'
      }
    ],
    'allocations': [
      {
        '_id': '569a5ef7d20d3f8e18aea5b5',
        'startDate': 1451613600000,
        'endDate': 1454205600000,
        'realAllocation': true,
        'project': {
          '_id': '569a5eb9ef8a1923181ce1b8',
          'technologies': [
            '569a4f1b18aec33a01790932',
            '569a4f1b18aec33a01790931'
          ],
          'startDate': 1451613600000,
          'endDate': 1454205600000,
          'name': 'Lab in Hands'
        },
        'employee': {
          '_id': '2',
          'unavailable_periods': [
            null
          ],
          'technologies': [
            '569a4f1b18aec33a01790932',
            '569a4f1b18aec33a01790931',
            '569a4f1b18aec33a01790930'
          ],
          'name': 'Alexandre Fugita'
        }
      }
    ]
  }
};*/



    AllocationResource.getAll()
      .then(function onGetAll(response) { parsedData = ChartPresenter.parseData(response.data);
                                          vm.chartData = parsedData;})
      .catch(function onGetAllError(response) { console.log('Failure!!! CharController'); })
      .finally(function onGetAllFinally() { console.log(response); });

    //var myVar = 90;

    //parsedData = ChartPresenter.parseData(fakeData);
    //vm.chartData = parsedData;
    

    angular.forEach(vm.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  }
})();
