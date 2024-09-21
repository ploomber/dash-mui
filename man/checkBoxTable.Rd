% Auto-generated: do not edit by hand
\name{checkBoxTable}

\alias{checkBoxTable}

\title{CheckBoxTable component}

\description{
CheckBoxTable is a component that displays data in a tabular format with checkboxes. It takes properties `data` and `columns` which define the table structure and content.
}

\usage{
checkBoxTable(id=NULL, columns=NULL, data=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{columns}{List of lists containing elements 'field', 'headername', 'width', 'type', 'description', 'sortable', 'valuegetter'.
those elements have the following types:
  - field (character; required)
  - headername (character; required)
  - width (numeric; optional)
  - type (character; optional)
  - description (character; optional)
  - sortable (logical; optional)
  - valuegetter (optional)s. The column definitions for the table.
It should be an array of objects, where each object defines a column.}

\item{data}{List of named lists. The data to be displayed in the table.
It should be an array of objects, where each object represents a row.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

