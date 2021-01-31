# LearnApIs.ContentGroupAssignmentsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet**](ContentGroupAssignmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups | Get Content Groups
[**learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete**](ContentGroupAssignmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId} | Delete Content Group
[**learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet**](ContentGroupAssignmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId} | Get Content Group
[**learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut**](ContentGroupAssignmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut) | **PUT** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId} | Create Content Group

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet**
> InlineResponse2007 learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet(courseId, contentId, opts)

Get Content Groups

Returns a list of content group associations for the specified content.  Callers not enrolled in the course must have at least one of the following entitlements:  - course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.  **Since**: 3100.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentGroupAssignmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGet(courseId, contentId, opts, (error, data, response) => {
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
 **contentId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete**
> learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete(courseId, contentId, groupId, opts)

Delete Content Group

Deletes a content group association.  Required entitlements:  - course.content.DELETE  If the content is going to be accessed in Ultra, and the group being removed is part of a group set, then the caller should ensure that all groups within that set are removed from the content.  **Since**: 3100.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentGroupAssignmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | 
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdDelete(courseId, contentId, groupId, opts, (error, data, response) => {
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
 **contentId** | **String**|  | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet**
> ContentGroup learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet(courseId, contentId, groupId, opts)

Get Content Group

Returns a content group association for the specified content and group.  Callers not enrolled in the course must have at least one of the following entitlements:  - course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.  **Since**: 3100.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentGroupAssignmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | 
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdGet(courseId, contentId, groupId, opts, (error, data, response) => {
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
 **contentId** | **String**|  | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**ContentGroup**](ContentGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut**
> ContentGroup learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut(bodycourseIdcontentIdgroupId, opts)

Create Content Group

Creates a content group association.  Callers not enrolled in the course must have at least one of the following entitlements:  - course.content.MODIFY  If the content is going to be accessed in Ultra, the following rules should be followed by the caller:  - If the group is part of a set, all groups with the set should be associated with the content. - The content should be associated exclusively to individual groups or groups within a set, but not both.  **Since**: 3100.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentGroupAssignmentsApi();
let body = new LearnApIs.Body13(); // Body13 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | 
let groupId = "groupId_example"; // String | The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdGroupsGroupIdPut(bodycourseIdcontentIdgroupId, opts, (error, data, response) => {
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
 **body** | [**Body13**](Body13.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **contentId** | **String**|  | 
 **groupId** | **String**| The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**ContentGroup**](ContentGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

