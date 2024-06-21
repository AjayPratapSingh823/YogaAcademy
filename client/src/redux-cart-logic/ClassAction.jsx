export const  addGroupClass=(newClass)=>{
       return {
        type:'ADD_GROUP_CLASS',
        payload:newClass,
       };
};
export  const addPrivateClass=(newClass)=>{
    return {
        type:'ADD_PRIVATE_CLASS',
        payload:newClass,
    }
    };