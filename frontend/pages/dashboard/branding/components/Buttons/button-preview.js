import React from 'react';
import AddCartButton from './add-cart-button';
import DefaultButton from './default-button';

const ButtonPreview = ({ buttonId, addCartbuttonData, defaultButtonData }) => {




    return (
        <>
            {buttonId === "1" ? (
                <>
                    <AddCartButton addCartbuttonData={addCartbuttonData} />
                </>
            ) : null}

            {buttonId === "2" ? (
                <>
                    <DefaultButton defaultButtonData={defaultButtonData} />
                </>
            ) : null}



        </>
    )
}

export default ButtonPreview;