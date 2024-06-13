'use client'

interface OptionProps extends React.ButtonHTMLAttributes<HTMLOptionElement> {

}

export function OptionCard(
    {
        optionProps,
        children
    }: {
        optionProps: OptionProps,
        children: string
    }
) {
    return (
        <option
            className="text-center text-base text-black	"
            key={optionProps.id}
            value={optionProps.value}
            data-testid={`option-${optionProps.value}`}
            onClick={() => { console.log(optionProps.value) }}
        >
            {children}
        </option>
    )
}