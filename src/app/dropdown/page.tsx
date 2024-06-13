import { Metadata } from "next";
import { OptionCard } from "./option-card";

export const metadata: Metadata = {
    title: '6. Dropdown',
};

const Dropdown = (() => {

    const animals = [
        { id: '1', name: "Ant" },
        { id: '2', name: "Bird" },
        { id: '3', name: "Cat" },
        { id: '4', name: "Dog" }
    ]
    const fruits = [
        { id: '1', name: "Apple" },
        { id: '2', name: "Banana" },
        { id: '3', name: "Cherry" },
        { id: '4', name: "Durian" }
    ]

    return (
        <div>
            <div className="py-4 grid grid-cols-2 items-center">
                <div>Single select dropdown</div>
                <select
                    className="mx-2 h-8 w-40 text-center rounded-md border-solid border border-amber-500"
                >
                    {
                        animals.map((item) => {
                            return <OptionCard
                                optionProps={{
                                    id: item.id,
                                    value: item.name,
                                }}
                                children={item.name}
                            />
                        })
                    }
                </select>
            </div>
            <div className="py-4 grid grid-cols-2 items-center">
                <div>List box</div>
                <div>
                    <select
                        className="mx-2 h-flex w-40 rounded-md border-solid border border-amber-500"
                        multiple
                    >
                        <optgroup
                            className="mx-2 my-1 text-xs text-slate-400	"
                            label="Fruits"
                        >
                            {
                                fruits.map((item) => {
                                    return <OptionCard
                                        optionProps={{
                                            id: item.id,
                                            value: item.name,
                                        }}
                                        children={item.name}
                                    />
                                })
                            }
                        </optgroup>
                    </select>
                </div>
            </div>
            {/* <div className="py-4 grid grid-cols-2 items-center">
                <div>Dropdown from div tag</div>
                <div
                    className="mx-2 h-8 w-40 grid grid-cols-2 justify-items-stretch rounded-md border-solid border border-amber-500"
                >
                    <div className="mx-2 my-1">test</div>
                    <div className=" justify-self-end text-slate-400">
                        <button className="h-8 w-40 rounded-md text-end">
                            <span className="mx-2">v</span>
                        </button>
                    </div>
                    <div
                        className="h-auto w-40 px-2 grid grid-cols-2 justify-items-stretch rounded-md border-solid border border-amber-500"
                    >
                        test
                    </div>
                </div>
            </div> */}
        </div>
    )
});

export default Dropdown;