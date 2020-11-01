import React from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './Accordion.scss';

const AccordionContext = React.createContext();

const AccordionProvider = ({children, isSingleView}) => {
    const [selectedIDs, setSelectedIDs] = React.useState([]);
    const [disabled, setDisabled] = React.useState([]);

    const toggleItem = (index) => {
        isSingleView && !disabled.includes(index)
            ? setSelectedIDs([index])
            :
            selectedIDs.includes(index) 
            ? setSelectedIDs(selectedIDs.filter(i => i !== index))
            : setSelectedIDs([...selectedIDs, index]);
    }

    return (
        <AccordionContext.Provider value={{selectedIDs, disabled, toggleItem, setDisabled}} >
            {children}
        </AccordionContext.Provider>
    )
}

const Accordion = ({children}) => ( 
    <AccordionProvider>
        {children}
    </AccordionProvider>
)

export default Accordion;

export const AccordionItem = ( {index, title, isOpen, isDisabled, children} ) => {
    const { selectedIDs, toggleItem } = React.useContext(AccordionContext);
    
    let classnames = `accordion bg-white shadow ${isDisabled ? "disabled" : ''}`;
    return (
        <div className={classnames}>
            <div className="accordion__header">
                <div className="accordion__icon" 
                    onClick={(e) => 
                        isDisabled 
                        ? e.stopPropagation()
                        : toggleItem(index)
                    }
                >
                    {
                        isOpen
                            ? <FaChevronDown />
                            : <FaChevronRight />
                    }
                </div>
                <div className="accordion__title">
                    <h3> {title}{index} </h3>
                </div>
            </div>
            <div className="accordion__body" style={{ display: selectedIDs.includes(index) ? "block" : '' }}>
                <div className="accordion_content">
                    {children}
                </div>
            </div>
        </div>
    )
}