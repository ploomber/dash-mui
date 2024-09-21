% Auto-generated: do not edit by hand
\name{accordion}

\alias{accordion}

\title{Accordion component}

\description{

}

\usage{
accordion(id=NULL, panels=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{panels}{List of lists containing elements 'id', 'summary', 'details', 'expanded', 'defaultexpanded', 'actions'.
those elements have the following types:
  - id (character; required)
  - summary (character; required)
  - details (character; required)
  - expanded (logical; optional)
  - defaultexpanded (logical; optional)
  - actions (optional): . actions has the following type: list of lists containing elements 'label', 'onclick'.
those elements have the following types:
  - label (character; required)
  - onclick (optional)ss. An array of panel objects to be rendered in the accordion.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

