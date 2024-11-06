import dash_material_ui as mui
import dash
from dash import html, Input, Output, callback
import black
import dash_react_syntax_highlighter


dash._dash_renderer._set_react_version("18.2.0")


def generate_callback(id, event_name, event_value, event_state):
    if event_name == "Speed Dial":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_value}")
)
def display_clicked_action(action_id):
    action_map = {{
        "save-action": "Save action clicked",
        "print-action": "Print action clicked",
        "share-action": "Share action clicked",
    }}
    return action_map.get(action_id, "No action selected")
"""
    if id == "select-3":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Output(f"output-div-{id}", "style"),
    Input("{id}", "{event_value}")
)
def display_output({event_value}, id="{id}"):
    if not {event_value}:
        return f"No option selected in {id}", {{"color": "black"}}
    elif {event_value} != "option2":
        return "Invalid selection. Please select Option 2.", {{"color": "red"}}
    else:
        return "Valid selection!", {{"color": "green"}}
"""
    elif event_name == "Switch":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_value}")
)
def display_output({event_value}, id="{id}"):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"{event_name} is {{'ON' if {event_value} else 'OFF'}}"
"""
    elif event_name == "Card":
        return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_value}"),
    State("{id}", "{event_state}"),
)
def display_output({event_value}, {event_state}, id="{id}"):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"You clicked the button and the content is: {{{event_state}}}"      
"""
    return f"""
@callback(
    Output(f"output-div-{id}", "children"),
    Input("{id}", "{event_value}")
)
def display_output({event_value}, id="{id}"):
    if {event_value} is None:
        return f"{id} has not been interacted with yet"
    return f"{event_name} value is: {{{event_value}}}"
"""


def create_component_item(
    title,
    component_type,
    component_props,
    event_name=None,
    event_value=None,
    size=4,
    output_div=True,
    event_state=None,
):
    component = component_type(**component_props)

    component_code = f"import dash_material_ui as mui\nimport dash\nfrom dash import html, Input, Output, callback\n\n"
    component_code += 'dash._dash_renderer._set_react_version("18.2.0")\n\n'
    component_code += f"app.layout = html.Div([\n    mui.{component_type.__name__}(\n"
    component_code += ",\n".join(
        f"        {k}={repr(v)}" for k, v in component_props.items()
    )
    component_code += (
        f"\n    ),\n    html.Div(id='output-div-{component_props['id']}')\n])"
    )

    if event_name:
        callback_code = generate_callback(
            component_props["id"],
            event_name,
            event_value,
            event_state,
        )
        component_code += f"\n\n{callback_code}"

    formatted_code = black.format_str(component_code, mode=black.Mode(line_length=88))

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

    children.append(
        dash_react_syntax_highlighter.DashReactSyntaxHighlighter(
            code=formatted_code, language="python", styleName="okaidia"
        )
    )

    return mui.Item(
        children=children,
        size=size,
    )
