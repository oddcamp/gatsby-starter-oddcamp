import React from "react"

import Meta from "../components/meta"

const NotFoundPage = () => (
  <React.Fragment>
    <Meta title="Page not found" />

    <div className="styled">
      <h1>Not found</h1>

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </React.Fragment>
)

export default NotFoundPage
