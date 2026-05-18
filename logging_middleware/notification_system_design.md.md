# Stage 1

## Notification API Design

### GET /notifications

This API is used to fetch notifications for students.

Header:
Authorization token is required.

Example Response:

{
  "success": true,
  "notifications": [
    {
      "id": "1",
      "type": "Placement",
      "message": "TCS placement drive is open",
      "isRead": false
    }
  ]
}

---

### POST /notifications

This API is used to create a new notification.

Example Request:

{
  "type": "Event",
  "message": "Hackathon will start tomorrow"
}

Example Response:

{
  "success": true,
  "message": "Notification added successfully"
}

---

### PATCH /notifications/:id/read

Used to mark notification as read.

---

### DELETE /notifications/:id

Used to delete notification.

---

## Real Time Notification

For real time updates, WebSockets can be used so students receive notifications instantly without refreshing the page.

---

## Authentication

JWT token authentication can be used to secure APIs and allow only authorized users.


# Stage 2

## Database Design

MongoDB can be used because notification data can grow very fast and NoSQL databases handle large scale data well.

### Notifications Collection

{
  "_id": "ObjectId",
  "studentId": "101",
  "type": "Placement",
  "message": "Infosys hiring drive",
  "isRead": false,
  "createdAt": "date"
}

---

## Main Collections

1. users
2. notifications

---

## Indexing

Indexes can be created on:
- studentId
- createdAt
- isRead

This improves search speed.

---

## Possible Problems

1. Large amount of notification data
2. Slow database queries
3. Heavy traffic during placement season

---

## Solutions

1. Pagination
2. Redis caching
3. Database sharding
4. Proper indexing
