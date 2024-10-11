import dash
from dash import html
import dash_material_ui as mui
from dash import Input, Output, callback

from util import create_component_item

dash.register_page(__name__)

paginations = [
    (
        "Default Pagination",
        {
            "id": "pagination-1",
            "count": 10,
        },
    ),
    (
        "Controlled Pagination",
        {
            "id": "pagination-2",
            "count": 10,
            "page": 1,
        },
    ),
    (
        "Pagination with Sibling Count",
        {
            "id": "pagination-3",
            "count": 10,
            "siblingCount": 2,
        },
    ),
    (
        "Outlined Pagination",
        {
            "id": "pagination-4",
            "count": 10,
            "variant": "outlined",
        },
    ),
    (
        "Rounded Pagination",
        {
            "id": "pagination-5",
            "count": 10,
            "shape": "rounded",
        },
    ),
    (
        "Large Primary Pagination",
        {
            "id": "pagination-6",
            "count": 10,
            "size": "large",
            "color": "primary",
        },
    ),
    (
        "Small Secondary Pagination",
        {
            "id": "pagination-7",
            "count": 10,
            "size": "small",
            "color": "secondary",
        },
    ),
    (
        "Pagination with First and Last Buttons",
        {
            "id": "pagination-8",
            "count": 10,
            "showFirstButton": True,
            "showLastButton": True,
        },
    ),
    (
        "Pagination without Previous and Next Buttons",
        {
            "id": "pagination-9",
            "count": 10,
            "hidePrevButton": True,
            "hideNextButton": True,
        },
    ),
]

layout = html.Div(
    mui.Grid(
        spacing=2, 
        children=[
            create_component_item(title, mui.Pagination, props) for title, props in paginations
        ]
    )
)

for pagination_id in [pagination[1]["id"] for pagination in paginations]:

    @callback(
        Output(f"output-div-{pagination_id}", "children"),
        Input(pagination_id, "page"),
    )
    def display_output(page, pagination_id=pagination_id):
        if page is None:
            return "Pagination state is unknown"
        return f"{pagination_id} is on page {page}"
