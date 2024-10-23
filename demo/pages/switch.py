import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback
from util import create_component_item

dash.register_page(__name__)

switch_sections = [
    (
        "Basic Switches",
        [
            (
                "Default Switch",
                {
                    "id": "switch-1",
                    "checked": False,
                },
            ),
            (
                "Checked Switch",
                {
                    "id": "switch-2",
                    "checked": True,
                },
            ),
            (
                "Disabled Switch",
                {
                    "id": "switch-3",
                    "checked": True,
                    "disabled": True,
                },
            ),
        ],
    ),
    (
        "Color Switches",
        [
            (
                "Primary Switch",
                {
                    "id": "switch-4",
                    "checked": True,
                    "color": "primary",
                },
            ),
            (
                "Secondary Switch",
                {
                    "id": "switch-5",
                    "checked": True,
                    "color": "secondary",
                },
            ),
            (
                "Error Switch",
                {
                    "id": "switch-6",
                    "checked": True,
                    "color": "error",
                },
            ),
            (
                "Warning Switch",
                {
                    "id": "switch-7",
                    "checked": True,
                    "color": "warning",
                },
            ),
            (
                "Info Switch",
                {
                    "id": "switch-8",
                    "checked": True,
                    "color": "info",
                },
            ),
            (
                "Success Switch",
                {
                    "id": "switch-9",
                    "checked": True,
                    "color": "success",
                },
            ),
        ],
    ),
    (
        "Size Switches",
        [
            (
                "Small Switch",
                {
                    "id": "switch-10",
                    "size": "small",
                    "checked": False,
                },
            ),
            (
                "Medium Switch",
                {
                    "id": "switch-11",
                    "size": "medium",
                    "checked": True,
                },
            ),
        ],
    ),
]

layout_children = []

for section_title, switches in switch_sections:
    layout_children.append(html.H3(section_title))
    layout_children.append(
        mui.Grid(
            [create_component_item(title, mui.Switch, props, event_name="Switch", event_value="checked") for title, props in switches]
        )
    )

layout = html.Div(layout_children)

switch_ids = [props["id"] for _, switches in switch_sections for _, props in switches]

for switch_id in switch_ids:

    @callback(
        Output(f"output-div-{switch_id}", "children"),
        Input(switch_id, "checked"),
    )
    def display_output(checked, switch_id=switch_id):
        if checked is None:
            return "Switch has not been interacted with yet"
        return f"{switch_id} is {'ON' if checked else 'OFF'}"
