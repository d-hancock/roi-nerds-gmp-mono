import React from "react"
import PropTypes from "prop-types"

// TODO: Consolidate data and props layer refactor to MUI
export const SideBarFooter = ({ secondaryItems }) => {
  const linkStyles = "text-base font-medium text-gray-900 hover:text-gray-700"
  return (
    <div className="py-6 px-5 space-y-6">
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {secondaryItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={linkStyles}
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* CTA section start  */}
      {/* CTA section start  */}
    </div>
  )
}

SideBarFooter.propTypes = {
  secondaryItems: PropTypes.array.isRequired,
}

export default SideBarFooter
