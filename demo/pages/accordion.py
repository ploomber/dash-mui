import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
import sys
from pathlib import Path


from util import create_component_item

dash.register_page(__name__)

accordions = [
    (
        "Basic Accordion",
        {
            "id": "accordion-1",
            "panels": [
                {
                    "id": "panel1",
                    "summary": "Panel 1",
                    "details": "This is the content of Panel 1.",
                },
                {
                    "id": "panel2",
                    "summary": "Panel 2",
                    "details": "This is the content of Panel 2.",
                },
                {
                    "id": "panel3",
                    "summary": "Panel 3",
                    "details": "This is the content of Panel 3.",
                },
            ],
        },
    ),
    (
        "Accordion with Default Expanded Panel",
        {
            "id": "accordion-2",
            "panels": [
                {
                    "id": "panel1",
                    "summary": "Expanded Panel",
                    "details": "This panel is expanded by default.",
                    "expanded": True,
                },
                {
                    "id": "panel2",
                    "summary": "Collapsed Panel",
                    "details": "This panel is collapsed by default.",
                },
            ],
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.Accordion, props, size=6)
            for title, props in accordions
        ]
    )
)
