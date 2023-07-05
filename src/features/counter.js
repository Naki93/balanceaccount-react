import {createSlice} from "@reduxjs/toolkit"


//Initial value of the variable name
const initialState = {
     
    value: 10000,
    
}
//Invoke it 
 const counterSlice = createSlice({
    name: "counter",
    //This initial state is referencing the const initialState
    initialState,
    //we can mutate the state directly because behind the scenes it is being done
    reducers:{
        //This function will increment the balance by 5%
        increment: (state, action) =>{
            
            state.value *= action.payload
            
             
            
        },
        //This function will decrememnt the balance by 15%
        decrement: (state, action) =>{
            
            state.value *= action.payload
            
        },
        //This function will be able to add/deposit an additional amount to the balance based on user input
        incrementByAmount:(state, action) =>{
            state.value += action.payload
            
        },
        //This function will be able to subtract/withdraw an  amount from the balance based on user input
        decrementByAmount:(state, action) =>{
            state.value -= action.payload
        }
    }

    

})

console.log(counterSlice)

//Export all functions
export const {increment} =counterSlice.actions
export const {decrement} = counterSlice.actions
export const {incrementByAmount} = counterSlice.actions
export const {decrementByAmount} = counterSlice.actions

//The reducer(counter) is going to control the state in this file that is why we want to export this
export default counterSlice.reducer

