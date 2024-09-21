import dash_material_ui as mui
import dash
from dash import Dash, callback, html, Input, Output, State


dash.register_page(__name__)

style = {"border": "1px solid black", "padding": "10px"}

layout = html.Div(
    [
        html.H1("Basic Grid"),
        mui.Grid(
            [
                mui.Item(html.Div(children="size=8", style=style), size=8),
                mui.Item(html.Div(children="size=4", style=style), size=4),
                mui.Item(html.Div(children="size=4", style=style), size=4),
                mui.Item(html.Div(children="size=8", style=style), size=8),
            ],
            spacing=1,
        ),
        html.H1("Spacing Grid"),
        mui.Grid(
            [
                mui.Item(html.Div(children="size=3", style=style), size=3),
                mui.Item(html.Div(children="size=3", style=style), size=3),
                mui.Item(html.Div(children="size=3", style=style), size=3),
                mui.Item(html.Div(children="size=3", style=style), size=3),
            ],
            spacing=4,
        ),
        html.H1("Auto-layout Grid"),
        mui.Grid(
            [
                mui.Item(html.Div(children="size=grow", style=style), size="grow"),
                mui.Item(html.Div(children="size=6", style=style), size=6),
                mui.Item(html.Div(children="size=grow", style=style), size="grow"),
            ],
            spacing=2,
        ),
        html.H1("Variable Width Grid"),
        mui.Grid(
            [
                mui.Item(html.Div(children="size=auto", style=style), size="auto"),
                mui.Item(html.Div(children="size=6", style=style), size=6),
                mui.Item(html.Div(children="size=grow", style=style), size="grow"),
            ],
            spacing=2,
        ),
    ]
)
