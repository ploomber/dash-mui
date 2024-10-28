import dash_material_ui as mui
import dash
from dash import html, Input, Output, State, callback

from util import create_component_item

dash.register_page(__name__)

layout = html.Div(
    [
        html.P(
            "A backdrop is a semi-transparent overlay that appears on the screen to bring attention "
            "to certain elements or indicate loading. Click the button below to toggle the backdrop.",
            style={"margin-bottom": "10px", "font-size": "24px", "color": "#555"},
        ),

        mui.Button(id="backdrop-toggle-btn", children="Toggle Backdrop", variant="contained"),
        create_component_item(
            "Basic Backdrop",
            mui.Backdrop,
            {
                "id": "backdrop-1",
                "open": False,
                "invisible": False,
            },
            event_name="Backdrop Open",
            event_value="open"
        ),
        html.Div(id="output-div-backdrop-1"),
    ]
)

@callback(
    Output("backdrop-1", "open"),  
    Input("backdrop-toggle-btn", "n_clicks"),
    State("backdrop-1", "open"),
)
def toggle_backdrop(n_clicks, open):
    if n_clicks is None:
        return open 
    return not open  

@callback(
    Output("output-div-backdrop-1", "children"),
    Input("backdrop-1", "open"),
)
def display_backdrop_state(open):
    return "Backdrop is open" if open else "Backdrop is closed"
