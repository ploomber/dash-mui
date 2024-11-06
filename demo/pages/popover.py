import dash_material_ui as mui
import dash
from dash import html
from util import create_component_item

dash.register_page(__name__)

layout = html.Div(
    [    
        create_component_item(
            "Popover",
            mui.Popover,
            {
            "id": "button-popover",
            "content": "This is the content of the Popover opened by button click.",
            "anchorOrigin": {"vertical": "bottom", "horizontal": "left"},
            },   
        ),
    ]
)