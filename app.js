//===== Завдання №1 =====
let Valid = 0;


$('#send').click(event => {
	event.preventDefault();
	Valid = 0
	const name = $("input[name='name']").val();
	const group = $("input[name='group']").val();
	const faculty = $("input[name='faculty']").val();
	const address = $("input[name='address']").val();
	const telegram = $("input[name='telegram']").val();

	check('name', /^[A-ZІА-Я]{1}[a-zа-яі]+ [A-ZІА-Я]{1}[.]{1}[A-ZІА-Я]{1}[.]{1}$/)
	check('group', /^[A-ZІА-Я]{2}[-]{1}[0-9]{2}$/)
	check('faculty', /^[ІА-Я]+$/)
	check('address', /^[a-zа-яі]{1}[.]{1} [A-ZІА-Я]{1}[a-zа-яі]+$/)
	check('telegram', /^[@]{1}[A-Za-z]{1}[_]{1}[A-Za-z]{1}[a-z]+$/)

	if(Valid == 5){
		$('#output').html(`
			<div><b>ПІБ: </b>${name}</div>
			<div><b>Група: </b>${group}</div>
			<div><b>Факультет: </b>${faculty}</div><div>
			<b>Адреса: </b>${address}</div>
			<div><b>Telegram: </b>${telegram}</div>
		`);
	} else {
		$('#output').html('')
	}
})


function check(type, rule) {
	const valueFromElement = $(`input[name='${type}']`).val();
	if (rule.test(valueFromElement)) {
		$(`input[name='${type}']`).removeClass("Error")
		Valid += 1
	} else {
		$(`input[name='${type}']`).addClass("Error")
	}
}

//===== Завдання №2 =====
variant = 15

for (let i = 0; i < 6; i++) {
	const rowElement = document.createElement('tr');
	for (let j = 1; j <= 6; j++) {
		const index = String(j + (i * 6));
		const dataElement = document.createElement('td');
		dataElement.innerHTML = index;
		dataElement.id = index;
		rowElement.append(dataElement);
	}
	$('.table').append(rowElement);
}

$(`td[id=${variant}]`).click(() => {
	const color = $(`#color_picker`).val()
	$(`td[id=${variant}]`).css('backgroundColor', `${color}`)
})

$(`td[id=${variant}]`).mouseover(() => {
	$(`td[id=${variant}]`).css('backgroundColor', `${getRandomColor()}`)
})

$(`td[id=${variant}]`).dblclick(() => {
	const color = $(`#color_picker`).val()
	for(let i = 1; i <= 36; i++){
		if(i != variant){
			$(`td[id=${i}]`).css('backgroundColor', `${color}`)
		} else {
			$(`td[id=${i}]`).css('backgroundColor', '')
		}
	}
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}