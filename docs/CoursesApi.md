# LearnApIs.CoursesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete**](CoursesApi.md#learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/children/{childCourseId} | Remove Child Course
[**learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet**](CoursesApi.md#learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/children/{childCourseId} | Get Child
[**learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut**](CoursesApi.md#learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut) | **PUT** /learn/api/public/v1/courses/{courseId}/children/{childCourseId} | Add Child Course
[**learnApiPublicV1CoursesCourseIdChildrenGet**](CoursesApi.md#learnApiPublicV1CoursesCourseIdChildrenGet) | **GET** /learn/api/public/v1/courses/{courseId}/children | Get Course Children
[**learnApiPublicV1CoursesCourseIdCrossListSetGet**](CoursesApi.md#learnApiPublicV1CoursesCourseIdCrossListSetGet) | **GET** /learn/api/public/v1/courses/{courseId}/crossListSet | Get Cross List Set
[**learnApiPublicV1CoursesCourseIdTasksTaskIdGet**](CoursesApi.md#learnApiPublicV1CoursesCourseIdTasksTaskIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/tasks/{taskId} | Get Task
[**learnApiPublicV2CoursesCourseIdCopyPost**](CoursesApi.md#learnApiPublicV2CoursesCourseIdCopyPost) | **POST** /learn/api/public/v2/courses/{courseId}/copy | Copy Course
[**learnApiPublicV3CoursesCourseIdDelete**](CoursesApi.md#learnApiPublicV3CoursesCourseIdDelete) | **DELETE** /learn/api/public/v3/courses/{courseId} | Delete Course
[**learnApiPublicV3CoursesCourseIdGet**](CoursesApi.md#learnApiPublicV3CoursesCourseIdGet) | **GET** /learn/api/public/v3/courses/{courseId} | Get Course
[**learnApiPublicV3CoursesCourseIdPatch**](CoursesApi.md#learnApiPublicV3CoursesCourseIdPatch) | **PATCH** /learn/api/public/v3/courses/{courseId} | Update Course
[**learnApiPublicV3CoursesGet**](CoursesApi.md#learnApiPublicV3CoursesGet) | **GET** /learn/api/public/v3/courses | Get Courses
[**learnApiPublicV3CoursesPost**](CoursesApi.md#learnApiPublicV3CoursesPost) | **POST** /learn/api/public/v3/courses | Create Course

<a name="learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete**
> learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete(courseId, childCourseId, opts)

Remove Child Course

Delete a course-course relationship, resulting in two unrelated courses.  Minimal entitlements required:  - For courses: &#x27;system.course.separate-out.VIEW&#x27; - For organizations: &#x27;system.org.separate-out.VIEW&#x27;  **Since**: 3900.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let childCourseId = "childCourseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'separationStyle': "separationStyle_example" // String | The method by which the courses will be separated.  Default: CompleteSeparation  **Since**: 3900.4.0   | Type      | Description  | --------- | --------- | | completeSeparation | Re-enable the child course with enrollments and remove all the child enrollments from the master course. | | enrollmentsInBoth | Re-enable the child course with enrollments but leave all the child enrollments in the master course as well, marking them as unavailable. | 
};
apiInstance.learnApiPublicV1CoursesCourseIdChildrenChildCourseIdDelete(courseId, childCourseId, opts, (error, data, response) => {
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
 **childCourseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **separationStyle** | **String**| The method by which the courses will be separated.  Default: CompleteSeparation  **Since**: 3900.4.0   | Type      | Description  | --------- | --------- | | completeSeparation | Re-enable the child course with enrollments and remove all the child enrollments from the master course. | | enrollmentsInBoth | Re-enable the child course with enrollments but leave all the child enrollments in the master course as well, marking them as unavailable. |  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet"></a>
# **learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet**
> CourseChild learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet(courseId, childCourseId, opts)

Get Child

Loads a specific course cross-listing.  The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; entitlement is needed.  **Since**: 3000.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let childCourseId = "childCourseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdChildrenChildCourseIdGet(courseId, childCourseId, opts, (error, data, response) => {
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
 **childCourseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseChild**](CourseChild.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut"></a>
# **learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut**
> CourseChild learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut(courseId, childCourseId, opts)

Add Child Course

Merges two courses (or organizations) together. Commonly referred to as cross-listing. Only a single level of parent/child relationship is supported (ie. Parent courses may not become children, similarly, a child cannot become a parent)  Minimal entitlements required:  - For courses: &#x27;system.course.cross-list.VIEW&#x27; - For organizations: &#x27;system.org.cross-list.VIEW&#x27;  Upon being merged, all enrollments in the child course are replicated in the parent course, and any future enrollment changes in the child course are also synchronized automatically with the parent course. Duplicate student enrollments will result in a 409 CONFLICT unless the &#x27;ignoreEnrollmentErrors&#x27; query parameter is set to true. Users in other roles, such as grader, teaching assistant, or guest, are assigned roles based on the last time they are added to the parent course.  **Since**: 3400.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let childCourseId = "childCourseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'ignoreEnrollmentErrors': true, // Boolean | By default, enrollment errors encountered during a course merge will result in a 409 CONFLICT response.  The ignoreEnrollmentErrors parameter can be sent as true in order to bypass enrollment errors.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdChildrenChildCourseIdPut(courseId, childCourseId, opts, (error, data, response) => {
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
 **childCourseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **ignoreEnrollmentErrors** | **Boolean**| By default, enrollment errors encountered during a course merge will result in a 409 CONFLICT response.  The ignoreEnrollmentErrors parameter can be sent as true in order to bypass enrollment errors. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseChild**](CourseChild.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdChildrenGet"></a>
# **learnApiPublicV1CoursesCourseIdChildrenGet**
> InlineResponse20029 learnApiPublicV1CoursesCourseIdChildrenGet(courseId, opts)

Get Course Children

Returns a list of course cross-listings.  The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; or &#x27;course.children.VIEW&#x27; entitlement is needed.  **Since**: 3000.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>childCourse</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdChildrenGet(courseId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;childCourse&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdCrossListSetGet"></a>
# **learnApiPublicV1CoursesCourseIdCrossListSetGet**
> InlineResponse20029 learnApiPublicV1CoursesCourseIdCrossListSetGet(courseId, opts)

Get Cross List Set

Returns the course cross-listing set for the specified course. This will return any and all parent/child associations regardless of the specified course being a parent or child course. The result will be empty if the specified course is not cross-listed.  The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; entitlement is needed.  **Since**: 3400.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdCrossListSetGet(courseId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdTasksTaskIdGet"></a>
# **learnApiPublicV1CoursesCourseIdTasksTaskIdGet**
> CourseTask learnApiPublicV1CoursesCourseIdTasksTaskIdGet(courseId, taskId, opts)

Get Task

Check the status of a queued task associated with a Course. Returns 200 unless task is complete. If task is complete this endpoint will return a 303 SEE OTHER with a Location header providing a URI to the GET Course endpoint. Statistical data shows that the average copy task duration is under a second. However, very large courses can take several minutes. Also important to note is that these background tasks can potentially be queued behind other system tasks therefore prolonging the time a task stays in the &#x60;Queued&#x60; status. We recommend that this endpoint be polled every 60 seconds while waiting for a Course copy to complete.  Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can view the task status.  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let taskId = "taskId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdTasksTaskIdGet(courseId, taskId, opts, (error, data, response) => {
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
 **taskId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseTask**](CourseTask.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdCopyPost"></a>
# **learnApiPublicV2CoursesCourseIdCopyPost**
> learnApiPublicV2CoursesCourseIdCopyPost(bodycourseId)

Copy Course

Creates a copy of an existing Course into a new Course or an existing course. It is possible to limit the course content to be copied using options.  Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can create a course copy. Users with entitlements &#x27;system.org.copy.EXECUTE&#x27; can create an organization copy. Users with entitlement &#x27;course.content.copy.exact.EXECUTE&#x27; can copy Course/Organization materials to a new or existing course Users with entitlement &#x27;course.content.copy.new.EXECUTE&#x27; can copy Course/Organization materials to a new course. All users&#x27;s must also have &#x27;course.content.copy.EXECUTE&#x27; entitlement associated with the specified source courseId.  **Since**: 3800.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let body = new LearnApIs.Body42(); // Body42 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV2CoursesCourseIdCopyPost(bodycourseId, (error, data, response) => {
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
 **body** | [**Body42**](Body42.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV3CoursesCourseIdDelete"></a>
# **learnApiPublicV3CoursesCourseIdDelete**
> learnApiPublicV3CoursesCourseIdDelete(courseId, opts)

Delete Course

Registers a queued task to delete a course or organization in asynchronous fashion.  The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.  **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'removeFiles': true // Boolean | Whether to delete course files.  Defaults to true.
};
apiInstance.learnApiPublicV3CoursesCourseIdDelete(courseId, opts, (error, data, response) => {
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
 **removeFiles** | **Boolean**| Whether to delete course files.  Defaults to true. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV3CoursesCourseIdGet"></a>
# **learnApiPublicV3CoursesCourseIdGet**
> CourseV2 learnApiPublicV3CoursesCourseIdGet(courseId, opts)

Get Course

Loads a specific course or organization.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users with no access to the course only have read access to the following properties:  - id - courseId - name - description - organization - closedComplete - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV3CoursesCourseIdGet(courseId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseV2**](CourseV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV3CoursesCourseIdPatch"></a>
# **learnApiPublicV3CoursesCourseIdPatch**
> CourseV2 learnApiPublicV3CoursesCourseIdPatch(bodycourseId, opts)

Update Course

Updates a course or organization.  To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below:    | Field                           | Entitlements Required                                                  |  |---------------------------------|------------------------------------------------------------------------|  | name                            | course.name.MODIFY                                                     |  | description                     | course.name.MODIFY                                                     |  | allowGuests                     | course.configure-guest-access.EXECUTE                                  |  | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |  | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |    **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let body = new LearnApIs.Body44(); // Body44 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV3CoursesCourseIdPatch(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body44**](Body44.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseV2**](CourseV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV3CoursesGet"></a>
# **learnApiPublicV3CoursesGet**
> InlineResponse20030 learnApiPublicV3CoursesGet(opts)

Get Courses

Returns a list of courses and organizations.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; course entitlement, or the &#x27;system.course.properties.MODIFY&#x27; system entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.  **Since**: 3500.4.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3500.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'courseId': "courseId_example", // String | Search for courses with courseId properties that contain this value.  **Since**: 3100.0.0
  'name': "name_example", // String | Search for courses with name properties that contain this value.  **Since**: 3100.0.0
  'description': "description_example", // String | Search for courses with description properties that contain this value.  **Since**: 3100.0.0
  'externalId': "externalId_example", // String | Search for courses with externalId properties that contain this value.  **Since**: 3100.0.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3100.0.0
  'allowGuests': true, // Boolean | Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)  **Since**: 3200.3.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for courses with availability.available properties that contain this value.  **Since**: 3000.13.0   | Type      | Description  | --------- | --------- | | Yes | Students may access the course. | | No | Students may not access the course. | | Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 | | Term | Availability is inherited from the term settings. Requires a termId be set. | 
  'dataSourceId': "dataSourceId_example", // String | Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".  **Since**: 3100.0.0
  'termId': "termId_example", // String | Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".  **Since**: 3100.0.0
  'organization': true, // Boolean | Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.  **Since**: 3100.0.0
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:  - courseId - name - externalId - created - modified  **Since**: 3400.8.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV3CoursesGet(opts, (error, data, response) => {
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
 **modified** | **Date**| Search for courses with a modified date relative to this value.  &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3500.4.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3500.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **courseId** | **String**| Search for courses with courseId properties that contain this value.  **Since**: 3100.0.0 | [optional] 
 **name** | **String**| Search for courses with name properties that contain this value.  **Since**: 3100.0.0 | [optional] 
 **description** | **String**| Search for courses with description properties that contain this value.  **Since**: 3100.0.0 | [optional] 
 **externalId** | **String**| Search for courses with externalId properties that contain this value.  **Since**: 3100.0.0 | [optional] 
 **created** | **Date**| Search for courses with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3100.0.0 | [optional] 
 **allowGuests** | **Boolean**| Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)  **Since**: 3200.3.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **availabilityAvailable** | **String**| Search for courses with availability.available properties that contain this value.  **Since**: 3000.13.0   | Type      | Description  | --------- | --------- | | Yes | Students may access the course. | | No | Students may not access the course. | | Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 | | Term | Availability is inherited from the term settings. Requires a termId be set. |  | [optional] 
 **dataSourceId** | **String**| Search for courses with this dataSourceId.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;.  **Since**: 3100.0.0 | [optional] 
 **termId** | **String**| Search for courses with this termId.  This may optionally be the term&#x27;s externalId using the syntax \&quot;externalId:spring2015\&quot;.  **Since**: 3100.0.0 | [optional] 
 **organization** | **Boolean**| Search for courses by organization flag.  A value of &#x27;true&#x27; indicates that search results should be limited to only Organizations.  A value of &#x27;false&#x27; indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.  **Since**: 3100.0.0 | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc),created\&quot; Supported fields are:  - courseId - name - externalId - created - modified  **Since**: 3400.8.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV3CoursesPost"></a>
# **learnApiPublicV3CoursesPost**
> CourseV2 learnApiPublicV3CoursesPost(body, opts)

Create Course

Creates a course or organization.  The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.  **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CoursesApi();
let body = new LearnApIs.Body43(); // Body43 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV3CoursesPost(body, opts, (error, data, response) => {
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
 **body** | [**Body43**](Body43.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseV2**](CourseV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

