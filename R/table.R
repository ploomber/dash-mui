# AUTO GENERATED FILE - DO NOT EDIT

#' @export
table <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Table',
        namespace = 'dash_material_ui',
        propNames = c('id', 'data'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
