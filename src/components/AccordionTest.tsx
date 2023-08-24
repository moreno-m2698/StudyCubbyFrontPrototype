import { useState } from 'react';
import "../accordionTest.css"


function AccordionTest() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


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
                    <div className='title' onClick={() => toggle(index)}>
                        <h1>{item.header}</h1>
                        <span>{selected === index ? '-' : '+' }</span>
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