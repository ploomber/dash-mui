# AUTO GENERATED FILE - DO NOT EDIT

export button

"""
    button(;kwargs...)
    button(children::Any;kwargs...)
    button(children_maker::Function;kwargs...)


A Button component.
Button component using Material-UI.
It can be customized with various optional props to change its appearance and behavior.
The 'id' prop is required.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the button.
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `color` (a value equal to: 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'; optional): The color of the component.
- `disabled` (Bool; optional): If true, the button will be disabled.
- `endIcon` (a list of or a singular dash component, string or number; optional): Element placed after the children.
- `fullWidth` (Bool; optional): If true, the button will take up the full width of its container.
- `href` (String; optional): The URL to link to when the button is clicked.
- `n_clicks` (Real; optional): Number of times the button has been clicked.
- `size` (a value equal to: 'small', 'medium', 'large'; optional): The size of the component.
- `startIcon` (a list of or a singular dash component, string or number; optional): Element placed before the children.
- `variant` (a value equal to: 'text', 'outlined', 'contained'; optional): The variant to use.
"""
function button(; kwargs...)
        available_props = Symbol[:children, :id, :color, :disabled, :endIcon, :fullWidth, :href, :n_clicks, :size, :startIcon, :variant]
        wild_props = Symbol[]
        return Component("button", "Button", "dash_material_ui", available_props, wild_props; kwargs...)
end

button(children::Any; kwargs...) = button(;kwargs..., children = children)
button(children_maker::Function; kwargs...) = button(children_maker(); kwargs...)

