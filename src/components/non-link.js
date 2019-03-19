import React from "react"
import { Link } from "@reach/router"

function normalizePath(path) {
  return path.replace(/\/+/g, `/`)
}

export function withPrefix(path) {
  return normalizePath(`${__PATH_PREFIX__}/${path}`)
}

const navigate = (to, options) => {
  window.___navigate(withPrefix(to), options)
}

const replace = to => {
  window.___replace(withPrefix(to))
}

export function NonLink(props) {
  const { to, state = {}, ...rest } = props
  const prefixedTo = withPrefix(to)
  return (<Link
          to={prefixedTo}
          onClick={e => {
            if (
              e.button === 0 && // ignore right clicks
                !props.target && // let browser handle "target=_blank"
                !e.defaultPrevented && // onClick prevented default
                !e.metaKey && // ignore clicks with modifier keys...
                !e.altKey &&
                !e.ctrlKey &&
                !e.shiftKey
            ) {
              e.preventDefault()

              // Make sure the necessary scripts and data are
              // loaded before continuing.
              navigate(to, { state, replace })
            }
          }}
          {...rest}
          />)
}
