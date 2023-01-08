local ____exports = {
    ["and"] = function(a,b) return a & b end,
    ["or"] = function(a,b) return a | b end,
    ["xor"] = function(a,b) return a ^^ b end,
    ["not"] = function(a) return ~a end,
    ["ls"] = function(a,b) return a << b end,
    ["rs"] = function(a,b) return a >> b end
}

return ____exports