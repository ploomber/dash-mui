# AUTO GENERATED FILE - DO NOT EDIT

#' @export
card <- function(id=NULL, buttonText=NULL, mainContent=NULL, n_clicks=NULL, secondaryContent=NULL, subtitle=NULL, title=NULL) {
    
    props <- list(id=id, buttonText=buttonText, mainContent=mainContent, n_clicks=n_clicks, secondaryContent=secondaryContent, subtitle=subtitle, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Card',
        namespace = 'dash_material_ui',
        propNames = c('id', 'buttonText', 'mainContent', 'n_clicks', 'secondaryContent', 'subtitle', 'title'),
        package = 'dashMaterialUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
