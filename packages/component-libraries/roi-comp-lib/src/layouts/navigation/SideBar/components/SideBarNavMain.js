import React from "react"
import PropTypes from "prop-types"

// TODO: Consolidate data and props layer refactor to MUI
export const SideBarNavMain = ({ primaryItems }) => {
  return (
    <div className="mt-6">
      <nav className="grid gap-y-8">
        {primaryItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
          >
            {/* TODO: Decide on an implementation for icons passed in this manner.  */}
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              aria-hidden="true"
            />
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  )
}

SideBarNavMain.propTypes = {
  primaryItems: PropTypes.array.isRequired,
}

export default SideBarNavMain
