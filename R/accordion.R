# AUTO GENERATED FILE - DO NOT EDIT

#' @export
accordion <- function(id=NULL, panels=NULL) {
    
    props <- list(id=id, panels=panels)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Accordion',
        namespace = 'dash_material_ui',
        propNames = c('id', 'panels'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
