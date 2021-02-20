const initState = {
    products: [
        {
            id: 1,
            name: 'man shirt summer season'
            , image: '1.jpg',
            price: 20
            , discount: 2,
            discountPrice: 20 - 2 / 100 * 20,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 2,
            name: 'woman jacket summer season'
            , image: '2.jpg',
            price: 30
            , discount: 5,
            discountPrice: 30 - 5 / 100 * 30,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 3,
            name: 'man trouser for all season'
            , image: '3.jpg',
            price: 15
            , discount: 3,
            discountPrice: 15 - 3 / 100 * 15,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 4,
            name: 'shoes for all season'
            , image: '4.jpg',
            price: 50
            , discount: 4,
            discountPrice: 50 - 4 / 100 * 50,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 5,
            name: 'female soot for summer'
            , image: '5.jpg',
            price: 25,
            discount: 2,
            discountPrice: 25 - 2 / 100 * 25,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 6,
            name: 'male jeans'
            , image: '6.jpg',
            price: 60,
            discount: 6,
            discountPrice: 60 - 6 / 100 * 60,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 7,
            name: 'male trouser for all reacson'
            , image: '7.jpg',
            price: 35,
            discount: 2,
            discountPrice: 35 - 2 / 100 * 35,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 8,
            name: 'male jacket for winter'
            , image: '8.jpg',
            price: 80,
            discount: 7,
            discountPrice: 80 - 7 / 100 * 80,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 9,
            name: 'male jacket for all season'
            , image: '9.jpg',
            price: 95,
            discount: 4,
            discountPrice: 95 - 4 / 100 * 95,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 10,
            name: 'male winter jacket'
            , image: '10.jpg',
            price: 120,
            discount: 3,
            discountPrice: 120 - 3 / 100 * 120,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },

    ],
    product: {},
    key: ''
}

const ProductReducer = (state = initState, action) => {

    switch (action.type) {
        case 'PRODUCT':
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))
            }
        case "SEARCH_KEY":
            return {
                ...state,
                key:action.payload
            }
        default:
            return state

    }

};

export default ProductReducer;