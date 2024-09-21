# AUTO GENERATED FILE - DO NOT EDIT

export calculator

"""
    calculator(;kwargs...)

A Calculator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `result` (String; optional): The result of the calculation.
"""
function calculator(; kwargs...)
        available_props = Symbol[:id, :result]
        wild_props = Symbol[]
        return Component("calculator", "Calculator", "dash_material_ui", available_props, wild_props; kwargs...)
end

