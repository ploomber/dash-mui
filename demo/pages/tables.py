import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent.parent))
from util import create_component_item

dash.register_page(__name__)

population_data = [
    {"country": "India", "code": "IN", "population": 1324171354, "area": 3287263},
    {"country": "China", "code": "CN", "population": 1403500365, "area": 9596961},
    {"country": "Italy", "code": "IT", "population": 60483973, "area": 301340},
    {
        "country": "United States",
        "code": "US",
        "population": 327167434,
        "area": 9833520,
    },
    {"country": "Canada", "code": "CA", "population": 37602103, "area": 9984670},
    {"country": "Australia", "code": "AU", "population": 25475400, "area": 7692024},
    {"country": "Germany", "code": "DE", "population": 83019200, "area": 357578},
    {"country": "Ireland", "code": "IE", "population": 4857000, "area": 70273},
    {"country": "Mexico", "code": "MX", "population": 126577691, "area": 1972550},
    {"country": "Japan", "code": "JP", "population": 126317000, "area": 377973},
    {"country": "France", "code": "FR", "population": 67022000, "area": 640679},
    {"country": "United Kingdom", "code": "GB", "population": 67545757, "area": 242495},
    {"country": "Russia", "code": "RU", "population": 146793744, "area": 17098246},
    {"country": "Nigeria", "code": "NG", "population": 200962417, "area": 923768},
    {"country": "Brazil", "code": "BR", "population": 210147125, "area": 8515767},
]

europe_data = [
    {"name": "John", "age": 30, "city": "Paris"},
    {"name": "Jane", "age": 25, "city": "Berlin"},
    {"name": "Alice", "age": 35, "city": "Rome"},
]

checkbox_data = [
    {"id": 1, "name": "John", "age": 30, "city": "Paris"},
    {"id": 2, "name": "Jane", "age": 25, "city": "Berlin"},
    {"id": 3, "name": "Alice", "age": 35, "city": "Rome"},
    {"id": 4, "name": "Bob", "age": 28, "city": "New York"},
    {"id": 5, "name": "Emma", "age": 32, "city": "Los Angeles"},
    {"id": 6, "name": "Mike", "age": 27, "city": "Chicago"},
]

checkbox_columns = [
    {"field": "name", "headerName": "Name", "width": 150},
    {"field": "age", "headerName": "Age", "width": 100, "type": "number"},
    {"field": "city", "headerName": "City", "width": 150},
]

tables = [
    (
        "Regular Table",
        {
            "id": "table-1",
            "data": europe_data,
            "dense": False,
        },
    ),
    (
        "Dense Table",
        {
            "id": "table-2",
            "data": europe_data,
            "dense": True,
        },
    ),
    (
        "Sticky Header Table",
        {
            "id": "table-3",
            "data": population_data,
            "dense": False,
            "stickyHeader": True,
        },
    ),
    (
        "Table with checkboxes",
        {
            "id": "checkbox-table",
            "data": checkbox_data,
            "columns": checkbox_columns,
        },
    ),
]

layout = html.Div(
    mui.Grid(
        [
            create_component_item(
                title,
                (
                    mui.Table
                    if "Table with checkboxes" not in title
                    else mui.CheckBoxTable
                ),
                props,
                size=6,
                output_div=("Table with checkboxes" == title),
            )
            for title, props in tables
        ]
    )
)


@callback(
    Output("output-div-checkbox-table", "children"),
    Input("checkbox-table", "selected"),
)
def update_selected_rows(selected):
    return f"Selected rows: {selected}"
