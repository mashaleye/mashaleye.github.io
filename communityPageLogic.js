// Sample events data
const events = [
    { title: "Beach Cleanup", location: "City A", type: "Cleanup" },
    { title: "Community Garden", location: "City B", type: "Planting" },
    { title: "Tech Workshop", location: "City C", type: "Workshop" },
    { title: "Tree Planting", location: "City A", type: "Planting" },
    { title: "Coding Bootcamp", location: "City B", type: "Workshop" },
    { title: "Park Cleanup", location: "City C", type: "Cleanup" },
    { title: "Sustainability Fair", location: "City A", type: "Workshop" },
    { title: "Habitat Build", location: "City B", type: "Cleanup" },
    { title: "Recycling Drive", location: "City C", type: "Cleanup" },
    { title: "Food Distribution", location: "City A", type: "Workshop" },
    { title: "Waterway Cleanup", location: "City B", type: "Cleanup" },
    { title: "Green Energy Talk", location: "City C", type: "Workshop" },
    { title: "Flower Planting", location: "City A", type: "Planting" },
    { title: "Tech Aid Day", location: "City B", type: "Workshop" },
    { title: "Trash Walk", location: "City C", type: "Cleanup" },
  ];
  
  // DOM elements
  const eventsGrid = document.getElementById("events-grid");
  const locationFilter = document.getElementById("location-filter");
  const typeFilter = document.getElementById("type-filter");
  
  // Function to render events
  function renderEvents(filteredEvents) {
    eventsGrid.innerHTML = ""; // Clear existing events
  
    filteredEvents.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
      eventCard.innerHTML = `
        <h3>${event.title}</h3>
        <p class="location">Location: ${event.location}</p>
        <p class="type">Type: ${event.type}</p>
      `;
      eventsGrid.appendChild(eventCard);
    });
  }
  
  // Function to filter events
  function filterEvents() {
    const location = locationFilter.value;
    const type = typeFilter.value;
  
    const filteredEvents = events.filter((event) => {
      return (
        (location === "" || event.location === location) &&
        (type === "" || event.type === type)
      );
    });
  
    renderEvents(filteredEvents);
  }
  
  // Event listeners for filters
  locationFilter.addEventListener("change", filterEvents);
  typeFilter.addEventListener("change", filterEvents);
  
  // Initial render
  renderEvents(events);
  