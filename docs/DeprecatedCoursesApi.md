# LearnApIs.DeprecatedCoursesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdCopyPost**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesCourseIdCopyPost) | **POST** /learn/api/public/v1/courses/{courseId}/copy | Copy Course
[**learnApiPublicV1CoursesCourseIdDelete**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesCourseIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId} | Delete Course
[**learnApiPublicV1CoursesCourseIdGet**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesCourseIdGet) | **GET** /learn/api/public/v1/courses/{courseId} | Get Course
[**learnApiPublicV1CoursesCourseIdPatch**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesCourseIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId} | Update Course
[**learnApiPublicV1CoursesGet**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesGet) | **GET** /learn/api/public/v1/courses | Get Courses
[**learnApiPublicV1CoursesPost**](DeprecatedCoursesApi.md#learnApiPublicV1CoursesPost) | **POST** /learn/api/public/v1/courses | Create Course
[**learnApiPublicV2CoursesCourseIdDelete**](DeprecatedCoursesApi.md#learnApiPublicV2CoursesCourseIdDelete) | **DELETE** /learn/api/public/v2/courses/{courseId} | Delete Course
[**learnApiPublicV2CoursesCourseIdGet**](DeprecatedCoursesApi.md#learnApiPublicV2CoursesCourseIdGet) | **GET** /learn/api/public/v2/courses/{courseId} | Get Course
[**learnApiPublicV2CoursesCourseIdPatch**](DeprecatedCoursesApi.md#learnApiPublicV2CoursesCourseIdPatch) | **PATCH** /learn/api/public/v2/courses/{courseId} | Update Course
[**learnApiPublicV2CoursesGet**](DeprecatedCoursesApi.md#learnApiPublicV2CoursesGet) | **GET** /learn/api/public/v2/courses | Get Courses
[**learnApiPublicV2CoursesPost**](DeprecatedCoursesApi.md#learnApiPublicV2CoursesPost) | **POST** /learn/api/public/v2/courses | Create Course

<a name="learnApiPublicV1CoursesCourseIdCopyPost"></a>
# **learnApiPublicV1CoursesCourseIdCopyPost**
> learnApiPublicV1CoursesCourseIdCopyPost(bodycourseId)

Copy Course

Creates an exact copy of an existing Course into a new Course.  Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can create a course copy. Users with entitlements &#x27;system.org.copy.EXECUTE&#x27; can create an organization copy. All users&#x27;s must also have &#x27;course.content.copy.EXECUTE&#x27; entitlement associated with the specified source courseId.  **Since**: 3300.0.0  **Deprecated**: since 3800.0.0; use the v2 end-point instead.

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let body = new LearnApIs.Body67(); // Body67 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV1CoursesCourseIdCopyPost(bodycourseId, (error, data, response) => {
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
 **body** | [**Body67**](Body67.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdDelete**
> learnApiPublicV1CoursesCourseIdDelete(courseId, opts)

Delete Course

Deletes a course or organization in synchronous fashion.  The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'removeFiles': true // Boolean | Whether to delete course files.  Defaults to true.
};
apiInstance.learnApiPublicV1CoursesCourseIdDelete(courseId, opts, (error, data, response) => {
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

<a name="learnApiPublicV1CoursesCourseIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGet**
> Course learnApiPublicV1CoursesCourseIdGet(courseId, opts)

Get Course

Loads a specific course or organization.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGet(courseId, opts, (error, data, response) => {
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

[**Course**](Course.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdPatch**
> Course learnApiPublicV1CoursesCourseIdPatch(bodycourseId, opts)

Update Course

Updates a course or organization.  To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below:    | Field                           | Entitlements Required                                                  |  |---------------------------------|------------------------------------------------------------------------|  | name                            | course.name.MODIFY                                                     |  | description                     | course.name.MODIFY                                                     |  | allowGuests                     | course.configure-guest-access.EXECUTE                                  |  | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |  | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |    **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let body = new LearnApIs.Body66(); // Body66 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdPatch(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body66**](Body66.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Course**](Course.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesGet"></a>
# **learnApiPublicV1CoursesGet**
> InlineResponse20050 learnApiPublicV1CoursesGet(opts)

Get Courses

Returns a list of courses and organizations.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3000.1.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
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
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:  - courseId - name - externalId - created  **Since**: 3100.0.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesGet(opts, (error, data, response) => {
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
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name(desc),created\&quot; Supported fields are:  - courseId - name - externalId - created  **Since**: 3100.0.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesPost"></a>
# **learnApiPublicV1CoursesPost**
> Course learnApiPublicV1CoursesPost(body, opts)

Create Course

Creates a course or organization.  The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let body = new LearnApIs.Body65(); // Body65 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesPost(body, opts, (error, data, response) => {
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
 **body** | [**Body65**](Body65.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Course**](Course.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesCourseIdDelete"></a>
# **learnApiPublicV2CoursesCourseIdDelete**
> learnApiPublicV2CoursesCourseIdDelete(courseId, opts)

Delete Course

Deletes a course or organization in synchronous fashion.  The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'removeFiles': true // Boolean | Whether to delete course files.  Defaults to true.
};
apiInstance.learnApiPublicV2CoursesCourseIdDelete(courseId, opts, (error, data, response) => {
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

<a name="learnApiPublicV2CoursesCourseIdGet"></a>
# **learnApiPublicV2CoursesCourseIdGet**
> CourseV2 learnApiPublicV2CoursesCourseIdGet(courseId, opts)

Get Course

Loads a specific course or organization.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users with no access to the course only have read access to the following properties:  - id - courseId - name - description - organization - closedComplete - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdGet(courseId, opts, (error, data, response) => {
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

<a name="learnApiPublicV2CoursesCourseIdPatch"></a>
# **learnApiPublicV2CoursesCourseIdPatch**
> CourseV2 learnApiPublicV2CoursesCourseIdPatch(bodycourseId, opts)

Update Course

Updates a course or organization.  To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below:    | Field                           | Entitlements Required                                                  |  |---------------------------------|------------------------------------------------------------------------|  | name                            | course.name.MODIFY                                                     |  | description                     | course.name.MODIFY                                                     |  | allowGuests                     | course.configure-guest-access.EXECUTE                                  |  | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |  | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |    **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let body = new LearnApIs.Body69(); // Body69 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesCourseIdPatch(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body69**](Body69.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseV2**](CourseV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV2CoursesGet"></a>
# **learnApiPublicV2CoursesGet**
> InlineResponse20030 learnApiPublicV2CoursesGet(opts)

Get Courses

Returns a list of courses and organizations.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; course entitlement, or the &#x27;system.course.properties.MODIFY&#x27; system entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
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
apiInstance.learnApiPublicV2CoursesGet(opts, (error, data, response) => {
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

<a name="learnApiPublicV2CoursesPost"></a>
# **learnApiPublicV2CoursesPost**
> CourseV2 learnApiPublicV2CoursesPost(body, opts)

Create Course

Creates a course or organization.  The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DeprecatedCoursesApi();
let body = new LearnApIs.Body68(); // Body68 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV2CoursesPost(body, opts, (error, data, response) => {
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
 **body** | [**Body68**](Body68.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseV2**](CourseV2.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

