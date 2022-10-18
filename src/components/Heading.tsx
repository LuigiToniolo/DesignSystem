import { Slot } from '@radix-ui/react-slot'; // --> quando usa ele, ele pega todas as propriedades e repassa para o primeiro componente que está no children (no caso é o <p>)
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
            className={clsx(
                'text-grey-100 font-sans font-bold', 
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }
            )}
            >
            {children}
        </Comp>
    )
}