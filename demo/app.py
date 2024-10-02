import dash
from dash import Dash, html
import dash_material_ui as mui
from dash import Input, Output, callback, dcc, State
from collections import Counter

dash._dash_renderer._set_react_version("18.2.0")


app = Dash(__name__, use_pages=True)
server = app.server


# Register the root page
dash.register_page(
    "home",
    path="/",
    layout=mui.App(
        mui.Grid(
            [
                mui.Item(
                    children=[
                        html.H1("Welcome to Dash Material UI Demo"),
                        html.P(
                            "Add fruit observations and view them in a table and histogram."
                        ),
                    ],
                    size=12,
                ),
                mui.Item(
                    children=[
                        html.H2("Add Fruit Observation"),
                        mui.Form(
                            id="observation-form",
                            fields=[
                                {
                                    "id": "fruit",
                                    "label": "Fruit",
                                    "type": "select",
                                    "options": [
                                        {"value": "apple", "label": "Apple"},
                                        {"value": "banana", "label": "Banana"},
                                        {"value": "cherry", "label": "Cherry"},
                                        {"value": "grape", "label": "Grape"},
                                        {"value": "mango", "label": "Mango"},
                                        {"value": "orange", "label": "Orange"},
                                        {"value": "pineapple", "label": "Pineapple"},
                                        {"value": "strawberry", "label": "Strawberry"},
                                    ],
                                    "required": True,
                                },
                                {
                                    "id": "quantity",
                                    "label": "Quantity",
                                    "type": "number",
                                    "defaultValue": "1",
                                    "required": True,
                                },
                            ],
                        ),
                        mui.Button(
                            "Submit Observation",
                            variant="contained",
                            id="submit-observation",
                        ),
                        html.Div(id="form-output", style={"marginTop": "10px"}),
                    ],
                    size=4,
                ),
                mui.Item(
                    children=[
                        html.H2("Fruit Observations Table"),
                        mui.Table(
                            id="observations-table",
                            data=[],
                            dense=False,
                            stickyHeader=True,
                        ),
                    ],
                    size=8,
                ),
                mui.Item(
                    children=[
                        html.H2("Fruit Histogram"),
                        dcc.Graph(id="fruit-histogram"),
                    ],
                    size=12,
                ),
            ]
        )
    ),
)


@callback(
    Output("form-output", "children"),
    Output("observations-table", "data"),
    Output("fruit-histogram", "figure"),
    Input("submit-observation", "n_clicks"),
    State("observation-form", "values"),
    State("observations-table", "data"),
    prevent_initial_call=True,
)
def update_observations(n_clicks, form_values, table_data):
    if not form_values:
        return "Please fill out the form", table_data or [], {}

    fruit = form_values.get("fruit")
    quantity = form_values.get("quantity")

    if fruit is None or quantity is None:
        return "Please provide both Fruit and Quantity", table_data or [], {}

    # Update table data
    new_observation = {"Fruit": fruit, "Quantity": int(quantity)}
    table_data = table_data or []
    table_data.append(new_observation)

    # Update histogram
    fruit_counts = Counter()
    for obs in table_data:
        fruit_counts[obs["Fruit"]] += obs["Quantity"]

    # Define a color for each fruit
    colors = {
        "apple": "#CC0000",
        "banana": "#E6CB30",
        "cherry": "#B52850",
        "grape": "#5B2589",
        "mango": "#E6C200",
        "orange": "#E69400",
        "pineapple": "#E6E600",
        "strawberry": "#CC0000",
    }

    figure = {
        "data": [
            {
                "x": list(fruit_counts.keys()),
                "y": list(fruit_counts.values()),
                "type": "bar",
                "marker": {
                    "color": [
                        colors.get(fruit, "#000000") for fruit in fruit_counts.keys()
                    ]
                },
            }
        ],
        "layout": {
            "title": "Fruit Histogram",
            "xaxis": {"title": "Fruit"},
            "yaxis": {"title": "Quantity"},
        },
    }

    return f"Observation added: {quantity} {fruit}(s)", table_data, figure


app.layout = mui.App(
    children=[
        mui.AppBar(
            title="Dash Material UI",
            showMenuButton=True,
            id="app-bar",
            sections={
                **{
                    page["name"]: page["relative_path"]
                    for page in dash.page_registry.values()
                },
            },
        ),
        html.Div(
            children=[
                dash.page_container,
            ],
            style={
                "padding-left": "10px",
                "padding-right": "10px",
                "padding-bottom": "60px",  # Add extra space at the bottom
            },
        ),
        html.Footer(
            html.P(
                [
                    "Made with ❤️ by ",
                    html.A(
                        "Ploomber",
                        href="https://ploomber.io/?utm_source=dash-mui&utm_medium=demo",
                        target="_blank",
                    ),
                ]
            ),
            style={
                "text-align": "center",
                "padding": "2px",
                "border-top": "1px solid #e0e0e0",
                "position": "fixed",
                "bottom": "0",
                "left": "0",
                "right": "0",
                "background-color": "white",
                "z-index": "1000",
            },
        ),
    ],
)

if __name__ == "__main__":
    app.run(debug=True)
