import dash_material_ui as mui
import dash
from dash import html
from dash import Input, Output, callback
import sys
from pathlib import Path


from util import create_component_item

dash.register_page(__name__)

button_groups = [
    (
        "Button Group",
        {
            "id": "button-group-1",
            "buttons": [
                {"id": "button1", "label": "Button 1"},
                {"id": "button2", "label": "Button 2"},
                {"id": "button3", "label": "Button 3"},
            ],
        },
    ),
    (
        "Outlined Button Group",
        {
            "id": "button-group-2",
            "variant": "outlined",
            "buttons": [
                {"id": "button4", "label": "Button 4"},
                {"id": "button5", "label": "Button 5"},
                {"id": "button6", "label": "Button 6"},
            ],
        },
    ),
    (
        "Text Button Group",
        {
            "id": "button-group-3",
            "variant": "text",
            "buttons": [
                {"id": "button7", "label": "Button 7"},
                {"id": "button8", "label": "Button 8"},
                {"id": "button9", "label": "Button 9"},
            ],
        },
    ),
    (
        "Small Button Group",
        {
            "id": "button-group-4",
            "size": "small",
            "buttons": [
                {"id": "button10", "label": "Button 10"},
                {"id": "button11", "label": "Button 11"},
                {"id": "button12", "label": "Button 12"},
            ],
        },
    ),
    (
        "Large Button Group",
        {
            "id": "button-group-5",
            "size": "large",
            "buttons": [
                {"id": "button13", "label": "Button 13"},
                {"id": "button14", "label": "Button 14"},
                {"id": "button15", "label": "Button 15"},
            ],
        },
    ),
    (
        "Vertical Button Group",
        {
            "id": "button-group-6",
            "orientation": "vertical",
            "buttons": [
                {"id": "button16", "label": "Button 16"},
                {"id": "button17", "label": "Button 17"},
                {"id": "button18", "label": "Button 18"},
            ],
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.ButtonGroup, props, size=6, event_name="Last Clicked", event_value="last_clicked")
            for title, props in button_groups
        ]
    )
)

for button_group_id in [group[1]["id"] for group in button_groups]:

    @callback(
        Output(f"output-div-{button_group_id}", "children"),
        Input(button_group_id, "lastClicked"),
    )
    def display_output(last_clicked, button_group_id=button_group_id):
        if last_clicked is None:
            return "No button clicked yet."
        return f"Last clicked button in {button_group_id}: {last_clicked}"
