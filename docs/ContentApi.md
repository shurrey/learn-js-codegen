# LearnApIs.ContentApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/children | Get Content Children
[**learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost) | **POST** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/children | Create Child
[**learnApiPublicV1CoursesCourseIdContentsContentIdDelete**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/contents/{contentId} | Delete Content
[**learnApiPublicV1CoursesCourseIdContentsContentIdGet**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId} | Get Content
[**learnApiPublicV1CoursesCourseIdContentsContentIdPatch**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/contents/{contentId} | Update Content
[**learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost) | **POST** /learn/api/public/v1/courses/{courseId}/contents/createAssignment | Create Assignment
[**learnApiPublicV1CoursesCourseIdContentsGet**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents | Get Contents
[**learnApiPublicV1CoursesCourseIdContentsPost**](ContentApi.md#learnApiPublicV1CoursesCourseIdContentsPost) | **POST** /learn/api/public/v1/courses/{courseId}/contents | Create Content

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet**
> InlineResponse2005 learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet(courseId, contentId, opts)

Get Content Children

List all child content items directly beneath another content item.  This is only valid for content items that are allowed to have children (e.g. Folders).  Users with at least one of the following entitlements may access all child contents from a content item:  - course.adaptiverelease.CREATE - course.adaptiverelease.DELETE - course.adaptiverelease.MODIFY - course.adaptiverelease.VIEW - course.configure-areas.EXECUTE - course.content-item.copy.EXECUTE - course.content.DELETE - course.content.MODIFY - course.learningstandards.alignment.CREATE - course.performance.dashboard.VIEW In any of the following cases, the user may also get the child contents from a content item.  - The user has a role in the course other than guest or observer, and doesn&#x27;t have any of the previously mentioned entitlements. - The user has the role of observer, and both the course and the underlying content allow observer access. - The user accesses the course as guest, both the course and the underlying content allow guest access, further, the course content menu allows guest access as well for the original courses. For other users, permission to view the content item will depend on the availability settings of the course and  the content item. The following fields will be filtered out:  - availability.available - availability.allowGuests - availability.adaptiveRelease &lt;/p&gt;  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'recursive': true, // Boolean | Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.  **Since**: 3100.2.0
  'contentHandler': "contentHandler_example", // String | Search for the specific content handler.  Not setting this field will return all content handlers.  **Since**: 3400.5.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3700.1.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.1.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.  **Since**: 3700.4.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'reviewable': true, // Boolean | Search contents by whether they are reviewable or not.  **Since**: 3700.15.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdChildrenGet(courseId, contentId, opts, (error, data, response) => {
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
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **recursive** | **Boolean**| Search for child content recursively.  A value of &#x27;true&#x27; indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of &#x27;false&#x27; indicates results should be limited to immediate children only.  Not setting this field defaults to &#x27;false&#x27; behavior; only including immediate children.  **Since**: 3100.2.0 | [optional] 
 **contentHandler** | **String**| Search for the specific content handler.  Not setting this field will return all content handlers.  **Since**: 3400.5.0 | [optional] 
 **created** | **Date**| Search for contents with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3700.1.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.1.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for contents with a modified date relative to this value.  &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3700.4.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **reviewable** | **Boolean**| Search contents by whether they are reviewable or not.  **Since**: 3700.15.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost**
> Content learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost(bodycourseIdcontentId, opts)

Create Child

Create a new child content item beneath an existing content item.  This is only valid for content items that are allowed to have children (e.g. Folders). Entitlement \&quot;course.content.CREATE\&quot; required to create Course Content.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let body = new LearnApIs.Body12(); // Body12 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdChildrenPost(bodycourseIdcontentId, opts, (error, data, response) => {
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
 **body** | [**Body12**](Body12.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdDelete**
> learnApiPublicV1CoursesCourseIdContentsContentIdDelete(courseId, contentId, opts)

Delete Content

Delete a content item.  The &#x27;course.content.DELETE&#x27; entitlement is required.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'allowChildCourseContent': true, // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'deleteGrades': true // Boolean | If true and there is a grade column associated with this content, that grade column will be marked as deleted.  All attempts and grades will also be removed. If false, the grade column will not be marked as deleted.  Attempts will not be deleted and grades will be converted to manually entered grades.  Defaults to false.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdDelete(courseId, contentId, opts, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **deleteGrades** | **Boolean**| If true and there is a grade column associated with this content, that grade column will be marked as deleted.  All attempts and grades will also be removed. If false, the grade column will not be marked as deleted.  Attempts will not be deleted and grades will be converted to manually entered grades.  Defaults to false. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdGet**
> Content learnApiPublicV1CoursesCourseIdContentsContentIdGet(courseId, contentId, opts)

Get Content

Load a specific content item from a course.  Users with at least one of the following entitlements may access any content item:  - course.adaptiverelease.CREATE - course.adaptiverelease.DELETE - course.adaptiverelease.MODIFY - course.adaptiverelease.VIEW - course.configure-areas.EXECUTE - course.content-item.copy.EXECUTE - course.content.DELETE - course.content.MODIFY - course.learningstandards.alignment.CREATE - course.performance.dashboard.VIEW  For other users, permission to view the content item will depend on the availability settings of the course and the content item.  The following fields will be filtered out:  - availability.available - availability.allowGuests - availability.adaptiveRelease  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdGet(courseId, contentId, opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdPatch**
> Content learnApiPublicV1CoursesCourseIdContentsContentIdPatch(bodycourseIdcontentId, opts)

Update Content

Update a content item.  The &#x27;course.content.MODIFY&#x27; entitlement is required.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let body = new LearnApIs.Body11(); // Body11 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdPatch(bodycourseIdcontentId, opts, (error, data, response) => {
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
 **body** | [**Body11**](Body11.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost"></a>
# **learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost**
> CreateAssignmentResult learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost(bodycourseId, opts)

Create Assignment

Create assignment content, grade column and file attachments in one POST. Any files specified with assignment creation must be previously uploaded using the uploads endpoint. Ultra courses supported since 3300.9.0 Classic courses supported since 3400.9.0 &lt;/p&gt; For Ultra courses, this will create:  - A content item with a contentHandler.id &#x3D; resource/x-bb-asmt-test-link - A gradebook column with contentId &#x3D; id of the new content - An assessment question with questionHandler.type &#x3D; presentation that includes the instructions as the question text - An assessment question with questionHandler.type &#x3D; presentation for each given file attachment &lt;/p&gt; The following entitlements are required to create an Ultra assignment:  - course.content.CREATE - course.assessment.CREATE - course.content.assessment.deploy.EXECUTE - course.gradebook.MODIFY - course.assessment.MODIFY, if instructions or files are specified &lt;/p&gt; For Classic courses, this will create:  - A content item with contentHandler.id &#x3D; resource/x-bb-assignment - A gradebook column with contentId &#x3D; id of the new content - A file attachment for each given file attachment id The following entitlements are required to create a Classic assignment:  - course.content.CREATE - course.gradebook.MODIFY - course.content.MODIFY, if files are specified &lt;/p&gt;  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let body = new LearnApIs.Body10(); // Body10 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsCreateAssignmentPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body10**](Body10.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CreateAssignmentResult**](CreateAssignmentResult.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsGet**
> InlineResponse2005 learnApiPublicV1CoursesCourseIdContentsGet(courseId, opts)

Get Contents

List top-level content items in a course.  Users with at least one of the following entitlements may access any content item:  - course.adaptiverelease.CREATE - course.adaptiverelease.DELETE - course.adaptiverelease.MODIFY - course.adaptiverelease.VIEW - course.configure-areas.EXECUTE - course.content-item.copy.EXECUTE - course.content.DELETE - course.content.MODIFY - course.learningstandards.alignment.CREATE - course.performance.dashboard.VIEW &lt;/p&gt;  For other users, permission to view the content item will depend on the availability settings of the course and  the content item.  The following fields will be filtered out:  - availability.available - availability.allowGuests - availability.adaptiveRelease &lt;/p&gt;  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'recursive': true, // Boolean | Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.  **Since**: 3100.2.0
  'contentHandler': "contentHandler_example", // String | Search for the specific content handler.  Not setting this field will return all content handlers.  **Since**: 3400.5.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3700.1.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.1.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.  **Since**: 3700.4.0
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modified' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'reviewable': true, // Boolean | Search contents by whether they are reviewable or not.  **Since**: 3700.15.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsGet(courseId, opts, (error, data, response) => {
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
 **recursive** | **Boolean**| Search for child content recursively.  A value of &#x27;true&#x27; indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of &#x27;false&#x27; indicates results should be limited to immediate children only.  Not setting this field defaults to &#x27;false&#x27; behavior; only including immediate children.  **Since**: 3100.2.0 | [optional] 
 **contentHandler** | **String**| Search for the specific content handler.  Not setting this field will return all content handlers.  **Since**: 3400.5.0 | [optional] 
 **created** | **Date**| Search for contents with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3700.1.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.1.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modified** | **Date**| Search for contents with a modified date relative to this value.  &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3700.4.0 | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modified&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.4.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **reviewable** | **Boolean**| Search contents by whether they are reviewable or not.  **Since**: 3700.15.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsPost"></a>
# **learnApiPublicV1CoursesCourseIdContentsPost**
> Content learnApiPublicV1CoursesCourseIdContentsPost(bodycourseId, opts)

Create Content

Create a new top-level content item. Currently only folders may be created as top-level content items in a Classic course. For Ultra courses any content item is allowed and will be placed under the ROOT folder. Entitlement \&quot;course.content.CREATE\&quot; required to create Course Content.  **Since**: 3000.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentApi();
let body = new LearnApIs.Body9(); // Body9 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'allowChildCourseContent': true // Boolean | By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body9**](Body9.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **allowChildCourseContent** | **Boolean**| By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

