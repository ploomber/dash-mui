import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent.parent))
from util import create_component_item

dash.register_page(__name__)

radio_groups = [
    (
        "Basic Radio Group (Column)",
        {
            "id": "radio-group-1",
            "label": "Select an option",
            "options": [
                {"value": "option1", "label": "Option 1"},
                {"value": "option2", "label": "Option 2"},
                {"value": "option3", "label": "Option 3"},
            ],
            "direction": "column",
        },
    ),
    (
        "Radio Group with Default Value",
        {
            "id": "radio-group-2",
            "label": "Choose a color",
            "options": [
                {"value": "red", "label": "Red"},
                {"value": "green", "label": "Green"},
                {"value": "blue", "label": "Blue"},
            ],
            "value": "green",
            "direction": "column",
        },
    ),
    (
        "Radio Group with Custom Direction",
        {
            "id": "radio-group-3",
            "label": "Select a fruit",
            "options": [
                {"value": "apple", "label": "Apple"},
                {"value": "banana", "label": "Banana"},
                {"value": "cherry", "label": "Cherry"},
                {"value": "date", "label": "Date"},
            ],
            "direction": "row",
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.RadioGroup, props, size=6)
            for title, props in radio_groups
        ]
    )
)

for radio_group_id in [group[1]["id"] for group in radio_groups]:

    @callback(
        Output(f"output-div-{radio_group_id}", "children"),
        Input(radio_group_id, "value"),
    )
    def display_output(value, radio_group_id=radio_group_id):
        if value is None:
            return "No option selected"
        return f"You selected: {value}"
