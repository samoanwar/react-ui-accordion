import React from 'react';
import Accordion, { AccordionItem } from './accordion/Accordion';

const data = [
  {
      id: 1,
      title: "accordion Title #",
      content: `Include popular icons in your React projects easly with react-icons,which utilizes ES6 imports
              that allows you to include only the icons that your project is using.`
  },
  {
      id: 2,
      title: "accordion Title #",
      content: `Include popular icons in your React projects easly with react-icons,which utilizes ES6 imports
              that allows you to include only the icons that your project is using.`
  },
  {
      id: 3,
      title: "accordion Title #",
      content: `Include popular icons in your React projects easly with react-icons,which utilizes ES6 imports
              that allows you to include only the icons that your project is using.`
  },
];

function App() {
  return (
    <div className="App">
      <Accordion
        isSingleView={true}
      >
        <div className="acc_container">
                <AccordionItem title="accordion Title #1" index={0} isOpen={true} isDisabled={true}>
                  <p> {data[0].content} </p>
                </AccordionItem> 
                <AccordionItem title="accordion Title #2" index={1} isOpen={true}>
                  <p> {data[1].content} </p>
                </AccordionItem> 
                <AccordionItem title="accordion Title #3" index={2} isOpen={true}>
                  <p> {data[2].content} </p>
                </AccordionItem> 
            </div>
      </Accordion>
    </div>
  );
}

export default App;
