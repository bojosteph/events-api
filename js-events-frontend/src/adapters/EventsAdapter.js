class EventsAdapter {
  constructor() {
    this.baseUrl = 
      'http://localhost:3000/api/v1/events'
  }

  getEvents() {
    return fetch(this.baseUrl).then(res => res.json())
  }
  createEvent(name, location, description, start_date, end_date) {
    
    const event = {
      name: name,
      location: location, 
      description: description,
      start_date: start_date,
      end_date: end_date
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({event}),
    }).then(res => res.json())
  }
  
  updateEvent(name, location, description, start_date, end_date, id) {
    const event = {
      name: name,
      location: location,
      description: description,
      start_date: start_date,
      end_date: end_date
    }
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({event}),
    }).then(res => res.json())
  }
}