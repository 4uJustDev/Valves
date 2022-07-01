const searchBtn = document.querySelector('#searchbtn')
document.addEventListener("DOMContentLoaded", () => {
    fetch('/add', {
            method: "GET"
        })
        .then((data) => data.json())
        .then((data) => getCards(data))
});

searchBtn.addEventListener('click', search)
async function search(e) {
	e.preventDefault()
	const inputName = document.querySelector('#inputbtn')
	const jsonReq = {}
    jsonReq.price = inputName.value
    if (("price" in jsonReq) || ("type" in jsonReq)){
        console.log(jsonReq)
    }
	const response = await request('/', 'POST', jsonReq)
	let newInfo = await response.json()
	getCards(newInfo)
}

function getCards(items) {
    const itemArray = document.querySelector('.cards')

    itemArray.innerHTML = ''

    // if (items[0] == undefined) {
    //     console.log('пусто')
    //     itemArray.innerHTML += `<h3 style='margin-left: .3vw;'>Ничего не найдено 404</h3>`
    // }
   
    items.forEach((item) => {
        const itemBlock = document.createElement('div');
        let fullPath = item.photoPath.slice(11)
        itemBlock.classList.add('card');
        itemBlock.innerHTML = `
        <div class="cardInner">
                    <div class="cardHeader">
                        <div class="cardLogo">
                            <a href="#">
                                <img src="/img/1.jpg" alt="avatar">
                            </a>
                        </div>
                        <p class="txtLogo">Зарубин Александр</p>
                    </div>
                    <div class="cardBody">
                        <a href="/product/${item.id}" alt="photoModel">
                            <img src="../img/${fullPath}" alt="photo">
                        </a>
                    </div>
                    <div class="cardFooter">
                        <div class="collect">
                            <p>${item.price} руб</p>
                        </div>  
                        <div class="likeShare">
                            <button class="likes">  
                                <p>Likes</p>
                                <img src="/img/like.svg" alt="Like" class="imgLike">
                            </button>
                            <button class="likes">
                                <p>Share</p>
                                <img src="/img/share.svg" alt="Share" class="imgLike">
                            </button>
                        </div>
                    </div>
                </div>
        `;

        itemArray.append(itemBlock);
        // console.log(item);
    })
}
async function request(url, method = 'GET', data = null) {
    try {
        const headers = {};
        let body;

        if (data) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data);
        }
        // console.log('req:', body);
        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response;
    } catch (e) {
        console.warn(`Erorr: ${e.message}`);
    }
}