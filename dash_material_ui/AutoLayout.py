# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AutoLayout(Component):
    """An AutoLayout component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the layout.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- direction (a value equal to: 'row', 'row-reverse', 'column', 'column-reverse'; default 'row'):
    Defines the `flex-direction` style property.

- spacing (number; default 3):
    Defines the space between the type `item` components."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_ui'
    _type = 'AutoLayout'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, spacing=Component.UNDEFINED, direction=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'direction', 'spacing']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'direction', 'spacing']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AutoLayout, self).__init__(children=children, **args)
