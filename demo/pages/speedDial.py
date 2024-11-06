import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
from util import create_component_item

dash.register_page(__name__)

speed_dial_actions = [
    # Material UI icons can be used by their names
    # Browse available icons at: https://mui.com/material-ui/icons
    {"id": "save-action", "icon": "Save", "tooltip": "Save"},
    {"id": "print-action", "icon": "Print", "tooltip": "Print"},
    {"id": "share-action", "icon": "Share", "tooltip": "Share"},
]

layout = html.Div(
    [
        create_component_item(
            "Speed Dial",
            mui.CustomSpeedDial,
            {
                "id": "speed-dial",
                "ariaLabel": "Speed Dial Example",
                "direction": "up",
                "actions": speed_dial_actions,
            },
            event_name="Speed Dial",
            event_value="n_clicks",
        ),
        html.Div(id="output-speed-dial")
    ]
)

@callback(
    Output("output-speed-dial", "children"),
    Input("speed-dial", "n_clicks")
)
def display_clicked_action(action_id):
    action_map = {
        "save-action": "Save action clicked",
        "print-action": "Print action clicked",
        "share-action": "Share action clicked",
    }
    return action_map.get(action_id, "No action selected")
