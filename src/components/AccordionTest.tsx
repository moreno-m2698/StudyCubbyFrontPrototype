import { useState } from 'react';


function AccordionTest() {


    const stuff: any = [
        {
            text: "Hello"
        },
        {
            text: "World"
        }

    ];

    
  return (
    <div className='wrapper'>
        <div className='accordion'>
            {stuff.map((item, index) => (
                <div className='item'>
                    <div className='text'>
                        <h1>{item.text}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default AccordionTest;