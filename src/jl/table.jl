# AUTO GENERATED FILE - DO NOT EDIT

export table

"""
    table(;kwargs...)

A Table component.
Table is a component that displays data in a tabular format.
It takes a property `data` which is an array of objects representing the table rows.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (Array of Dicts; optional): The data to be displayed in the table.
It should be an array of objects, where each object represents a row.
"""
function table(; kwargs...)
        available_props = Symbol[:id, :data]
        wild_props = Symbol[]
        return Component("table", "Table", "dash_material_ui", available_props, wild_props; kwargs...)
end

