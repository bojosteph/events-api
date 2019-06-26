class Events {
  constructor() {
    this.events = []
    this.adapter = new EventsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadEvents()

  }

  initBindingsAndEventListeners() {
    this.linewName = document.getElementById(`event-name`)
    this.liEventContainer = document.getElementById(`li-event-${this.id}`)
    this.eventsContainer = document.getElementById('events-container')
    this.newEventName = document.getElementById('new-event-name')
    this.newEventLocation = document.getElementById('new-event-location')
    this.newEventDescription = document.getElementById('new-event-description')
    this.newEventStart = document.getElementById('new-event-start')
    this.newEventEnd = document.getElementById('new-event-end')
    this.eventForm = document.getElementById('new-event-form')
    this.eventForm.addEventListener('submit', this.createEvent.bind(this))
    this.eventsContainer.addEventListener('dblclick', this.handleEventClick.bind(this))
    this.eventsContainer.addEventListener('click', this.updateNote.bind(this))
  }

  createEvent(e) {
    e.preventDefault()
  
     const name = this.newEventName.value;
     const location = this.newEventLocation.value;
     const description = this.newEventDescription.value;
     const start_date = this.newEventStart.value;
     const end_date = this.newEventEnd.value;
    

    this.adapter.createEvent(name, location, description, start_date, end_date).then(event => {
      this.events.push(new Event(event))
      this.render()
     })
    }

    handleEventClick(e) {
      this.toggleEvent(e)
    }

    toggleEvent(e) {
      let editEvent = this.liEventContainer
      editEvent = e.target
      editEvent.contentEditable = true
      editEvent.focus()
      editEvent.classList.add('editable')
    }

    updateNote(e) {
      e.preventDefault();
      let li = this.liEventContainer
      

      li = e.target
      li.contentEditable = false 
      li.classList.remove('editable')
      // const newName = this.linewName.innerHTML
      // console.log(newName)
      const id = li.dataset.id
      console.log

      this.adapter.updateNote(newName, id)
    }
       
    fetchAndLoadEvents() {
    this.adapter
    .getEvents()
    .then(events => {
      events.forEach(event => this.events.push(new Event(event)))
      console.log(this.events)
    })
    .then(()=> {
      this.render()
    })
  }

  render() {
    this.eventsContainer.innerHTML = this.events.map(event => event.renderLi()).join('')
  }
}