# AUTO GENERATED FILE - DO NOT EDIT

#' @export
secondComponent <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SecondComponent',
        namespace = 'dash_material_ui',
        propNames = c('id', 'label', 'value'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
