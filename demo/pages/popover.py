# popover.py
import dash_material_ui as mui
import dash
from dash import html
from util import create_component_item

dash.register_page(__name__)

button_popover_props = {
    "id": "button-popover",
    "content": "This is the content of the Popover opened by button click.",
    "anchorOrigin": {"vertical": "bottom", "horizontal": "left"},
}

layout = html.Div(
    mui.Grid(
        [
            create_component_item(
                "Popover",
                mui.Popover,
                button_popover_props,
                output_div=False
            ),
        ]
    )
)

