import { Application } from "@hotwired/stimulus"

const application = Application.start

import jQuery from "jquery"

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application
window.jQuery = jQuery
window.$ = jQuery
Popper: ['popper.js', 'default']

export { application }
