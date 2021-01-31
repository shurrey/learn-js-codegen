# LearnApIs.CalendarApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CalendarsGet**](CalendarApi.md#learnApiPublicV1CalendarsGet) | **GET** /learn/api/public/v1/calendars | Get Calendars
[**learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete**](CalendarApi.md#learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete) | **DELETE** /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId} | Delete Calendar Item
[**learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet**](CalendarApi.md#learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet) | **GET** /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId} | Get Calendar Item
[**learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch**](CalendarApi.md#learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch) | **PATCH** /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId} | Update Calendar Item
[**learnApiPublicV1CalendarsItemsGet**](CalendarApi.md#learnApiPublicV1CalendarsItemsGet) | **GET** /learn/api/public/v1/calendars/items | Get Calendar Items
[**learnApiPublicV1CalendarsItemsPost**](CalendarApi.md#learnApiPublicV1CalendarsItemsPost) | **POST** /learn/api/public/v1/calendars/items | Create Calendar Item

<a name="learnApiPublicV1CalendarsGet"></a>
# **learnApiPublicV1CalendarsGet**
> InlineResponse2003 learnApiPublicV1CalendarsGet(opts)

Get Calendars

Get the list of calendars. This endpoint will return all calendars viewable by the user. All users can request a list of calendars viewable to them.  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CalendarsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete"></a>
# **learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete**
> learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete(calendarItemType, calendarItemId, opts)

Delete Calendar Item

  Delete a calendar item or series. &lt;/p&gt; The following must be true in order to delete a calendar item:  - Institution -  - The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement  - Personal -  - Any user may delete their own calendar items  - Course -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement - The course calendar must be enabled for the specified course  - GradebookColumn -  - GradebookColumns must be deleted using the Gradebook API endpoint: &lt;code&gt;DELETE /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;  - OfficeHours -  - The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement - The user must own the calendarItem - The calendar must be enabled if the calendarItem is associated with a course calendar.  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let calendarItemType = "calendarItemType_example"; // String | 
let calendarItemId = "calendarItemId_example"; // String | 
let opts = { 
  'deleteSeries': true // Boolean | delete the series calendar items or just one calendar item. true - delete the        series, false - delete one calendar item. Defaults to false.
};
apiInstance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdDelete(calendarItemType, calendarItemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarItemType** | **String**|  | 
 **calendarItemId** | **String**|  | 
 **deleteSeries** | **Boolean**| delete the series calendar items or just one calendar item. true - delete the        series, false - delete one calendar item. Defaults to false. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet"></a>
# **learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet**
> CalendarItem learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet(calendarItemType, calendarItemId)

Get Calendar Item

  Get a course calendar item. &lt;/p&gt;  CalendarItems of type &lt;code&gt;GradebookColumn&lt;/code&gt; are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. &lt;/p&gt;  The CalendarItem &lt;code&gt;id&lt;/code&gt; can be used as the &lt;code&gt;columnId&lt;/code&gt; on the Gradebook Column endpoints found here: &lt;code&gt;/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;. &lt;/p&gt; The following must be true in order to view the following calendar items types:  - Institution -  - All users can view Institution calendar items  - Personal -  - Any user may view their own calendar items, but not other user&#x27;s calendar items  - Course -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.VIEW&#x27; entitlement - The course calendar must be enabled for the course the calendar item is associated with  - GradebookColumn -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.VIEW&#x27; entitlement - The course calendar must be enabled for the course the GradebookColumn is associated with  - OfficeHours -  - If the OfficeHours are created for a course calendar (calendarId &#x3D; a course id) the user must be enrolled in the course - If the OfficeHours are created for a all courses (calendarId &#x3D; PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in - In either case above the course calendar must be enabled  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let calendarItemType = "calendarItemType_example"; // String | 
let calendarItemId = "calendarItemId_example"; // String | 

apiInstance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdGet(calendarItemType, calendarItemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarItemType** | **String**|  | 
 **calendarItemId** | **String**|  | 

### Return type

[**CalendarItem**](CalendarItem.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch"></a>
# **learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch**
> CalendarItem learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch(bodycalendarItemTypecalendarItemId, opts)

Update Calendar Item

  Update a calendar item or series. &lt;/p&gt;  When updating the series the existing CalendarItems will be removed and a new set of CalendarItems will be created. This is the same behavior as experienced via the UI. &lt;/p&gt; The following must be true in order to update a calendar item:  - Institution -  - The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement  - Personal -  - Any user may update their own calendar items  - Course -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement - The course calendar must be enabled for the specified course  - GradebookColumn -  - GradebookColumns must be updated using the Gradebook API endpoint: &lt;code&gt;PATCH /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;  - OfficeHours -  - The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement - If calendarId &#x3D; a course id the user must be enrolled in the course and the calendar must be enabled  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let body = new LearnApIs.Body8(); // Body8 | 
let calendarItemType = "calendarItemType_example"; // String | 
let calendarItemId = "calendarItemId_example"; // String | 
let opts = { 
  'updateSeries': true // Boolean | update the series calendar items or just one calendar item. true - update the        entire series, false - update a single calendar item. Defaults to false. When updating an entire series the full recurrence        object must be populated just as if creating a new calendar series. If updating a single calendar entry the recurrence        must not be specified.
};
apiInstance.learnApiPublicV1CalendarsItemsCalendarItemTypeCalendarItemIdPatch(bodycalendarItemTypecalendarItemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body8**](Body8.md)|  | 
 **calendarItemType** | **String**|  | 
 **calendarItemId** | **String**|  | 
 **updateSeries** | **Boolean**| update the series calendar items or just one calendar item. true - update the        entire series, false - update a single calendar item. Defaults to false. When updating an entire series the full recurrence        object must be populated just as if creating a new calendar series. If updating a single calendar entry the recurrence        must not be specified. | [optional] 

### Return type

[**CalendarItem**](CalendarItem.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CalendarsItemsGet"></a>
# **learnApiPublicV1CalendarsItemsGet**
> InlineResponse2004 learnApiPublicV1CalendarsItemsGet(opts)

Get Calendar Items

Get the list of calendar items. This endpoint will return all types of CalendarItems viewable by the user unless a specific &lt;code&gt;type&lt;/code&gt; is specified as a query parameter.  If &lt;code&gt;since&lt;/code&gt; and &lt;code&gt;since&lt;/code&gt; are not provided this endpoint will default to the upcoming two week timeframe from now. &lt;/p&gt;  If only &lt;code&gt;since&lt;/code&gt; is provided this endpoint will default the &lt;code&gt;until&lt;/code&gt; parameter two weeks after &lt;code&gt;since&lt;/code&gt;. &lt;/p&gt;  If only &lt;code&gt;until&lt;/code&gt; is provided this endpoint will default the &lt;code&gt;since&lt;/code&gt; parameter two prior to &lt;code&gt;until&lt;/code&gt;. &lt;/p&gt;  Maximum timespan between &lt;code&gt;since&lt;/code&gt; and &lt;code&gt;until&lt;/code&gt; is 16 weeks. &lt;/p&gt;  CalendarItems of type &lt;code&gt;GradebookColumn&lt;/code&gt; are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. &lt;/p&gt;  The CalendarItem &lt;code&gt;id&lt;/code&gt; can be used as the &lt;code&gt;columnId&lt;/code&gt; on the Gradebook Column endpoints found here: &lt;code&gt;/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;. &lt;/p&gt; Example requests:  - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z // all calendar items for a given timeframe&lt;/code&gt; - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1 // all calendar items for a given course (including Course, OfficeHours, GradebookColumn types)&lt;/code&gt; - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1&amp;type&#x3D;GradebookColumn // all GradebookColumn items for a course&lt;/code&gt; - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1&amp;type&#x3D;OfficeHours // all OfficeHours for a course&lt;/code&gt; - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;type&#x3D;GradebookColumn // all gradebook columns due within the given timeframe&lt;/code&gt; - &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;type&#x3D;OfficeHours // all OfficeHours available to current user for a given timeframe&lt;/code&gt; The following must be true in order to view the following calendar item types:  - Institution -  - All users can view Institution calendar items  - Personal -  - Any user may view their own calendar items, but not other user&#x27;s calendar items  - Course -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.VIEW&#x27; entitlement - The course calendar must be enabled for the course the calendar item is associated with  - GradebookColumn -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.VIEW&#x27; entitlement - The course calendar must be enabled for the course the GradebookColumn is associated with  - OfficeHours -  - If the OfficeHours are created for a course calendar (calendarId &#x3D; a course id) the user must be enrolled in the course - If the OfficeHours are created for a all courses (calendarId &#x3D; PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in - In either case above the course calendar must be enabled  &lt;/p&gt;  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let opts = { 
  'courseId': "courseId_example", // String | Specifies only calendar items associated with 'courseId' are to be returned.  **Since**: 3400.9.0
  'type': "type_example", // String | Specifies only calendar items with the given type.  **Since**: 3400.9.0   | Type      | Description  | --------- | --------- | | Course |  | | GradebookColumn | Read only. | | Institution |  | | OfficeHours |  | | Personal |  | 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Specifies only calendar items after the 'since' date (inclusive) are to be returned. Maximum of 16 weeks after the 'since' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]  **Since**: 3400.9.0
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Specifies only calendar items before the 'until' date (inclusive) are to be returned. Maximum of 16 weeks prior to the 'until' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]  **Since**: 3400.9.0
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:  - id - calendarId - title - start - end - modified  **Since**: 3400.9.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CalendarsItemsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| Specifies only calendar items associated with &#x27;courseId&#x27; are to be returned.  **Since**: 3400.9.0 | [optional] 
 **type** | **String**| Specifies only calendar items with the given type.  **Since**: 3400.9.0   | Type      | Description  | --------- | --------- | | Course |  | | GradebookColumn | Read only. | | Institution |  | | OfficeHours |  | | Personal |  |  | [optional] 
 **since** | **Date**| Specifies only calendar items after the &#x27;since&#x27; date (inclusive) are to be returned. Maximum of 16 weeks after the &#x27;since&#x27; date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]  **Since**: 3400.9.0 | [optional] 
 **until** | **Date**| Specifies only calendar items before the &#x27;until&#x27; date (inclusive) are to be returned. Maximum of 16 weeks prior to the &#x27;until&#x27; date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]  **Since**: 3400.9.0 | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;title(desc),start\&quot; Supported fields are:  - id - calendarId - title - start - end - modified  **Since**: 3400.9.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CalendarsItemsPost"></a>
# **learnApiPublicV1CalendarsItemsPost**
> CalendarItem learnApiPublicV1CalendarsItemsPost(body, opts)

Create Calendar Item

  Create a calendar item. Calendar items may be single or recurring. &lt;/p&gt;  CalendarItems of type &lt;code&gt;OfficeHours&lt;/code&gt; will be assigned to the current user. &lt;/p&gt; The following must be true in order to create a calendar item:  - Institution -  - The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement  - Personal -  - Any user may create their own calendar items  - Course -  - The user must be enrolled in the course - The user must have the &#x27;course.calendar-entry.CREATE&#x27; entitlement - The specified courseId must not be for an organization - The course calendar must be enabled for the specified course  - GradebookColumn -  - GradebookColumns must be created using the Gradebook API endpoint: &lt;code&gt;POST /learn/api/public/v2/courses/{courseId}/gradebook/columns&lt;/code&gt;  - OfficeHours -  - The user must have the &#x27;course.calendar-entry.CREATE&#x27; entitlement - If calendarId &#x3D; a course id the user must be enrolled in the course and the calendar must be enabled - Note: To create for all enrolled courses calendarId must be set to PERSONAL  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CalendarApi();
let body = new LearnApIs.Body7(); // Body7 | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CalendarsItemsPost(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body7**](Body7.md)|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CalendarItem**](CalendarItem.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

