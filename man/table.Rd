% Auto-generated: do not edit by hand
\name{table}

\alias{table}

\title{Table component}

\description{
Table is a component that displays data in a tabular format. It takes a property `data` which is an array of objects representing the table rows.
}

\usage{
table(id=NULL, data=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{List of named lists. The data to be displayed in the table.
It should be an array of objects, where each object represents a row.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

