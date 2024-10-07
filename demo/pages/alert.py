# alert.py

import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

# Define alerts
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

# Create the layout using the alerts defined above, similar to the button layout
layout = html.Div(
    mui.Grid(
        spacing=2,  # Controls the space between items
        children=[
            create_component_item(title, mui.Alert, props) for title, props in alerts
        ],
    )
)

# Create callbacks for each alert
for alert_id in [alert[1]["id"] for alert in alerts]:

    @callback(
        Output(f"output-div-{alert_id}", "children"),
        Input(alert_id, "severity"),
    )
    def display_alert(severity, alert_id=alert_id):
        if severity is None:
            return f"{alert_id} has no severity"
        return f"{alert_id} has a severity of {severity}"