var gnController = angular.module('gnController', [])

gnController.controller('mainController', ['$scope', 'comm',
  function ($scope, comm) {
    $scope.userinput = null;
    $scope.message = 'Wait for a second, starting up ...';
    $scope.gameover = true;
    $scope.magicNumber = {start: '-', end: '-'};
    $scope.attempts = 3

    $scope.startup = function () {
      comm.get('/startgame')
        .success(function (data) {
          if (data.result) {
            console.log(data)
            $scope.magicNumber = {start: data.result.min, end: data.result.max}
            $scope.gameover = false
            $scope.message = 'Guess a number';
            $scope.attempts = 3
          } else {
            $scope.message = 'Sorry, something bad happened :(';
          }
        })
        .error(function (err) {
          console.log('An Error occurred', err)
        });
    };

    $scope.startup();

    $scope.testnumber = function () {
      if (!$scope.userinput) {
        $scope.message = 'Number please ...'
      } else {
        comm.post('/testnumber', {input: $scope.userinput})
          .success(function (data) {
            if (data.result.result) {
              $scope.message = 'Well done, try another'
              $scope.startup();
            } else {
              if (data.result.attempts == 3) {
                $scope.message = 'Game over, wasn\'t Your day...';
                $scope.gameover = true
              } else {
                $scope.message = 'Not correct, try harder'
                $scope.attempts = $scope.attempts - data.result.attempts
              }
            }
            $scope.userinput = null
            console.log(data)
          })
          .error(function (err) {
            console.log('An Error occurred', err)
          })
      }
    }
  }])