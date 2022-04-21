



const inaitalstate=1;


const changeTHENumber=(state=inaitalstate,action) => {
    
   

    switch(action.type){


     
        case "INCREASE_NUM":
        return state+1 ;

        
     
        case "DECRASE_NUM":
        return state-1 ;

        default:
        return state; 
    }

}


export default changeTHENumber;