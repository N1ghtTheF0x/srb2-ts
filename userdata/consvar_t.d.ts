declare interface consvar_t
    {
        readonly name: string
        readonly defaultvalue: string
        readonly flags: INT32
        readonly value: INT32
        readonly string: string
        readonly changed: boolean
    }
