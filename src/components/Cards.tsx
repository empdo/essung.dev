import React from "react";

export default () => {
    
    const cards = [ "I have work experince in both stores and web/app development", "I study information technology at a upper secondary level", "I am a 18 year old developer from sweden"];
    const [offset, setOffset] = React.useState(0);

    
    
    const stuff = cards.map((content,layer) => {
        const realIndex = (layer + offset) % cards.length;
        const margin = (cards.length - realIndex)*10;

        return (
            <div onClick={() => setOffset(offset + 1)} key={content} className="card" style={{zIndex: realIndex, marginLeft: margin, marginBottom: margin, opacity: ((realIndex +1) / (cards.length) ) }} >
                 <p>{content}</p>
                {offset ===  0 && layer === cards.length - 1 ? <p id="click-alert">click me!</p> : <></>}
            </div>
        )
    });

    return <div className="card-holder" >{stuff}</div>
}