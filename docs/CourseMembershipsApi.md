# LearnApIs.CourseMembershipsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdUsersGet**](CourseMembershipsApi.md#learnApiPublicV1CoursesCourseIdUsersGet) | **GET** /learn/api/public/v1/courses/{courseId}/users | Get Course Memberships
[**learnApiPublicV1CoursesCourseIdUsersUserIdDelete**](CourseMembershipsApi.md#learnApiPublicV1CoursesCourseIdUsersUserIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/users/{userId} | Delete Membership
[**learnApiPublicV1CoursesCourseIdUsersUserIdGet**](CourseMembershipsApi.md#learnApiPublicV1CoursesCourseIdUsersUserIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/users/{userId} | Get Membership
[**learnApiPublicV1CoursesCourseIdUsersUserIdPatch**](CourseMembershipsApi.md#learnApiPublicV1CoursesCourseIdUsersUserIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/users/{userId} | Update Membership
[**learnApiPublicV1CoursesCourseIdUsersUserIdPut**](CourseMembershipsApi.md#learnApiPublicV1CoursesCourseIdUsersUserIdPut) | **PUT** /learn/api/public/v1/courses/{courseId}/users/{userId} | Create Membership
[**learnApiPublicV1UsersUserIdCoursesGet**](CourseMembershipsApi.md#learnApiPublicV1UsersUserIdCoursesGet) | **GET** /learn/api/public/v1/users/{userId}/courses | Get User Memberships

<a name="learnApiPublicV1CoursesCourseIdUsersGet"></a>
# **learnApiPublicV1CoursesCourseIdUsersGet**
> InlineResponse20024 learnApiPublicV1CoursesCourseIdUsersGet(courseId, opts)

Get Course Memberships

Returns a list of user memberships for the specified course or organization.  Callers not enrolled in the course must have at least one of the following entitlements:  - For courses: &#x27;course.user.VIEW&#x27;, &#x27;system.user.course.enrollment.VIEW&#x27;, or &#x27;system.courseuserlist.VIEW&#x27; - For organizations: &#x27;course.user.VIEW&#x27;, &#x27;system.user.org.enrollment.VIEW&#x27;, or &#x27;system.orguserlist.VIEW&#x27; Callers enrolled in the course will only be able to see memberships that are available and that have opted to be included in the course roster.  For callers enrolled in the course as well as those with the &#x27;course.user.VIEW&#x27; entitlement, system fields such as externalId and dataSourceId will not be visible.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'role': "role_example", // String | Search for memberships with a course role id that matches this value.  **Since**: 3500.5.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3100.0.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.9.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter. Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3800.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'dataSourceId': "dataSourceId_example", // String | Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".  **Since**: 3100.0.0
  'lastAccessed': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.  **Since**: 3300.9.0
  'lastAccessedCompare': "lastAccessedCompare_example", // String | Used alongside the 'lastAccessed' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3300.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 | 
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:  - created - lastAccessed (Since 3300.9.0)  **Since**: 3100.0.0
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdUsersGet(courseId, opts, (error, data, response) => {
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
 **role** | **String**| Search for memberships with a course role id that matches this value.  **Since**: 3500.5.0 | [optional] 
 **created** | **Date**| Search for memberships with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3100.0.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for memberships with a modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.9.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter. Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3800.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **dataSourceId** | **String**| Search for memberships with this dataSourceId.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;.  **Since**: 3100.0.0 | [optional] 
 **lastAccessed** | **Date**| Search for memberships with a last accessed date relative to this value.  &#x27;lastAccessedCompare&#x27; may also be sent to control search behavior.  **Since**: 3300.9.0 | [optional] 
 **lastAccessedCompare** | **String**| Used alongside the &#x27;lastAccessed&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3300.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **availabilityAvailable** | **String**| Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 |  | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;created(desc)\&quot; Supported fields are:  - created - lastAccessed (Since 3300.9.0)  **Since**: 3100.0.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;user&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdUsersUserIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdUsersUserIdDelete**
> learnApiPublicV1CoursesCourseIdUsersUserIdDelete(courseId, userId)

Delete Membership

Deletes a user membership from the specified course.  Required entitlements:  - For courses: &#x27;system.enrollment.DELETE&#x27; or &#x27;course.user.DELETE&#x27; - For organizations: &#x27;system.enrollment.DELETE&#x27; or &#x27;org.enrollment.DELETE&#x27;  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV1CoursesCourseIdUsersUserIdDelete(courseId, userId, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdUsersUserIdGet"></a>
# **learnApiPublicV1CoursesCourseIdUsersUserIdGet**
> CourseMembership learnApiPublicV1CoursesCourseIdUsersUserIdGet(courseId, userId, opts)

Get Membership

Loads a user membership in the specified course.  Entitlement and field visibility rules are the same as those when loading the memberships collection.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdUsersUserIdGet(courseId, userId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;user&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**CourseMembership**](CourseMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdUsersUserIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdUsersUserIdPatch**
> CourseMembership learnApiPublicV1CoursesCourseIdUsersUserIdPatch(bodycourseIduserId, opts)

Update Membership

Updates a user membership in the specified course.    | Field                  | Entitlements Required                                                           |  |------------------------|---------------------------------------------------------------------------------|  | dataSourceId           | &#x27;course.user.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;                                       |  | childCourseId          | &#x27;course.user.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;                                       |  | courseRoleId           | &#x27;course.user.MODIFY&#x27;, &#x27;org.user.MODIFY&#x27;, or &#x27;course.user-role.MODIFY&#x27;           |  | availability.available | &#x27;course.user.MODIFY&#x27;, &#x27;org.user.MODIFY&#x27;, or &#x27;course.course-availability.MODIFY&#x27; |    In addition, callers must have standard view entitlements to receive a response.  Without view entitlements the operation will be performed but an empty result object will be returned.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let body = new LearnApIs.Body39(); // Body39 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdUsersUserIdPatch(bodycourseIduserId, opts, (error, data, response) => {
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
 **body** | [**Body39**](Body39.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseMembership**](CourseMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdUsersUserIdPut"></a>
# **learnApiPublicV1CoursesCourseIdUsersUserIdPut**
> CourseMembership learnApiPublicV1CoursesCourseIdUsersUserIdPut(bodycourseIduserId, opts)

Create Membership

Creates a user membership in the specified course.  Minimal entitlements required:  - For courses: &#x27;course.user-enroll.EXECUTE&#x27;, &#x27;system.enrollment.CREATE&#x27; - For organizations: &#x27;course.user-enroll.EXECUTE&#x27;, &#x27;org.enrollment.CREATE&#x27; - For courses or organizations that have enabled self enrollment: &#x27;system.generic.VIEW&#x27;  By default courseRoleId is Student and availability.available is Yes.  Providing different values for these fields requires extra entitlements:  - For courses: &#x27;course.user-role.MODIFY&#x27; or &#x27;course.user.MODIFY&#x27; - For organizations: &#x27;course.user-role.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let body = new LearnApIs.Body38(); // Body38 | JSON input object.
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdUsersUserIdPut(bodycourseIduserId, opts, (error, data, response) => {
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
 **body** | [**Body38**](Body38.md)| JSON input object. | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseMembership**](CourseMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdCoursesGet"></a>
# **learnApiPublicV1UsersUserIdCoursesGet**
> InlineResponse20025 learnApiPublicV1UsersUserIdCoursesGet(userId, opts)

Get User Memberships

Returns a list of course and organization memberships for the specified user.  Users can always view their own memberships.  Callers viewing the memberships of another user require at least one of the following entitlements:  - &#x27;system.user.course.enrollment.VIEW&#x27; allows callers to see course memberships - &#x27;system.user.org.enrollment.VIEW&#x27; allows callers to see organization memberships  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMembershipsApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'role': "role_example", // String | Search for memberships with a course role id that matches this value.  **Since**: 3500.5.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3100.0.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.  **Since**: 3800.9.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter. Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3800.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'dataSourceId': "dataSourceId_example", // String | Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".  **Since**: 3100.0.0
  'lastAccessed': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.  **Since**: 3300.9.0
  'lastAccessedCompare': "lastAccessedCompare_example", // String | Used alongside the 'lastAccessed' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3300.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 | 
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:  - created - lastAccessed (Since 3300.9.0)  **Since**: 3100.0.0
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>
};
apiInstance.learnApiPublicV1UsersUserIdCoursesGet(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **role** | **String**| Search for memberships with a course role id that matches this value.  **Since**: 3500.5.0 | [optional] 
 **created** | **Date**| Search for memberships with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3100.0.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for memberships with a modified date relative to this value. &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3800.9.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter. Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3800.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **dataSourceId** | **String**| Search for memberships with this dataSourceId.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;.  **Since**: 3100.0.0 | [optional] 
 **lastAccessed** | **Date**| Search for memberships with a last accessed date relative to this value.  &#x27;lastAccessedCompare&#x27; may also be sent to control search behavior.  **Since**: 3300.9.0 | [optional] 
 **lastAccessedCompare** | **String**| Used alongside the &#x27;lastAccessed&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3300.9.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **availabilityAvailable** | **String**| Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 |  | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;created(desc)\&quot; Supported fields are:  - created - lastAccessed (Since 3300.9.0)  **Since**: 3100.0.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;course&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

