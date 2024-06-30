import { Application } from "@hotwired/stimulus";

import search_controller from "./controllers/search_controller";

window.Stimulus = Application.start();
Stimulus.register("search", search_controller);
