# LearnApIs.ContentResourcesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdResourcesGet**](ContentResourcesApi.md#learnApiPublicV1CoursesCourseIdResourcesGet) | **GET** /learn/api/public/v1/courses/{courseId}/resources | Get Top Level Course Resources
[**learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet**](ContentResourcesApi.md#learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet) | **GET** /learn/api/public/v1/courses/{courseId}/resources/{resourceId}/children | Get Course Resource Children
[**learnApiPublicV1CoursesCourseIdResourcesResourceIdGet**](ContentResourcesApi.md#learnApiPublicV1CoursesCourseIdResourcesResourceIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/resources/{resourceId} | Get Course Resource

<a name="learnApiPublicV1CoursesCourseIdResourcesGet"></a>
# **learnApiPublicV1CoursesCourseIdResourcesGet**
> InlineResponse2008 learnApiPublicV1CoursesCourseIdResourcesGet(courseId, opts)

Get Top Level Course Resources

Returns a list of the top-level course resources.  Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.  All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.  **Since**: 3700.12.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentResourcesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'type': "type_example", // String | Search for Resources whose Type matches the specified value.  Valid values are 'File' and 'Folder'.   | Type      | Description  | --------- | --------- | | File |  | | Folder |  | 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdResourcesGet(courseId, opts, (error, data, response) => {
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
 **type** | **String**| Search for Resources whose Type matches the specified value.  Valid values are &#x27;File&#x27; and &#x27;Folder&#x27;.   | Type      | Description  | --------- | --------- | | File |  | | Folder |  |  | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet"></a>
# **learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet**
> InlineResponse2008 learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet(courseId, resourceId, opts)

Get Course Resource Children

Returns a list of Course Resources that are children of the specified Resource.  Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.  All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.  **Since**: 3700.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentResourcesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let resourceId = "resourceId_example"; // String | The xythos resource ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                                          |  |------------|--------------------------------------------------|  | primary    | _123_1                                           |  | xid        | xid-123_1-1                                      |  
let opts = { 
  'type': "type_example", // String | Search for Resources whose Type matches the specified value.  Valid values are 'File' and 'Folder'.   | Type      | Description  | --------- | --------- | | File |  | | Folder |  | 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdResourcesResourceIdChildrenGet(courseId, resourceId, opts, (error, data, response) => {
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
 **resourceId** | **String**| The xythos resource ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                                          |  |------------|--------------------------------------------------|  | primary    | _123_1                                           |  | xid        | xid-123_1-1                                      |   | 
 **type** | **String**| Search for Resources whose Type matches the specified value.  Valid values are &#x27;File&#x27; and &#x27;Folder&#x27;.   | Type      | Description  | --------- | --------- | | File |  | | Folder |  |  | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdResourcesResourceIdGet"></a>
# **learnApiPublicV1CoursesCourseIdResourcesResourceIdGet**
> Resource learnApiPublicV1CoursesCourseIdResourcesResourceIdGet(courseId, resourceId, opts)

Get Course Resource

Loads a Course Resource by Id.  Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.  All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.  **Since**: 3700.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentResourcesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let resourceId = "resourceId_example"; // String | The xythos resource ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                                          |  |------------|--------------------------------------------------|  | primary    | _123_1                                           |  | xid        | xid-123_1-1                                      |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdResourcesResourceIdGet(courseId, resourceId, opts, (error, data, response) => {
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
 **resourceId** | **String**| The xythos resource ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                                          |  |------------|--------------------------------------------------|  | primary    | _123_1                                           |  | xid        | xid-123_1-1                                      |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Resource**](Resource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

