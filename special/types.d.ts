declare type SINT8 = number
declare type INT16 = number
declare type INT32 = number

declare type UINT8 = number
declare type UINT16 = number
declare type UINT32 = number

declare type fixed_t = INT32
declare type angle_t = UINT32
declare type tic_t = UINT32

declare type int = number
declare type nil = null
declare type table_t<Content = {}> = Content

declare type CanBeNil<Type> = Type | nil | undefined