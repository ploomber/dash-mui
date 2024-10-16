import dash_material_ui as mui
import dash
from dash import html, callback, Input, Output
import sys
from pathlib import Path


from util import create_component_item

dash.register_page(__name__)

def callback_function(id):
    return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "value"),
)
def display_output(value, slider_id="{id}"):
    return f"Selected value: {{value}}"    
"""

sliders = [
    (
        "Default Slider",
        {
            "id": "slider-1",
            "defaultValue": 30,
        },
    ),
    (
        "Disabled Slider",
        {
            "id": "slider-2",
            "defaultValue": 50,
            "disabled": True,
        },
    ),
    (
        "Custom Range Slider",
        {
            "id": "slider-3",
            "defaultValue": 5,
            "min": -10,
            "max": 10,
            "step": 1,
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.Slider, props, size=6)
            for title, props in sliders
        ]
    )
)

for slider_id in [slider[1]["id"] for slider in sliders]:

    @callback(
        Output(f"output-div-{slider_id}", "children"),
        Input(slider_id, "value"),
    )
    def display_output(value, slider_id=slider_id):
        return f"Selected value: {value}"
