import React from "react"
import tw from "twin.macro"

export const NumberFacts = (props) => {
  return (
    <div tw="bg-gray-50 pt-12 sm:pt-16">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div tw="max-w-4xl mx-auto text-center">
          <h2 tw="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p tw="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div tw="mt-10 pb-12 bg-white sm:pb-16">
        <div tw="relative">
          <div tw="absolute inset-0 h-1/2 bg-gray-50" />
          <div tw="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div tw="max-w-4xl mx-auto">
              <dl tw="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div tw="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt tw="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Pepperoni
                  </dt>
                  <dd tw="order-1 text-5xl font-extrabold text-indigo-600">
                    100%
                  </dd>
                </div>
                <div tw="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt tw="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Delivery
                  </dt>
                  <dd tw="order-1 text-5xl font-extrabold text-indigo-600">
                    24/7
                  </dd>
                </div>
                <div tw="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt tw="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Calories
                  </dt>
                  <dd tw="order-1 text-5xl font-extrabold text-indigo-600">
                    100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumberFacts
