/**
 * Created by wilso_000 on 10/22/2014.
 */
var app = angular.module('BMICalculator',[]);
app.controller('BMIController',function($scope) {
        $scope.bmi = 0;
        $scope.heightFt = 0;
        $scope.heightInch = 0;
        $scope.weightLb = 0;

        $scope.calcBMI = function() {
            return $scope.weightLb/Math.pow($scope.heightFt * 12 + $scope.heightInch,2)*703;
        };

        $scope.setHeightFt = function (heightFt) {
            $scope.heightFt = heightFt;
            $scope.bmi = $scope.calcBMI();
        };
        $scope.setHeightInch = function (heightInch) {
            $scope.heightInch = heightInch;
            $scope.bmi = $scope.calcBMI();
        };
        $scope.setWeightLb = function (weightLb) {
            $scope.weightLb = weightLb;
            $scope.bmi = $scope.calcBMI();
        };
});