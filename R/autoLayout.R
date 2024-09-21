# AUTO GENERATED FILE - DO NOT EDIT

#' @export
autoLayout <- function(children=NULL, id=NULL, direction=NULL, spacing=NULL) {
    
    props <- list(children=children, id=id, direction=direction, spacing=spacing)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AutoLayout',
        namespace = 'dash_material_ui',
        propNames = c('children', 'id', 'direction', 'spacing'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
