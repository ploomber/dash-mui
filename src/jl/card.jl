# AUTO GENERATED FILE - DO NOT EDIT

export card

"""
    card(;kwargs...)

A Card component.

Keyword arguments:
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `buttonText` (String; optional): The text for the button.
- `mainContent` (String; optional): The main content of the card.
- `n_clicks` (Real; optional): Number of times the button has been clicked.
- `secondaryContent` (String; optional): The secondary content of the card.
- `subtitle` (String; optional): The subtitle of the card.
- `title` (String; optional): The title of the card.
"""
function card(; kwargs...)
        available_props = Symbol[:id, :buttonText, :mainContent, :n_clicks, :secondaryContent, :subtitle, :title]
        wild_props = Symbol[]
        return Component("card", "Card", "dash_material_ui", available_props, wild_props; kwargs...)
end

