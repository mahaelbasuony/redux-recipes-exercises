// 1.9 understanding createStore() and reducers
//reducer
let intialState = {orders:[
    { id: 1, order: 'coffee', amount: 1},
    { id: 2, order: 'cake', amount: 1},
    { id: 3, order: 'sandwitch', amount: 1}
]};
const NEW_ORDER = 'NEW_ORDER';
const CHANGE_AMOUNT ='CHANGE_AMOUNT';
const DELETE_ORDER = 'DELETE_ORDER';
let reducer = (state , action) => {
    // ... called spread operator
    switch(action.type){
        case NEW_ORDER:{
            let newState= {...state , orders:[...state.orders,action.payload]};
            return newState;
        }
        case CHANGE_AMOUNT:{
            let {id, amount}= action.payload;
            let newState= {...state};
            newState.orders.map((item)=>{
            if(item.id == id){
                item.amount= amount;
            }
            });
            return newState
        }
        case DELETE_ORDER:{
            let {id} = action.payload;
            let newState= {...state};
            newState.orders= newState.orders.filter((item)=> item.id != id);
            return newState;
        }
        default: 
            return state;
    }
}
let store = Redux.createStore(reducer, intialState);
store.subscribe(()=>{
       
    console.log(store.getState());
})
store.dispatch({type: CHANGE_AMOUNT, payload:{id: 2, amount:5}});   
store.dispatch({type: DELETE_ORDER , payload:{id: 1}});
