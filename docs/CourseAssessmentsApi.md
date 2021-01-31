# LearnApIs.CourseAssessmentsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet**](CourseAssessmentsApi.md#learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet) | **GET** /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions | Get Questions
[**learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost**](CourseAssessmentsApi.md#learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost) | **POST** /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions | Create Question
[**learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete**](CourseAssessmentsApi.md#learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId} | Delete Question
[**learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet**](CourseAssessmentsApi.md#learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId} | Get Question By Id
[**learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch**](CourseAssessmentsApi.md#learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId} | Update Question

<a name="learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet"></a>
# **learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet**
> InlineResponse20010 learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet(courseId, assessmentId, opts)

Get Questions

Get the list of questions for an Ultra Assessment.  Either &#x27;course.assessment.CREATE&#x27; or &#x27;course.assessment.MODIFY&#x27; entitlement is needed to view questions. If the assessment has the external submissions setting enabled, then either the &#x27;course.assessment.VIEW&#x27; or &#x27;course.assessment.EXECUTE&#x27; entitlement is needed to view questions, and only presentation questions are returned.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAssessmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let assessmentId = "assessmentId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsGet(courseId, assessmentId, opts, (error, data, response) => {
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
 **assessmentId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost"></a>
# **learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost**
> Question learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost(bodycourseIdassessmentId, opts)

Create Question

Creates a question for an Ultra Assessment.  The &#x27;course.assessment.MODIFY&#x27; entitlement is needed to create a question.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAssessmentsApi();
let body = new LearnApIs.Body17(); // Body17 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let assessmentId = "assessmentId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsPost(bodycourseIdassessmentId, opts, (error, data, response) => {
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
 **body** | [**Body17**](Body17.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **assessmentId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Question**](Question.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete**
> learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete(courseId, assessmentId, questionId, opts)

Delete Question

Delete a question, specified by Id, from an Ultra Assessment.  The &#x27;course.assessment.DELETE&#x27; entitlement is needed to perform the operation.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAssessmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let assessmentId = "assessmentId_example"; // String | 
let questionId = "questionId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdDelete(courseId, assessmentId, questionId, opts, (error, data, response) => {
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
 **assessmentId** | **String**|  | 
 **questionId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet"></a>
# **learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet**
> Question learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet(courseId, assessmentId, questionId, opts)

Get Question By Id

Get a question by Id from an Ultra Assessment.  Either &#x27;course.assessment.CREATE&#x27; or &#x27;course.assessment.MODIFY&#x27; entitlement is needed to view a question.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAssessmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let assessmentId = "assessmentId_example"; // String | 
let questionId = "questionId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdGet(courseId, assessmentId, questionId, opts, (error, data, response) => {
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
 **assessmentId** | **String**|  | 
 **questionId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Question**](Question.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch**
> Question learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch(bodycourseIdassessmentIdquestionId, opts)

Update Question

Update a question, specified by Id, from an Ultra Assessment.  The &#x27;course.assessment.MODIFY&#x27; entitlement is needed to perform the operation.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseAssessmentsApi();
let body = new LearnApIs.Body18(); // Body18 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let assessmentId = "assessmentId_example"; // String | 
let questionId = "questionId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdAssessmentsAssessmentIdQuestionsQuestionIdPatch(bodycourseIdassessmentIdquestionId, opts, (error, data, response) => {
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
 **body** | [**Body18**](Body18.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **assessmentId** | **String**|  | 
 **questionId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Question**](Question.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

