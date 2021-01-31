# LearnApIs.CourseGradeNotationsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet**](CourseGradeNotationsApi.md#learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations | Get Grade Notations
[**learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete**](CourseGradeNotationsApi.md#learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId} | Delete Grade Notation
[**learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet**](CourseGradeNotationsApi.md#learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId} | Get Grade Notation
[**learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch**](CourseGradeNotationsApi.md#learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId} | Update Grade Notation
[**learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost**](CourseGradeNotationsApi.md#learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost) | **POST** /learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations | Create Grade Notation

<a name="learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet**
> InlineResponse20015 learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet(courseId, opts)

Get Grade Notations

Returns a list of grade notations.  The entitlement \&quot;course.user.grades.VIEW\&quot; is needed.  **Since**: 3200.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeNotationsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGet(courseId, opts, (error, data, response) => {
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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete**
> learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete(courseId, gradeNotationId)

Delete Grade Notation

Delete a specific grade notation.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeNotationsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let gradeNotationId = "gradeNotationId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdDelete(courseId, gradeNotationId, (error, data, response) => {
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
 **gradeNotationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet**
> GradeNotation learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet(courseId, gradeNotationId, opts)

Get Grade Notation

Returns a specific grade notation.  The entitlement \&quot;course.user.grades.VIEW\&quot; is needed.  **Since**: 3200.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeNotationsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let gradeNotationId = "gradeNotationId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdGet(courseId, gradeNotationId, opts, (error, data, response) => {
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
 **gradeNotationId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeNotation**](GradeNotation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch**
> GradeNotation learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch(bodycourseIdgradeNotationId, opts)

Update Grade Notation

Update a grade notation on this course.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.14.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeNotationsApi();
let body = new LearnApIs.Body23(); // Body23 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let gradeNotationId = "gradeNotationId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookGradeNotationsGradeNotationIdPatch(bodycourseIdgradeNotationId, opts, (error, data, response) => {
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
 **body** | [**Body23**](Body23.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **gradeNotationId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeNotation**](GradeNotation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost"></a>
# **learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost**
> GradeNotation learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost(bodycourseId, opts)

Create Grade Notation

Create a grade notation on this course.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.13.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradeNotationsApi();
let body = new LearnApIs.Body22(); // Body22 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookGradeNotationsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body22**](Body22.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeNotation**](GradeNotation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

