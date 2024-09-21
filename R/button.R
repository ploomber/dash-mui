# AUTO GENERATED FILE - DO NOT EDIT

#' @export
button <- function(children=NULL, id=NULL, color=NULL, disabled=NULL, endIcon=NULL, fullWidth=NULL, href=NULL, n_clicks=NULL, onClick=NULL, size=NULL, startIcon=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, color=color, disabled=disabled, endIcon=endIcon, fullWidth=fullWidth, href=href, n_clicks=n_clicks, onClick=onClick, size=size, startIcon=startIcon, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Button',
        namespace = 'dash_material_ui',
        propNames = c('children', 'id', 'color', 'disabled', 'endIcon', 'fullWidth', 'href', 'n_clicks', 'onClick', 'size', 'startIcon', 'variant'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
