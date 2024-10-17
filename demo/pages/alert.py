import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

alerts = [
    (
        "Error Alert",
        {
            "id": "alert-1",
            "severity": "error",
            "children": "This is an error alert — check it out!",
        },
    ),
    (
        "Warning Alert",
        {
            "id": "alert-2",
            "severity": "warning",
            "children": "This is a warning alert — check it out!",
        },
    ),
    (
        "Info Alert",
        {
            "id": "alert-3",
            "severity": "info",
            "children": "This is an info alert — check it out!",
        },
    ),
    (
        "Success Alert",
        {
            "id": "alert-4",
            "severity": "success",
            "children": "This is a success alert — check it out!",
        },
    ),
    (
        "Standard Alert",
        {
            "id": "alert-5",
            "variant": "standard",
            "children": "This is a standard alert",
        },
    ),
    (
        "Filled Alert",
        {
            "id": "alert-6",
            "variant": "filled",
            "severity": "info",
            "children": "This is a filled alert",
        },
    ),
    (
        "Outlined Alert",
        {
            "id": "alert-7",
            "variant": "outlined",
            "severity": "warning",
            "children": "This is an outlined alert",
        },
    ),
]


layout = html.Div(
    mui.Grid(
        spacing=2,
        children=[
            create_component_item(title, mui.Alert, props) for title, props in alerts
        ],
    )
)