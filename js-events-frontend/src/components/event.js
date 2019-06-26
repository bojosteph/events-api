class Event {
  constructor(eventJSON) {
    this.id = eventJSON.id
    this.name = eventJSON.name
    this.location = eventJSON.location
    this.description = eventJSON.description
    this.start_date = eventJSON.start_date
    this.end_date = eventJSON.end_date
    
  }

  renderLi() {
    return ` <div class="card-action" data-id=${this.id}>
                <li class="event-collection">
                  <li id="event-name>-${this.id}">${this.name}</li>
                  <li id="event-location">${this.location}</li>
                  <li id="event-description">${this.description}</li>
                  <li id="event-start-date">${this.start_date}</li>
                  <li id="event-end-date">${this.end_date}</li> <br>
                 <button id="edit-button" type="button"class="btn btn-dark">Edit</button>
                </li>
                  
             </div>  ` 
  }
}