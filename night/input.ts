export interface InputButton
{
    ready: boolean
    tapping: boolean
    button: ButtonFlags
}

export function InputButton(button: ButtonFlags): InputButton
{
    return {
        ready: false,
        tapping: false,
        button
    }
}

export interface Input
{
    spin: InputButton
    custom1: InputButton
    custom2: InputButton
    custom3: InputButton
}

export function Input(): Input
{
    return {
        spin: InputButton(ButtonFlags.BT_SPIN),
        custom1: InputButton(ButtonFlags.BT_CUSTOM1),
        custom2: InputButton(ButtonFlags.BT_CUSTOM2),
        custom3: InputButton(ButtonFlags.BT_CUSTOM3)
    }
}

export function onButtonTap(buttons: UINT16,button: InputButton,cb: () => void)
{
    if(!(buttons & button.button))
    {
        button.ready = true
        button.tapping = false
    }
    else if(button.ready)
    {
        button.tapping = true
        button.ready = false
    }
    else
    {
        button.tapping = false
    }

    if(button.tapping) cb()
}