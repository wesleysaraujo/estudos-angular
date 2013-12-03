function simpleController($scope)
{
	$scope.user = {name: "Wesley"}
}

//Controller countController
function countController($scope)
{
	//Variável counter
	$scope.counter = 0;

	//Variável aviso
	$scope.aviso = "";
	//Métoda que adiciona + 1
	$scope.addOne = function()
	{
		$scope.counter++;
		if($scope.aviso != ""){
			$scope.aviso = "";
		}
	}
	//Método que subtrai 1
	$scope.subOne = function()
	{
		//Fiz uma validação pra ele só decrementar quando for maior a zero;
		if($scope.counter > 0){
			$scope.counter--;
		}else{
			$scope.aviso = "Já tá zerado";
		}
	}

	//Array contendo as frutas que serão repetidas
	$scope.fruits = ['Banana', 'Maçã', 'Laranja', 'Pêra', 'Uva'];
}