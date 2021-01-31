# LearnApIs.CourseGradesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookSchemasGet**](CourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookSchemasGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/schemas | Get Grade Schemas
[**learnApiPublicV1CoursesCourseIdGradebookSchemasPost**](CourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookSchemasPost) | **POST** /learn/api/public/v1/courses/{courseId}/gradebook/schemas | Create Grade Schema
[**learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete**](CourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId} | Delete Grade Schema
[**learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet**](CourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId} | Get Grade Schema
[**learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch**](CourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId} | Update Grade Schema
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId} | Get Column Attempt
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId} | Update Column Attempt
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts | Get Column Attempts
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost) | **POST** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts | Create Column Attempt
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete) | **DELETE** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId} | Delete Grade Column
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId} | Get Grade Column
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId} | Update Grade Column
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users | Get Column Grades
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/lastChanged | Get Column Grade Last Changed
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId} | Get Column Grade
[**learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId} | Update Column Grade
[**learnApiPublicV2CoursesCourseIdGradebookColumnsGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/columns | Get Grade Columns
[**learnApiPublicV2CoursesCourseIdGradebookColumnsPost**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookColumnsPost) | **POST** /learn/api/public/v2/courses/{courseId}/gradebook/columns | Create Grade Column
[**learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet**](CourseGradesApi.md#learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet) | **GET** /learn/api/public/v2/courses/{courseId}/gradebook/users/{userId} | Get User Grades

<a name="learnApiPublicV1CoursesCourseIdGradebookSchemasGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookSchemasGet**
> InlineResponse20017 learnApiPublicV1CoursesCourseIdGradebookSchemasGet(courseId, opts)

Get Grade Schemas

Returns a list of grade schemas associated with the specified course.  Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve grade schema details.  A subset of the schema properties are available to enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement:  - id - scaleType  **Since**: 3300.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookSchemasGet(courseId, opts, (error, data, response) => {
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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookSchemasPost"></a>
# **learnApiPublicV1CoursesCourseIdGradebookSchemasPost**
> GradeSchema learnApiPublicV1CoursesCourseIdGradebookSchemasPost(bodycourseId, opts)

Create Grade Schema

Create a Tabular Grade Schema on this course. Currently only supports Classic/9.1 Courses.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3300.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body24(); // Body24 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookSchemasPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body24**](Body24.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeSchema**](GradeSchema.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete**
> learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete(courseId, schemaId)

Delete Grade Schema

Deletes the grade schema associated with the specified course and schema Id.  Requires entitlement &#x27;course.gradebook.MODIFY&#x27;  Grade schemas in Ultra courses may not be deleted  A schema must be removable (not in-use, and either tabular or user-created) to be deleted  **Since**: 3300.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let schemaId = "schemaId_example"; // String | The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |  

apiInstance.learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdDelete(courseId, schemaId, (error, data, response) => {
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
 **schemaId** | **String**| The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet**
> GradeSchema learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet(courseId, schemaId, opts)

Get Grade Schema

Loads the grade schema associated with the specified course and schema Id.  Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve the grade schema details.  A subset of the schema properties are available to enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement:  - id - scaleType  **Since**: 3300.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let schemaId = "schemaId_example"; // String | The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdGet(courseId, schemaId, opts, (error, data, response) => {
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
 **schemaId** | **String**| The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeSchema**](GradeSchema.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch**
> GradeSchema learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch(bodycourseIdschemaId, opts)

Update Grade Schema

  Updates the grade schema associated with the specified course and schema Id. &lt;/p&gt;  Requires entitlement &#x27;course.gradebook.MODIFY&#x27; &lt;/p&gt;  A schema must have a scaleType of Tabular to be updated &lt;/p&gt;  If updating the symbols field, the following criteria must be true:  - All symbols for the schema must be included. Any existing symbols not included in the patch will be deleted. - There must be at least 1 symbol for schemas associated with Classic courses, and 2 for Ultra courses. - When sorted descending by lowerBound, The lowerBound of a symbol must be equal to the upperBound of the following symbol.  In other words,      there should be no gaps or overlaps between the symbols. - The lowerBound, upperBound and absoluteValue of all symbols must be nonnegative. - The text field must be unique for each symbol in a schema. - The lowerBound and upperBound fields must have a maximum of 3 digits after the decimal point. - The absoluteValue field must have a maximum of 3 digits after the decimal point for Classic courses, and 4 for Ultra courses.-  -  &lt;/p&gt;  **Since**: 3300.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body25(); // Body25 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let schemaId = "schemaId_example"; // String | The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookSchemasSchemaIdPatch(bodycourseIdschemaId, opts, (error, data, response) => {
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
 **body** | [**Body25**](Body25.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **schemaId** | **String**| The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:schema1                    |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeSchema**](GradeSchema.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet**
> AttemptV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet(courseId, columnId, attemptId, opts)

Get Column Attempt

Loads the grade column attempt for the specified id.  The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned attempt.  A subset of attempt properties are available to a student when requesting his or her own attempt:  - id - userId - groupAttemptId - status - displayGrade.scaleType - displayGrade.score - displayGrade.text - groupOverride - feedback - studentComments - studentSubmission - exempt - created  When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let attemptId = "attemptId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet(courseId, columnId, attemptId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **attemptId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**AttemptV2**](AttemptV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch**
> AttemptV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch(bodycolumnIdattemptIdcourseId, opts)

Update Column Attempt

Update an existing Attempt on a Grade Column. &lt;/p&gt; Students can only modify the studentSubmission, studentComments and status of their own attempt if the status is InProgress. The status can only be set to NeedsGrading.  Doing so is the equivalent of submitting the attempt. &lt;/p&gt; Instructors can modify all mutable fields but studentSubmission and studentComments as long as the status is not InProgress. Setting the status to Complete is the equivalent of posting a graded attempt.  The \&quot;course.gradebook.MODIFY\&quot; entitlement is required to update score, text, notes, feedback and set the status to Complete. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt. Classic course support since 3500.2.0  **Since**: 3300.12.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body29(); // Body29 | 
let columnId = "columnId_example"; // String | 
let attemptId = "attemptId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdPatch(bodycolumnIdattemptIdcourseId, opts, (error, data, response) => {
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
 **body** | [**Body29**](Body29.md)|  | 
 **columnId** | **String**|  | 
 **attemptId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**AttemptV2**](AttemptV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet**
> InlineResponse20019 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet(courseId, columnId, opts)

Get Column Attempts

Returns a list of attempts associated with the specified grade column.  The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view column attempts. Alternatively, if the &#x27;userId&#x27; query parameter is specified, and the user making the request matches the specified &#x27;userId&#x27;, then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the &#x27;userId&#x27; query parameter is specified, a 403 response is returned, unless the requesting user matches the specified &#x27;userId&#x27; value.  A subset of attempt properties are available to a student when requesting his or her own attempts:  - id - userId - groupAttemptId - status - displayGrade.scaleType - displayGrade.score - displayGrade.text - groupOverride - feedback - studentComments - studentSubmission - exempt - created  When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'userId': "userId_example", // String | Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3100.4.0
  'attemptStatuses': "attemptStatuses_example", // String | Search for grade column attempts with one of these statuses.  **Since**: 3100.4.0   | Type      | Description  | --------- | --------- | | NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments | | Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | InProgress | attempt activity has commenced, but has not been submitted for grading | | Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | NeedsGrading | attempt has been submitted for grading, but has not been fully graded | | Completed | a grade has been entered for the attempt | | InProgressAgain | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions | | NeedsGradingAgain | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions | 
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.  **Since**: 3800.0.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.0.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'attemptDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.  **Since**: 3800.0.0
  'attemptDateCompare': "attemptDateCompare_example", // String | Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsGet(courseId, columnId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **userId** | **String**| Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3100.4.0 | [optional] 
 **attemptStatuses** | **String**| Search for grade column attempts with one of these statuses.  **Since**: 3100.4.0   | Type      | Description  | --------- | --------- | | NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments | | Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | InProgress | attempt activity has commenced, but has not been submitted for grading | | Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | NeedsGrading | attempt has been submitted for grading, but has not been fully graded | | Completed | a grade has been entered for the attempt | | InProgressAgain | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions | | NeedsGradingAgain | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |  | [optional] 
 **created** | **Date**| Search for attempts with created date relative to this value. &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.0.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for attempts with modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.0.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **attemptDate** | **Date**| Search for attempts with attempt date relative to this value. &#x27;attemptDateCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.0.0 | [optional] 
 **attemptDateCompare** | **String**| Used alongside the &#x27;attemptDate&#x27; search parameter. Defaults to greaterOrEqual if not specified.  **Since**: 3800.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost**
> AttemptV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost(bodycolumnIdcourseId, opts)

Create Column Attempt

Create an Attempt on the specified Grade Column. Currently supports Classic and Ultra Course Assignments. Student attributes (studentSubmission &amp; studentComments) can only be specified by Student Users. Grader attributes (text, score, notes &amp; feedback, attemptDate) can only be specified by Grader Users. Graders must have the entitlement \&quot;course.gradebook.MODIFY\&quot; for the course.  Graders are allowed to create attempts that contain \&quot;studentSubmission\&quot; text on behalf of a student if the authenticated application for this request has the \&quot;course.attempt.nonowner.SUBMIT\&quot; entitlement and the attempt has a \&quot;status\&quot; of NeedsGrading. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt.  **Since**: 3300.12.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body28(); // Body28 | 
let columnId = "columnId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdAttemptsPost(bodycolumnIdcourseId, opts, (error, data, response) => {
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
 **body** | [**Body28**](Body28.md)|  | 
 **columnId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**AttemptV2**](AttemptV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete**
> learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete(courseId, columnId, opts)

Delete Grade Column

Delete a specific grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'onlyIfEmpty': true // Boolean | 
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdDelete(courseId, columnId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **onlyIfEmpty** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet**
> GradeColumnV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet(courseId, columnId, opts)

Get Grade Column

Loads a specific grade column.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.  Student or observer users may view a limited subset of grade column fields:  - id - name - description - externalGrade - contentId - score.possible - grading.type - grading.due - grading.attemptsAllowed - grading.scoringModel  **Since**: 3200.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdGet(courseId, columnId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeColumnV2**](GradeColumnV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch**
> GradeColumnV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch(bodycourseIdcolumnId, opts)

Update Grade Column

Update a manual grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body27(); // Body27 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdPatch(bodycourseIdcolumnId, opts, (error, data, response) => {
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
 **body** | [**Body27**](Body27.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeColumnV2**](GradeColumnV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet**
> InlineResponse20020 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet(courseId, columnId, opts)

Get Column Grades

Returns a list of grades associated with the specified grade column.  By default this operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns. This can be changed by setting the query parameter \&quot;includeUnpostedGrades\&quot; to true. The columns considered as &#x27;ReadyToPost&#x27; are those which have a grade associated but have the status NEEDS_GRADING.  Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \&quot;403 - Forbidden.\&quot;  Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \&quot;403 - Forbidden.\&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:  - userId - columnId - status - displayGrade - exempt - feedback - changeIndex  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'changeIndex': 789, // Number | Retrieve only items modified after the given change index.  **Since**: 3300.4.0
  'includeUnpostedGrades': true, // Boolean | If true, calculated columns exposed in the response will be processed such that any unposted grades are included in their calculations. If false, only posted grades will be included in calculations. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.  **Since**: 3800.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersGet(courseId, columnId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **changeIndex** | **Number**| Retrieve only items modified after the given change index.  **Since**: 3300.4.0 | [optional] 
 **includeUnpostedGrades** | **Boolean**| If true, calculated columns exposed in the response will be processed such that any unposted grades are included in their calculations. If false, only posted grades will be included in calculations. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.  **Since**: 3800.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet**
> GradeV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet(courseId, columnId, opts)

Get Column Grade Last Changed

Loads the grade column grade with the maximum change index. This change index can be used to determine the relative order in which the grades were created and/or updated. This operation does not include &#x27;ReadyToPost&#x27; grades when determining the maximum change index grade.  Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \&quot;403 - Forbidden.\&quot;  Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users. A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \&quot;403 - Forbidden.\&quot;.  **Since**: 3300.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersLastChangedGet(courseId, columnId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeV2**](GradeV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet**
> GradeV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet(courseId, columnId, userId, opts)

Get Column Grade

Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns.  Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \&quot;403 - Forbidden.\&quot;  Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \&quot;403 - Forbidden.\&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:  - userId - columnId - status - displayGrade - exempt - feedback - changeIndex  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet(courseId, columnId, userId, opts, (error, data, response) => {
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
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeV2**](GradeV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch**
> GradeV2 learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch(bodycourseIdcolumnIduserId, opts)

Update Column Grade

Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as &#x27;Posted&#x27;.  This end-point, currently, does not support marking the grade as &#x27;ReadyToPost&#x27;.  Grade overrides may be cleared by either specifying the &#x27;score&#x27; attribute as null, or the &#x27;text&#x27;; attribute as null, &#x27;&#x27;, or &#x27;-&#x27; in the body of the request. The entitlement &#x27;course.gradebook.MODIFY&#x27; is required to perform this operation.  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body30(); // Body30 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch(bodycourseIdcolumnIduserId, opts, (error, data, response) => {
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
 **body** | [**Body30**](Body30.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeV2**](GradeV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsGet**
> InlineResponse20018 learnApiPublicV2CoursesCourseIdGradebookColumnsGet(courseId, opts)

Get Grade Columns

Returns a list of grade columns.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.  Student or observer users may view a limited subset of grade column fields:  - id - name - displayName - description - externalGrade - contentId - score.possible - scoreProviderHandle - grading.type - grading.due - grading.attemptsAllowed - grading.scoringModel  **Since**: 3200.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'contentId': "contentId_example", // String | Search for grade columns associated with this content item.  **Since**: 3000.11.0
  'displayName': "displayName_example", // String | The 'displayName' value to use as search criteria.  Currently only supports 'contains' searches.  **Since**: 3300.2.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsGet(courseId, opts, (error, data, response) => {
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
 **contentId** | **String**| Search for grade columns associated with this content item.  **Since**: 3000.11.0 | [optional] 
 **displayName** | **String**| The &#x27;displayName&#x27; value to use as search criteria.  Currently only supports &#x27;contains&#x27; searches.  **Since**: 3300.2.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookColumnsPost"></a>
# **learnApiPublicV2CoursesCourseIdGradebookColumnsPost**
> GradeColumnV2 learnApiPublicV2CoursesCourseIdGradebookColumnsPost(bodycourseId, opts)

Create Grade Column

Create a manual grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3200.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let body = new LearnApIs.Body26(); // Body26 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookColumnsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body26**](Body26.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeColumnV2**](GradeColumnV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet**
> InlineResponse20020 learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet(courseId, userId, opts)

Get User Grades

Loads the course grades for a specific user.  Users with entitlement \&quot;course.gradebook.MODIFY\&quot; have read access to all the properties of the collection results.  Users without entitlement \&quot;course.gradebook.MODIFY\&quot; requesting grades for themselves (i.e., userId &#x3D; current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:  - userId - columnId - status - text - score - exempt - feedback  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGradebookUsersUserIdGet(courseId, userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

