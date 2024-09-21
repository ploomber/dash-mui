% Auto-generated: do not edit by hand
\name{button}

\alias{button}

\title{Button component}

\description{
Button component using Material-UI. It can be customized with various optional props to change its appearance and behavior. The 'id' prop is required.
}

\usage{
button(children=NULL, id=NULL, color=NULL, disabled=NULL,
endIcon=NULL, fullWidth=NULL, href=NULL, n_clicks=NULL,
onClick=NULL, size=NULL, startIcon=NULL, variant=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The content of the button.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{color}{A value equal to: 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'. The color of the component.}

\item{disabled}{Logical. If true, the button will be disabled.}

\item{endIcon}{A list of or a singular dash component, string or number. Element placed after the children.}

\item{fullWidth}{Logical. If true, the button will take up the full width of its container.}

\item{href}{Character. The URL to link to when the button is clicked.}

\item{n_clicks}{Numeric. Number of times the button has been clicked.}

\item{onClick}{Callback fired when the button is clicked.}

\item{size}{A value equal to: 'small', 'medium', 'large'. The size of the component.}

\item{startIcon}{A list of or a singular dash component, string or number. Element placed before the children.}

\item{variant}{A value equal to: 'text', 'outlined', 'contained'. The variant to use.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

