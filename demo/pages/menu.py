# menu.py

import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

# Define menus with different configurations
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

# Create the layout using the menus defined above
layout = html.Div(
    mui.Grid(
        spacing=2,  # Controls the spacing between the menus
        children=[
            create_component_item(title, mui.Menu, props) for title, props in menus
        ],
    )
)

# Create callbacks for each menu to display the selected item
for menu_id in [props["id"] for _, props in menus]:

    @callback(
        Output(f"output-div-{menu_id}", "children"),
        Input(menu_id, "selectedIndex"),
    )
    def display_selected_item(selectedIndex, menu_id=menu_id):
        if selectedIndex is None:
            return "No item selected"
        else:
            # Retrieve the menu items from the menus
            menu_items = next(
                props["menuItems"]
                for title, props in menus
                if props["id"] == menu_id
            )
            # For basic menus, menu_items can be a list of strings or dicts
            if isinstance(menu_items[selectedIndex], dict):
                selected_item = menu_items[selectedIndex].get("label", "Divider")
            else:
                selected_item = menu_items[selectedIndex]
            return f"Selected item: {selected_item}"
