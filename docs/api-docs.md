# Common DB API

This API serves as a central interface for accessing our organization's database. It provides endpoints for managing users, area offices, feeders, and bill deliveries.

## API Status Check

```
GET /api/
```

**Response:**

```json
{
  "status": "success",
  "message": "CommonDB API is running",
  "version": "1.0.0",
  "timestamp": "2025-04-30 12:34:56"
}
```

## Authentication

The API uses API key authentication for access.

### Login

```
POST /api/login
```

**Request Body:**

```json
{
  "login": "yourUsername",
  "password": "yourPassword"
}
```

The `login` field can be either a username or an email address.

**Response:**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "yourUsername",
    "fullname": "Your Full Name",
    "role": "admin",
    "jobtitle": "Engineer",
    "email": "your@email.com",
    "phonenumber": "1234567890",
    "payroll_id": "EMP123",
    "area_office_id": 1,
    "area_office_name": "Central Office",
    "department": "IT",
    "feeder_id": 1,
    "feeder_name": "Main Feeder"
  }
}
```

### Logout

```
POST /api/logout
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Response:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Users

### Get All Users

```
GET /api/users
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `role` - Filter users by role
- `area_office` - Filter users by area office ID
- `feeder` - Filter users by feeder ID

### Get Single User

```
GET /api/users/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

### Create User

```
POST /api/users
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "UserName": "newuser",
  "Password": "password123",
  "FullName": "New User",
  "Role": "user",
  "PhoneNumber": "1234567890",
  "AreaOffice": 1,
  "dept": "IT",
  "jobtitle": "Developer",
  "feederid": 1,
  "payroll_id": "123456",
  "email": "newuser@example.com"
}
```

### Update User

```
PUT /api/users/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body (fields to be updated):**

```json
{
  "FullName": "Updated Name",
  "Role": "admin"
}
```

### Delete User

```
DELETE /api/users/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

## Area Offices

### Get All Area Offices

```
GET /api/area-offices
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `region_id` - Filter area offices by region ID

### Get Single Area Office

```
GET /api/area-offices/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

### Get Area Office Feeders

```
GET /api/area-offices/{id}/feeders
```

**Headers:**
```
Authorization: Bearer your-api-token
```

### Create Area Office

```
POST /api/area-offices
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "area_office": "New Area Office",
  "region_id": 1
}
```

### Update Area Office

```
PUT /api/area-offices/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "area_office": "Updated Area Office"
}
```

### Delete Area Office

```
DELETE /api/area-offices/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

## Feeders

### Get All Feeders

```
GET /api/feeders
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `aoid` - Filter feeders by area office ID

### Get Single Feeder

```
GET /api/feeders/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

### Get Feeder Users

```
GET /api/feeders/{id}/users
```

**Headers:**
```
Authorization: Bearer your-api-token
```

### Create Feeder

```
POST /api/feeders
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "aoid": 1,
  "feeder_name": "New Feeder"
}
```

### Update Feeder

```
PUT /api/feeders/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "feeder_name": "Updated Feeder Name"
}
```

### Delete Feeder

```
DELETE /api/feeders/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

## Bill Deliveries

### Get All Bill Deliveries

```
GET /api/bill-deliveries
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `status` - Filter by delivery status (e.g., delivered, failed, pending)
- `start_date` - Filter by delivery date range start (YYYY-MM-DD)
- `end_date` - Filter by delivery date range end (YYYY-MM-DD)
- `user_id` - Filter by user who posted the delivery

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "AccountNumber": "0100010001",
      "recipient": "John Doe",
      "phone": "+2349012345678",
      "name": "Residential Customer",
      "latitude": 9.0765,
      "longitude": 7.3986,
      "status": "delivered",
      "reason": null,
      "postedby": 5,
      "comments": "Customer was at home",
      "email": "john.doe@example.com",
      "trans_date": "2025-05-01T10:24:18.000000Z",
      "posted_by_name": "Jane Smith"
    },
    {
      "id": 2,
      "AccountNumber": "0100010002",
      "recipient": "Jane Smith",
      "phone": "+2349087654321",
      "name": "Commercial Customer",
      "latitude": 9.0755,
      "longitude": 7.3996,
      "status": "failed",
      "reason": "Address not found",
      "postedby": 8,
      "comments": "Need to verify address",
      "email": "jane.smith@example.com",
      "trans_date": "2025-05-01T11:35:42.000000Z",
      "posted_by_name": "John Doe"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 5,
    "path": "https://api.example.com/api/bill-deliveries",
    "per_page": 15,
    "to": 15,
    "total": 75
  }
}
```

