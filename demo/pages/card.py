import dash_material_ui as mui
import dash
from dash import html
from dash import Input, Output, callback, State
import sys
from pathlib import Path


from util import create_component_item

dash.register_page(__name__)

cards = [
    (
        "Basic Card with Title and Content",
        {"id": "card-1", "title": "Title", "content": "Content"},
    ),
    (
        "Card with Title, Content, and Topic",
        {"id": "card-2", "title": "Title", "content": "Content", "topic": "Topic"},
    ),
    (
        "Card with Title, Content, Topic, and Subtitle",
        {
            "id": "card-3",
            "title": "Title",
            "content": "Content",
            "topic": "Topic",
            "subtitle": "Subtitle",
        },
    ),
    (
        "Full Card with Title, Content, Topic, Subtitle, and Button",
        {
            "id": "card-4",
            "title": "Title",
            "content": "Some interesting content",
            "topic": "Topic",
            "subtitle": "Subtitle",
            "buttonText": "Click me",
        },
    ),
]

layout = html.Div(
    [
        mui.Grid(
            [create_component_item(title, mui.Card, props, event_value="n_clicks" if props["id"] == "card-4" else None, event_name="Card" if props["id"] == "card-4" else None, event_state="content" if props["id"] == "card-4" else None) for title, props in cards]
        ),
        html.Div(id="output-div", style={"margin-top": "20px"}),
    ]
)


@callback(
    Output("output-div", "children"),
    Input("card-4", "n_clicks"),
    State("card-4", "content"),
)
def print_card_content(n_clicks, content):
    if n_clicks is None or n_clicks == 0:
        return "Button not clicked yet"
    return f"You clicked the button and the content is: {content}"
