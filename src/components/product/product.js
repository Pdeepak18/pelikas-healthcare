import React from 'react'
import EnteralFormulations from './EnteralFormulation'
import InhalationalFormulations from './InhalationalFormulations'
import OpthlamicProduct from './OpthlamicProduct'
import TopicFormulation from './TopicFormulation'
import ParenteralFormulations from './ParenteralFormulations'
import Others from './Others'

export default function product() {
  return (
    <div>
      <EnteralFormulations/>
      <InhalationalFormulations />
      <OpthlamicProduct />
      <TopicFormulation />
      <ParenteralFormulations />
      <Others />
    </div>
  )
}

