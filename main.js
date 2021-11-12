$(document).ready(function () {
    
    let listaNombres = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona','Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];

	let listaNombresActive = listaNombres;



/*-------------------------------------------FUNCTION----CREAR-GRUPOS---------------------------------------*/

	function crearGrupos() {

		listaNombresActive = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona', 'Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];

		$(".voluntaria").remove();
		$(".grupo").remove();
		$(".coder").show();


		listaNombresActive = listaNombresActive.map(i => [Math.random(), i]).sort().map(i => i[1]);

		let parts = $('.select option:selected').text();
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(listaNombresActive.splice(0, Math.ceil(listaNombresActive.length / i)).join(', '));
		}


		$('.answer').append(`<p class="grupo">Grupo 1: ${result[0]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 2: ${result[1]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 3: ${result[2]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 4: ${result[3]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 5: ${result[4]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 6: ${result[5]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 7: ${result[6]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 8: ${result[7]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 9: ${result[8]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 10: ${result[9]}</p>`);
		$('.answer').append(`<p class="grupo">Grupo 11: ${result[10]}</p>`)
		$('.answer').append(`<p class="grupo">Grupo 12: ${result[11]}</p>`);

		$(".grupo:contains('" + undefined + "')").hide();
	};
/*-----------------------------------------CREAR-GRUPOS---------------------------------------------*/


	$('#btn-grupos').on("click", function () {

		crearGrupos();

	});
})