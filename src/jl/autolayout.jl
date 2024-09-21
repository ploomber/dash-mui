# AUTO GENERATED FILE - DO NOT EDIT

export autolayout

"""
    autolayout(;kwargs...)
    autolayout(children::Any;kwargs...)
    autolayout(children_maker::Function;kwargs...)


An AutoLayout component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the layout.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `direction` (a value equal to: 'row', 'row-reverse', 'column', 'column-reverse'; optional): Defines the `flex-direction` style property.
- `spacing` (Real; optional): Defines the space between the type `item` components.
"""
function autolayout(; kwargs...)
        available_props = Symbol[:children, :id, :direction, :spacing]
        wild_props = Symbol[]
        return Component("autolayout", "AutoLayout", "dash_material_ui", available_props, wild_props; kwargs...)
end

autolayout(children::Any; kwargs...) = autolayout(;kwargs..., children = children)
autolayout(children_maker::Function; kwargs...) = autolayout(children_maker(); kwargs...)

