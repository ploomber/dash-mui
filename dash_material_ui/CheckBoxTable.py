# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CheckBoxTable(Component):
    """A CheckBoxTable component.
CheckBoxTable is a component that displays data in a tabular format with checkboxes.
It takes properties `data` and `columns` which define the table structure and content.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- columns (list of dicts; optional):
    The column definitions for the table. It should be an array of
    objects, where each object defines a column.

    `columns` is a list of dicts with keys:

    - description (string; optional)

    - field (string; required)

    - headerName (string; required)

    - sortable (boolean; optional)

    - type (string; optional)

    - valueGetter (optional)

    - width (number; optional)

- data (list of dicts; optional):
    The data to be displayed in the table. It should be an array of
    objects, where each object represents a row."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_ui'
    _type = 'CheckBoxTable'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, columns=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'columns', 'data']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'columns', 'data']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(CheckBoxTable, self).__init__(**args)
