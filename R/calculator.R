# AUTO GENERATED FILE - DO NOT EDIT

#' @export
calculator <- function(id=NULL, result=NULL) {
    
    props <- list(id=id, result=result)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Calculator',
        namespace = 'dash_material_ui',
        propNames = c('id', 'result'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
