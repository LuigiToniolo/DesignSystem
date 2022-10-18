import { Slot } from '@radix-ui/react-slot'; // --> quando usa ele, ele pega todas as propriedades e repassa para o primeiro componente que está no children (no caso é o <p>)
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300', // --> Isso vai ser um padding-top de 16px (16px = 1rem). Porém no tailwind, nós usamos esse valor multiplicado por 4
            )}
            >
            {children}
        </Comp>
    )
}