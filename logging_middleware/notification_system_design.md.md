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

# Stage 3

## Query Optimization

The old query is slow because it fetches unnecessary data and does not use proper indexing.

Using SELECT * is not good for performance when table size becomes large.

---

## Optimized Query

SELECT id, message, createdAt
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC
LIMIT 20;

---

## Best Index

(studentID, isRead, createdAt)

This composite index helps improve filtering and sorting speed.

---

## Why Indexing Every Column Is Bad

Too many indexes increase:
1. Storage usage
2. Insert time
3. Update time

So indexing should be done carefully.


# Stage 4

## Database Overload Solutions

When too many students use the system together, database performance can become slow.

To improve performance, the following solutions can be used.

---

## Redis Caching

Frequently accessed notifications can be stored in Redis cache to reduce database load.

---

## Pagination

Instead of loading all notifications together, data can be loaded page by page.

This reduces server load and improves response time.

---

## Lazy Loading

Notifications can load only when required by the user.

---

## Read Replicas

Read queries can be sent to replica databases while write queries go to the primary database.

This improves scalability.

---

## WebSockets

WebSockets help send notifications instantly without repeated API requests.

---

## Tradeoffs

Redis is fast but needs extra memory.

Read replicas improve reading performance but increase infrastructure cost.
