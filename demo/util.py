import dash_material_ui as mui
from dash import html
import black


def create_component_item(
    title,
    component_type,
    component_props,
    size=4,
    output_div=True,
):
    component = component_type(**component_props)
    component_code = f"import dash_material_ui as mui\n\n"
    component_code += f"mui.{component_type.__name__}(\n"
    component_code += "\n".join(
        f"    {k}={repr(v)}," for k, v in component_props.items()
    )
    component_code += "\n)"

    # Format the code using black
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
        html.Div(
            children=[html.Pre(html.Code(formatted_code, className="language-python"))]
        )
    )

    return mui.Item(
        children=children,
        size=size,
    )
