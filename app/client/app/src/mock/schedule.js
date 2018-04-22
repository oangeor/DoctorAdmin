const generateEvents = () => {
  let eventItems = [];
  for (let i = 0; i < 15; i++) {
    let eventItem;
    const hour = 6 + i + ":00";
    eventItem = {
      hour: hour
    }
    eventItem.events = []
    if (Math.random() < 0.33) {
      for (let i = 0; i < 9; i++) {
        if (Math.random() > 0.33) {
          eventItem.events.push(
            {
              customer: {
                id: 1,
                name: '王大拿',
              },
            }
          )
        }
      }
    }
    eventItems.push(eventItem)
  }
  return eventItems
}

// const scheduleEvents = generateEvents()

export default {
  getDateEvents: config => {
    const events = generateEvents()
    console.log('Be mocked')
    console.log(events)
    return events
  }
}
