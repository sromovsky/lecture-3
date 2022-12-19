# Hotel Guest & Room Database

---
### Intro page
_https://localhost:3000/_

---
### GET
- List of all guests:
_https://localhost:3000/guests_
- Detailed view of each guest
_https://localhost:3000/guests/:id_
- View of all rooms:
_http://localhost:3000/rooms_
- View of only available rooms:
_http://localhost:3000/rooms/available_
---
### PUT - _Editing guests information_
_http://localhost:3000/guests/:id_
- All guest information can be changed
- Moving guests to different rooms also opens up the old room as well as occupies the new one.
---
### POST - _Add new guests into the system_
_https://localhost:3000/_
- Assigning any room to the new guests will also occupy the room.
---

### DELETE - _Remove guests from the system_
_https://localhost:3000/_
- The room which the guest occupied will become available again.
---