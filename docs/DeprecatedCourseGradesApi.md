# LearnApIs.DeprecatedCourseGradesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId} | Get Column Attempt
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts | Get Column Attempts
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId} | Delete Grade Column
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId} | Get Grade Column
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId} | Update Grade Column
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users | Get Column Grades
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId} | Get Column Grade
[**learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId} | Update Column Grade
[**learnApiPublicV1CoursesCourseIdGradebookColumnsGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/columns | Get Grade Columns
[**learnApiPublicV1CoursesCourseIdGradebookColumnsPost**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookColumnsPost) | **POST** /learn/api/public/v1/courses/{courseId}/gradebook/columns | Create Grade Column
[**learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet**](DeprecatedCourseGradesApi.md#learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/users/{userId} | Get User Grades

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet**
> Attempt learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet(courseId, columnId, attemptId, opts)

Get Column Attempt

Loads the grade column attempt for the specified id.  The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned attempt.  A subset of attempt properties are available to a student when requesting his or her own attempt:  - id - userId - groupAttemptId - status - text - score - groupOverride - feedback - studentComments - studentSubmission - exempt - created When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  **Since**: 3100.4.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let attemptId = "attemptId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsAttemptIdGet(courseId, columnId, attemptId, opts, (error, data, response) => {
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

[**Attempt**](Attempt.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet**
> InlineResponse20047 learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet(courseId, columnId, opts)

Get Column Attempts

Returns a list of attempts associated with the specified grade column.  The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view column attempts. Alternatively, if the &#x27;userId&#x27; query parameter is specified, and the user making the request matches the specified &#x27;userId&#x27;, then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the &#x27;userId&#x27; query parameter is specified, a 403 response is returned, unless the requesting user matches the specified &#x27;userId&#x27; value.  A subset of attempt properties are available to a student when requesting his or her own attempts:  - id - userId - groupAttemptId - status - text - score - groupOverride - feedback - studentComments - studentSubmission - exempt - created When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User.  If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.  **Since**: 3100.4.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
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
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdAttemptsGet(courseId, columnId, opts, (error, data, response) => {
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

[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete**
> learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete(courseId, columnId, opts)

Delete Grade Column

Delete a specific grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3000.7.0  **Deprecated**: since 3200.10.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'onlyIfEmpty': true // Boolean | 
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdDelete(courseId, columnId, opts, (error, data, response) => {
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

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet**
> GradeColumn learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet(courseId, columnId, opts)

Get Grade Column

Loads a specific grade column.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.  Student or observer users may view a limited subset of grade column fields:  - id - name - description - externalGrade - contentId - score.possible - grading.type - grading.due - grading.attemptsAllowed - grading.scoringModel  **Since**: 3000.3.0  **Deprecated**: since 3200.10.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdGet(courseId, columnId, opts, (error, data, response) => {
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

[**GradeColumn**](GradeColumn.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch**
> GradeColumn learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch(bodycourseIdcolumnId, opts)

Update Grade Column

Update a manual grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3000.7.0  **Deprecated**: since 3200.10.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let body = new LearnApIs.Body61(); // Body61 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdPatch(bodycourseIdcolumnId, opts, (error, data, response) => {
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
 **body** | [**Body61**](Body61.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeColumn**](GradeColumn.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet**
> InlineResponse20048 learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet(courseId, columnId, opts)

Get Column Grades

Returns a list of grades associated with the specified grade column.  This operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns.  Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \&quot;403 - Forbidden.\&quot;  Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \&quot;403 - Forbidden.\&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:  - userId - columnId - status - text - score - exempt - feedback  **Since**: 3000.3.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersGet(courseId, columnId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet**
> Grade learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet(courseId, columnId, userId, opts)

Get Column Grade

Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns.  Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \&quot;403 - Forbidden.\&quot;  Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \&quot;403 - Forbidden.\&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:  - userId - columnId - status - text - score - exempt - feedback  **Since**: 3000.3.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdGet(courseId, columnId, userId, opts, (error, data, response) => {
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

[**Grade**](Grade.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch**
> Grade learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch(bodycourseIdcolumnIduserId, opts)

Update Column Grade

Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as &#x27;Posted&#x27;.  This end-point, currently, does not support marking the grade as &#x27;ReadyToPost&#x27;.  Grade overrides may be cleared by either specifying the &#x27;score&#x27; attribute as null, or the &#x27;text&#x27;; attribute as null, &#x27;&#x27;, or &#x27;-&#x27; in the body of the request. The entitlement &#x27;course.gradebook.MODIFY&#x27; is required to perform this operation.  **Since**: 3000.5.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let body = new LearnApIs.Body62(); // Body62 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let columnId = "columnId_example"; // String | The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsColumnIdUsersUserIdPatch(bodycourseIdcolumnIduserId, opts, (error, data, response) => {
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
 **body** | [**Body62**](Body62.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **columnId** | **String**| The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword &#x27;finalGrade&#x27;, which indicates that the course&#x27;s final grade column is specified.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:column1                    |  | finalGrade | finalGrade                            |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Grade**](Grade.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsGet**
> InlineResponse20046 learnApiPublicV1CoursesCourseIdGradebookColumnsGet(courseId, opts)

Get Grade Columns

Returns a list of grade columns.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.  Student or observer users may view a limited subset of grade column fields:  - id - name - description - externalGrade - contentId - score.possible - grading.type - grading.due - grading.attemptsAllowed - grading.scoringModel  **Since**: 3000.3.0  **Deprecated**: since 3200.10.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'contentId': "contentId_example", // String | Search for grade columns associated with this content item.  **Since**: 3000.11.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsGet(courseId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookColumnsPost"></a>
# **learnApiPublicV1CoursesCourseIdGradebookColumnsPost**
> GradeColumn learnApiPublicV1CoursesCourseIdGradebookColumnsPost(bodycourseId, opts)

Create Grade Column

Create a manual grade column. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3000.7.0  **Deprecated**: since 3200.10.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let body = new LearnApIs.Body60(); // Body60 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookColumnsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body60**](Body60.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradeColumn**](GradeColumn.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet**
> InlineResponse20048 learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet(courseId, userId, opts)

Get User Grades

Loads the course grades for a specific user.  Users with entitlement \&quot;course.gradebook.MODIFY\&quot; have read access to all the properties of the collection results.  Users without entitlement \&quot;course.gradebook.MODIFY\&quot; requesting grades for themselves (i.e., userId &#x3D; current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:  - userId - columnId - status - text - score - exempt - feedback  **Since**: 3000.3.0  **Deprecated**: since 3300.0.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCourseGradesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookUsersUserIdGet(courseId, userId, opts, (error, data, response) => {
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

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

