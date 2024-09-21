import dash_material_ui
import dash
from dash import Dash, callback, html, Input, Output, State


dash._dash_renderer._set_react_version("18.2.0")


app = Dash(__name__)

europe_data = [
    {"name": "John", "age": 30, "city": "Paris"},
    {"name": "Jane", "age": 25, "city": "Berlin"},
    {"name": "Alice", "age": 35, "city": "Rome"},
]

america_data = [
    {"name": "Bob", "age": 28, "city": "New York"},
    {"name": "Emma", "age": 32, "city": "Los Angeles"},
    {"name": "Mike", "age": 27, "city": "Chicago"},
]

# Create new data for the CheckBox table with unique 'id' for each row
checkbox_data = [
    {"id": 1, "name": "John", "age": 30, "city": "Paris"},
    {"id": 2, "name": "Jane", "age": 25, "city": "Berlin"},
    {"id": 3, "name": "Alice", "age": 35, "city": "Rome"},
    {"id": 4, "name": "Bob", "age": 28, "city": "New York"},
    {"id": 5, "name": "Emma", "age": 32, "city": "Los Angeles"},
    {"id": 6, "name": "Mike", "age": 27, "city": "Chicago"},
]

# Define columns for the CheckBox table
checkbox_columns = [
    {"field": "name", "headerName": "Name", "width": 150},
    {"field": "age", "headerName": "Age", "width": 100, "type": "number"},
    {"field": "city", "headerName": "City", "width": 150},
]

app.layout = html.Div(
    [
        dash_material_ui.Button(
            children="Update data",
            id="swap-button",
            n_clicks=0,
            variant="contained",
            color="primary",
            size="large",
            disabled=False,
            fullWidth=False,
            href=None,
            startIcon=None,
            endIcon=None,
        ),
        dash_material_ui.AutoLayout(
            [
                dash_material_ui.Table(id="table", data=europe_data),
                dash_material_ui.CheckBoxTable(
                    id="checkbox-table", data=checkbox_data, columns=checkbox_columns
                ),
                dash_material_ui.Card(
                    id="card",
                    title="Card Title",
                    subtitle="Card Subtitle",
                    mainContent="Card Main Content",
                    secondaryContent="Card Secondary Content",
                    buttonText="Card Button Text",
                ),
                dash_material_ui.Card(
                    id="card2",
                    title="Card Title",
                    subtitle="Card Subtitle",
                    mainContent="Card Main Content",
                    secondaryContent="Card Secondary Content",
                    buttonText="Card Button Text",
                ),
                dash_material_ui.Accordion(
                    id="accordion",
                    panels=[
                        {
                            "id": "panel1",
                            "summary": "Panel 1",
                            "details": "Panel 1 Details",
                        }
                    ],
                ),
            ]
        ),
    ]
)


@callback(
    Output("table", "data"),
    Input("swap-button", "n_clicks"),
    Input("card", "n_clicks"),
)
def swap_table_content(button_clicks, card_clicks):
    total_clicks = (button_clicks or 0) + (card_clicks or 0)
    if total_clicks % 2 == 0:
        return europe_data
    else:
        return america_data


if __name__ == "__main__":
    app.run_server(debug=True)
