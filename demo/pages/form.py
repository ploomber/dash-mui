import dash_material_ui as mui
import dash
from dash import html, callback, Input, Output
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent.parent))
from util import create_component_item

dash.register_page(__name__)

forms = [
    (
        "Basic Form",
        {
            "id": "form-1",
            "fields": [
                {
                    "id": "name",
                    "label": "Name",
                    "type": "text",
                    "required": True,
                },
                {
                    "id": "email",
                    "label": "Email",
                    "type": "email",
                    "helperText": "Enter a valid email address",
                },
                {
                    "id": "password",
                    "label": "Password",
                    "type": "password",
                    "helperText": "Must be at least 8 characters long",
                },
                {
                    "id": "age",
                    "label": "Age",
                    "type": "number",
                    "variant": "filled",
                },
            ],
        },
    ),
    (
        "Form with Select Fields",
        {
            "id": "form-2",
            "fields": [
                {
                    "id": "country",
                    "label": "Country",
                    "type": "select",
                    "options": [
                        {"value": "us", "label": "United States"},
                        {"value": "ca", "label": "Canada"},
                        {"value": "uk", "label": "United Kingdom"},
                    ],
                },
                {
                    "id": "language",
                    "label": "Preferred Language",
                    "type": "select",
                    "options": [
                        {"value": "en", "label": "English"},
                        {"value": "fr", "label": "French"},
                        {"value": "es", "label": "Spanish"},
                    ],
                },
            ],
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.Form, props, size=12)
            for title, props in forms
        ]
    )
)


@callback(
    Output("output-div-form-1", "children"),
    Input("form-1", "values"),
)
def update_output(values):
    if values is None:
        return "Form has not been submitted yet"
    return f"Form values: {values}"


@callback(
    Output("output-div-form-2", "children"),
    Input("form-2", "values"),
)
def update_output_form2(values):
    if values is None:
        return "Form has not been submitted yet"
    return f"Form values: {values}"
