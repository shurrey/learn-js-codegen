# LearnApIs.ContentReviewApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet**](ContentReviewApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/users/{userId}/reviewStatus | Get Review Status
[**learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch**](ContentReviewApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/users/{userId}/reviewStatus | Update Review Status

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet**
> ReviewStatus learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet(courseId, contentId, userId, opts)

Get Review Status

Obtain the review status for a content item. This endpoint will only fetch the reviewStatus if the corresponding content was previously marked as reviewable.  **Since**: 3700.16.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentReviewApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusGet(courseId, contentId, userId, opts, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**ReviewStatus**](ReviewStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch**
> ReviewStatus learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch(bodycourseIdcontentIduserId, opts)

Update Review Status

Update the review status for a content item. This endpoint will only update the reviewStatus if the corresponding content was previously marked as reviewable.  **Since**: 3700.16.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentReviewApi();
let body = new LearnApIs.Body14(); // Body14 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdUsersUserIdReviewStatusPatch(bodycourseIdcontentIduserId, opts, (error, data, response) => {
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
 **body** | [**Body14**](Body14.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**ReviewStatus**](ReviewStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

