const yourEvents = []; 
const eventCard = document.getElementById('event-card');
const createEventButton = document.getElementById('create-event-button');
const createEventModal = document.getElementById('create-event-modal');
const createEventForm = document.getElementById('create-event-form');
const cancelCreateEvent = document.getElementById('cancel-create-event');
const fileInput = document.getElementById('event-image-input');

const cards = [
    {
      title: 'Animal Shelter Volunteer Day',
      description: 'Spend the day helping at the local animal shelter with feeding and cleaning.',
      date: '2024-10-24',
      time: '12:00 PM',
      attendees: 40,
      organizer: 'Pet Rescue Foundation',
      image: document.getElementById('event-image').src = "animalShelter.png"
    },
    {
      title: 'Community Garden Planting',
      description: 'Join us in planting new vegetables and flowers in the community garden.',
      date: '2024-11-05',
      time: '10:00 AM',
      attendees: 25,
      organizer: 'Green Thumb Society',
      image: document.getElementById('event-image').src = "gardenPlant.png"
    },
    {
      title: 'Local Beach Cleanup',
      description: 'Help keep our beaches clean! Join our monthly beach cleanup event.',
      date: '2024-11-15',
      time: '09:00 AM',
      attendees: 50,
      organizer: 'Ocean Friends',
      image: document.getElementById('event-image').src = "localBeach.png"
    },
    {
        title: 'FIU Cleanup',
        description: 'Help maintain the beauty of the panther territory.',
        date: '2024-05-22',
        time: '7:30 AM',
        attendees: 40,
        organizer: 'Florida International University',
        image: document.getElementById('event-image').src = "fiuCleanup.png"
      },
      {
        title: 'Habitat Build',
        description: 'Take part in the provision of homes in our community',
        date: '2024-03-21',
        time: '8:00 AM',
        attendees: 40,
        organizer: 'Habitat Totality',
        image: document.getElementById('event-image').src = "habitatBuild.png"
      },
      {
        title: 'Tree Planting',
        description: 'Let us stand tall with tree planting',
        date: '2024-02-24',
        time: '8:00 AM',
        attendees: 70,
        organizer: 'Forestation',
        image: document.getElementById('event-image').src = "treePlant.png"
      },
      {
        title: 'Meal Service',
        description: 'Bring satiety through food and smiles',
        date: '2024-02-24',
        time: '3:00 PM',
        attendees: 30,
        organizer: 'SatiAte',
        image: document.getElementById('event-image').src = "mealPrep.png"
      },
      {
        title: 'Code Help',
        description: 'Coding the future into the hands of the youths',
        date: '2024-01-20',
        time: '12:00 PM',
        attendees: 80,
        organizer: 'CodeUp',
        image: document.getElementById('event-image').src = "codeHelp.png"
      },
      {
        title: 'Tech Help',
        description: 'Assist our senior citizens in navigating technology',
        date: '2024-08-25',
        time: '12:00 PM',
        attendees: 15,
        organizer: 'TechAssist',
        image: document.getElementById('event-image').src = "techHelp.png"
      },
      {
        title: 'Food Bank',
        description: 'Distributes food to local food programs and food pantries',
        date: '2024-08-25',
        time: '8:00 AM',
        attendees: 15,
        organizer: 'FoodStore',
        image: document.getElementById('event-image').src = "foodBank.png"
      }
      
  ];
  
  let currentCardIndex = 0;
  
  function updateCard() {
    const card = cards[currentCardIndex];
    document.getElementById('event-title').textContent = card.title;
    document.getElementById('event-description').textContent = card.description;
    document.getElementById('event-date').textContent = card.date;
    document.getElementById('event-time').textContent = card.time;
    document.getElementById('event-attendees').textContent = card.attendees;
    document.getElementById('event-organizer').textContent = card.organizer;
    document.getElementById('event-image').src = card.image;

    eventCard.classList.remove('swipe-left', 'swipe-right');
  }
  
  function swipeLeft() {
    // Remove the current card from the cards array
    cards.splice(currentCardIndex, 1);
  
    // If the cards array is empty, reset the display and exit
    if (cards.length === 0) {
      eventCard.innerHTML = '<p>No more events to display. Refresh the page or click F5</p>';
      return;
    }
  
    // Perform the swipe animation
    eventCard.classList.add('swipe-left');
    setTimeout(() => {
      // Adjust the index to ensure it stays within bounds
      currentCardIndex = currentCardIndex % cards.length;
      updateCard();
    }, 500);
  }
  
  
  function swipeRight() {
    // Add current card to "Your Events" list
    const card = cards[currentCardIndex];
    yourEvents.push(card);
    renderYourEvents();
  
    // Perform the swipe animation
    eventCard.classList.add('swipe-right');
    setTimeout(() => {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      updateCard();
    }, 500);
  }
  
  function renderYourEvents() {
    const yourEventsList = document.getElementById('your-events-list');
    yourEventsList.innerHTML = ''; // Clear existing events
  
    yourEvents.forEach((event) => {
      const eventItem = document.createElement('div');
      eventItem.className = 'user-event-item';
      eventItem.textContent = event.title;
      yourEventsList.appendChild(eventItem);
    });
  }
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      swipeLeft();
    } else if (event.key === 'ArrowRight') {
      swipeRight();
    }
  });
  
  updateCard();

  