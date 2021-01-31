# LearnApIs.DeprecatedCourseGroupsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGroupsGet**](DeprecatedCourseGroupsApi.md#learnApiPublicV1CoursesCourseIdGroupsGet) | **GET** /learn/api/public/v1/courses/{courseId}/groups | Get Groups
[**learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete**](DeprecatedCourseGroupsApi.md#learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/groups/{groupId} | Delete Group
[**learnApiPublicV1CoursesCourseIdGroupsGroupIdGet**](DeprecatedCourseGroupsApi.md#learnApiPublicV1CoursesCourseIdGroupsGroupIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/groups/{groupId} | Get Group
[**learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch**](DeprecatedCourseGroupsApi.md#learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/groups/{groupId} | Update Group
[**learnApiPublicV1CoursesCourseIdGroupsPost**](DeprecatedCourseGroupsApi.md#learnApiPublicV1CoursesCourseIdGroupsPost) | **POST** /learn/api/public/v1/courses/{courseId}/groups | Create Group

<a name="learnApiPublicV1CoursesCourseIdGroupsGet"></a>
# **learnApiPublicV1CoursesCourseIdGroupsGet**
> InlineResponse20049 learnApiPublicV1CoursesCourseIdGroupsGet(courseId, opts)

Get Groups

Callers with the following entitlement can view all groups in the course:  - course.groups.VIEW Callers enrolled in course can view all groups they&#x27;re enrolled in, and all self-enrollment groups  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:  - name - externalId  **Since**: 3100.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGroupsGet(courseId, opts, (error, data, response) => {
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
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc)\&quot; Supported fields are:  - name - externalId  **Since**: 3100.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20049**](InlineResponse20049.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete**
> learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete(courseId, groupId)

Delete Group

Deletes a group from the specified course.  Required entitlements:  - course.group.DELETE  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  

apiInstance.learnApiPublicV1CoursesCourseIdGroupsGroupIdDelete(courseId, groupId, (error, data, response) => {
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

<a name="learnApiPublicV1CoursesCourseIdGroupsGroupIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGroupsGroupIdGet**
> Group learnApiPublicV1CoursesCourseIdGroupsGroupIdGet(courseId, groupId, opts)

Get Group

Loads a group in the specified course.  Entitlement and field visibility rules are the same as those when loading the groups collection.  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGroupsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGroupsGroupIdGet(courseId, groupId, opts, (error, data, response) => {
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

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch**
> Group learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch(bodycourseIdgroupId, opts)

Update Group

Updates a group in the specified course.  Minimal entitlements required:  - course.group.MODIFY  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGroupsApi();
let body = new LearnApIs.Body64(); // Body64 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGroupsGroupIdPatch(bodycourseIdgroupId, opts, (error, data, response) => {
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
 **body** | [**Body64**](Body64.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGroupsPost"></a>
# **learnApiPublicV1CoursesCourseIdGroupsPost**
> Group learnApiPublicV1CoursesCourseIdGroupsPost(bodycourseId, opts)

Create Group

Creates a group in the specified course.  Minimal entitlements required:  - course.group.CREATE  **Since**: 3100.5.0  **Deprecated**: since 3800.6.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGroupsApi();
let body = new LearnApIs.Body63(); // Body63 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGroupsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body63**](Body63.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