### Get Single Bill Delivery

```
GET /api/bill-deliveries/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "AccountNumber": "0100010001",
    "recipient": "John Doe",
    "phone": "+2349012345678",
    "name": "Residential Customer",
    "latitude": 9.0765,
    "longitude": 7.3986,
    "status": "delivered",
    "reason": null,
    "postedby": 5,
    "comments": "Customer was at home",
    "email": "john.doe@example.com",
    "trans_date": "2025-05-01T10:24:18.000000Z",
    "posted_by_name": "Jane Smith"
  }
}
```

### Create Bill Delivery

```
POST /api/bill-deliveries
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "AccountNumber": "0100010003",
  "recipient": "Robert Johnson",
  "phone": "+2349023456789",
  "name": "Business Customer",
  "latitude": 9.0822,
  "longitude": 7.4915,
  "status": "delivered",
  "reason": null,
  "comments": "Left with security",
  "email": "robert.johnson@example.com"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Bill delivery record created successfully",
  "data": {
    "id": 3,
    "AccountNumber": "0100010003",
    "recipient": "Robert Johnson",
    "phone": "+2349023456789",
    "name": "Business Customer",
    "latitude": 9.0822,
    "longitude": 7.4915,
    "status": "delivered",
    "reason": null,
    "postedby": 5,
    "comments": "Left with security",
    "email": "robert.johnson@example.com",
    "trans_date": "2025-05-02T09:15:27.000000Z",
    "posted_by_name": "Jane Smith"
  }
}
```

### Update Bill Delivery

```
PUT /api/bill-deliveries/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Request Body:**

```json
{
  "status": "failed",
  "reason": "Customer refused delivery",
  "comments": "Customer disputed bill amount"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Bill delivery record updated successfully",
  "data": {
    "id": 1,
    "AccountNumber": "0100010001",
    "recipient": "John Doe",
    "phone": "+2349012345678",
    "name": "Residential Customer",
    "latitude": 9.0765,
    "longitude": 7.3986,
    "status": "failed",
    "reason": "Customer refused delivery",
    "postedby": 5,
    "comments": "Customer disputed bill amount",
    "email": "john.doe@example.com",
    "trans_date": "2025-05-01T10:24:18.000000Z",
    "posted_by_name": "Jane Smith"
  }
}
```

### Delete Bill Delivery

```
DELETE /api/bill-deliveries/{id}
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Response:**

```json
{
  "success": true,
  "message": "Bill delivery record deleted successfully"
}
```

### Bulk Import Bill Deliveries

```
POST /api/bill-deliveries/bulk-import
```

**Headers:**
```
Authorization: Bearer your-api-token
Content-Type: multipart/form-data
```

**Request Body:**

```
file: [CSV or Excel file with bill delivery records]
```

The CSV or Excel file should contain columns matching the bill delivery fields:
- AccountNumber
- recipient
- phone
- name
- latitude
- longitude
- status
- reason (optional)
- comments (optional)
- email (optional)

**Response:**

```json
{
  "success": true,
  "message": "Successfully imported 150 bill delivery records",
  "errors": [
    {
      "row": 5,
      "errors": ["Missing account number"]
    },
    {
      "row": 12,
      "errors": ["Invalid phone number format"]
    }
  ],
  "summary": {
    "total": 152,
    "successful": 150,
    "failed": 2
  }
}
```

