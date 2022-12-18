type Fileextensions = "bmp" | "cfg" | "csv" | "dat" | "png" | "sav2" | "txt"
type Filename = `${string}.${Fileextensions}`
type OpenModeB = "r" | "w" | "a" | "r+" | "w+" | "a+"
type OpenMode = `${OpenModeB}b` | OpenModeB
/**
 * @noSelf
 * Some functions have been removed or tweaked for usage in SRB2.

For safety reasons, Lua scripts are subject to some restrictions:

Accessed files must be located within the luafiles/ folder in the SRB2 root directory. All file paths used are relative to this folder, so io.openlocal("client/MyModConfig.cfg", "w") will open PathToYourSRB2Folder/luafiles/client/MyModConfig.cfg.
If a CLIENT (not the host) needs to access a file LOCALLY, that file must be located within luafiles/client/ or its subfolders. This limit only exists for clients, the host can access anything inside luafiles/
Accessed files must have one of the following extensions (if the name contains multiple extensions, only the last one is checked):
.bmp
.cfg
.csv
.dat
.png
.sav2
.txt
Writing to a file must not cause it to be larger than 1 megabyte. There is no restriction for reading.
Trying to bypass one of these restrictions will raise an error.
 */
declare namespace io
{
    export function open<Name extends Filename>(filename: Name,mode: OpenMode,callback: (file: file,filename: Name) => void): nil
    export function open<Name extends Filename>(filename: Name,callback: (file: file,filename: Name) => void): nil
    export function openlocal(filename: Filename,mode?: `${OpenModeB}b`): file | nil
    export function openlocal(filename: Filename,mode?: OpenModeB): string | nil
    export function close(file: file): boolean | LuaMultiReturn<[nil,string,int]> | LuaMultiReturn<[nil,string]>
    export function tmpfile(): file
    export function type(obj: any): "file" | "closed file" | nil
}