# AUTO GENERATED FILE - DO NOT EDIT

export accordion

"""
    accordion(;kwargs...)

An Accordion component.

Keyword arguments:
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `panels` (optional): An array of panel objects to be rendered in the accordion.. panels has the following type: Array of lists containing elements 'id', 'summary', 'details', 'expanded', 'defaultExpanded', 'actions'.
Those elements have the following types:
  - `id` (String; required)
  - `summary` (String; required)
  - `details` (String; required)
  - `expanded` (Bool; optional)
  - `defaultExpanded` (Bool; optional)
  - `actions` (optional): . actions has the following type: Array of lists containing elements 'label', 'onClick'.
Those elements have the following types:
  - `label` (String; required)
  - `onClick` (optional)ss
"""
function accordion(; kwargs...)
        available_props = Symbol[:id, :panels]
        wild_props = Symbol[]
        return Component("accordion", "Accordion", "dash_material_ui", available_props, wild_props; kwargs...)
end

