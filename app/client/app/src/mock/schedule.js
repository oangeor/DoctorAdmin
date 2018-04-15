const generateEvents = () => {
  let eventItems = [];
  for (let i = 0; i < 9; i++) {
    let eventItem;
    const hour = 9 + i + ":00";
    eventItem = {
      hour: hour
    }
    eventItem.events = []
    if (Math.random() < 0.33) {
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.33) {
          eventItem.events.push(
            {
              customer: {
                id: 1,
                name: '王大拿'
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
    console.log('Be mocked')
    return generateEvents()
  }
}
