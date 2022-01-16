import f1 from './images/couch.jpg';
import f2 from './images/couch1.jfif';
import f3 from './images/couch2.jfif';
import f4 from './images/kingSizeBed1.jpg';
import f5 from './images/diningTable.png';
import f6 from './images/diningTable1.png';
import d1 from './images/decoration1.jpg';
import d2 from './images/decoration2.jpeg';
import d3 from './images/decoration3.jfif';
import d4 from './images/decoration4.jpg';
import d5 from './images/decoration5.jfif';
import d6 from './images/decoration6.jfif';
import d7 from './images/decoration7.jfif';
import d8 from './images/decoration8.jfif';

function reducer(state,action) {
    switch (action.type) {
        case "addToCart": return {
             ...state,
            cart:[...state.cart,action.item ]
              }
            case "removeFromCart": return {
                ...state,
             cart:state.cart.filter(item => item.id!==action.id)
            }
        default: return state;
            
    }
}
export default reducer;

export const initialState={
    cart:[],
    products:[
                {
                title:"Asian Paint , Floor Paint",
                id:1,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:4,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:2,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:4,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:3,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:5,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:4,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:3,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:5,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:4,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:6,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:2,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:7,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:4,
                price:4000
                }, 
                 {
                title:"Asian Paint , Floor Paint",
                id:8,
                image:'https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg',
                rating:5,
                price:4000
                }, 
               {
                title:"Furniture couch sofa",
                id:9,
                image:`${f1}`,
                rating:4,
                price:4000
                },
                {
                title:"Furniture couch sofa",
                id:10,
                image:`${f2}`,
                rating:5,
                price:4000
                },
                {
                title:"Furniture couch sofa",
                id:11,
                image:`${f3}`,
                rating:4,
                price:4000
                },
                {
                title:"Furniture bed kingsize",
                id:12,
                image:`${f4}`,
                rating:3,
                price:4000
                },
                {
                title:"Furniture Dining table  6persons",
                id:13,
                image:`${f5}`,
                rating:4,
                price:4000
                },
                {
                title:"Furniture Dining table  3persons",
                id:14,
                image:`${f6}`,
                rating:2,
                price:4000
                }, 
               {
                title:"Home Decoration Stylish Mirror ",
                id:15,
                image:`${d1}`,
                rating:3,
                price:4000
                },  
                {
                title:"Home Decoration Table Lamp Two Colours",
                id:16,
                image:`${d2}`,
                rating:5,
                price:4000
                },  
                {
                title:"Home Decoration Table Tree Shape Lamp",
                id:17,
                image:`${d3}`,
                rating:4,
                price:4000
                },  
                {
                title:"Home Decoration Table Glass Lamp",
                id:18,
                image:`${d4}`,
                rating:5,
                price:4000
                },  
                {
                title:"Home Decoration Family Photo Tree",
                id:19,
                image:`${d5}`,
                rating:4,
                price:4000
                },
                  {
                title:"Home Decoration Mirror",
                id:20,
                image:`${d6}`,
                rating:1,
                price:4000
                }, 
                 {
                title:"Home Decoration Night stand Lamp",
                id:21,
                image:`${d7}`,
                rating:4,
                price:4000
                }, 
                 {
                title:"Home Decoration Table Lamp",
                id:22,
                image:`${d8}`,
                rating:5,
                price:4000
                }, 
        ],
    user:null
};
