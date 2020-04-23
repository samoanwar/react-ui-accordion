import React, { Component } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './Accordion.scss';

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

class Accordion extends Component {
    state = {
        ids: [0],
        disabled: [1]
    }

    toggleItem = (index) => {
        const { ids } = this.state;
        ids.includes(index) 
        ? this.setState({ ids: ids.filter(i => i !== index) })
        : this.setState({ ids: [...ids, index] });
    }

    render() {
        const { ids, disabled } = this.state;
        return (
            <div className="container" style={{ marginTop: 30 }}>
                {
                    data.map((item, i) => (
                        <AccordionItem
                            key={i}
                            index={i}
                            item={item}
                            isOpen={ids.includes(i) && !disabled.includes(i)}
                            isDisabled={disabled.includes(i)}
                            onToggleItem={index => this.toggleItem(index)}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Accordion;

const AccordionItem = ({ index, item: { title, content }, onToggleItem, isOpen, isDisabled }) => {
    let classnames = `accordion bg-white shadow ${isDisabled ? "disabled" : ''}`;
    return (
        <div className={classnames}>
            <div className="accordion__header">
                <div className="accordion__icon" onClick={() => onToggleItem(index)}>
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
            <div className="accordion__body" style={{ display: isOpen ? "block" : '' }}>
                <div className="accordion_content">
                    <p> {content} </p>
                </div>
            </div>
        </div>
    )
}