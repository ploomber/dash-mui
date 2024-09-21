# AUTO GENERATED FILE - DO NOT EDIT

#' @export
checkBoxTable <- function(id=NULL, columns=NULL, data=NULL) {
    
    props <- list(id=id, columns=columns, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CheckBoxTable',
        namespace = 'dash_material_ui',
        propNames = c('id', 'columns', 'data'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