### Export Bill Deliveries

```
GET /api/bill-deliveries/export
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `status` - Filter by delivery status
- `start_date` - Filter by delivery date range start (YYYY-MM-DD)
- `end_date` - Filter by delivery date range end (YYYY-MM-DD)
- `user_id` - Filter by user who posted the delivery
- `format` - Export format, either 'csv' or 'xlsx' (default: 'csv')

**Response:**

The response will be a downloadable file in the requested format (CSV or Excel) containing all the bill delivery records matching the filter criteria.

## Bill Delivery Analytics

### Summary Analytics

```
GET /api/bill-delivery-analytics/summary
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `start_date` - Filter by start date (YYYY-MM-DD)
- `end_date` - Filter by end date (YYYY-MM-DD)
- `area_office_id` - Filter by area office ID
- `feeder_id` - Filter by feeder ID

**Response:**

```json
{
  "success": true,
  "data": {
    "total_bills": 13669,
    "delivered": 13659,
    "not_delivered": 10,
    "delivery_rate": "99.93%",
    "non_delivery_reasons": [
      {
        "reason": "Premises locked",
        "count": 10
      }
    ],
    "filters_applied": {
      "area_office_id": null,
      "feeder_id": null,
      "start_date": "2025-04-01",
      "end_date": "2025-05-02"
    }
  }
}
```

### Monthly Analytics

