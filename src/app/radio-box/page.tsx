import { Metadata } from "next";
import { BoxCard } from "../../components/box-card";

export const metadata: Metadata = {
    title: '5. Radio box',
};

const CheckBox = (() => {
    const selectedDrink = "Coffee";
    const drinks = [
        { name: 'Coffee', disabled: false, checked: false },
        { name: 'Tea', disabled: false, checked: false },
        { name: 'Cola', disabled: true, checked: false }
    ];

    const selectedFreq = "";
    const freq = [
        { name: 'Usually', disabled: false, checked: false },
        { name: 'Often', disabled: false, checked: false },
        { name: 'Sometimes', disabled: false, checked: true },
        { name: 'Rarely', disabled: false, checked: false },
        { name: 'Never', disabled: false, checked: false }
    ]

    return (
        <div>
            <div>
                <div className="py-4">
                    Which one is your prefered drink?
                </div>
                <form>
                    <fieldset>
                        {
                            drinks.map(item =>
                                <label key={item.name} className="flex items-center space-x-2" >
                                    <BoxCard
                                        cardName={item.name}
                                        inputProps={{
                                            type: "radio",
                                            checked: item.name === selectedDrink,
                                            disabled: item.disabled
                                        }}
                                        datatestid={item.name}
                                    />
                                </label>
                            )
                        }
                    </fieldset>
                </form>
            </div>
            <div>
                <div className="py-4">
                    How often do you drink {selectedDrink}?
                </div>
                <form>
                    <fieldset>
                        {
                            freq.map(item =>
                                <BoxCard
                                    cardName={item.name}
                                    inputProps={{
                                        type: "radio",
                                        checked: item.name === selectedFreq,
                                        disabled: item.disabled
                                    }}
                                    datatestid={item.name}
                                />
                            )
                        }
                    </fieldset>
                </form>
            </div>

        </div >
    )
});

export default CheckBox;