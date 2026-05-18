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
