# menu.py

import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

menus = [
    (
        "Simple Menu",
        {
            "id": "menu-1",
            "buttonText": "Open Menu",
            "menuItems": ["Profile", "My account", "Logout"],
        },
    ),
    (
        "Menu with Disabled Item",
        {
            "id": "menu-2",
            "buttonText": "Options",
            "menuItems": [
                {"label": "Option 1"},
                {"label": "Option 2 (Disabled)", "disabled": True},
                {"label": "Option 3"},
            ],
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(title, mui.Menu, props, event_name="Selected Menu" if props["id"] == "menu-2" else None, event_value="selectedIndex" if props["id"] == "menu-2" else None, size=6) for title, props in menus
        ],
    )
)

@callback(
    Output("output-div-menu-1", "children"),
    Input("menu-1", "selectedIndex"),
)
def display_selected_item_1(selectedIndex):
    if selectedIndex is None:
        return "No item selected"
    else:
        menu_items = menus[0][1]["menuItems"]
        if isinstance(menu_items[selectedIndex], dict):
            selected_item = menu_items[selectedIndex].get("label", "Divider")
        else:
            selected_item = menu_items[selectedIndex]
        return f"Selected item: {selected_item}"


@callback(
    Output("output-div-menu-2", "children"),
    Input("menu-2", "selectedIndex"),
)
def display_selected_item_2(selectedIndex):
    if selectedIndex is None:
        return "No item selected"
    else:
        menu_items = menus[1][1]["menuItems"]
        if isinstance(menu_items[selectedIndex], dict):
            selected_item = menu_items[selectedIndex].get("label", "Divider")
        else:
            selected_item = menu_items[selectedIndex]
        return f"Selected item: {selected_item}"

