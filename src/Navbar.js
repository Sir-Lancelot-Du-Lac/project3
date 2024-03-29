import React from 'react'
import * as Icons from 'react-bootstrap-icons'

export default function Navbar() {
  return (
    <div>
        <div className="navigationMenuBlocks">
            <a className="block" href="https://github.com/Sir-Lancelot-Du-Lac"><Icons.Github/></a>
            <a className="block" href="https://facebook.com"><Icons.Facebook/></a>
        </div>
    </div>
  )
}
