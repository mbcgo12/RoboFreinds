import React from 'react';
import Card from './Card';

const Cardlist = ({robots})=>{
    const cardComponent = robots.map((user,i) =>{
        // if(true){
        //     throw new Error('noo ')
        // }
        return (
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
        );
    });
    return(
        <div>
          {cardComponent}
        </div>    
    );
}

export default Cardlist;