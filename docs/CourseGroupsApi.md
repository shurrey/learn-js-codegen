# LearnApIs.CourseGroupsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV2CoursesCourseIdGroupsGet**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsGet) | **GET** /learn/api/public/v2/courses/{courseId}/groups | Get Groups
[**learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete) | **DELETE** /learn/api/public/v2/courses/{courseId}/groups/{groupId} | Delete Group
[**learnApiPublicV2CoursesCourseIdGroupsGroupIdGet**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsGroupIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/groups/{groupId} | Get Group
[**learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId}/groups/{groupId} | Update Group
[**learnApiPublicV2CoursesCourseIdGroupsPost**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsPost) | **POST** /learn/api/public/v2/courses/{courseId}/groups | Create Group
[**learnApiPublicV2CoursesCourseIdGroupsSetsGet**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGet) | **GET** /learn/api/public/v2/courses/{courseId}/groups/sets | Get Group Sets
[**learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete) | **DELETE** /learn/api/public/v2/courses/{courseId}/groups/sets/{groupId} | Delete Group Set
[**learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/groups/sets/{groupId} | Get Group Set
[**learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet) | **GET** /learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups | Get Group Set Children
[**learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost) | **POST** /learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups | Create Group Set Child
[**learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId}/groups/sets/{groupId} | Update Group Set
[**learnApiPublicV2CoursesCourseIdGroupsSetsPost**](CourseGroupsApi.md#learnApiPublicV2CoursesCourseIdGroupsSetsPost) | **POST** /learn/api/public/v2/courses/{courseId}/groups/sets | Create Group Set

<a name="learnApiPublicV2CoursesCourseIdGroupsGet"></a>
# **learnApiPublicV2CoursesCourseIdGroupsGet**
> InlineResponse20023 learnApiPublicV2CoursesCourseIdGroupsGet(courseId, opts)

Get Groups

Returns a list of all top-level groups in the specified course.  Callers with the following entitlement can view all groups in the course:  - course.groups.VIEW Callers enrolled in course can view all groups they&#x27;re enrolled in, and all self-enrollment groups  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:  - name - externalId  **Since**: 3100.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsGet(courseId, opts, (error, data, response) => {
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
 **created** | **Date**| Search for groups with created date relative to this value. &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for groups with modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc)\&quot; Supported fields are:  - name - externalId  **Since**: 3100.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete"></a>
# **learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete**
> learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete(groupId, courseId)

Delete Group

Deletes a groupset from the specified course.  Required entitlements:  - course.group.DELETE  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV2CoursesCourseIdGroupsGroupIdDelete(groupId, courseId, (error, data, response) => {
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
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsGroupIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGroupsGroupIdGet**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsGroupIdGet(courseId, groupId, opts)

Get Group

Loads a group in the specified course.  Callers not enrolled in the course must have the following entitlement:  - course.groups.VIEW  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsGroupIdGet(courseId, groupId, opts, (error, data, response) => {
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
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch(bodycourseIdgroupId, opts)

Update Group

Updates a group in the specified course.  Minimal entitlements required:  - course.group.MODIFY  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let body = new LearnApIs.Body37(); // Body37 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsGroupIdPatch(bodycourseIdgroupId, opts, (error, data, response) => {
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
 **body** | [**Body37**](Body37.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsPost"></a>
# **learnApiPublicV2CoursesCourseIdGroupsPost**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsPost(bodycourseId, opts)

Create Group

Creates a group in the specified course.  Callers must have the following entitlement:  - &#x27;course.groups.CREATE&#x27;  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let body = new LearnApIs.Body33(); // Body33 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body33**](Body33.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGet"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGet**
> InlineResponse20023 learnApiPublicV2CoursesCourseIdGroupsSetsGet(courseId, opts)

Get Group Sets

Returns a list of all groupsets  Callers not enrolled in the course must have the following entitlement:  - course.groups.VIEW - course.groups.admin.VIEW  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:  - name - externalId  **Since**: 3100.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGet(courseId, opts, (error, data, response) => {
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
 **created** | **Date**| Search for groups with created date relative to this value. &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for groups with modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc)\&quot; Supported fields are:  - name - externalId  **Since**: 3100.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete**
> learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete(courseId, groupId)

Delete Group Set

Deletes a groupset from the specified course.  Required entitlements:  - course.group.DELETE  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  

apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdDelete(courseId, groupId, (error, data, response) => {
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
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet(courseId, groupId, opts)

Get Group Set

Loads a groupset in the specified course.  Users calling this end point should meet at least one of these entitlement checks.  - course.groups.VIEW - course.groups.admin.VIEW  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGet(courseId, groupId, opts, (error, data, response) => {
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
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet**
> InlineResponse20023 learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet(groupId, courseId, opts)

Get Group Set Children

Returns a list of all groups within a groupset  Callers not enrolled in the group must have the following entitlement:  - course.groups.VIEW  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.8.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:  - name - externalId  **Since**: 3100.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsGet(groupId, courseId, opts, (error, data, response) => {
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
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **created** | **Date**| Search for groups with created date relative to this value. &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for groups with modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.8.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3800.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc)\&quot; Supported fields are:  - name - externalId  **Since**: 3100.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost(bodygroupIdcourseId, opts)

Create Group Set Child

Creates a group within a groupset.  Callers must have the following entitlement:  - &#x27;course.groups.CREATE&#x27;  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let body = new LearnApIs.Body36(); // Body36 | JSON input object.
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdGroupsPost(bodygroupIdcourseId, opts, (error, data, response) => {
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
 **body** | [**Body36**](Body36.md)| JSON input object. | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch(bodygroupIdcourseId, opts)

Update Group Set

Updates a groupset in the specified course.  Minimal entitlements required:  - course.group.MODIFY  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let body = new LearnApIs.Body35(); // Body35 | JSON input object.
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsGroupIdPatch(bodygroupIdcourseId, opts, (error, data, response) => {
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
 **body** | [**Body35**](Body35.md)| JSON input object. | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGroupsSetsPost"></a>
# **learnApiPublicV2CoursesCourseIdGroupsSetsPost**
> GroupV2 learnApiPublicV2CoursesCourseIdGroupsSetsPost(bodycourseId, opts)

Create Group Set

Creates a groupset in the specified course.  Callers must have the following entitlement:  - &#x27;course.groups.CREATE&#x27;  **Since**: 3800.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGroupsApi();
let body = new LearnApIs.Body34(); // Body34 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGroupsSetsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body34**](Body34.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GroupV2**](GroupV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

