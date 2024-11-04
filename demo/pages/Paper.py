import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

layout = html.Div(
    [
        mui.Grid(
            
            [
                create_component_item(
                    f"Paper Elevation {elevation}",
                    mui.Paper,
                    {
                        "id": f"paper-{elevation}",
                        "children": f"Elevation = {elevation}",
                        "elevation": elevation,
                    },
                    event_name="Elevation",
                    event_value="elevation"
                )
                for elevation in [0, 1, 2, 3, 4, 6, 8, 12, 16, 24]
            ]
        ),

        html.Div(id="output-div-paper", style={"marginTop": "20px"})
    ]
)

