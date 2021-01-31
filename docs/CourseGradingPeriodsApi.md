# LearnApIs.CourseGradingPeriodsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookPeriodsGet**](CourseGradingPeriodsApi.md#learnApiPublicV1CoursesCourseIdGradebookPeriodsGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/periods | Get Grading Periods
[**learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete**](CourseGradingPeriodsApi.md#learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId} | Delete Grading Period
[**learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet**](CourseGradingPeriodsApi.md#learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId} | Get Grading Period
[**learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch**](CourseGradingPeriodsApi.md#learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId} | Update Grading Period
[**learnApiPublicV1CoursesCourseIdGradebookPeriodsPost**](CourseGradingPeriodsApi.md#learnApiPublicV1CoursesCourseIdGradebookPeriodsPost) | **POST** /learn/api/public/v1/courses/{courseId}/gradebook/periods | Create Grading Period

<a name="learnApiPublicV1CoursesCourseIdGradebookPeriodsGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookPeriodsGet**
> InlineResponse20021 learnApiPublicV1CoursesCourseIdGradebookPeriodsGet(courseId, opts)

Get Grading Periods

Returns a list of grading periods.  The entitlement \&quot;course.gradebook.MODIFY\&quot; or \&quot;course.gradebook-metadata.VIEW\&quot; is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.  This endpoint supports paging, sorting, and the filtering of fields returned on result object.  **Since**: 3300.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradingPeriodsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties,  with an optional \"(desc)\" or \"(asc)\" suffix to request an ascending or descending sort for that property. e.g. \"title(desc),description\" Supported fields are:  - id - title - position - dateMode - description  **Since**: 3300.2.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookPeriodsGet(courseId, opts, (error, data, response) => {
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
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties,  with an optional \&quot;(desc)\&quot; or \&quot;(asc)\&quot; suffix to request an ascending or descending sort for that property. e.g. \&quot;title(desc),description\&quot; Supported fields are:  - id - title - position - dateMode - description  **Since**: 3300.2.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete**
> learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete(courseId, periodId)

Delete Grading Period

Delete a specific grading period. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  **Since**: 3300.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradingPeriodsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let periodId = "periodId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdDelete(courseId, periodId, (error, data, response) => {
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
 **periodId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet**
> GradingPeriod learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet(courseId, periodId, opts)

Get Grading Period

Returns a specific grading period.  The entitlement \&quot;course.gradebook.MODIFY\&quot; or \&quot;course.gradebook-metadata.VIEW\&quot; is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.  This endpoint supports the filtering of fields returned on result object.  **Since**: 3300.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradingPeriodsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let periodId = "periodId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdGet(courseId, periodId, opts, (error, data, response) => {
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
 **periodId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradingPeriod**](GradingPeriod.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch**
> GradingPeriod learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch(bodycourseIdperiodId, opts)

Update Grading Period

Update a grading period. The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  This endpoint supports the filtering of fields returned on result object.  This endpoint has an optional request parameter \&quot;associate\&quot;, which will default false. If associate&#x3D;true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period&#x27;s start and end dates (if set)  will associate themselves to the updated grading period.  **Since**: 3300.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradingPeriodsApi();
let body = new LearnApIs.Body32(); // Body32 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let periodId = "periodId_example"; // String | 
let opts = { 
  'associate': true // Boolean | 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookPeriodsPeriodIdPatch(bodycourseIdperiodId, opts, (error, data, response) => {
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
 **body** | [**Body32**](Body32.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **periodId** | **String**|  | 
 **associate** | **Boolean**|  | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradingPeriod**](GradingPeriod.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookPeriodsPost"></a>
# **learnApiPublicV1CoursesCourseIdGradebookPeriodsPost**
> GradingPeriod learnApiPublicV1CoursesCourseIdGradebookPeriodsPost(bodycourseId, opts)

Create Grading Period

Create a grading period.  The entitlement \&quot;course.gradebook.MODIFY\&quot; is needed.  This endpoint supports the filtering of fields returned on result object.  This endpoint has an optional request parameter \&quot;associate\&quot;, which will default false. If associate&#x3D;true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period&#x27;s start and end dates (if set)  will associate themselves to the updated grading period.  **Since**: 3300.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradingPeriodsApi();
let body = new LearnApIs.Body31(); // Body31 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'associate': true // Boolean | 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookPeriodsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body31**](Body31.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **associate** | **Boolean**|  | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradingPeriod**](GradingPeriod.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

