# LearnApIs.CourseAnnouncementsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete**](CourseAnnouncementsApi.md#learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/announcements/{announcementId} | Delete Announcement
[**learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet**](CourseAnnouncementsApi.md#learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/announcements/{announcementId} | Get Announcement
[**learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch**](CourseAnnouncementsApi.md#learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/announcements/{announcementId} | Update Announcement
[**learnApiPublicV1CoursesCourseIdAnnouncementsGet**](CourseAnnouncementsApi.md#learnApiPublicV1CoursesCourseIdAnnouncementsGet) | **GET** /learn/api/public/v1/courses/{courseId}/announcements | Get Announcements
[**learnApiPublicV1CoursesCourseIdAnnouncementsPost**](CourseAnnouncementsApi.md#learnApiPublicV1CoursesCourseIdAnnouncementsPost) | **POST** /learn/api/public/v1/courses/{courseId}/announcements | Create Announcement

<a name="learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete**
> learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete(announcementId, courseId, opts)

Delete Announcement

Delete a Course Announcement. Users with the &#x27;course.announcements.DELETE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can delete Course Announcements.  **Since**: 3500.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAnnouncementsApi();
let announcementId = "announcementId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdDelete(announcementId, courseId, opts, (error, data, response) => {
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
 **announcementId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet"></a>
# **learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet**
> CourseAnnouncement learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet(announcementId, courseId, opts)

Get Announcement

Get a Course Announcement. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.  **Since**: 3500.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAnnouncementsApi();
let announcementId = "announcementId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdGet(announcementId, courseId, opts, (error, data, response) => {
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
 **announcementId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseAnnouncement**](CourseAnnouncement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch**
> CourseAnnouncement learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch(bodyannouncementIdcourseId, opts)

Update Announcement

Update a Course Announcement. Users with the &#x27;course.announcements.MODIFY&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can update Course Announcements.  **Since**: 3500.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAnnouncementsApi();
let body = new LearnApIs.Body16(); // Body16 | 
let announcementId = "announcementId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAnnouncementsAnnouncementIdPatch(bodyannouncementIdcourseId, opts, (error, data, response) => {
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
 **body** | [**Body16**](Body16.md)|  | 
 **announcementId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseAnnouncement**](CourseAnnouncement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAnnouncementsGet"></a>
# **learnApiPublicV1CoursesCourseIdAnnouncementsGet**
> InlineResponse2009 learnApiPublicV1CoursesCourseIdAnnouncementsGet(courseId, opts)

Get Announcements

Return a list of Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.  **Since**: 3500.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAnnouncementsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3500.3.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified. 'lessThan' also an accepted value.  **Since**: 3500.3.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for announcements with a modified date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3500.3.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan' also an accepted value.  **Since**: 3500.3.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'title': "title_example", // String | Search for announcements with a title like the provided value.  **Since**: 3500.3.0
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),created\" Supported fields are:  - title - modified  **Since**: 3500.3.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAnnouncementsGet(courseId, opts, (error, data, response) => {
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
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **created** | **Date**| Search for announcements with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3500.3.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Defaults to greaterOrEqual if not specified. &#x27;lessThan&#x27; also an accepted value.  **Since**: 3500.3.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for announcements with a modified date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3500.3.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter. Defaults to greaterOrEqual if not specified. &#x27;lessThan&#x27; also an accepted value.  **Since**: 3500.3.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **title** | **String**| Search for announcements with a title like the provided value.  **Since**: 3500.3.0 | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;title(desc),created\&quot; Supported fields are:  - title - modified  **Since**: 3500.3.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAnnouncementsPost"></a>
# **learnApiPublicV1CoursesCourseIdAnnouncementsPost**
> CourseAnnouncement learnApiPublicV1CoursesCourseIdAnnouncementsPost(bodycourseId, opts)

Create Announcement

Create a Course Announcement. Users with the &#x27;course.announcements.CREATE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can create Course Announcements.  **Since**: 3500.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAnnouncementsApi();
let body = new LearnApIs.Body15(); // Body15 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAnnouncementsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body15**](Body15.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseAnnouncement**](CourseAnnouncement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

