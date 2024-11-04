import dash
from dash import html, Input, Output, callback
import dash_material_ui as mui
from util import create_component_item

dash.register_page(__name__)

# Define the actions for the Speed Dial
speed_dial_actions = [
    {"id": "save-action", "icon": "Save", "tooltip": "Save"},
    {"id": "print-action", "icon": "Print", "tooltip": "Print"},
    {"id": "share-action", "icon": "Share", "tooltip": "Share"},
]

# Layout with SpeedDial component in a 3-column format
layout = html.Div(
    mui.Grid(
        children=[
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
                size=4
            ),
        ]
    )
)

@callback(
    Output("output-div-speed-dial", "children"),
    Input("speed-dial", "n_clicks")
)
def display_clicked_action(action_id):
    action_map = {
        "save-action": "Save action clicked",
        "print-action": "Print action clicked",
        "share-action": "Share action clicked",
    }
    return action_map.get(action_id, "No action selected")
