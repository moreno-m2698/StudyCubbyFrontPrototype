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
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            header: "Item 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                    <div className={selected === index? 'content show' : 'content'}>
                        {item.text}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default AccordionTest;