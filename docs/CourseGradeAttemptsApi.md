# LearnApIs.CourseGradeAttemptsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete**](CourseGradeAttemptsApi.md#learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId} | Delete Attachment
[**learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet**](CourseGradeAttemptsApi.md#learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId}/download | Download
[**learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet**](CourseGradeAttemptsApi.md#learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId} | Get Attempt File Meta Data
[**learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet**](CourseGradeAttemptsApi.md#learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files | Get Attempt File Meta Data List
[**learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost**](CourseGradeAttemptsApi.md#learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost) | **POST** /learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files | Attach File

<a name="learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete**
> learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete(courseId, attemptId, attemptFileId)

Delete Attachment

Delete the file for a Student Submission associated to an attempt.  The student who owns the file can delete it while the attempt is in progress.  **Since**: 3500.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeAttemptsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let attemptId = "attemptId_example"; // String | 
let attemptFileId = "attemptFileId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDelete(courseId, attemptId, attemptFileId, (error, data, response) => {
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
 **attemptId** | **String**|  | 
 **attemptFileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet**
> learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet(courseId, attemptId, attemptFileId)

Download

Download the contents of the file for a Student Submission.  **Since**: 3400.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeAttemptsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let attemptId = "attemptId_example"; // String | 
let attemptFileId = "attemptFileId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdDownloadGet(courseId, attemptId, attemptFileId, (error, data, response) => {
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
 **attemptId** | **String**|  | 
 **attemptFileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet**
> AttemptFile learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet(courseId, attemptId, attemptFileId)

Get Attempt File Meta Data

Get the file metadata for a Student Submission associated to the course and attempt.  - Id - Name  **Since**: 3400.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeAttemptsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let attemptId = "attemptId_example"; // String | 
let attemptFileId = "attemptFileId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesAttemptFileIdGet(courseId, attemptId, attemptFileId, (error, data, response) => {
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
 **attemptId** | **String**|  | 
 **attemptFileId** | **String**|  | 

### Return type

[**AttemptFile**](AttemptFile.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet**
> InlineResponse20014 learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet(courseId, attemptId, opts)

Get Attempt File Meta Data List

Get the list of file metadata for a Student Submission associated to the course and attempt.  - Id - Name  **Since**: 3400.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeAttemptsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let attemptId = "attemptId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesGet(courseId, attemptId, opts, (error, data, response) => {
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
 **attemptId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost"></a>
# **learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost**
> AttemptFile learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost(bodycourseIdattemptId, opts)

Attach File

  Attach a file to an Attempt for a Student Submission. Currently only supports Classic/9.1 Course Assignments. &lt;/p&gt;  **Since**: 3500.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeAttemptsApi();
let body = new LearnApIs.Body21(); // Body21 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let attemptId = "attemptId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookAttemptsAttemptIdFilesPost(bodycourseIdattemptId, opts, (error, data, response) => {
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
 **body** | [**Body21**](Body21.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **attemptId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**AttemptFile**](AttemptFile.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

