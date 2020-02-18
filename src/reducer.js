export const ADD_COUNTER="ADD-COUNTER";
export const RANDOM_INDEX="RANDOM-INDEX";
export const RANDOM_VALUE="RANDOM_VALUE";


const intialstate = {
    indexstart: 0,
    counter: 0,
    dogs: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter: action.newcounter
            }
        case RANDOM_INDEX:
            return {
                ...state,
                indexstart: action.newindexstart
            }
        default:
            return state
    }


}

export const onaddcounterAC=(newcounter)=>{
    return{
        type:ADD_COUNTER,
        newcounter
    }
}

export const onRandomImageIndexAC=(newindexstart)=>{
    return{
        type: RANDOM_INDEX,
        newindexstart
    }
}

// export const onSetIntervalAC=(GetRandomValue)=>{
//     return{
//         type: RANDOM_VALUE,
//         GetRandomValue
//     }
// }

export default reducer;