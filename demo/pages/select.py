import dash_material_ui as mui
import dash
from dash import html
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

# Define select options
select_options = [
    {"value": "option1", "label": "Option 1"},
    {"value": "option2", "label": "Option 2"},
    {"value": "option3", "label": "Option 3"},
]

# Define selects with different features
selects = [
    (
        "Basic Select",
        {
            "id": "select-1",
            "label": "Choose an option",
            "value": "",
            "options": select_options,
            "helperText": "Select an option from the list",
        },
    ),
    (
        "Disabled Select",
        {
            "id": "select-2",
            "label": "Choose an option",
            "value": "",
            "options": select_options,
            "disabled": True,
            "helperText": "This select is disabled",
        },
    ),
    (
        "Select with Error",
        {
            "id": "select-3",
            "label": "Choose an option",
            "value": "",
            "options": select_options,
            "error": True,
            "helperText": "An error occurred",
        },
    ),
    (
        "Read-Only Select",
        {
            "id": "select-4",
            "label": "Choose an option",
            "value": "option1",
            "options": select_options,
            "readOnly": True,
            "helperText": "This select is read-only",
        },
    ),
    (
        "Required Select",
        {
            "id": "select-5",
            "label": "Choose an option",
            "value": "",
            "options": select_options,
            "required": True,
            "helperText": "This field is required",
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [create_component_item(title, mui.Select, props, event_name="Selection", event_value="value") for title, props in selects]
    )
)

# Callback for all selects
for select_id in [select[1]["id"] for select in selects]:

    @callback(
        Output(f"output-div-{select_id}", "children"),
        Input(select_id, "value"),
    )
    def display_output(value, select_id=select_id):
        if value is None or value == "":
            return f"No option selected in {select_id}"
        return f"{select_id} selected: {value}"
