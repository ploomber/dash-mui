# AUTO GENERATED FILE - DO NOT EDIT

export checkboxtable

"""
    checkboxtable(;kwargs...)

A CheckBoxTable component.
CheckBoxTable is a component that displays data in a tabular format with checkboxes.
It takes properties `data` and `columns` which define the table structure and content.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `columns` (optional): The column definitions for the table.
It should be an array of objects, where each object defines a column.. columns has the following type: Array of lists containing elements 'field', 'headerName', 'width', 'type', 'description', 'sortable', 'valueGetter'.
Those elements have the following types:
  - `field` (String; required)
  - `headerName` (String; required)
  - `width` (Real; optional)
  - `type` (String; optional)
  - `description` (String; optional)
  - `sortable` (Bool; optional)
  - `valueGetter` (optional)s
- `data` (Array of Dicts; optional): The data to be displayed in the table.
It should be an array of objects, where each object represents a row.
"""
function checkboxtable(; kwargs...)
        available_props = Symbol[:id, :columns, :data]
        wild_props = Symbol[]
        return Component("checkboxtable", "CheckBoxTable", "dash_material_ui", available_props, wild_props; kwargs...)
end

