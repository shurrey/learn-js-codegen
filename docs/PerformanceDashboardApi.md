# LearnApIs.PerformanceDashboardApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet**](PerformanceDashboardApi.md#learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet) | **GET** /learn/api/public/v1/courses/{courseId}/performance/contentReviewStatus | Get Review Status By Course Id

<a name="learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet"></a>
# **learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet**
> InlineResponse20037 learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet(courseId, opts)

Get Review Status By Course Id

List the content review statuses for all the users enrolled in a course. Users calling this endpoint must have the following entitlement: this entitlement check.  - course.performance.dashboard.VIEW  **Since**: 3700.15.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.PerformanceDashboardApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'userId': "userId_example", // String | Optional search criteria to filter by user id.  **Since**: 3700.15.0
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdPerformanceContentReviewStatusGet(courseId, opts, (error, data, response) => {
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
 **userId** | **String**| Optional search criteria to filter by user id.  **Since**: 3700.15.0 | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

