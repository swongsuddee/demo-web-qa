import { Metadata } from "next";
import { BoxCard } from "../../components/box-card";

export const metadata: Metadata = {
    title: '4. Check box',
};

const CheckBox = (() => {
    const colors = [
        { name: 'Red', disabled: false, checked: false },
        { name: 'Orange', disabled: false, checked: true },
        { name: 'Yellow', disabled: false, checked: false },
        { name: 'Green', disabled: false, checked: false },
        { name: 'Blue', disabled: true, checked: false },
        { name: 'Navy', disabled: true, checked: true },
        { name: 'Purple', disabled: false, checked: false }
    ]

    return (
        <div>
            <div className="py-4">
                What is yout favorits colors?
            </div>
            {colors.map(item =>
                <BoxCard
                    cardName={item.name}
                    inputProps={{
                        type: "checkbox",
                        checked: item.checked,
                        disabled: item.disabled
                    }}
                    datatestid={item.name}
                />)}
        </div>
    )
});

export default CheckBox;