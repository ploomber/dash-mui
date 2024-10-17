import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
import black
import dash_react_syntax_highlighter


dash._dash_renderer._set_react_version("18.2.0")

def generate_callback(id, event_name, event_value):
    if event_name == "Switch":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_name}")
)
def display_output({event_value}):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"{event_name} is {{'ON' if {event_value} else 'OFF'}}"
"""
    elif event_name == "Card":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_name}")
    State("{id}", "{event_value}"),
)
def display_output({event_value}):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"{event_name} is {{'ON' if {event_value} else 'OFF'}}"      
"""
    return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_name}")
)
def display_output({event_value}):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"{event_name} value is: {event_value}"
"""

def create_component_item(
    title,
    component_type,
    component_props,
    event_name=None,
    event_value=None,
    size=4,
    output_div=True,
    callback_function=None,
):
    # Create the component dynamically
    component = component_type(**component_props)

    # Prepare the component code as a string
    component_code = f"import dash_material_ui as mui\nimport dash\nfrom dash import html, Input, Output, callback\n\n"
    component_code += 'dash._dash_renderer._set_react_version("18.2.0")\n\n'
    component_code += f"app.layout = html.Div([\n    mui.{component_type.__name__}(\n"
    component_code += ",\n".join(
        f"        {k}={repr(v)}" for k, v in component_props.items()
    )
    component_code += f"\n    ),\n    html.Div(id='output-div-{component_props['id']}')\n])"

    # If the event_name is provided, generate and register the callback for the component
    if event_name:
        component_code += f"\n\n{generate_callback(component_props["id"], event_name, event_value)}"

    # Format the component code using black for code display purposes
    formatted_code = black.format_str(component_code, mode=black.Mode(line_length=88))

    # Build the list of children for the component
    children = [
        html.H2(title),
        component,
    ]

    if output_div:
        children.append(
            html.Div(
                id=f"output-div-{component_props['id']}", style={"marginTop": "10px"}
            )
        )

    # Add the code display using Dash's syntax highlighter
    children.append(
        dash_react_syntax_highlighter.DashReactSyntaxHighlighter(
            code=formatted_code, language="python", styleName="okaidia"
        )
    )

    # Return the component wrapped in an MUI Item
    return mui.Item(
        children=children,
        size=size,
    )
