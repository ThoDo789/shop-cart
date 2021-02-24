import {DARK_MODE, PRODUCT, SEARCH_KEY, SORT_NAME_AZ, SORT_NAME_ZA, SORT_PRICE_DEC, SORT_PRICE_INC} from "../../types";

const initState = {
    products: [
        {
            id: 1,
            name: 'sn shirt summer season'
            , image: '1.jpg',
            price: 20
            , discount: 2,

            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 2,
            name: 'boman jacket summer season'
            , image: '2.jpg',
            price: 30
            , discount: 5,

            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 3,
            name: 'can trouser for all season'
            , image: '3.jpg',
            price: 15
            , discount: 3,

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

            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },

        {
            id: 11,
            name: 'male winter jacket'
            , image: '10.jpg',
            price: 120,
            discount: 3,

            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },
        {
            id: 12,
            name: 'male winter jacket'
            , image: '10.jpg',
            price: 120,
            discount: 3,

            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ab amet aspernatur beatae debitis eos fuga harum iste magnam ' +
                'maxime necessitatibus nemo nihil nostrum nulla reiciendis, ' +
                'ut vel vitae! Harum, nemo!\n'
        },

    ],
    product: {},
    key: '',
    status: true,
    themes: null
}

const ProductReducer = (state = initState, action) => {

    switch (action.type) {
        case PRODUCT:
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))
            }
        case SEARCH_KEY:
            return {
                ...state,
                key: action.payload
            }
        case DARK_MODE:
            const light = {background: '#2c2c2c', color: '#fff'}
            const dark = {background: "#fff", color: "#2c2c2c"}
            return {
                ...state,
                status: action.payload,
                themes: action.payload === true ? light : dark

            }
        // -------SORT---------
        case SORT_NAME_AZ:
            const sortName = [...state.products].sort((a, b) => {

                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;

            })
            return {
                ...state,
                products: sortName
            }
        case SORT_NAME_ZA:
            const sortNameDec = [...state.products].sort((a, b) => {

                if (a.name < b.name)
                    return 1;
                if (a.name > b.name)
                    return -1;
                return 0;

            })
            return {
                ...state,
                products: sortNameDec
            }
        case SORT_PRICE_INC:
            const priceInc = [...state.products].sort((a, b) => {
                return a.price - b.price
            })

            return {
                ...state,
                products: priceInc
            }
        case SORT_PRICE_DEC:
            const priceDec = [...state.products].sort((a, b) => {
                return b.price - a.price
            })

            return {
                ...state,
                products: priceDec
            }
        default:
            return state

    }

};

export default ProductReducer;