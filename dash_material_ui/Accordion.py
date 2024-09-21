# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Accordion(Component):
    """An Accordion component.


Keyword arguments:

- id (string; required):
    The ID used to identify this component in Dash callbacks.

- panels (list of dicts; optional):
    An array of panel objects to be rendered in the accordion.

    `panels` is a list of dicts with keys:

    - actions (list of dicts; optional)

        `actions` is a list of dicts with keys:

        - label (string; required)

        - onClick (optional)

    - defaultExpanded (boolean; optional)

    - details (string; required)

    - expanded (boolean; optional)

    - id (string; required)

    - summary (string; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_ui'
    _type = 'Accordion'
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, panels=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'panels']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'panels']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Accordion, self).__init__(**args)