```
GET /api/bill-delivery-analytics/monthly
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `year` - Year to analyze (e.g., 2025)
- `month` - Month to analyze (1-12)
- `area_office_id` - Filter by area office ID
- `feeder_id` - Filter by feeder ID

**Response:**

```json
{
  "success": true,
  "data": {
    "year": 2025,
    "month": 4,
    "month_name": "April",
    "total_bills": 13668,
    "delivered": 13658,
    "not_delivered": 10,
    "pending": 0,
    "delivery_by_week": [
      {
        "week": 1,
        "delivered": 7495,
        "not_delivered": 6,
        "pending": 0
      },
      {
        "week": 2,
        "delivered": 6163,
        "not_delivered": 4,
        "pending": 0
      }
    ],
    "comparison_to_previous_month": {
      "total_change_percentage": 0.5,
      "delivered_change_percentage": 0.7,
      "not_delivered_change_percentage": -15.2,
      "delivery_rate_change": 0.1
    }
  },
  "filters_applied": {
    "year": 2025,
    "month": "4",
    "area_office_id": null,
    "feeder_id": null
  }
}
```

### Daily Analytics

```
GET /api/bill-delivery-analytics/daily
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `date` - Specific date to analyze (YYYY-MM-DD)
- `year` - Year to analyze (defaults to current year if date not provided)
- `month` - Month to analyze (defaults to current month if date not provided)
- `area_office_id` - Filter by area office ID
- `feeder_id` - Filter by feeder ID

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "date": "2025-05-01",
      "day": 1,
      "total": 2,
      "delivered": "2",
      "not_delivered": "0",
      "delivery_rate": "100%"
    },
    {
      "date": "2025-05-05",
      "day": 5,
      "total": 528,
      "delivered": "528",
      "not_delivered": "0",
      "delivery_rate": "100%"
    },
    {
      "date": "2025-05-06",
      "day": 6,
      "total": 950,
      "delivered": "950",
      "not_delivered": "0",
      "delivery_rate": "100%"
    }
  ],
  "filters_applied": {
    "date": null,
    "year": "2025",
    "month": "5",
    "area_office_id": null,
    "feeder_id": null
  }
}
```

### Staff Performance Analytics

```
GET /api/bill-delivery-analytics/staff-performance
```

**Headers:**
```
Authorization: Bearer your-api-token
```

**Query Parameters (optional):**
- `start_date` - Filter by start date (YYYY-MM-DD)
- `end_date` - Filter by end date (YYYY-MM-DD)
- `user_id` - Filter for a specific user
- `area_office_id` - Filter by area office ID
- `feeder_id` - Filter by feeder ID
- `group_by_area_office` - Set to 'true' to group results by area office
- `limit` - Maximum number of staff to display in top/bottom lists (default: 10)

**Response:**

```json
{
  "success": true,
  "data": {
    "period": "May 1, 2025 - May 7, 2025",
    "overall_stats": {
      "total_staff": 15,
      "total_bills_assigned": 13669,
      "average_bills_per_staff": 911.3
    },
    "top_performers": [
      {
        "staff_id": 5,
        "staff_name": "Jane Smith",
        "area_office_id": 16,
        "area_office_name": "Central Office",
        "feeder_id": 127,
        "feeder_name": "Main Feeder",
        "total_bills": 1625,
        "delivered": 1623,
        "not_delivered": 2,
        "delivery_rate": 99.88,
        "delivery_rate_formatted": "99.88%",
        "average_time_per_delivery": "12 minutes"
      },
      {
        "staff_id": 8,
        "staff_name": "John Doe",
        "area_office_id": 16,
        "area_office_name": "Central Office",
        "feeder_id": 128,
        "feeder_name": "East Feeder",
        "total_bills": 1541,
        "delivered": 1534,
        "not_delivered": 7,
        "delivery_rate": 99.55,
        "delivery_rate_formatted": "99.55%",
        "average_time_per_delivery": "13 minutes"
      }
    ],
    "staff_requiring_attention": [
      {
        "staff_id": 3,
        "staff_name": "Michael Williams",
        "area_office_id": 17,
        "area_office_name": "North District",
        "feeder_id": 135,
        "feeder_name": "North Feeder",
        "total_bills": 845,
        "delivered": 815,
        "not_delivered": 30,
        "delivery_rate": 96.45,
        "delivery_rate_formatted": "96.45%",
        "average_time_per_delivery": "15 minutes"
      }
    ]
  },
  "filters_applied": {
    "start_date": "2025-05-01",
    "end_date": "2025-05-07",
    "user_id": null,
    "area_office_id": null,
    "feeder_id": null,
    "group_by_area_office": false,
    "limit": 10
  }
}
```

**Response with Group By Area Office:**

When `group_by_area_office=true` is used, the response includes an additional section that shows performance grouped by area office:

```json
{
  "success": true,
  "data": {
    "period": "May 1, 2025 - May 7, 2025",
    "overall_stats": {
      "total_staff": 15,
      "total_bills_assigned": 13669,
      "average_bills_per_staff": 911.3
    },
    "top_performers": [
      // ...same as before...
    ],
    "staff_requiring_attention": [
      // ...same as before...
    ],
    "area_office_performance": [
      {
        "area_office_id": 16,
        "area_office_name": "Central Office",
        "stats": {
          "total_staff": 6,
          "total_bills": 8523,
          "delivered_bills": 8512,
          "not_delivered_bills": 11,
          "delivery_rate": "99.87%"
        },
        "top_performers": [
          {
            "staff_id": 5,
            "staff_name": "Jane Smith",
            "area_office_id": 16,
            "area_office_name": "Central Office",
            "feeder_id": 127,
            "feeder_name": "Main Feeder",
            "total_bills": 1625,
            "delivered": 1623,
            "not_delivered": 2,
            "delivery_rate": 99.88,
            "delivery_rate_formatted": "99.88%",
            "average_time_per_delivery": "12 minutes"
          }
        ]
      },
      {
        "area_office_id": 17,
        "area_office_name": "North District",
        "stats": {
          "total_staff": 4,
          "total_bills": 3125,
          "delivered_bills": 3101,
          "not_delivered_bills": 24,
          "delivery_rate": "99.23%"
        },
        "top_performers": [
          // ...best performers in North District...
        ]
      }
    ]
  },
  "filters_applied": {
    "start_date": "2025-05-01",
    "end_date": "2025-05-07",
    "user_id": null,
    "area_office_id": null,
    "feeder_id": null,
    "group_by_area_office": true,
    "limit": 10
  }
}
```
