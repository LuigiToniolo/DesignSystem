import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 font-sans py-4 px-3 rounded bg-grey-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-grey-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
    return (
            <input 
                className='bg-transparent flex-1 outline-none text-grey-100 text-xs placeholder:text-grey-400'
                {...props}
                />

    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}