# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.
Button component using Material-UI.
It can be customized with various optional props to change its appearance and behavior.
The 'id' prop is required.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the button.

- id (string; required):
    The ID used to identify this component in Dash callbacks.

- color (a value equal to: 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'; optional):
    The color of the component.

- disabled (boolean; optional):
    If True, the button will be disabled.

- endIcon (a list of or a singular dash component, string or number; optional):
    Element placed after the children.

- fullWidth (boolean; optional):
    If True, the button will take up the full width of its container.

- href (string; optional):
    The URL to link to when the button is clicked.

- n_clicks (number; default 0):
    Number of times the button has been clicked.

- size (a value equal to: 'small', 'medium', 'large'; optional):
    The size of the component.

- startIcon (a list of or a singular dash component, string or number; optional):
    Element placed before the children.

- variant (a value equal to: 'text', 'outlined', 'contained'; optional):
    The variant to use."""
    _children_props = ['startIcon', 'endIcon']
    _base_nodes = ['startIcon', 'endIcon', 'children']
    _namespace = 'dash_material_ui'
    _type = 'Button'
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, variant=Component.UNDEFINED, color=Component.UNDEFINED, size=Component.UNDEFINED, disabled=Component.UNDEFINED, fullWidth=Component.UNDEFINED, href=Component.UNDEFINED, startIcon=Component.UNDEFINED, endIcon=Component.UNDEFINED, n_clicks=Component.UNDEFINED, onClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'color', 'disabled', 'endIcon', 'fullWidth', 'href', 'n_clicks', 'size', 'startIcon', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'color', 'disabled', 'endIcon', 'fullWidth', 'href', 'n_clicks', 'size', 'startIcon', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Button, self).__init__(children=children, **args)
