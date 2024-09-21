# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Calculator(Component):
    """A Calculator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- result (string; optional):
    The result of the calculation."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_ui'
    _type = 'Calculator'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, result=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'result']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'result']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Calculator, self).__init__(**args)
