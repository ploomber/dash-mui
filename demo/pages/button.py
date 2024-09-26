import dash_material_ui as mui
import dash
from dash import html
from dash import Input, Output, callback
import sys
from pathlib import Path


from util import create_component_item

dash.register_page(__name__)

buttons = [
    (
        "Text Button",
        {
            "id": "button-1",
            "children": "Click me",
            "variant": "text",
        },
    ),
    (
        "Contained Button",
        {
            "id": "button-2",
            "children": "Click me",
            "variant": "contained",
        },
    ),
    (
        "Outlined Button",
        {
            "id": "button-3",
            "children": "Click me",
            "variant": "outlined",
        },
    ),
    (
        "Success Button",
        {
            "id": "button-4",
            "children": "Click me",
            "variant": "contained",
            "color": "success",
        },
    ),
    (
        "Error Button",
        {
            "id": "button-5",
            "children": "Click me",
            "variant": "outlined",
            "color": "error",
        },
    ),
    (
        "Small Button",
        {
            "id": "button-6",
            "children": "Click me",
            "variant": "outlined",
            "size": "small",
        },
    ),
    (
        "Large Button",
        {
            "id": "button-7",
            "children": "Click me",
            "variant": "contained",
            "size": "large",
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [create_component_item(title, mui.Button, props) for title, props in buttons]
    )
)

for button_id in [button[1]["id"] for button in buttons]:

    @callback(
        Output(f"output-div-{button_id}", "children"),
        Input(button_id, "n_clicks"),
    )
    def display_output(n_clicks, button_id=button_id):
        if n_clicks is None or n_clicks == 0:
            return "Button has not been clicked yet"
        return f"{button_id} has been clicked {n_clicks} times"
