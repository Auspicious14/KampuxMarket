const storeTab = document.querySelector('.store')
const dress = document.querySelector('a')
const menDress = document.querySelector('a')
const jewelery = document.querySelector('a')
const electronic = document.querySelector('a')


/*-------------- create a function that allows reuseable price converter--------------*/
// overallProduct = (service, jewelery, clothing, electronic) => {
//     let nigPrice = 415
//         productJewelery = Math.round(jewelery, 2)
//         productCloth = Math.round(clothing, 2)
//         productElectronic = Math.round(electronic, 2)
//         productService = Math.round(service, 2)

//         calPrice = nigPrice * productJewelery
//         productPrice = nigPrice * productService
//         clothPrice = nigPrice * productCloth
//         electronicPrice = nigPrice * productElectronic
        
//     return [calprice, clothPrice, electronicPrice, productPrice]
// }
/*----------------------------------------------------------------------------------------------------------*/

storeTab.addEventListener('click', (e) => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // Create a UI and pass the items in it
            let storeContainer = document.querySelector('.product-container')
            const result = data.map(product => {
                let newTitle = '',
                    newDescription = ''

                if(product.title.length && product.description.length > 20) {
                    newTitle += product.title.substring(0, 20) + '...'
                    newDescription += product.description.substring(0, 20) + '...'
                } else {
                    newTitle += product.title
                    newDescription += product.description
                }

                let nigPrice = Math.round(415.84 * product.price, 2)
                return `
                    <div class="card">
                        <blockquote>
                            <img src="${product.image}" alt="clothing image">
                            <h4>${newTitle}</h4>
                            <p>${newDescription}</p>
                            <p>N${nigPrice}</p>
                        </blockquote>
                    </div>
                `
            });
            storeContainer.innerHTML = result.join("")
        })
        .catch(err => console.log(err))

        e.preventDefault()
})


dress.addEventListener('click', (e) => {

    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const storeContainer = document.querySelector('.product-container')
            const clothings = data.map( (clothing) => {
                console.log(clothing)
                let newTitle = ''
                if(clothing.title.length && clothing.description.length > 20) {
                    newTitle += clothing.title.substring(0, 20) + '...'
                } else {
                    newTitle += clothing.title
                }

                let nigPrice = 415.84 * product.price
                nigPrice.toFixed(2)
                return `
                    <div class="card">
                        <blockquote>
                            <img src="${clothing.image}" alt="clothing image">
                            <h4>${newTitle}</h4>
                            <p>N${nigPrice}</p>
                        </blockquote>
                    </div>   
                `
            })
            storeContainer.innerHTML = clothings.join("")
        })
        .catch(err => console.log(err))

    e.preventDefault()
})

menDress.addEventListener('click', (e) => {

    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => res.json())
        .then(data => {

            const storeContainer = document.querySelector('.product-container')
            const clothings = data.map( (clothing) => {
                let newTitle = ''
                if(clothing.title.length && clothing.description.length > 20) {
                    newTitle += clothing.title.substring(0, 20) + '...'
                } else {
                    newTitle += clothing.title
                }

                let nigPrice = 415.84 * product.price
                nigPrice.toFixed(2)
                return `
                    <div class="card">
                        <blockquote>
                            <img src="${clothing.image}" alt="clothing image">
                            <h4>${newTitle}</h4>
                            <p>N${nigPrice}</p>
                        </blockquote>
                    </div>   
                `
            })
            storeContainer.innerHTML = clothings.join("")  
    })
    .catch(err => console.log(err))

    e.preventDefault()
})

jewelery.addEventListener('click', () => {

    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res => res.json())
        .then(data => {
            const storeContainer = document.querySelector('.product-container')
            const jewelery = data.map( (jewelery) => {
                let newTitle = ''
                if(jewelery.title.length && jewelery.description.length > 20) {
                    newTitle += jewelery.title.substring(0, 20) + '...'
                } else {
                    newTitle += jewelery.title
                }

                let nigPrice = 415.84 * product.price
                nigPrice.toFixed(2)
                return `
                    <div class="card">
                        <blockquote>
                            <img src="${jewelery.image}" alt="jewelery image">
                            <h4>${newTitle}</h4>
                            <p>N${nigPrice}</p>
                        </blockquote>
                    </div>   
                `
            })
            storeContainer.innerHTML = jewelery.join("")
        })

})


electronic.addEventListener('click', () => {

    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res => res.json())
        .then(data => {
            const storeContainer = document.querySelector('.product-container')
            const electronics = data.map( (electronic) => {
                let newTitle = ''
                if(electronic.title.length > 20) {
                    newTitle += electronic.title.substring(0, 20) + '...'
                } else {
                    newTitle += electronic.title
                }

                let nigPrice = 415.84 * product.price
                nigPrice.toFixed(2)
                return `
                    <div class="card">
                        <blockquote>
                            <img src="${electronic.image}" alt="jewelery image">
                            <h4>${newTitle}</h4>
                            <p>N${nigPrice}</p>
                        </blockquote>
                    </div>   
                `
            })
            storeContainer.innerHTML = electronics.join("")
        })

})