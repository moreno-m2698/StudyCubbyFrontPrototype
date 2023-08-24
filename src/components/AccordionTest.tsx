import { useState } from 'react';
import "../accordionTest.css"


function AccordionTest() {


    const stuff: any = [
        {   
            header: "Item 1",
            text: "Hello"
        },
        {
            header: "Item 2",
            text: "World"
        }

    ];

    
  return (
    <div className='wrapper'>
        <div className='accordion'>
            {stuff.map((item, index) => (
                <div className='item'>
                    <div className='title'>
                        <h1>{item.header}</h1>
                        <span>+</span>
                    </div>
                    <div className='content'>
                        {item.text}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default AccordionTest;