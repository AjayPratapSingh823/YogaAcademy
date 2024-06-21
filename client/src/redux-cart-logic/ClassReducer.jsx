const initialState={
    groupClasses:[],
    privateClasses:[],
}
const ClassReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'ADD_GROUP_CLASS':
        return{
            ...state,
            groupClasses:[...state.groupClasses,action.payload]
        };
        case 'ADD_PRIVATE_CLASS':
            return {
                ...state,
                privateClasses:[...state.privateClasses,action.payload]
            };
            default:
                return  state;
    }
}
export default ClassReducer;