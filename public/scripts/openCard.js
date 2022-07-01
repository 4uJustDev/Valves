document.addEventListener('DOMContentLoaded', async () => {
	
	let index = document.URL.substring(document.URL.lastIndexOf('/') + 1)
	const body={id: index};
	let data = await request(`/product/${index}`, 'POST', body)
	let info = await data.json()
	createItem(info[0])
})

const enviroment = document.querySelector('#enviroment')
function createItem(info){
	console.log(info)
	const section = document.querySelector('.Content')
	
    let fullPath = info.photoPath.slice(11)
    


	section.innerHTML = `
    <div class="card">
        <div class="cards">
                <div class="innercard">
                    <div class="cardHeader ">
                        <div class="cardLogo">
                            <a href="#">
                                <img src="/img/1.jpg" alt="avatar">
                            </a>
                        </div>
                        <div class="vertical">
                            <p class="txtLogo">Зарубин Александр Николаевич</p>
                            <p class="txtDate">Дата: ${info.date}</p>
                        </div>
                    </div>
                    <div class="slider middle">
                        <div class="slides">
                            <div class="slide" s1><img src="../img/${fullPath}" alt="photoModel"></div>
                        </div>
                    </div>
                </div>
                <div class="information vertical">
                    <h1 class="txtTittle"><strong>Название: ${info.name}</strong></h1>
                    <div class="textArea">
                        <div class="type txtType">
                            <B>Модель:${info.model}</B>
                            <B>ДУ:${info.diam}</B>
                            <B>Тип: ${info.type}</B>
                        </div>
                        <div class="description">
                            <p>${info.description}</p>
                        </div>
                        <div class="horizontal price" >
                            Цена:
                            <p class="price">${info.price}руб</p>
                        </div>
                    </div>
                    <button class="menuItem btnCustom">
                        Buy
                    </button>
                </div>  
            </div>
            <div class="specification">
                <button class="btnUnder" id="btncharacteristic"><p class="txtButton">Характеристики</p></button>
            </div>
            <span class="hiddenBlock" >
                <ul class="hiddenItem" id="characteristic">
                    <li class="liClassification">Масса: ${info.massa} гр</li>
                    <li class="liClassification">Материал: ${info.material}</li>
                    <li class="liClassification">Привод: ${info.run}</li>
                    <li class="liClassification">Рабочая температура: 0… +${info.temp} &#176;C</li>
                    <li class="liClassification">Условный диаметр: ${info.diam} мм</li>
                </ul>
            </span>
            <div class="specification">
                <button class="btnUnder" id="btnusing"><p class="txtButton">Область применения</p></button>
            </div>
            <span class="hiddenBlock">
                <ul class="hiddenItem" id="using">
                    <li class="liClassification">
                    ${info.oblast}
                    </li>
                </ul>
            </span>
            <div class="specification">
                <button class="btnUnder" id="btnenviroment"><p class="txtButton">Среды</p></button>
            </div>
            <span class="hiddenBlock ">
                <ul class="hiddenItem" id="enviroment">
                ${
                    info.eviroment
                }
                </ul>
            </span>
            <div class="specification">
                <button class="btnUnder" id="btnmanufacture"><p class="txtButton">Производитель</p></button>
            </div>
            <span class="hiddenBlock">
                <ul class="hiddenItem" id="manufacture">
                    <li class="liClassification">${info.manuName} <a href="${info.manuLink}">Сайт производителя</a></li>
                </ul>
            </span>
        </div>
    </div>
	`
}

// let arrayOfStrings = info.eviroment.split(",")
// for(let i=0; i<arrayOfStrings.length; i+=1){
//     let tegLi = document.createElement('li');
//     tegLi.className = "liClassification";
//     tegLi.innerHTML =`<p>${arrayOfStrings[i]}</p>`
//     enviroment.append(tegLi)
// }

async function request(url , method='GET', data=null) {
    try {
        const headers={};
        let body;
        
        if (data){
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data);
        }
        console.log('req:', body);
        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response;
    } catch(e) {
        console.warn(`Erorr: ${e.message}`);
    }
}
