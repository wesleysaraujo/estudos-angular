function simpleController($scope)
{
	$scope.user = {name: "Wesley"}
}

//Controller countController
function countController($scope)
{
	//Proprieade counter
	$scope.counter = 0;
	//Métoda que adiciona + 1
	$scope.addOne = function()
	{
		$scope.counter++;
	}
	//Método que subtrai 1
	$scope.subOne = function()
	{
		//Fiz uma validação pra ele só decrementar quando for maior a zero;
		if($scope.counter > 0){
			$scope.counter--;
		}else{
			alert('Está zerado');
		}	
	}
}