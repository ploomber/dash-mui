
module DashMaterialUi
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/accordion.jl")
include("jl/autolayout.jl")
include("jl/button.jl")
include("jl/calculator.jl")
include("jl/card.jl")
include("jl/checkboxtable.jl")
include("jl/dashmaterialui.jl")
include("jl/secondcomponent.jl")
include("jl/table.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_material_ui",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_material_ui.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_material_ui.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
