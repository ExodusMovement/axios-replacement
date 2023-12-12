'use strict'

const { fetch } = require('@exodus/fetch')

const get = async function get(url){
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`request failed with code ${response.status}`)
  }
  const json = await response.json()
  return { data: json }
}

module.exports = { get }
