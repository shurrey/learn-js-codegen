# LearnApIs.RolesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CourseRolesGet**](RolesApi.md#learnApiPublicV1CourseRolesGet) | **GET** /learn/api/public/v1/courseRoles | Get Course Roles
[**learnApiPublicV1CourseRolesRoleIdGet**](RolesApi.md#learnApiPublicV1CourseRolesRoleIdGet) | **GET** /learn/api/public/v1/courseRoles/{roleId} | Get Course Role
[**learnApiPublicV1InstitutionRolesGet**](RolesApi.md#learnApiPublicV1InstitutionRolesGet) | **GET** /learn/api/public/v1/institutionRoles | Get Institution Roles
[**learnApiPublicV1InstitutionRolesRoleIdGet**](RolesApi.md#learnApiPublicV1InstitutionRolesRoleIdGet) | **GET** /learn/api/public/v1/institutionRoles/{roleId} | Get Institution Role
[**learnApiPublicV1SystemRolesGet**](RolesApi.md#learnApiPublicV1SystemRolesGet) | **GET** /learn/api/public/v1/systemRoles | Get System Roles
[**learnApiPublicV1SystemRolesRoleIdGet**](RolesApi.md#learnApiPublicV1SystemRolesRoleIdGet) | **GET** /learn/api/public/v1/systemRoles/{roleId} | Get System Role

<a name="learnApiPublicV1CourseRolesGet"></a>
# **learnApiPublicV1CourseRolesGet**
> InlineResponse20039 learnApiPublicV1CourseRolesGet(opts)

Get Course Roles

  Returns a list of course roles.  This list will contain all the course roles the context user has access to see. &lt;/p&gt;  If the context user has any of these entitlements, then the user can see all course roles:  - system.courserole.CREATE - system.enrollment.CREATE - system.courserole.manager.VIEW - system.courserole.DELETE &lt;/p&gt;  Otherwise, these course role entitlements are checked for any courses the context user is enrolled in:  - course.user-enroll.EXECUTE - system.courserole.CREATE - system.enrollment.CREATE - system.courserole.manager.VIEW - system.courserole.DELETE - course.user-role.MODIFY &lt;/p&gt;  If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; false, then the user can see course roles where Availability.Available &#x3D; Course or CourseAndOrganization &lt;/p&gt;  If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; true, then the user can see course roles where Availability.Available &#x3D; Organization or CourseAndOrganization &lt;/p&gt;  **Since**: 3300.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"  **Since**: 3100.0.0
  'custom': true, // Boolean | Search course roles by whether they are a custom or system generated course role.  **Since**: 3300.5.0
  'roleId': "roleId_example", // String | Search course roles using their roleId's.  Any course role with a roleId that contains the given string will be returned.  The search is case insensitive.  **Since**: 3300.5.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CourseRolesGet(opts, (error, data, response) => {
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
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name.family(desc),created\&quot;  **Since**: 3100.0.0 | [optional] 
 **custom** | **Boolean**| Search course roles by whether they are a custom or system generated course role.  **Since**: 3300.5.0 | [optional] 
 **roleId** | **String**| Search course roles using their roleId&#x27;s.  Any course role with a roleId that contains the given string will be returned.  The search is case insensitive.  **Since**: 3300.5.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CourseRolesRoleIdGet"></a>
# **learnApiPublicV1CourseRolesRoleIdGet**
> CourseRole learnApiPublicV1CourseRolesRoleIdGet(roleId, opts)

Get Course Role

  Returns a single course role.  The path id can be either the CourseRole.id field like \&quot;/courseRoles/_5_1\&quot; or the CourseRole.roleId field like \&quot;/courseRoles/roleId:Student\&quot;. &lt;/p&gt;  A 403 (FORBIDDEN) status is returned if the context user does not have access to see the course role. &lt;/p&gt;  If the context user has any of these entitlements, then the user can see all course roles:  - system.courserole.CREATE - system.enrollment.CREATE - system.courserole.manager.VIEW - system.courserole.DELETE &lt;/p&gt;  Otherwise, these course role entitlements are checked for any courses the context user is enrolled in:  - course.user-enroll.EXECUTE - system.courserole.CREATE - system.enrollment.CREATE - system.courserole.manager.VIEW - system.courserole.DELETE - course.user-role.MODIFY &lt;/p&gt;  If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; false, then the user can see course roles where Availability.Available &#x3D; Course or CourseAndOrganization &lt;/p&gt;  If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; true, then the user can see course roles where Availability.Available &#x3D; Organization or CourseAndOrganization &lt;/p&gt;  **Since**: 3300.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let roleId = "roleId_example"; // String | The course role ID.  This may be the primary ID, or the roleId. The suffix \":custom\" will be appended to the roleId of a custom course role if that roleId conflicts with the roleId of a system generated course role.  For example, if a custom role roleId is specified as \"Student\" then the roleId will actually be \"Student:custom\" since there is already a system generated course role with the roleId of \"Student\".     | ID type    | Examples                                                   |  |------------|------------------------------------------------------------|  | primary    | _123_1                                                     |  | roleId     | roleId:Student, roleId:MyCustomRole, roleId:Student:custom |    **Since**: 3300.5.0
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CourseRolesRoleIdGet(roleId, opts, (error, data, response) => {
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
 **roleId** | **String**| The course role ID.  This may be the primary ID, or the roleId. The suffix \&quot;:custom\&quot; will be appended to the roleId of a custom course role if that roleId conflicts with the roleId of a system generated course role.  For example, if a custom role roleId is specified as \&quot;Student\&quot; then the roleId will actually be \&quot;Student:custom\&quot; since there is already a system generated course role with the roleId of \&quot;Student\&quot;.     | ID type    | Examples                                                   |  |------------|------------------------------------------------------------|  | primary    | _123_1                                                     |  | roleId     | roleId:Student, roleId:MyCustomRole, roleId:Student:custom |    **Since**: 3300.5.0 | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseRole**](CourseRole.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionRolesGet"></a>
# **learnApiPublicV1InstitutionRolesGet**
> InlineResponse20040 learnApiPublicV1InstitutionRolesGet(opts)

Get Institution Roles

Returns a list of institution roles.  Users must have the entitlement &#x27;system.institutionrole.VIEW&#x27; to access this endpoint.  **Since**: 3300.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\" Supported fields are:  - roleId - custom  **Since**: 3300.4.0
  'roleId': "roleId_example", // String | Search for institution roles with roleId properties that contain this value.  **Since**: 3300.4.0
  'custom': true, // Boolean | Search for institution roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all institution roles should be returned.  **Since**: 3300.4.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionRolesGet(opts, (error, data, response) => {
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
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;roleId(desc)\&quot; Supported fields are:  - roleId - custom  **Since**: 3300.4.0 | [optional] 
 **roleId** | **String**| Search for institution roles with roleId properties that contain this value.  **Since**: 3300.4.0 | [optional] 
 **custom** | **Boolean**| Search for institution roles by custom flag.  A value of &#x27;true&#x27; indicates that search results should be limited to only custom roles.  A value of &#x27;false&#x27; indicates results should be limited to built-in roles.  Not setting this field indicates that all institution roles should be returned.  **Since**: 3300.4.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionRolesRoleIdGet"></a>
# **learnApiPublicV1InstitutionRolesRoleIdGet**
> InstitutionRole learnApiPublicV1InstitutionRolesRoleIdGet(roleId, opts)

Get Institution Role

Loads a specific institution role.  Users must have the entitlement &#x27;system.institutionrole.VIEW&#x27; to access this endpoint.  **Since**: 3300.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let roleId = "roleId_example"; // String | The institution role ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | roleId     | roleId:STUDENT                        |    **Since**: 3300.5.0
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionRolesRoleIdGet(roleId, opts, (error, data, response) => {
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
 **roleId** | **String**| The institution role ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | roleId     | roleId:STUDENT                        |    **Since**: 3300.5.0 | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InstitutionRole**](InstitutionRole.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1SystemRolesGet"></a>
# **learnApiPublicV1SystemRolesGet**
> InlineResponse20041 learnApiPublicV1SystemRolesGet(opts)

Get System Roles

Returns a list of system roles.  Users must have the &#x27;system.systemrole.manager.VIEW&#x27; entitlement to access this endpoint.  **Since**: 3300.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'roleId': "roleId_example", // String | Search for system roles with roleId  **Since**: 3300.5.0
  'custom': true, // Boolean | Search for system roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all system roles should be returned.  **Since**: 3300.5.0
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\"  Supported fields are:  <ul - roleId - custom  **Since**: 3300.5.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1SystemRolesGet(opts, (error, data, response) => {
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
 **roleId** | **String**| Search for system roles with roleId  **Since**: 3300.5.0 | [optional] 
 **custom** | **Boolean**| Search for system roles by custom flag.  A value of &#x27;true&#x27; indicates that search results should be limited to only custom roles.  A value of &#x27;false&#x27; indicates results should be limited to built-in roles.  Not setting this field indicates that all system roles should be returned.  **Since**: 3300.5.0 | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;roleId(desc)\&quot;  Supported fields are:  &lt;ul - roleId - custom  **Since**: 3300.5.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1SystemRolesRoleIdGet"></a>
# **learnApiPublicV1SystemRolesRoleIdGet**
> SystemRole learnApiPublicV1SystemRolesRoleIdGet(roleId, opts)

Get System Role

Get a specific system role by roleId. See the roleId parameter for valid roleId formats.  Users must have the &#x27;system.systemrole.manager.VIEW&#x27; entitlement to access this endpoint.  **Since**: 3300.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.RolesApi();
let roleId = "roleId_example"; // String | The System Role ID.  This may be the primary ID, or the secondary roleId type. The suffix \":custom\" will be appended to the roleId of a custom system role if that roleId conflicts with the roleId of a system generated role.  For example, if a custom role roleId is specified as \"Guest\" then the roleId will actually be \"Guest:custom\" since there is already a system generated role with the roleId of \"Guest\".    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | roleId     | roleId:column1                        |    **Since**: 3300.5.0
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1SystemRolesRoleIdGet(roleId, opts, (error, data, response) => {
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
 **roleId** | **String**| The System Role ID.  This may be the primary ID, or the secondary roleId type. The suffix \&quot;:custom\&quot; will be appended to the roleId of a custom system role if that roleId conflicts with the roleId of a system generated role.  For example, if a custom role roleId is specified as \&quot;Guest\&quot; then the roleId will actually be \&quot;Guest:custom\&quot; since there is already a system generated role with the roleId of \&quot;Guest\&quot;.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | roleId     | roleId:column1                        |    **Since**: 3300.5.0 | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**SystemRole**](SystemRole.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

